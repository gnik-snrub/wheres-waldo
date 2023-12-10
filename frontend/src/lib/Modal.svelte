<script>
  import { slide } from 'svelte/transition'

  let modalVisible = false
  let mouseX, mouseY, imgX, imgY = 0

  export function toggleModal(e) {
    if (modalVisible) {
      modalVisible = false
    } else {
      const maxX = window.innerWidth - 100 //Arbitrary placeholder numbers
      const maxY = document.body.scrollHeight - 60 //Arbitrary placeholder numbers
      mouseX = Math.round(Math.min(e.clientX + window.pageXOffset, maxX))
      mouseY = Math.round(Math.min(e.clientY + window.pageYOffset, maxY))
      imgX = e.offsetX
      imgY = e.offsetY
      modalVisible = true
    }
  }
</script>

{#if modalVisible}
  <div class='modal' on:click|stopPropagation transition:slide|local style="left: {mouseX}px; top: {mouseY}px">
    <p>Page position: {mouseX}, {mouseY}</p>
    <p>Image position: {imgX}, {imgY}</p>
  </div>
{/if}


<style>
  .modalWrapper {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0);
  }
  .modal {
    position: absolute;
    border: 1px solid black;
    padding: 16px;
    background-color: skyblue;
  }
</style>
