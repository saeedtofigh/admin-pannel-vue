<template>
  <nav class="bg-white flex justify-between m-3 h-20 rounded-3xl w-full fixed">
    <div class="flex text-center justify-center my-auto mr-8">
      <button  @click="$emit('toggle-sidebar')" class="xl:hidden">
        <span class="material-icons my-auto cursor-pointer hover:text-gray-500">menu</span>
      </button>
      <h1 class="text-gray-700 m-7">سامانه جامع و یکپارچه فام</h1>
    </div>
    <p class="text-black m-7">پشتیبانی : ۰۲۱-۶۶۰۹۱۸۳۰</p>
  </nav>
</template>

<script>
export default {
  data(){
    return{
      show:true
    }
  },
  methods:{
    ShowSidebar(){
      console.log(this.show!==this.show)
    }
  }
};
</script>

<style></style>
