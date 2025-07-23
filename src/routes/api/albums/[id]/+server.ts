// src/routes/api/albums/[id]/+server.ts
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import sql from '$lib/db';

export const GET: RequestHandler = async ({ params }) => {
  const id = Number(params.id);
  const [album] = await sql`SELECT * FROM albums WHERE id = ${id}`;
  if (!album) return new Response('Album not found', { status: 404 });
  return json(album);
};

export const PUT: RequestHandler = async ({ request, params }) => {
  const id = Number(params.id);
  const data = await request.json();

  if (!data.name) {
    return new Response('Name is required', { status: 400 });
  }

  await sql`UPDATE albums SET name = ${data.name} WHERE id = ${id}`;
  return new Response('Album updated', { status: 200 });
};

export const DELETE: RequestHandler = async ({ params }) => {
  const id = Number(params.id);
  await sql`DELETE FROM photos WHERE album_id = ${id}`;
  await sql`DELETE FROM albums WHERE id = ${id}`;
  return new Response('Album deleted', { status: 200 });
};
