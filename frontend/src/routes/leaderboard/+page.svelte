<section>
  <h2>Leaderboard</h2>
  <ol>
    <li>
      <h3>Name</h3>
      <h3>Time</h3>
    </li>
    {#each listData as {name, time} }
      <li>
        <span>{name}</span>
        <span>{time} sec</span>
      </li>
    {/each}
  </ol>
  <a href="/">Back</a>
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
