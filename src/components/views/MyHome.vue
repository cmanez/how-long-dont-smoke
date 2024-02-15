<template>
       <div class="dontsmoke">
              <h2 class="dontsmoke_header">Узнай сколько ты сэкономил денег</h2> 
              <MySelect name="drugs" :options="selectState.drugsArray"></MySelect>
              <MyInput  class="hi" placeholder="Сколько ты употреблял за день (пачек/грамм)?"></MyInput>
              <MyInput class="hi" placeholder="Укажи стоимость за единцу продукта (пачки/грамма)"></MyInput>
              <MyInput class="hi" placeholder="Сколько дней ты уже не употребляшь?"></MyInput>
              <div class="dontsmoke_final-value">{{ WellDone }} </div>
              <div class="dontsmoke_fact"> Интересный факт:  </div>
       </div>
</template>

<script setup>
import { selectStore } from '@/components/store/select_store.js'
import MyInput from '../UI/MyInput.vue';
const selectState = selectStore()
const counter = 0;
const WellDone = `Ты сэкономил  ${ counter } рублей, так держать, не останавливайся на этом, бро! <3`;
</script>

<style lang="scss" scoped>

.dontsmoke{
       display: flex;
       flex-direction: column;
       justify-content: space-between;
       height: 100%;
       width: 80%;
       background: $glass-gray;
       box-shadow: 0 8px 32px 0 $footer-gray;
       backdrop-filter: blur( 9.5px );
       border-radius: 10px;
       border: 1px solid $glass-gray;
       padding: 3rem;
       &_header{
              text-align: center;
              font-weight: 300;
       }
    

}
</style>