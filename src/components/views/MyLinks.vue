<template>
    <div class="dontsmoke">
        <a href="https://github.com/cmanez"><icon class="links-icon" icon="mdi:github"/></a>
        <a href="https://t.me/cmanezz"><icon class="links-icon" icon="ic:baseline-telegram"/></a>
        <a href="https://vk.com/sevrin_a"><icon class="links-icon" icon="ri:vk-fill"/></a>
        <a href="https://www.instagram.com/lean.044"><icon class="links-icon" icon="mdi:instagram"/></a>
    </div>
</template>

<script setup>
 import { Icon } from '@iconify/vue'
</script>

<style lang="scss" scoped>
.dontsmoke{
    flex-direction: row;
    height: 50%;
    width: auto;
}

.links-icon{
    width: 7rem;
    height: 7rem;
    color: $btn-text;
}
@media (max-width: 767px){
        .dontsmoke{
            flex-direction: column;
            height: 55%;
        }
        .links-icon{
            
            width: 3rem;
            height: 3rem;//переделать
        }
    }
</style>