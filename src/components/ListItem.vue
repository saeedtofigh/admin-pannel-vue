<template>
  <ul class="list-item my-4">
    <li
      class="flex text-center justify-center py-4 px-2"
      :class="{ active: isActive }" 
      @click="setActiveItem"
    >
      <span class="ml-auto flex">
        <img class="w-[3rem] mx-4" :src="item.icon" />
        <p class="my-auto">{{ item.title }}</p>
      </span>
    </li>
  </ul>
</template>

<script>
export default {
   data(){
    return{
      active:true
    }
   },
  props: {
    item: {
      type: Object,
      required: true,
    },
    isActive: {
      type: Boolean, // وضعیت فعال بودن این آیتم
      required: true,
    },
  },
  methods: {
    setActiveItem() {
      this.$emit("setActive", this.item.id); // ارسال id آیتم به والد برای فعال کردن آن
    },
  },
};
</script>

<style>
.active {
  background-color: rgb(47, 47, 255);
  color: white;
}
</style>
