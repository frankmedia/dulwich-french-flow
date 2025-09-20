/* Simple JSON-backed blog API for local development */
const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const PORT = process.env.API_PORT || 5001;
const CONTENT_DIR = path.join(__dirname, 'content', 'blog');
const POSTS_DIR = path.join(CONTENT_DIR, 'posts');
const INDEX_FILE = path.join(CONTENT_DIR, 'index.json');

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

// Health
app.get('/api/health', (_req, res) => res.json({ ok: true }));

// Auth check (for local dev parity with serverless)
app.get('/api/blog/auth', basicAuth, (_req, res) => {
  res.json({ ok: true });
});

// List posts (metadata only)
app.get('/api/blog/posts', (_req, res) => {
  const index = readIndex();
  res.json(index.posts.sort((a, b) => (b.date || '').localeCompare(a.date || '')));
});

// Get post by slug
app.get('/api/blog/posts/:slug', (req, res) => {
  ensureContentDirs();
  const file = path.join(POSTS_DIR, `${req.params.slug}.json`);
  if (!fs.existsSync(file)) return res.status(404).json({ error: 'Not found' });
  res.json(JSON.parse(fs.readFileSync(file, 'utf8')));
});

// Create or update post (auth required)
app.post('/api/blog/posts', basicAuth, (req, res) => {
  const { slug, title, content, date } = req.body || {};
  if (!slug || !title) return res.status(400).json({ error: 'slug and title are required' });
  ensureContentDirs();

  const post = { slug, title, content: content || '', date: date || new Date().toISOString() };
  const file = path.join(POSTS_DIR, `${slug}.json`);
  fs.writeFileSync(file, JSON.stringify(post, null, 2));

  const index = readIndex();
  const existingIdx = index.posts.findIndex(p => p.slug === slug);
  const meta = { slug, title, date: post.date };
  if (existingIdx >= 0) index.posts[existingIdx] = meta; else index.posts.push(meta);
  writeIndex(index);
  res.json({ ok: true, post });
});

// Delete post (auth required)
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


