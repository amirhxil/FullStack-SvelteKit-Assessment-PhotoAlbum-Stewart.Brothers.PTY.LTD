# 📸 FullStack SvelteKit Assessment – Photo Album App

This is my submission for the Stewart Brothers technical assessment using SvelteKit, Bun, and PostgreSQL.

---

## 💡 Approach

- I structured the application using SvelteKit with file-based routing.
- I used Bun as the runtime for its speed and modern toolchain.
- PostgreSQL is used for storing albums and photo metadata.
- The app allows users to:
  - Create, view, and delete photo albums.
  - Upload and view photos per album.
  - Edit album names.
  - Perform mock login/logout (no real authentication).
- Components were designed for simplicity and clarity for a clean user experience.

---

## ⚠️ Deployment Note

The deployed version on Vercel does **not support local PostgreSQL**, so actions that involve database access (like creating albums or uploading photos) **will not work online**.

For full functionality, clone this repo and run locally with PostgreSQL running (e.g., via pgAdmin 4).

---

## 🧩 Challenges

- **Database connection on Vercel**: Since I used a local PostgreSQL instance via pgAdmin 4, Vercel could not connect to it. I solved this by adding a deployment note in this README.
- **Route parameters in SvelteKit**: I faced minor issues with dynamic routing (`[id]`) but resolved it by checking the correct usage of `params` and endpoint paths.
- **Image Uploading**: Handling image uploads and storing Base64 or links required creating a consistent schema in the database and ensuring the frontend passed correct content.

---

## 🤔 Assumptions

- No real user authentication was required, so mock login is used (non-empty credentials).
- File uploads are assumed to be either URLs or Base64 strings (actual file hosting not implemented).
- Only basic styling and layout were used as the focus was on functionality.

---

## 🛠️ Tech Stack

- SvelteKit
- Bun
- PostgreSQL
- Vercel (for deployment)


==================================================================================================================================================
# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
