<template>
       <div class="dontsmoke">
              <h2 class="dontsmoke_header" @click="console.log(isNaN(homeState.usageValue))">Узнай сколько ты сэкономил денег</h2> 
              <MySelect name="drugs" :options="selectState.drugsArray"></MySelect>
              <MyInput v-model="homeState.usageValue" placeholder="Сколько ты употреблял за день (пачек/грамм)?"></MyInput>
              <MyInput v-model="homeState.costValue" placeholder="Укажи стоимость за единцу продукта (пачки/грамма) в рублях"></MyInput>
              <MyInput v-model="homeState.daysValue" placeholder="Сколько дней ты уже не употребляшь?"></MyInput>
              
              <div v-if="homeState.usageValue && homeState.costValue && homeState.daysValue"> {{ homeState.endCost.value }} </div>
              <div class="dontsmoke_final-value" > </div>
              <div class="dontsmoke_fact"> Интересный факт: </div>
       </div>
</template>

<script setup>
import { selectStore } from '@/components/store/select_store.js'
import { homeStore } from '@/components/store/home_store.js'
import MyInput from '../UI/MyInput.vue';

const selectState = selectStore()
const homeState = homeStore()


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