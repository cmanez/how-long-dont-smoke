import { ref } from 'vue'
import { defineStore } from 'pinia'

export const selectStore = defineStore('select', () => {
    const drugsArray = [{name: 'Сигареты'}, {name: 'Марихуанна'}]
    const modelValue = ref('')
    
    return {
        drugsArray,
        modelValue
    }
})