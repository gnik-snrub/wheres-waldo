<script>
  import Modal from '/src/lib/Modal.svelte'
  import grey_knights from '/src/images/greyknights.jpeg'
  import marinevsnids from '/src/images/marinevsnids.jfif'
  import marinevsnids2 from '/src/images/marinevsnids2.jfif'

  let makeModal

function onImageClick(e) {
  makeModal(e)
}
</script>

<a href="/">Home</a>

<img src={marinevsnids} on:click={onImageClick} />
<img src={grey_knights} on:click={onImageClick} />
<img src={marinevsnids2} on:click={onImageClick} />
<Modal bind:toggleModal={makeModal} />

<style>
  img {
    max-width: 100%;
    height: auto;
  }
</style>
