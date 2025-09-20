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
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const ok = checkBasicAuth(req);
  if (!ok) return res.status(401).json({ ok: false });
  return res.status(200).json({ ok: true });
}


