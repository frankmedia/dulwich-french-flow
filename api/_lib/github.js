const GITHUB_API_BASE = 'https://api.github.com';

function getEnv(key, fallback) {
  const value = process.env[key] || fallback;
  if (!value) throw new Error(`Missing env var: ${key}`);
  return value;
}

function getAuthHeaders() {
  const token = getEnv('GITHUB_TOKEN');
  return {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
    'Accept': 'application/vnd.github+json',
    'User-Agent': 'french-flow-cms'
  };
}

function getRepoParams() {
  return {
    owner: getEnv('GITHUB_OWNER'),
    repo: getEnv('GITHUB_REPO'),
    branch: getEnv('GITHUB_BRANCH', 'main')
  };
}

export async function getRepoFile(path) {
  const { owner, repo, branch } = getRepoParams();
  const url = `${GITHUB_API_BASE}/repos/${owner}/${repo}/contents/${path}?ref=${encodeURIComponent(branch)}`;
  const res = await fetch(url, { headers: getAuthHeaders() });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`GitHub get failed: ${res.status} ${text}`);
  }
  const json = await res.json();
  const content = Buffer.from(json.content || '', 'base64').toString('utf8');
  return { sha: json.sha, content };
}

export async function putRepoFile(path, content, message) {
  const { owner, repo, branch } = getRepoParams();
  let sha;
  try {
    const current = await getRepoFile(path);
    sha = current.sha;
  } catch (_err) {
    sha = undefined;
  }
  const url = `${GITHUB_API_BASE}/repos/${owner}/${repo}/contents/${path}`;
  const body = {
    message,
    content: Buffer.from(content, 'utf8').toString('base64'),
    branch,
    ...(sha ? { sha } : {})
  };
  const res = await fetch(url, { method: 'PUT', headers: getAuthHeaders(), body: JSON.stringify(body) });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`GitHub put failed: ${res.status} ${text}`);
  }
}

export async function deleteRepoFile(path, message) {
  const { owner, repo, branch } = getRepoParams();
  const current = await getRepoFile(path);
  const url = `${GITHUB_API_BASE}/repos/${owner}/${repo}/contents/${path}`;
  const body = { message, sha: current.sha, branch };
  const res = await fetch(url, { method: 'DELETE', headers: getAuthHeaders(), body: JSON.stringify(body) });
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new Error(`GitHub delete failed: ${res.status} ${text}`);
  }
}

export async function getJsonFile(path) {
  const file = await getRepoFile(path);
  return { sha: file.sha, data: JSON.parse(file.content) };
}

export async function putJsonFile(path, data, message) {
  const content = JSON.stringify(data, null, 2);
  await putRepoFile(path, content, message);
}


