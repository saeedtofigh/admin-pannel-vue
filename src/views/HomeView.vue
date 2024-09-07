<template>
    <div class="main-home">
        <SideBar />

    </div>
</template>

<script>
import SideBar from "./SideBar.vue";
export default {
  components: { SideBar },
};
</script>


<style>
.main-home{
    margin:3rem ;
    display: flex;
}
</style>