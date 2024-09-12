<template>
  <HomeView/>
  <!-- <Navbar /> -->
  <RouterView />
</template>

<script>
import HomeView from "./views/HomeView.vue";
import { RouterLink, RouterView } from "vue-router";
// import Navbar from "./components/Navbar.vue";
export default {
  components: { HomeView},
};
</script>

<style>

</style>
