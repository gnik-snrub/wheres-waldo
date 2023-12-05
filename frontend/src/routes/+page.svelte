<script>
  import Modal from '/src/lib/Modal.svelte'
  import { modalVisible } from '/src/stores/modalVisible.js'

  let mouseX, mouseY = 0

  function showModal(e) {
    const maxX = window.innerWidth - 100 //Arbitrary placeholder numbers
    const maxY = window.innerHeight - 60 //Arbitrary placeholder numbers
    mouseX = Math.min(e.clientX, maxX)
    mouseY = Math.min(e.clientY, maxY)
    modalVisible.set(true)
  }

</script>

<div class="page" on:click={showModal}>

  <Modal mouseX={mouseX} mouseY={mouseY}/>

</div>
  
<style>
  :global(body, html) {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  .page {
    height: 100%;
    width: 100%;
    background-color: #F00;
  }
</style>
