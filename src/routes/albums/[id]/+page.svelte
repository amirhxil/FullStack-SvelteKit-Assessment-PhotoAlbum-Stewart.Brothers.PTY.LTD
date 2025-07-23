<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte';

  let photos: { id: number; album_id: number; url: string }[] = [];
  let file: File | null = null;
  let albumId: number = Number($page.params.id);

  let albumName = '';
  let editing = false;
  let newName = '';

  onMount(async () => {
    await loadPhotos();
    await loadAlbumDetails();
  });
  async function loadAlbumDetails() {
    const res = await fetch(`/api/albums/${albumId}`);
    if (res.ok) {
      const album = await res.json();
      albumName = album.name;
      newName = album.name;
    } else {
      albumName = '(Album not found)';
    }
  }
  async function loadPhotos() {
    const res = await fetch(`/api/photos?albumId=${albumId}`);
    photos = await res.json();
  }

  function handleFileChange(e: Event) {
    const target = e.target as HTMLInputElement;
    file = target.files?.[0] ?? null;
  }

  async function upload() {
    if (!file) return alert('No file selected');

    const base64 = await toBase64(file);
    const res = await fetch(`/api/photos?albumId=${albumId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url: base64 }),
    });

    if (res.ok) {
      await loadPhotos();
    } else {
      alert('Upload failed');
    }
  }

  function toBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }

    async function deletePhoto(id: number) {
    if (!confirm('Are you sure you want to delete this photo?')) return;
    const res = await fetch(`/api/photos/${id}`, { method: 'DELETE' });
    if (res.ok) {
      photos = photos.filter(photo => photo.id !== id);
    } else {
      alert('Failed to delete photo');
    }
  }

    async function updateAlbumName() {
    const res = await fetch(`/api/albums/${albumId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: newName }),
    });

    if (res.ok) {
      editing = false;
      await loadAlbumDetails();
    } else {
      alert('Failed to update name');
    }
  }

</script>

<!-- Album Title -->
<h1>
  {#if editing}
    <input bind:value={newName} />
    <button on:click={updateAlbumName}>Save</button>
    <button on:click={() => (editing = false)}>Cancel</button>
  {:else}
    Album: {albumName}
    <button on:click={() => (editing = true)}>Edit</button>
  {/if}
</h1>

<input type="file" on:change={handleFileChange} />
<button on:click={upload}>Upload Photo</button>

<div style="display: flex; flex-wrap: wrap; gap: 1rem; margin-top: 1rem;">
  {#each photos as photo}
    <div>
      <img src={photo.url} alt="Photo" style="width: 200px; border-radius: 8px;" />
      <button on:click={() => deletePhoto(photo.id)}>Delete</button>
    </div>
  {/each}
</div>
