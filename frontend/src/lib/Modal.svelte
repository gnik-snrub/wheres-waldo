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
    border: 1px solid black;
    padding: 16px;
    background-color: skyblue;
  }
</style>
