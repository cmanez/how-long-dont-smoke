<template>
       <div class="dontsmoke" > 
              <h2 class="dontsmoke_header">Узнай сколько ты сэкономил денег</h2> 
              <MySelect v-model="homeState.nameOfDrug" :options="selectState.drugsArray"></MySelect>
              <MyInput class="dontsmoke_input" v-model="homeState.usageValue" placeholder="Употребление в день (пачек/грамм)"></MyInput>
              <MyInput class="dontsmoke_input" v-model="homeState.costValue" placeholder="Стоимость за единцу продукта"></MyInput>
              <MyInput class="dontsmoke_input" v-model="homeState.daysValue" placeholder="Дней без употребления"></MyInput>
              <Transition name="fade" mode="out-in"> 
                     <div :key="Date.now()" class="fact-wrapper">
                            <div  v-show="homeState.usageValue && homeState.costValue && homeState.daysValue"> {{ homeState.endCost.value }} </div>
                            <div class="dontsmoke_fact" v-show="homeState.usageValue && homeState.costValue && homeState.daysValue && homeState.nameOfDrug"> Интересный факт: <span class="dontsmoke_fact-random">{{ homeState.randomFact }}</span></div> 
                     </div>
              </Transition>         
       </div>
</template>

<script setup>
import { selectStore } from '@/components/store/select_store.js'
import { homeStore } from '@/components/store/home_store.js'
import MyInput from '@/components/UI/MyInput.vue';
import MySelect from '@/components/UI/MySelect.vue';

const selectState = selectStore()
const homeState = homeStore()
</script>

<style lang="scss" >

.dontsmoke{
       display: flex;
       flex-direction: column;
       justify-content: space-between;
       align-items: center;
       height: 45rem;
       width: 70rem;
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
              margin-top: 1rem;
              &-random{
                     font-weight: 300;
              }
       }
       &_input{
              width: 70%;
       }
       .fact-wrapper{
              display: flex;
              flex-direction: column;
       }
       .fade-enter-active
              {
              transition: opacity 1s ease;
              }

       .fade-enter-from,
       .fade-leave-to {
              opacity: 0;
              }
}
@media (max-width: 767px){
        .dontsmoke{
              height: 100%;
              width: 100%;
              padding: 1rem;
              &_input{
              font-size: 0.7rem;
              }
              .fact-wrapper{
                     .dontsmoke_fact{
                     font-size: 12px;
              }
              }
        }
        
    }
</style>