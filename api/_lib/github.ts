export interface GitHubFile {
  sha: string;
  content: string;
}

const getEnv = (key: string, fallback?: string): string => {
  const value = process.env[key] || fallback;
  if (!value) throw new Error(`Missing env var: ${key}`);
  return value;
};

const GITHUB_API_BASE = 'https://api.github.com';

function getAuthHeaders() {
  const token = getEnv('GITHUB_TOKEN');
  return {
    Authorization: `token ${token}`,
    'Content-Type': 'application/json',
    'Accept': 'application/vnd.github+json'
  } as Record<string, string>;
}

function getRepoParams() {
  return {
    owner: getEnv('GITHUB_OWNER'),
    repo: getEnv('GITHUB_REPO'),
    branch: getEnv('GITHUB_BRANCH', 'main')
  };
}

export async function getRepoFile(path: string): Promise<GitHubFile> {
  const { owner, repo, branch } = getRepoParams();
  const url = `${GITHUB_API_BASE}/repos/${owner}/${repo}/contents/${encodeURIComponent(path)}?ref=${encodeURIComponent(branch)}`;
  const res = await fetch(url, { headers: getAuthHeaders() });
  if (!res.ok) {
    throw new Error(`GitHub get failed: ${res.status}`);
  }
  const json: any = await res.json();
  const content = Buffer.from(json.content || '', 'base64').toString('utf8');
  return { sha: json.sha, content };
}

export async function putRepoFile(path: string, content: string, message: string): Promise<void> {
  const { owner, repo, branch } = getRepoParams();
  let sha: string | undefined;
  try {
    const current = await getRepoFile(path);
    sha = current.sha;
  } catch (_err) {
    sha = undefined;
  }
  const url = `${GITHUB_API_BASE}/repos/${owner}/${repo}/contents/${encodeURIComponent(path)}`;
  const body = {
    message,
    content: Buffer.from(content, 'utf8').toString('base64'),
    branch,
    ...(sha ? { sha } : {})
  };
  const res = await fetch(url, { method: 'PUT', headers: getAuthHeaders(), body: JSON.stringify(body) });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`GitHub put failed: ${res.status} ${text}`);
  }
}

export async function deleteRepoFile(path: string, message: string): Promise<void> {
  const { owner, repo, branch } = getRepoParams();
  const current = await getRepoFile(path);
  const url = `${GITHUB_API_BASE}/repos/${owner}/${repo}/contents/${encodeURIComponent(path)}`;
  const body = { message, sha: current.sha, branch };
  const res = await fetch(url, { method: 'DELETE', headers: getAuthHeaders(), body: JSON.stringify(body) });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`GitHub delete failed: ${res.status} ${text}`);
  }
}

export async function getJsonFile<T>(path: string): Promise<{ sha: string; data: T }> {
  const file = await getRepoFile(path);
  try {
    return { sha: file.sha, data: JSON.parse(file.content) as T };
  } catch (err) {
    throw new Error(`Invalid JSON at ${path}`);
  }
}

export async function putJsonFile(path: string, data: unknown, message: string): Promise<void> {
  const content = JSON.stringify(data, null, 2);
  await putRepoFile(path, content, message);
}


