<template>
    <div class="nav"> 
            <MyButton @click="$router.push('/home')" >Start</MyButton>
            <div class="nav_btn-wrapper">
                <MyButton @click="$router.push('/')">Home</MyButton>
                <MyButton @click="$router.push('/about')">About</MyButton> 
            </div>
        </div>
</template>

<script setup>
import MyButton from '@/components/UI/MyButton.vue';
</script>

<style lang="scss" scoped>
    .nav{
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    justify-self: center;
    width: 50%;
    height: 100%;
    background-color: $light-orange;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    &_btn-wrapper{
        display: flex;
        justify-content: space-around;
        width: 20%;
        margin-right: 1rem;
        :last-child{
            margin-right: 0;
        }
    }
    }
</style>