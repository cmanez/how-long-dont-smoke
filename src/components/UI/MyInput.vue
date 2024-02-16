<template>
    <input  :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
</template>

<script>
export default {
    name: 'MyInput'
}
</script>

<script setup>
  const props = defineProps({
        modelValue: {
            type: [String]
        }
    })
</script>


<style lang="scss" scoped>
 input{
    appearance: none;
  /* safari */
  -webkit-appearance: none;
  /* other styles for aesthetics */
  width: 50%;
  font-size: 1.15rem;
  padding: 0.675em 6em 0.675em 1em;
  background-color: $glass-gray;
  border-radius: 0.25rem;
  
  border:none;
  cursor: pointer;
  
 }
 input::placeholder{
    color: $btn-text;
    width: 100%;
 }
</style>