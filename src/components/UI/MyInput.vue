<template>
    <input  :value="modelValue" @input="action">
</template>

<script setup>
  const props = defineProps({
        modelValue: {
            type: [String]
        }
    })
    const emit = defineEmits(['action'])
    const action = (event) => {emit('update:modelValue', event.target.value)}
</script>

<style lang="scss" scoped>
 input{
    appearance: none;
  -webkit-appearance: none;
  padding: 0.675rem 0.675rem;
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