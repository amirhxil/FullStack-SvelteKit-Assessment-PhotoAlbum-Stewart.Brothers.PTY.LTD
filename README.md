## 📌 Approach
- Built album/photo CRUD using SvelteKit routes and API endpoints
- Used Bun runtime and PostgreSQL for backend
- Implemented base64 image upload via form
- Created mock login system for demo purposes

## ⚠️ Assumptions
- Mock login: accepts any non-empty username/password
- Images stored as base64 strings in the database
- No user-specific album filtering (as per instructions)

## 🚧 Challenges
- Learning curve with SvelteKit file-based routing
- Bubble’s limited image upload required base64 workaround
- Handling relational data (album/photos) in a clean UI

## ✅ Features
- Create, edit, delete albums
- Upload and delete photos per album
- View all albums
- Simple login/logout system

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
