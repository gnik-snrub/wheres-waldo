<script>
  import { modalVisible } from '/src/stores/modalVisible.js'
  export let mouseX, mouseY = 0

  function hideModal() {
    modalVisible.set(false)
  }
</script>

{#if $modalVisible}
  <div class='modal' style="left: {mouseX}px; top: {mouseY}px" on:click|stopPropagation={hideModal}>
  {mouseX}, {mouseY}
  </div>
{/if}


<style>
  div {
    position: absolute;
    border: 1px solid black;
    padding: 16px;
    background-color: skyblue;
  }
</style>
