<template>
    <div class="dontsmoke">
        <span>Привет. <br> Этот небольшой сервис был создан мной в период борьбы мной с никотиновой зависимостью</span>
        <br>
        Я начал курить в уже далеком  2016 году. Произошло это по очень глупой причине, собственно как и практически любая такая зависимость. Сейчас 2024 год, и за эти 8 лет мое здоровье спортсмена превратилось в здоровье пожилого человека. Головные боли, низкая выносливость, перманентный кашель и неприятный запах от всего, с чем я долго контактирую. Я перечислил лишь малую часть того, от чего мне приходилось страдать в этот период. В более юном возрасте осознание того, что я убивал сам себя, не приходило. Быстрых последствий не наблюдалось, они появлялись плавно и имели накопительный эффект. В прочем, рассказывать много о вреде курения смысла нет, ведь все и так это знают, только относятся к этому слишком просто. <br>
        А теперь, если ты тоже бросаешь курить, нажимай кнопку в навигационном меню, там ты сможешь посчитать количество сэкономленных денег и узнать несколько интересных фактов <Icon  icon="tabler:mood-smile-filled" class="home_icon"></Icon>
    </div>
</template>

<script setup>
import { Icon } from '@iconify/vue'
</script>

<style lang="scss" scoped>
    .dontsmoke{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        height: auto;
        
        .home_icon{
            height: 2rem;
            width: 2rem;
        }
    }
    @media (max-width: 767px){
    .dontsmoke{
        height: auto;
        width: auto;
font-size: 12px;
font-weight: 100;
    }
    
}
    
</style>
