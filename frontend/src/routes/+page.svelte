<script>
  import { blur } from 'svelte/transition'
  import { onMount } from 'svelte';
  let mounted = false
  onMount(() => {
    mounted = true
  })
</script>

<section id="homePage">
  {#if mounted}
    <a href="/play" transition:blur>Start Game</a>
    <a href="/leaderboard" transition:blur>View Leaderboard</a>
  {/if}
</section>

<style>
  #homePage {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
  }
  a {
    margin: 0 10%;
  }
</style>
