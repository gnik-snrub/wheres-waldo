<script>
  import Modal from '/src/lib/Modal.svelte'
  import grey_knights from '/src/images/greyknights.jpeg'
  import marinevsnids from '/src/images/marinevsnids.jfif'
  import marinevsnids2 from '/src/images/marinevsnids2.jfif'
</script>

<Modal />

  <img src={grey_knights} />
  <img src={marinevsnids} />
  <img src={marinevsnids2} />

<style>
  img {
    max-width: 100%;
    height: auto;
  }
</style>
