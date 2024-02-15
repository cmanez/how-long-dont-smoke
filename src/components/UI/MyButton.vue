<template>
    <button class="btn"><slot></slot></button>
</template>

<script setup>

</script>
<script>
export default {
    name: 'MyButton'
}
</script>

<style lang="scss" scoped>  
.btn{
  color:$btn-text;
  border: none;
  padding: 0.3rem;
  border-radius: 5px;
  &:hover{
    scale: 1.05;
  }
  background: rgb(80,78,79);
  background: linear-gradient(90deg, rgba(80,78,79,1) 0%, rgba(43,39,39,1) 100%);
}
</style>