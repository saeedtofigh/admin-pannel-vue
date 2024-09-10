<template>
    <div class="w-full flex flex-col  xl:flex-row ">
        <SideBar />
        <!-- <Content/> -->
         <FormComponent/>

    </div>
</template>

<script>
// import Content from "./Content.vue";
import SideBar from "./SideBar.vue";
import FormComponent from "./FormComponent.vue";
export default {
  components: { SideBar,FormComponent },
};
</script>


<style>

</style>