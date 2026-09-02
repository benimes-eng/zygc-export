# ZYGC Replicate

I want you to replicate exactly this website each detail the same, I designed it with framer but it lacks cutomizability: ZYGC Export PLC: www.zygc-export.framer.website

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://zygc-export.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/ffbb0471-2114-4f41-be7f-4976f1c2c0fd).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Deploy to Netlify

This project is configured for Netlify deployment using Nitro with the `netlify` preset.

### One-click setup

1. Push this repository to GitHub.
2. In [Netlify](https://app.netlify.com), choose **Add new site → Import an existing project**.
3. Connect the `benimes-eng/zygc-export` repository.
4. Netlify should auto-detect these build settings from `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
5. Deploy the site.

### Environment variables

Copy `.env.example` to `.env` for local development. On Netlify, add the same variables under **Site configuration → Environment variables**:

| Variable | Required | Description |
| --- | --- | --- |
| `VITE_SITE_URL` | No | Public site URL (e.g. `https://zygc-export.netlify.app`) |

### Local preview

```sh
npm run build
npm run preview
```
