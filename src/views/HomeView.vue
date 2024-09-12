<template>
   <Navbar @toggle-sidebar="toggleSidebar" />
  <div class="w-full flex flex-col xl:flex-row h-screen">
    <transition
      name="slide-sidebar"
      mode="out-in"
    >
      <SideBar v-if="showSidebar" />
    </transition>
    <!-- <Content/> -->
    <div class="flex bg-gray-200 p-8 w-full xl:w-4/5 h-auto rounded-3xl mt-[8rem]">
      <div class="flex flex-col md:flex-row w-full justify-center ">
        <FormComponent />
        <OptionsForm />
      </div>
    </div>
  </div>
</template>

<script>
// import Content from "./Content.vue";
import Navbar from "../components/Navbar.vue";

import SideBar from "./SideBar.vue";
import FormComponent from "./FormComponent.vue";
import OptionsForm from "./OptionsForm.vue";
export default {
  components: { SideBar,Navbar, FormComponent, OptionsForm },
  data(){
    return{
      showSidebar: true,
    }
  },
  methods:{
    toggleSidebar(){
      this.showSidebar=!this.showSidebar
    }
  }
};
</script>

<style> 

.slide-sidebar-enter-active,
.slide-sidebar-leave-active {
  transition: transform 1s ease;
}

.slide-sidebar-enter {
  transform: translateX(100%);
}

.slide-sidebar-leave-to {
  transform: translateX(100%);
}</style>
