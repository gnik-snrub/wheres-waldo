<script>
  import Modal from '/src/lib/Modal.svelte'
  import { modalVisible } from '/src/stores/modalVisible.js'

  let mouseX, mouseY = 0

  function showModal(e) {
    mouseX = e.clientX
    mouseY = e.clientY
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
