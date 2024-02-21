<template>
    <div class="wrapper">
        <MyNav></MyNav>
            <div class="content-slot" >
                <slot></slot>
            </div>
        <MyFooter></MyFooter>
    </div>
</template>

<script setup>
import MyNav from '@/components/MyNav.vue';
import MyFooter from '@/components/MyFooter.vue';

</script>

<style lang="scss" scoped>
.wrapper{
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 5% 85% 10%;
    justify-content: center;
    align-content: center;
    width: 100%;
    height: 100%;
.content-slot{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 10rem 2rem 10rem;
}

}
@media (max-width: 767px){
    .wrapper{
        .content-slot{
        padding: 2rem 1rem 2rem 1rem;
    }
    }
    
}
</style>