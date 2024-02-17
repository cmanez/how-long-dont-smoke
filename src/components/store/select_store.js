import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const selectStore = defineStore('select', () => {
    const drugsArray = [{name: 'Сигареты'}, {name: 'Марихуанна'}]
    // const nameOfDrug = ref('')

    return {
        drugsArray,
        // nameOfDrug,
    }
})