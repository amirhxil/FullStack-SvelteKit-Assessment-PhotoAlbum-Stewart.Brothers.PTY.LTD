import type { RequestHandler } from './$types';
import sql from '$lib/db';
import { json } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
  const albums = await sql`SELECT * FROM albums ORDER BY id DESC`;
  return json(albums);
};

export const POST: RequestHandler = async ({ request }) => {
  const { name } = await request.json();

  if (!name) {
    return new Response('Missing album name', { status: 400 });
  }

  const [album] = await sql`
    INSERT INTO albums (name)
    VALUES (${name})
    RETURNING id, name
  `;

  return json(album, { status: 201 });
};
