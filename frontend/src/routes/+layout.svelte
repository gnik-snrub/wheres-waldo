<header>
  <h1>Where's Warhammer 40K</h1>
</header>
<main>
  <slot />
</main>

<style>
  @import url('https://fonts.googleapis.com/css2?family=DotGothic16');
  :global(body, html) {
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: 'DotGothic16';
    color: #ccc;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  :global(body::-webkit-scrollbar) {
    display: none;
  }
  header {
    max-height: 10%;
    margin: 0;
  }
  h1 {
    text-align: center;
    margin: 0;
    padding-top: 0.7em;
  main {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  :global(a, a:visited, a:active) {
    color: #ccc;
    text-decoration: none;
  }
  a:hover {
    color: #fff;
  }
</style>
