<!-- src/routes/+page.svelte -->
<script lang="ts">
  import { goto } from '$app/navigation';

  let email = '';
  let password = '';
  let error = '';

  function login() {
    if (!email.trim() || !password.trim()) {
      error = 'Please enter email and password';
      return;
    }

    // Store mock session
    localStorage.setItem('mockUser', JSON.stringify({ email }));

    // Redirect to album list
    goto('/albums');
  }
</script>

<h1>Login</h1>
<div>
  <label>Email</label>
  <input type="email" bind:value={email} />
</div>
<div>
  <label>Password</label>
  <input type="password" bind:value={password} />
</div>
{#if error}
  <p style="color: red;">{error}</p>
{/if}
<button on:click={login}>Login</button>
