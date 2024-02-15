
import { defineStore } from 'pinia'

export const selectStore = defineStore('select', () => {
    const drugsArray = [{name: 'ciggarets'}, {name: 'cocaine'}]
    
    
    return {
        drugsArray,
          
    }
})