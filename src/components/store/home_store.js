import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
export const homeStore = defineStore('home', ()=>{
    const usageValue = ref()
    const costValue = ref()
    const daysValue = ref()
    const badData = ref('Неверно введены данные')
    


    
    const endCost = computed(() => {
        return isIntegerUsage.value ? costCalc : badData  // вывод результата
     })

    const costCalc = computed(() => {
       return (`Ты сэкономил ${usageValue.value * costValue.value * daysValue.value} рублей! Не употребляя Так держать бро!`) // тут считаем если все норм
    })
    
    const isIntegerUsage = computed(() => {
        return (/^[+-]?\d+(\.\d+)?$/.test(usageValue.value) && /^[+-]?\d+(\.\d+)?$/.test(costValue.value) && /^[+-]?\d+(\.\d+)?$/.test(daysValue.value)) // проверка строки на возможность быть числом
      })
    
    return{
        usageValue,
        costValue,
        daysValue,
        endCost,
    }
})











































