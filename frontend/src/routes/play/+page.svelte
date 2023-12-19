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


<section id="gameArea">
  <img src={marinevsnids} on:click={onImageClick} />
  <img src={grey_knights} on:click={onImageClick} />
  <img src={marinevsnids2} on:click={onImageClick} />
  <Modal bind:toggleModal={makeModal} />
  <a href="/">Quit</a>
</section>


<style>
  img {
    width: 70%;
    height: auto;
  }
  #gameArea {
    margin-top: 6em;
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin-bottom: 6em;
  }
  a {
    margin-top: 2em;
    color: red;
  }
</style>
