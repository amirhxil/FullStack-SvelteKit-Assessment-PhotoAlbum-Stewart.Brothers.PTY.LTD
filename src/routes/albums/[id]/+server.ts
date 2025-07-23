import type { RequestHandler } from './$types';
import sql from '$lib/db';
import { json } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ params }) => {
  const id = Number(params.id);

  if (isNaN(id)) {
    return new Response('Invalid album ID', { status: 400 });
  }
console.log('Trying to load album with ID:', id);

  const [album] =await sql`
    SELECT * FROM albums WHERE id = ${id}
  `;
  const result = await sql`SELECT * FROM albums WHERE id = ${id}`;
console.log('Result from DB:', result);

  if (!album) {
    return new Response('Album not found', { status: 404 });
  }

  return json(album);
};

export const DELETE: RequestHandler = async ({ params }) => {
  const id = Number(params.id);

  await sql`DELETE FROM photos WHERE id = ${id}`;

  return new Response('Photo deleted', { status: 200 });
};
