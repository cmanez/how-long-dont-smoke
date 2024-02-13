<template>
    <div class="wrapper">
        <div class="nav"> 
            <MyButton>Getting started</MyButton>
            <MyButton>About us</MyButton> 
        </div>
        <div class="content-slot">
            <slot></slot>
        </div>
        
        <div class="footer">
        </div>
    </div>
    
   
</template>

<script setup>
</script>

<style lang="scss" scoped>
/* .wrapper{
    display: flex;
    width: 100%;
    height: 7%;
    flex-direction: column;
    justify-content: center;
    align-items:center;
    .nav{
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    width: 50%;
    height: 100%;
    background-color: $light-orange;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    }
}
.footer{
    display: flex;
    justify-content: center;
    height: 10%;
    width: 100%;
    background-color: $footer-gray;
} */
.wrapper{
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 5% 85% 10%;
    justify-content: center;
    align-content: center;
    width: 100%;
    height: 100%;
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
}
.footer{
    display: flex;
    justify-content: center;
    /* height: auto;
    width: auto; */
    background-color: $footer-gray;
}
.content-slot{
    display: flex;
    justify-content: center;
    padding: 2rem 10rem 2rem 10rem;
}
  
</style>