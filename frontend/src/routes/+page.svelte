<script>
  import Modal from '/src/lib/Modal.svelte'

  let modalVisible = false
  let mouseX, mouseY = 0

  function showModal(e) {
    mouseX = e.clientX
    mouseY = e.clientY
    modalVisible = true
  }

  function hideModal() {
    modalVisible = false
  }
</script>

<button on:click={showModal}>Show Modal</button>

{#if modalVisible}
  <Modal x={mouseX} y={mouseY} />
{/if}
