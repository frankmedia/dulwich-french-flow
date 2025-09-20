import { put } from '@vercel/blob';

function checkBasicAuth(req: any): boolean {
  const header = req.headers['authorization'] || '';
  if (typeof header !== 'string' || !header.startsWith('Basic ')) return false;
  const decoded = Buffer.from(header.slice(6), 'base64').toString();
  const [user, pass] = decoded.split(':');
  const expectedUser = process.env.BASIC_USER || '';
  const expectedPass = process.env.BASIC_PASS || '';
  return user === expectedUser && pass === expectedPass;
}

function sanitizeFilename(name: string): string {
  return name.replace(/[^a-zA-Z0-9._-]/g, '_');
}

export default async function handler(req: any, res: any) {
  try {
    if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST');
      return res.status(405).json({ error: 'Method Not Allowed' });
    }

    if (!checkBasicAuth(req)) return res.status(401).json({ error: 'Unauthorized' });

    const contentType = req.headers['content-type'] || 'application/octet-stream';
    const origName = typeof req.headers['x-filename'] === 'string' ? req.headers['x-filename'] as string : `upload.bin`;
    const filename = `${Date.now()}-${Math.round(Math.random() * 1e9)}-${sanitizeFilename(origName)}`;

    const chunks: Buffer[] = [];
    await new Promise<void>((resolve, reject) => {
      req.on('data', (c: Buffer) => chunks.push(c));
      req.on('end', () => resolve());
      req.on('error', (e: Error) => reject(e));
    });
    const body = Buffer.concat(chunks);

    const { url } = await put(`blog/${filename}`, body, { access: 'public', contentType });
    return res.status(200).json({ url });
  } catch (err: any) {
    return res.status(500).json({ error: err?.message || 'Upload failed' });
  }
}


