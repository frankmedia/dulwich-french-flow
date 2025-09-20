import type { VercelRequest, VercelResponse } from '@vercel/node';
export const config = { runtime: 'nodejs' };
import { getJsonFile, putJsonFile } from '../_lib/github';

interface PostMeta { slug: string; title: string; date: string; image?: string | null }
interface Post extends PostMeta { content: string }
interface IndexFile { posts: PostMeta[] }

function checkBasicAuth(req: VercelRequest): boolean {
  const header = req.headers['authorization'] || '';
  if (typeof header !== 'string' || !header.startsWith('Basic ')) return false;
  const decoded = Buffer.from(header.slice(6), 'base64').toString();
  const [user, pass] = decoded.split(':');
  const expectedUser = process.env.BASIC_USER || '';
  const expectedPass = process.env.BASIC_PASS || '';
  return user === expectedUser && pass === expectedPass;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method === 'GET') {
      const { data } = await getJsonFile<IndexFile>('content/blog/index.json');
      const sorted = [...(data.posts || [])].sort((a, b) => (b.date || '').localeCompare(a.date || ''));
      return res.status(200).json(sorted);
    }

    if (req.method === 'POST') {
      if (!checkBasicAuth(req)) return res.status(401).json({ error: 'Unauthorized' });
      const { slug, title, content, date, image } = (typeof req.body === 'string' ? JSON.parse(req.body) : req.body) || {};
      if (!slug || !title) return res.status(400).json({ error: 'slug and title are required' });
      const post: Post = { slug, title, content: content || '', date: date || new Date().toISOString(), image: image ?? null };

      // Write post file
      await putJsonFile(`content/blog/posts/${slug}.json`, post, `chore(blog): upsert post ${slug}`);

      // Update index
      const { data: index } = await getJsonFile<IndexFile>('content/blog/index.json');
      const nextPosts = [...(index.posts || [])];
      const idx = nextPosts.findIndex(p => p.slug === slug);
      const meta: PostMeta = { slug, title, date: post.date, image: post.image ?? null };
      if (idx >= 0) nextPosts[idx] = meta; else nextPosts.push(meta);
      await putJsonFile('content/blog/index.json', { posts: nextPosts }, `chore(blog): update index for ${slug}`);

      return res.status(200).json({ ok: true, post });
    }

    res.setHeader('Allow', 'GET, POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  } catch (err: any) {
    return res.status(500).json({ error: err?.message || 'Internal Server Error' });
  }
}


