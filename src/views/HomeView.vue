<template>
    <div class="w-full flex flex-col  xl:flex-row ">
        <SideBar />
        <Content/>

    </div>
</template>

<script>
import Content from "./Content.vue";
import SideBar from "./SideBar.vue";
export default {
  components: { SideBar, Content },
};
</script>


<style>

</style>