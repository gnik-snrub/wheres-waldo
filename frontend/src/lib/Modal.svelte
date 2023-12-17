<script>
  import { slide } from 'svelte/transition'

  import img1_marine from '/src/images/modal/img1_marine.png'
  import img1_tyranid from '/src/images/modal/img1_tyranid.png'
  import img2_helmet from '/src/images/modal/img2_helmet.png'
  import img2_hood from '/src/images/modal/img2_hood.png'
  import img3_marine from '/src/images/modal/img3_marine.png'
  import img3_tyranid from '/src/images/modal/img3_tyranid.png'

  let modalVisible = false
  let mouseX, mouseY, imgX, imgY = 0

  export function toggleModal(e) {
    if (modalVisible) {
      modalVisible = false
    } else {
      mouseX = Math.round(e.clientX + window.pageXOffset)
      mouseY = Math.round(e.clientY + window.pageYOffset)
      imgX = e.offsetX
      imgY = e.offsetY
      modalVisible = true
    }
  }
</script>

{#if modalVisible}
  <div class='modal' on:click|stopPropagation transition:slide|local
        style:left={mouseX < (window.innerWidth / 2) ? mouseX + "px" : null}
        style:right={mouseX > (window.innerWidth / 2) ? window.innerWidth - mouseX + "px" : null}
        style:top={mouseY < (window.innerHeight / 2) ? mouseY + "px" : null}
        style:bottom={mouseY > (window.innerHeight / 2) ? window.innerHeight - mouseY + "px" : null}
  >
    <img src={img1_marine} />
    <img src={img1_tyranid} />
    <img src={img2_helmet} />
    <img src={img2_hood} />
    <img src={img3_marine} />
    <img src={img3_tyranid} />
  </div>
{/if}


<style>
  .modal {
    position: absolute;
    padding: 16px;
    display: flex;
    flex-wrap: wrap;
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
  }
  img {
    height: min(10em, 7vw);
  }
</style>
