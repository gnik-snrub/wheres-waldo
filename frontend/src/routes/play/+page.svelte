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
    const startTimeResponse = await fetch(`${import.meta.env.VITE_API_URL}/api/startGame`)
    const startTimeData = await startTimeResponse.json()
    startTime = startTimeData.startTime
  })

  function onImageClick(e, imageNum) {
    makeModal(e)
    imageSelected = imageNum
  }

  let foundItems = []
  let checkLocations = []
  let userWon = false

  async function getData(selectedImageNumber) {
    const data = new URLSearchParams()
    data.append('selectedImageNumber', selectedImageNumber)
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/checkSuccess`, {
      method: 'POST',
      body: data
    })
    return await response.json()
  }

  let endTime

  async function checkSuccess(selectedImageNumber, imgX, imgY, absoluteX, absoluteY) {
    const results = await getData(selectedImageNumber)
    if (imgX >= results.x1 && imgX <= results.x2 &&
        imgY >= results.y1 && imgY <= results.y2 &&
        imageSelected === results.image &&
        !foundItems.includes(results)) {
      foundItems = [...foundItems, results]
      checkLocations = [...checkLocations, {x: absoluteX, y: absoluteY}]
    }

    if (checkLocations.length > 5) {
      endTime = results.endTime
      userWon = true
    }
  }

  let playerName = ''

  async function submitSuccess() {
    const data = new URLSearchParams()
    data.append('name', playerName)
    data.append('time', (endTime - startTime) / 1000)
    await fetch(`${import.meta.env.VITE_API_URL}/api/addToLeaderboard`, {
      method: 'POST',
      body: data
    })
    goto('/leaderboard')
  }

</script>


<section id="gameArea">
  {#if imageLoaded.every(Boolean) && startTime}
    <img src={marinevsnids} alt="Game area" transition:blur|local  on:click={(e) => {onImageClick(e, 1)}} />
    <img src={grey_knights} alt="Game area" transition:blur|local  on:click={(e) => {onImageClick(e, 2)}} />
    <img src={marinevsnids2} alt="Game area" transition:blur|local  on:click={(e) => {onImageClick(e, 3)}} />
    {#each checkLocations as {x, y}}
      <div transition:blur id="foundCheck" style:left={x + 'px'} style:top={y + 'px'} />
    {/each}
    <a href="/">Quit</a>
    <Modal bind:toggleModal={makeModal} check={checkSuccess} />
    {#if userWon} 
      <dialog open>
        <h3>You won!</h3>
        <span>What's your name?</span>
        <span>Time: {(endTime - startTime) / 1000} seconds</span>
        <form on:submit|preventDefault={submitSuccess}>
          <input bind:value={playerName} type="text" placeholder="John Smith"/>
          <button>Submit</button>
        </form>
      </dialog>
    {/if}
  {:else}
    <dialog transition:blur open>
      Contacting server...
    </dialog>
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
  input {
    background-color: rgba(0, 0, 0, 0.5);
    padding: 5px 10px;
    border: none;
    color: #ccc;
  }
  input:focus {
    outline: none;
  }
  input::placeholder {
    color: #777;
  }
  input:focus::placeholder {
    position: relative;
    color: #999;
    text-decoration: underline;
    text-underline-offset: .2em;
  }
  button {
    border: none;
    color: #ccc;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 5px 10px;
  }
  button:focus {
    text-decoration: underline;
    text-underline-offset: .2em;
    outline: none;
  }
</style>
