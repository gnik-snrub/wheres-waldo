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
    margin: 0;
    width: 100%;
    top: 0;
    z-index: 9;
    position: fixed;
  }
  h1 {
    text-align: center;
    margin: 0.7em 0;
    text-shadow: 3px 3px 1px black;
  }
  main {
    display: flex;
    align-items: center;
    justify-content: center;
    background: radial-gradient(circle at 25% 86%, rgba(1, 186, 239, 0.4) 0%, rgba(0, 0, 0, 0) 60%),
                radial-gradient(circle at 92% 45%, rgba(233, 79, 55, 0.4) 0%, rgba(0, 0, 0, 0) 60%),
                radial-gradient(circle at 87% 46%, rgba(4, 55, 242, 0.4) 0%, rgba(0, 0, 0, 0) 60%),
                radial-gradient(circle at 7% 18%, rgba(233, 79, 55, 0.4) 0%, rgba(0, 0, 0, 0) 60%);
    background-color: black;
    background-repeat: no-repeat;
  }
  :global(section) {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  :global(a, a:visited, a:active) {
    color: #ccc;
    text-decoration: none;
  }
</style>
