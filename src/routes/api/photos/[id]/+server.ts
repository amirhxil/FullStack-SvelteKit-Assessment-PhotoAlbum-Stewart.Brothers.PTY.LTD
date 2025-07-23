// src/routes/api/photos/[id]/+server.ts
import type { RequestHandler } from './$types';
import sql from '$lib/db';

export const DELETE: RequestHandler = async ({ params }) => {
  const id = Number(params.id);

  const result = await sql`DELETE FROM photos WHERE id = ${id}`;

  return new Response('Photo deleted', { status: 200 });
};
