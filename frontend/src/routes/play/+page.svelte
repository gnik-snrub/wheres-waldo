<script>
  import { blur } from 'svelte/transition'
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation'
  import Modal from '/src/lib/Modal.svelte'
  import grey_knights from '/src/images/greyknights.jpeg'
  import marinevsnids from '/src/images/marinevsnids.jfif'
  import marinevsnids2 from '/src/images/marinevsnids2.jfif'

  let makeModal
  let mounted = false
  let imageSelected = null

  onMount(() => {
    mounted = true
  })

  function onImageClick(e, imageNum) {
    makeModal(e)
    imageSelected = imageNum
  }

  const fakeTestAPI = [
    {image: 1, x1: 23, x2: 29, y1: 25, y2: 35},
    {image: 1, x1: 76, x2: 79, y1: 63, y2: 74},
    {image: 2, x1: 19, x2: 36, y1: 38, y2: 56},
    {image: 2, x1: 64, x2: 76, y1: 32, y2: 48},
    {image: 3, x1: 36, x2: 41, y1: 23, y2: 38},
    {image: 3, x1: 76, x2: 88, y1: 64, y2: 78}
  ]

  let foundItems = []
  let checkLocations = []

  function addCheck(selectedImageNumber, imgX, imgY, absoluteX, absoluteY) {
    const data = fakeTestAPI[selectedImageNumber]
    if (imgX >= data.x1 && imgX <= data.x2 &&
        imgY >= data.y1 && imgY <= data.y2 &&
        imageSelected === data.image &&
        !foundItems.includes(data)) {
      foundItems = [...foundItems, data]
      checkLocations = [...checkLocations, {x: absoluteX, y: absoluteY}]
    }
  }

  let userWon = false

  $: {
    if (checkLocations.length > 5) {
      userWon = true
    }
  }

  import { leaderboardData } from '/src/stores/testListData'

  let playerName = ''

  async function submitSuccess() {
    // Temporary function until API is built
    // Adds users name, and a time to leaderboard, and then takes user to leaderboard
    leaderboardData.update(items => { return [...items, {name: playerName, time: 30}] })
    goto('/leaderboard')
  }

</script>


<section id="gameArea">
  {#if mounted}
    <img src={marinevsnids} transition:blur|local  on:click={(e) => {onImageClick(e, 1)}} />
    <img src={grey_knights} transition:blur|local  on:click={(e) => {onImageClick(e, 2)}} />
    <img src={marinevsnids2} transition:blur|local  on:click={(e) => {onImageClick(e, 3)}} />
    {#each checkLocations as {x, y}}
      <div id="foundCheck" style:left={x + 'px'} style:top={y + 'px'} />
    {/each}
    <a href="/">Quit</a>
    <Modal bind:toggleModal={makeModal} check={addCheck} />
    {#if userWon} 
      <dialog open>
        <h3>You won :D</h3>
        <span>What's your name?</span>
        <form on:submit|preventDefault={submitSuccess}>
          <input bind:value={playerName} type="text" placeholder="John Smith"/>
          <button>Submit</button>
        </form>
      </dialog>
    {/if}
  {/if}
</section>


<style>
  #foundCheck {
    position: absolute;
    translate: -50% -50%;
  }
  #foundCheck:after {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    content: "\274c";
    text-align: center;
  }
  img {
    width: 70%;
    height: auto;
  }
  #gameArea {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin-top: 6em;
    margin-bottom: 6em;
  }
  @media screen and (max-width: 600px) {
    img {
      width: 80%;
    }
    #gameArea {
      margin-bottom: 0em;
    }
  }
  @media screen and (max-width: 400px) {
    img {
      width: 90%;
    }
  }
  @media screen and (max-width: 350px) {
    #gameArea {
      margin-top: 1em;
    }
  }
  a {
    margin-top: 2em;
    color: red;
  }
  dialog {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2em;
    top: 50vh;
    translate: 0 -50%;
    color: #ccc;
    border: 2px solid #ccc;
    backdrop-filter: blur(5px);
    background-color: rgba(0, 0, 0, 0.5);
  }
  dialog > * {
    margin: 0;
    padding: 0;
  }
</style>
