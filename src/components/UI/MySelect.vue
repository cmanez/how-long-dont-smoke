<template>
    <select :name="name" >
        <option disabled selected value="">Выберите из списка</option>
        <option :value="option.value" v-for="option in options">{{ option.name }}</option>
    </select>
</template>

<script setup>
// import { selectStore } from '@/components/store/select_store.js'
// const selectState = selectStore()
const props = defineProps({
    name: {
        type: String
    },
    options:{
        type: Array
    }
})

// selectState.selectArrayOne(props.name)
</script>


<script>
    export default {
        name: 'MySelect'
    }
</script>

<style lang="scss" scoped>
select {
  /* appearance: none; */
  /* safari */
  /* -webkit-appearance: none; */
  /* other styles for aesthetics */
  width: 40%;
  font-size: 1.15rem;
  padding: 0.675em 6em 0.675em 1em;
  background-color: $glass-gray;
  border: 1px solid #caced1;
  border-radius: 0.25rem;
  color:$btn-text;
  border:none;
  cursor: pointer;
  option{
    background-color: $dark-gray;
    color: $btn-text;
  }
}
</style>