
export default async function handler(_req: any, res: any) {
  const report = {
    BASIC_USER: Boolean(process.env.BASIC_USER),
    BASIC_PASS: Boolean(process.env.BASIC_PASS),
    GITHUB_OWNER: process.env.GITHUB_OWNER || null,
    GITHUB_REPO: process.env.GITHUB_REPO || null,
    GITHUB_BRANCH: process.env.GITHUB_BRANCH || null,
    GITHUB_TOKEN: process.env.GITHUB_TOKEN ? `present:${(process.env.GITHUB_TOKEN || '').slice(-4)}` : null
  } as const;
  res.status(200).json(report);
}


