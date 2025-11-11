import { getJsonFile } from "../../_lib/github.js";

function escapeHtml(input: string): string {
  return (input || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export default async function handler(req: any, res: any) {
  try {
    const slug = (req.query.slug || "") as string;
    if (!slug) {
      res.status(400).send("Missing slug");
      return;
    }

    const { data: post } = await getJsonFile<{ title: string; content: string; image?: string; date?: string }>(
      `content/blog/posts/${slug}.json`
    );

    const host = (req.headers["host"] as string) || "frenchflow.co.uk";
    const proto = ((req.headers["x-forwarded-proto"] as string) || "https").split(",")[0];
    const site = `${proto}://${host}`;
    const url = `${site}/blog/${encodeURIComponent(slug)}`;
    const title = post?.title || "French Flow Article";
    const description = (post?.content || "").substring(0, 180).trim();
    const image = post?.image || `https://french-flow.vercel.app/assets/hero-illustration-BkCREZJs.jpg`;

    const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(title)} | French Flow</title>
    <link rel="canonical" href="${url}" />
    <meta name="description" content="${escapeHtml(description)}" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="${url}" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:site_name" content="French Flow" />
    <meta property="og:locale" content="en_GB" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <meta name="twitter:image" content="${image}" />
    <meta http-equiv="refresh" content="0;url='${url}'" />
  </head>
  <body>
    <p>This page redirects to <a href="${url}">${escapeHtml(title)}</a>.</p>
  </body>
</html>`;

    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.status(200).send(html);
  } catch (err: any) {
    res.status(500).send("Failed to render share page");
  }
}


