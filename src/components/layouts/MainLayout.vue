<template>
    <div class="wrapper">
        <div class="nav"> 
            <MyButton>Хуй</MyButton> 
        </div>
    </div>
   

</template>

<script setup>
import MyButton from '../UI/MyButton.vue';


</script>

<style lang="scss" scoped>
.wrapper{
    display: flex;
    width: 100%;
    justify-content: center;
    .nav{
    display: flex;
    width: 50%;
    height: 3rem;
    background-color: $light-pink;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    }
}
  
</style>