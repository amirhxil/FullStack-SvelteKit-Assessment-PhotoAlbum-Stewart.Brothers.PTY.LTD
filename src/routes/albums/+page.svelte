<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  let albums: { id: number; name: string }[] = [];

  onMount(async () => {
    const res = await fetch('/api/albums');
    albums = await res.json();
  });

  async function deleteAlbum(id: number) {
    if (!confirm('Are you sure you want to delete this album?')) return;
    const res = await fetch(`/api/albums/${id}`, { method: 'DELETE' });
    if (res.ok) {
      albums = albums.filter(album => album.id !== id);
    } else {
      alert('Failed to delete album');
    }
  }

   function logout() {
    localStorage.removeItem('mockUser');
    goto('/');
  }
</script>
  <button on:click={logout}>Logout</button>

<h1>Albums</h1>
<a href="/albums/new">➕ New Album</a>

<ul>
  {#each albums as album}
    <li>
      <a href={`/albums/${album.id}`}>{album.name}</a>
      <button on:click={() => deleteAlbum(album.id)} style="margin-left: 1rem;">🗑️ Delete</button>
    </li>
  {/each}
</ul>
