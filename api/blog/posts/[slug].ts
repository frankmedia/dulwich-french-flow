import { deleteRepoFile, getJsonFile, putJsonFile } from '../../_lib/github.js';

interface Post { slug: string; title: string; content: string; date: string; image?: string | null }
interface IndexFile { posts: Array<{ slug: string; title: string; date: string; image?: string | null }>; }

function checkBasicAuth(req: any): boolean {
  const header = req.headers['authorization'] || '';
  if (typeof header !== 'string' || !header.startsWith('Basic ')) return false;
  const decoded = Buffer.from(header.slice(6), 'base64').toString();
  const [user, pass] = decoded.split(':');
  const expectedUser = process.env.BASIC_USER || '';
  const expectedPass = process.env.BASIC_PASS || '';
  return user === expectedUser && pass === expectedPass;
}

export default async function handler(req: any, res: any) {
  try {
    const slug = (req.query.slug || '') as string;
    if (!slug) return res.status(400).json({ error: 'Missing slug' });

    if (req.method === 'GET') {
      const { data } = await getJsonFile<Post>(`content/blog/posts/${slug}.json`);
      return res.status(200).json(data);
    }

    if (req.method === 'DELETE') {
      if (!checkBasicAuth(req)) return res.status(401).json({ error: 'Unauthorized' });
      await deleteRepoFile(`content/blog/posts/${slug}.json`, `chore(blog): delete post ${slug}`);
      const { data: index } = await getJsonFile<IndexFile>('content/blog/index.json');
      const nextPosts = (index.posts || []).filter(p => p.slug !== slug);
      await putJsonFile('content/blog/index.json', { posts: nextPosts }, `chore(blog): update index after delete ${slug}`);
      return res.status(200).json({ ok: true });
    }

    res.setHeader('Allow', 'GET, DELETE');
    return res.status(405).json({ error: 'Method Not Allowed' });
  } catch (err: any) {
    return res.status(500).json({ error: err?.message || 'Internal Server Error' });
  }
}


