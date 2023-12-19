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
