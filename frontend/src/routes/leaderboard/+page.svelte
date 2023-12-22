<script>
  import { blur } from 'svelte/transition'
  import { onMount } from 'svelte';
  let mounted = false
  onMount(() => {
    mounted = true
  })
  let listData = []

  listData.push({name: 'Bob', time: 15})
  listData.push({name: 'Jen', time: 25})
  listData.push({name: 'Some long name, like a reaaaaaaaaaaaaaaaaaaaaaaaally long name', time: 10})
  listData.push({name: 'Tim', time: 10})

  let counter = 0
  function increment() {
    counter++
    return counter
  }
</script>

<section>
  <h2>Leaderboard</h2>
  {#if mounted}
    <ol transition:blur>
      <li>
        <h3>#</h3>
        <h3>Name</h3>
        <h3>Time</h3>
      </li>
      {#each listData.sort((a, b) => a.time > b.time ? 1 : -1) as {name, time} }
        <li>
          <span>#{increment()}</span>
          <span>{name}</span>
          <span>{time} sec</span>
        </li>
      {/each}
    </ol>
    <a href="/">Back</a>
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
