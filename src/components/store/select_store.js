import { defineStore } from 'pinia'

export const selectStore = defineStore('select', () => {
    const drugsArray = [{name: 'Сигареты'}, {name: 'Марихуанна'}]
    return {
        drugsArray
    }
})