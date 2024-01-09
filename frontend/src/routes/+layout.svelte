<script>
  import bg from '/src/images/bg.png'
</script>

<svelte:head>
  <title>Where's Warhammer 40K</title>
</svelte:head>

<header>
  <h1>Where's Warhammer 40K</h1>
</header>

<main>
  <slot />
</main>

<img id="backgroundImage" src={bg}/>
<div id="backgroundFade"/>

<style>
  @import url('https://fonts.googleapis.com/css2?family=DotGothic16');
  :global(body, html) {
    height: 100%;
    margin: 0;
    padding: 0;
    font-family: 'DotGothic16';
    color: #ccc;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  :global(html) {
    background-color: black;
  }
  :global(body::-webkit-scrollbar) {
    display: none;
  }
  header {
    margin: 0;
    width: 100%;
    top: 0;
    position: absolute;
  }
  h1 {
    font-size: min(2em, 8vw);
    text-align: center;
    margin: 0.7em 0;
    text-shadow: 3px 3px 1px black;
  }
  main {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #backgroundImage {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    object-fit: cover;
  }
  #backgroundFade {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1));
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
