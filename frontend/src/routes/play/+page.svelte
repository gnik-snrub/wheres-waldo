<script>
  import { blur } from 'svelte/transition'
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation'
  import Modal from '/src/lib/Modal.svelte'

  let makeModal, startTime
  let imageSelected = null

  import grey_knights from '/src/images/greyknights.jpeg'
  import marinevsnids from '/src/images/marinevsnids.jfif'
  import marinevsnids2 from '/src/images/marinevsnids2.jfif'

  const gameImages = [grey_knights, marinevsnids, marinevsnids2]
  const imageLoaded = [false, false, false]

  onMount(async () => {
    gameImages.forEach((url, index) => {
      const image = new Image()
      image.src = url
      image.onload = () => {
        imageLoaded[index] = true
      }
    })
    const startTimeResponse = await fetch('http://localhost:3000/api/startGame')
    const startTimeData = await startTimeResponse.json()
    startTime = startTimeData.startTime
  })

  function onImageClick(e, imageNum) {
    makeModal(e)
    imageSelected = imageNum
  }

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
  async function getData(selectedImageNumber) {
    const data = new URLSearchParams()
    data.append('selectedImageNumber', selectedImageNumber)
    const response = await fetch('http://localhost:3000/api/checkSuccess', {
      method: 'POST',
      body: data
    })
    return await response.json()
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
  {#if imageLoaded.every(Boolean)}
    <img src={marinevsnids} alt="Game area" transition:blur|local  on:click={(e) => {onImageClick(e, 1)}} />
    <img src={grey_knights} alt="Game area" transition:blur|local  on:click={(e) => {onImageClick(e, 2)}} />
    <img src={marinevsnids2} alt="Game area" transition:blur|local  on:click={(e) => {onImageClick(e, 3)}} />
    {#each checkLocations as {x, y}}
      <div transition:blur id="foundCheck" style:left={x + 'px'} style:top={y + 'px'} />
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
    content: "\2714";
    color: green;
    font-size: 2em;
    -webkit-text-stroke: 1px black;
    text-stroke: 1px black;
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
