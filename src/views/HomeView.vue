<template>
  <div class="w-full flex flex-col xl:flex-row">
    <SideBar />
    <!-- <Content/> -->
    <div class="flex bg-gray-200 p-8  w-full lg:w-4/5  rounded-3xl mt-[8rem]">
      <div class="flex flex-col md:flex-row w-full justify-center">
        <FormComponent />
        <OptionsForm />
      </div>
    </div>
  </div>
</template>

<script>
// import Content from "./Content.vue";
import SideBar from "./SideBar.vue";
import FormComponent from "./FormComponent.vue";
import OptionsForm from "./OptionsForm.vue";
export default {
  components: { SideBar, FormComponent, OptionsForm },
};
</script>

<style></style>
