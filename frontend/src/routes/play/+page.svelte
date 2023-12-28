<script>
  import { blur } from 'svelte/transition'
  import { onMount } from 'svelte';
  import Modal from '/src/lib/Modal.svelte'
  import grey_knights from '/src/images/greyknights.jpeg'
  import marinevsnids from '/src/images/marinevsnids.jfif'
  import marinevsnids2 from '/src/images/marinevsnids2.jfif'

  let makeModal
  let mounted = false

  onMount(() => {
    mounted = true
  })

  function onImageClick(e, imageNum) {
    makeModal(e, imageNum)
  }

  let checkLocations = []

  function addCheck(x, y) {
    checkLocations = [...checkLocations, {x, y}]
  }
</script>


<section id="gameArea">
  {#if mounted}
    <img src={marinevsnids} transition:blur|local  on:click={(e) => {onImageClick(e, 1)}} />
    <img src={grey_knights} transition:blur|local  on:click={(e) => {onImageClick(e, 2)}} />
    <img src={marinevsnids2} transition:blur|local  on:click={(e) => {onImageClick(e, 3)}} />
    <a href="/">Quit</a>
    <Modal bind:toggleModal={makeModal} check={addCheck} />
  {/if}
</section>


<style>
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
</style>
