<script lang="ts">
  let name = '';

  async function createAlbum() {
    const res = await fetch('/api/albums', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name }),
    });

    if (res.ok) {
      const album = await res.json();
      window.location.href = `/albums/${album.id}`;
    } else {
      alert('Failed to create album');
    }
  }
</script>

<h1>Create Album</h1>
<input bind:value={name} placeholder="Album name" />
<button on:click={createAlbum}>Create</button>
