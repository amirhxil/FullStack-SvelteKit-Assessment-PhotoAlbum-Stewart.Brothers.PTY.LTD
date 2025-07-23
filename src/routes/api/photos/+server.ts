import type { RequestHandler } from './$types';
import sql from '$lib/db';
import { json } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ url }) => {
  const albumId = url.searchParams.get('albumId');

  if (!albumId) {
    return new Response('Missing albumId', { status: 400 });
  }

  const photos = await sql`
    SELECT * FROM photos
    WHERE album_id = ${albumId}
    ORDER BY id DESC
  `;

  return json(photos);
};

export const POST: RequestHandler = async ({ request, url }) => {
  const albumId = url.searchParams.get('albumId');

  if (!albumId) {
    return new Response('Missing albumId', { status: 400 });
  }

  const { url: photoUrl } = await request.json();

  if (!photoUrl) {
    return new Response('Missing photo URL', { status: 400 });
  }

  const [photo] = await sql`
    INSERT INTO photos (album_id, url)
    VALUES (${albumId}, ${photoUrl})
    RETURNING id, album_id, url
  `;

  return json(photo, { status: 201 });
};
