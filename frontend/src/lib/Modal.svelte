<script>
  import { slide, blur } from 'svelte/transition'
  import { onMount } from 'svelte';

  import img1_marine from '/src/images/modal/img1_marine.png'
  import img1_tyranid from '/src/images/modal/img1_tyranid.png'
  import img2_helmet from '/src/images/modal/img2_helmet.png'
  import img2_hood from '/src/images/modal/img2_hood.png'
  import img3_marine from '/src/images/modal/img3_marine.png'
  import img3_tyranid from '/src/images/modal/img3_tyranid.png'

  const gameImages = [img1_marine, img1_tyranid, img2_helmet, img2_hood, img3_marine, img3_tyranid]
  const imageLoaded = [false, false, false, false, false, false]

  onMount(() => {
    gameImages.forEach((url, index) => {
      const image = new Image()
      image.src = url
      image.onload = () => {
        imageLoaded[index] = true
      }
    })
  })

  let modalVisible = false
  let mouseX, mouseY, absoluteX, absoluteY, imgX, imgY = 0

  export function toggleModal(e) {
    if (modalVisible) {
      modalVisible = false
    } else {
      mouseX = Math.round(e.clientX + window.pageXOffset)
      mouseY = Math.round(e.clientY + window.pageYOffset)
      absoluteX = e.clientX
      absoluteY = e.clientY + window.scrollY
      imgX = (e.offsetX / e.target.clientWidth) * 100
      imgY = (e.offsetY / e.target.clientHeight) * 100
      modalVisible = true
    }
  }

  export let check

  function checkSuccess(number) {
    check(number, imgX, imgY, absoluteX, absoluteY)
    modalVisible = false
  }

</script>

{#if modalVisible && imageLoaded.every(Boolean)}
  <div id="cross" transition:blur style:top={mouseY + "px"} style:left={mouseX + "px"}/>
  <div id='modal' on:click|stopPropagation transition:slide|local
        style:left={mouseX < (window.innerWidth / 2) ? mouseX + "px" : null}
        style:right={mouseX > (window.innerWidth / 2) ? window.innerWidth - mouseX + "px" : null}
        style:top={mouseY < (window.innerHeight / 2) ? mouseY + "px" : null}
        style:bottom={mouseY > (window.innerHeight / 2) ? window.innerHeight - mouseY + "px" : null}
  >
    <img src={img1_marine} alt="marine 1" transition:blur on:click={() => {checkSuccess(0)}} />
    <img src={img1_tyranid} alt="tyranid 1" transition:blur on:click={() => {checkSuccess(1)}}/>
    <img src={img2_helmet} alt="marine 2" transition:blur on:click={() => {checkSuccess(2)}}/>
    <img src={img2_hood} alt="marine 3" transition:blur on:click={() => {checkSuccess(3)}}/>
    <img src={img3_marine} alt="marine 4" transition:blur on:click={() => {checkSuccess(4)}}/>
    <img src={img3_tyranid} alt="tyranid 2" transition:blur on:click={() => {checkSuccess(5)}}/>
  </div>
{/if}


<style>
  #modal {
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
  #cross {
    position: absolute;
    translate: -50% -50%;
  }
  #cross:after {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    content: "\274c";
    text-align: center;
  }
</style>
