<template>
       <div class="dontsmoke" > 
              <h2 class="dontsmoke_header">Узнай сколько ты сэкономил денег</h2> 
              <MySelect v-model="homeState.nameOfDrug" :options="selectState.drugsArray"></MySelect>
              <MyInput class="dontsmoke_input" v-model="homeState.usageValue" placeholder="Сколько ты употреблял за день (пачек/грамм)?"></MyInput>
              <MyInput class="dontsmoke_input" v-model="homeState.costValue" placeholder="Укажи стоимость за единцу продукта (пачки/грамма) в рублях"></MyInput>
              <MyInput class="dontsmoke_input" v-model="homeState.daysValue" placeholder="Сколько дней ты уже не употребляшь?"></MyInput>
      
              <div  v-if="homeState.usageValue && homeState.costValue && homeState.daysValue"> {{ homeState.endCost.value }} </div>
              <div class="dontsmoke_final-value"></div>
              <div class="dontsmoke_fact" v-if="homeState.usageValue && homeState.costValue && homeState.daysValue && homeState.nameOfDrug"> Интересный факт: <span class="dontsmoke_fact-random">{{ homeState.randomFact }}</span></div>          
       </div>
</template>

<script setup>
import { selectStore } from '@/components/store/select_store.js'
import { homeStore } from '@/components/store/home_store.js'
import MyInput from '../UI/MyInput.vue';
import MySelect from '../UI/MySelect.vue';

const selectState = selectStore()
const homeState = homeStore()
</script>

<style lang="scss" >

.dontsmoke{
       display: flex;
       flex-direction: column;
       justify-content: space-between;
       align-items: center;
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
       &_fact{
              
              border: 1px solid $btn-text;
              padding: 1rem;
              border-radius: 10px;
              &-random{
                     font-weight: 300;
              }
       }
       &_input{
              width: 70%;
       }
}
</style>