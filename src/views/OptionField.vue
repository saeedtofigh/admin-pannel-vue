<template>
  <div class="flex-col flex mx-2 w-full my-2">
    <select
      v-model="selected"
      class="border-2 border-primary p-1 rounded-lg w-full text-primary"
    >
      <option v-for="option in options" :key="option" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      Required: true,
    },
  },
  data() {
    return {
      selected: this.options[0],
    };
  },
};
</script>

<style></style>
