## Development (Serverless)

Run API via Vercel functions and the frontend via Vite:

```sh
# Terminal 1
npx vercel dev

# Terminal 2
npm run dev -- --port 8081
```

Add to `.env` or `.env.local`:

```sh
API_PROXY_TARGET=http://127.0.0.1:3000
BASIC_USER=your-user
BASIC_PASS=your-pass
GITHUB_OWNER=your-owner
GITHUB_REPO=your-repo
GITHUB_BRANCH=main
GITHUB_TOKEN=your-token
```

### Production
- Set the same server-only env vars in Vercel (Project → Settings → Environment Variables).
- Client envs (VITE_*) remain unchanged for EmailJS.
