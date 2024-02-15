<template>
    <div class="nav"> 
            <MyButton>Getting started</MyButton>
            <MyButton>About us</MyButton> 
        </div>
</template>

<script setup>

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
    }
</style>