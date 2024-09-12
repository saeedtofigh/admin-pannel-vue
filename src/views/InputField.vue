<!-- InputField.vue -->
<template>
    <div class="flex-col flex mx-auto md:mx-1 w-full">
      <label class="m-1">{{ label }}</label>
      <input
        :type="type"
        v-model="inputValue"
        class="border-2 border-gray-400 p-1 rounded-lg w-full"
        @input="$emit('update:modelValue', inputValue)"
      />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      label: String,
      type: {
        type: String,
        default: "text",
      },
      modelValue: [String, Number],
    },
    data() {
      return {
        inputValue: this.modelValue,
      };
    },
    watch: {
      modelValue(val) {
        this.inputValue = val;
      },
    },
  };
  </script>
  
  <style>
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;

}
*:focus {
  outline: none;
}
</style>
