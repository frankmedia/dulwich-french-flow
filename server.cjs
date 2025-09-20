/* Simple JSON-backed blog API (CommonJS) */
const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');
const multer = require('multer');

const PORT = process.env.API_PORT || 5001;
const CONTENT_DIR = path.join(__dirname, 'content', 'blog');
const POSTS_DIR = path.join(CONTENT_DIR, 'posts');
const INDEX_FILE = path.join(CONTENT_DIR, 'index.json');
const UPLOADS_DIR = path.join(__dirname, 'uploads', 'blog');

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (!fs.existsSync(UPLOADS_DIR)) {
      fs.mkdirSync(UPLOADS_DIR, { recursive: true });
    }
    cb(null, UPLOADS_DIR);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png|gif|webp/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedTypes.test(file.mimetype);
    
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Only image files are allowed'));
    }
  }
});

function ensureContentDirs() {
  if (!fs.existsSync(CONTENT_DIR)) fs.mkdirSync(CONTENT_DIR, { recursive: true });
  if (!fs.existsSync(POSTS_DIR)) fs.mkdirSync(POSTS_DIR, { recursive: true });
  if (!fs.existsSync(INDEX_FILE)) fs.writeFileSync(INDEX_FILE, JSON.stringify({ posts: [] }, null, 2));
}

function readIndex() {
  ensureContentDirs();
  return JSON.parse(fs.readFileSync(INDEX_FILE, 'utf8'));
}

function writeIndex(index) {
  fs.writeFileSync(INDEX_FILE, JSON.stringify(index, null, 2));
}

function basicAuth(req, res, next) {
  const header = req.headers['authorization'] || '';
  if (!header.startsWith('Basic ')) return res.status(401).set('WWW-Authenticate', 'Basic realm="admin"').end();
  const decoded = Buffer.from(header.slice(6), 'base64').toString();
  const [user, pass] = decoded.split(':');
  if (user === 'barbara' && pass === '52derbyhill') return next();
  return res.status(401).end();
}

const app = express();
app.use(cors());
app.use(express.json({ limit: '2mb' }));

// Serve uploaded images
app.use('/uploads', express.static(UPLOADS_DIR));

app.get('/api/health', (_req, res) => res.json({ ok: true }));

app.get('/api/blog/auth', basicAuth, (_req, res) => {
  res.json({ ok: true });
});

app.get('/api/blog/posts', (_req, res) => {
  const index = readIndex();
  res.json(index.posts.sort((a, b) => (b.date || '').localeCompare(a.date || '')));
});

app.get('/api/blog/posts/:slug', (req, res) => {
  ensureContentDirs();
  const file = path.join(POSTS_DIR, `${req.params.slug}.json`);
  if (!fs.existsSync(file)) return res.status(404).json({ error: 'Not found' });
  res.json(JSON.parse(fs.readFileSync(file, 'utf8')));
});

app.post('/api/blog/posts', basicAuth, upload.single('image'), (req, res) => {
  const { slug, title, content, date } = req.body || {};
  if (!slug || !title) return res.status(400).json({ error: 'slug and title are required' });
  ensureContentDirs();
  
  const post = { 
    slug, 
    title, 
    content: content || '', 
    date: date || new Date().toISOString(),
    image: req.file ? `/uploads/${req.file.filename}` : null
  };
  
  const file = path.join(POSTS_DIR, `${slug}.json`);
  fs.writeFileSync(file, JSON.stringify(post, null, 2));
  const index = readIndex();
  const existingIdx = index.posts.findIndex(p => p.slug === slug);
  const meta = { slug, title, date: post.date, image: post.image };
  if (existingIdx >= 0) index.posts[existingIdx] = meta; else index.posts.push(meta);
  writeIndex(index);
  res.json({ ok: true, post });
});

app.delete('/api/blog/posts/:slug', basicAuth, (req, res) => {
  ensureContentDirs();
  const file = path.join(POSTS_DIR, `${req.params.slug}.json`);
  if (fs.existsSync(file)) fs.unlinkSync(file);
  const index = readIndex();
  index.posts = index.posts.filter(p => p.slug !== req.params.slug);
  writeIndex(index);
  res.json({ ok: true });
});

ensureContentDirs();
app.listen(PORT, () => console.log(`[api] listening on http://127.0.0.1:${PORT}`));