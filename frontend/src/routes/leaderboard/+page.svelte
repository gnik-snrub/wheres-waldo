<script>
  import { blur } from 'svelte/transition'
  import { onMount } from 'svelte';

  let leaderboardData

  let mounted = false
  onMount(async () => {
    mounted = true
    const apiResponse = await fetch(`${import.meta.env.VITE_API_URL}/api/leaderboardData`)
    leaderboardData = await apiResponse.json()
  })

  let counter = 0
  function increment() {
    counter++
    return counter
  }
</script>

<section>
  <h2>Leaderboard</h2>
  {#if mounted}
    <ol>
      <li>
        <h3>#</h3>
        <h3>Name</h3>
        <h3>Time</h3>
      </li>
      {#if leaderboardData}
        {#each leaderboardData.sort((a, b) => a.time > b.time ? 1 : -1) as {name, time} }
          <li>
            <span>#{increment()}</span>
            <span>{name}</span>
            <span>{time} sec</span>
          </li>
        {/each}
      {:else}
        <li>
          <span />
          <span>Contacting server...</span>
          <span />
        </li>
      {/if}
    </ol>
    <a href="/" transition:blur>Back</a>
  {/if}
</section>

<style>
  section {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 6em;
    height: 100%;
    width: 100%;
  }
  ol {
    display: flex;
    flex-direction: column;
    width: min(500px, 80%);
    margin: 0;
    padding: 0;
    justify-content: center;
    margin-bottom: 2em;
  }
  li {
    display: grid;
    grid-template-columns: 10% 70% 20%;
    justify-content: space-between;
    border-bottom: 1px solid #ccc;
    padding: 0.5em 0;
  }
  h2, h3 {
    color: #fff;
  }
  h3 {
    letter-spacing: 0.15em;
  }
  ol li:not(:first-child) {
    background-color: rgba(255, 255, 255, 0.1);
  }
  li *:first-child {
    text-align: center;
  }
  li *:nth-child(2) {
    margin-right: 1em;
    padding-left: 1em;
    border-left: 1px solid #ccc;
  }
  li *:last-child {
    text-align: center;
    border-left: 1px solid #ccc;
  }
  span {
    overflow-wrap: anywhere;
  }
</style>
