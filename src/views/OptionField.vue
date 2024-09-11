<template>
  <div class="flex-col flex mx-2 w-full">
    <select
      v-model="role"
      class="border-2 border-gray-400 p-1 rounded-lg w-full flex-col md:flex-row flex my-2"
    >
      <option value="developer">web developer</option>
      <option value="designer">web designer</option>
    </select>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
