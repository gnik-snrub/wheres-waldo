<script>
  import { slide, blur } from 'svelte/transition'

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
      imgX = (e.offsetX / e.target.clientWidth) * 100
      imgY = (e.offsetY / e.target.clientHeight) * 100
      modalVisible = true
    }
  }

  const fakeTestAPI = [
    {x1: 23, x2: 29, y1: 25, y2: 35},
    {x1: 76, x2: 79, y1: 63, y2: 74},
    {x1: 19, x2: 36, y1: 38, y2: 56},
    {x1: 64, x2: 76, y1: 32, y2: 48},
    {x1: 36, x2: 41, y1: 23, y2: 38},
    {x1: 76, x2: 88, y1: 64, y2: 78}
  ]

  function checkSuccess(number) {
    const correctCoords = fakeTestAPI[number]
    if (imgX >= correctCoords.x1 && imgX <= correctCoords.x2 &&
        imgY >= correctCoords.y1 && imgY <= correctCoords.y2) {
      console.log('yay')
    } else { console.log('lmao, not even close dood')}
  }
</script>

{#if modalVisible}
  <div id="cross" transition:blur style:top={mouseY + "px"} style:left={mouseX + "px"}/>
  <div id='modal' on:click|stopPropagation transition:slide|local
        style:left={mouseX < (window.innerWidth / 2) ? mouseX + "px" : null}
        style:right={mouseX > (window.innerWidth / 2) ? window.innerWidth - mouseX + "px" : null}
        style:top={mouseY < (window.innerHeight / 2) ? mouseY + "px" : null}
        style:bottom={mouseY > (window.innerHeight / 2) ? window.innerHeight - mouseY + "px" : null}
  >
    <img src={img1_marine} transition:blur on:click={() => {checkSuccess(0)}} />
    <img src={img1_tyranid} transition:blur on:click={() => {checkSuccess(1)}}/>
    <img src={img2_helmet} transition:blur on:click={() => {checkSuccess(2)}}/>
    <img src={img2_hood} transition:blur on:click={() => {checkSuccess(3)}}/>
    <img src={img3_marine} transition:blur on:click={() => {checkSuccess(4)}}/>
    <img src={img3_tyranid} transition:blur on:click={() => {checkSuccess(5)}}/>
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
