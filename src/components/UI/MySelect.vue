<template>
    <select :value="modelValue" @change="action">
        <option disabled selected value="">Выберите из списка</option>
        <option :value="option.value" v-for="option in options">{{ option.name }}</option>
    </select>
</template>

<script setup>
import { defineEmits } from 'vue'
const props = defineProps({
    name: {
        type: String
    },
    options:{
        type: Array
    },
    modelValue:{
        type: String
    }
})
const emit = defineEmits(['action'])
  const action = (event) => emit('update:modelValue', event.target.value);

</script>

<script>
    export default {
        name: 'MySelect'
    }
</script>

<style lang="scss" scoped>
select {
  font-size: 1.15rem;
  padding: 0.675rem 1rem 0.675rem 1rem;
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