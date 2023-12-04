<script>
  export let x, y
console.log(x, y)
</script>

<div>
  <p>Modal content is here</p>
</div>


<style>
  div {
    position: absolute;
    top: var(--y)px;
    left: var(--x)px;
    border: 1px solid black;
    padding: 16px;
    background-color: skyblue;
  }
</style>
