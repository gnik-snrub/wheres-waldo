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
