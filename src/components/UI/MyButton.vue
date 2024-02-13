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
  background-color: #c177b2;
  background-image: linear-gradient(315deg, #c177b2 0%, #e2e1e1 74%);
  border: none;
  padding: 0.3rem;
  border-radius: 5px;
  &:hover{
    scale: 1.05;
  }

}
</style>