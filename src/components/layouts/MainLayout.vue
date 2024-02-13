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
            <ul class="footer_links">
                <div class="footer_links_link-item">
                    <li><icon class="icon" icon="mdi:github"/> <a href="https://github.com/cmanez">GitHub</a></li> 
                    <li><icon class="icon" icon="ic:baseline-telegram"/><a href="https://t.me/cmanezz">Telegram</a></li>
                </div>
                <div class="footer_links_vertborder"></div>
                <div class="footer_links_link-item">
                    <li><icon class="icon" icon="ri:vk-fill"/><a href="https://vk.com/sevrin_a">VK</a></li> 
                    <li><icon class="icon" icon="mdi:instagram"/><a href="">Instagram</a></li>
                </div>
                
            </ul>
        </div>
    </div>
    
   
</template>

<script setup>
import MyHome from '../MyHome.vue';
import { Icon } from '@iconify/vue'
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
    .footer{
    display: flex;
    justify-content: flex-start;
    background-color: $footer-gray;
    padding-left: 7rem;
    padding-right: 7rem;
    &_links{
        display: flex;
        list-style-type: none;
        
        &_link-item{
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            padding-right: 1rem;
        }
        li{
            .icon{
                transform: translate(-11%, 11%);
            }
        }
        
        a{
            text-decoration: none;
            position: relative;
            color: $light-orange;
            font-variant: small-caps;
            font-weight: bold;
            margin-left: 5px;
            cursor: pointer;
           
        }
        &_vertborder {
            display: flex;
            flex-wrap: wrap;
            align-content: center;
            border-right: 1px solid $dark-gray;
            max-height: 100%;
            height: auto;
            margin: 1rem 1rem 1rem 0;
            width: 1px;
            margin-right: 1rem;
            
        }
    }
    
}
.content-slot{
    display: flex;
    justify-content: center;
    padding: 2rem 10rem 2rem 10rem;
}
}

  
</style>