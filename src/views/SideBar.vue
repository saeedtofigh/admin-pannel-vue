<template>
  <div
    name="slide-sidebar"
    class="w-[18rem] m-4 rounded-t-2xl absolute lg:relative bg-gray-200 h-screen overflow-auto shadow-md mt-[7rem] lg:mt-[8rem]"
  >
    <div class="profile text-center mt-6">
      <span
        class="material-icons rounded-full bg-violet-300 text-white text-9xl"
      >
        person
      </span>
      <p>سارا غندوی</p>
      
    </div>
    <hr class="w-64 h-1 my-8 bg-gray-300 border rounded">

    <ListItem
      v-for="item in listItem"
      :key="item.id"
      :item="item"
      :isActive="activeId === item.id"
      @setActive="setActiveId"
    />
  </div>
</template>

<script>
import ListItem from "@/components/ListItem.vue";

export default {
  components: { ListItem },
  data() {
    return {
      listItem: [
        { id: 1, title: "تعاریف کاربر", icon: "/src/assets/images/1.png" },
        { id: 2, title: "مدیریت فرآیند ها", icon: "/src/assets/images/2.png" },
        { id: 3, title: "مدیریت ذی نفعان", icon: "/src/assets/images/3.png" },
        { id: 4, title: "مدیریت ریسک", icon: "/src/assets/images/4.png" },
        { id: 5, title: "مدیریت بهره وری", icon: "/src/assets/images/5.png" },
        { id: 6, title: "مسیله شناسی", icon: "/src/assets/images/6.png" },
        { id: 7, title: "مدیریت تغییر", icon: "/src/assets/images/7.png" },
        { id: 8, title: "خلاقیت و نوآوری", icon: "/src/assets/images/8.png" },
        { id: 9, title: "مدیریت دانش", icon: "/src/assets/images/9.png" },
        { id: 10, title: "مدیریت فناوری", icon: "/src/assets/images/10.png" },
        { id: 11, title: "بهینه کاوی", icon: "/src/assets/images/11.png" },
        { id: 12, title: "ممیز داخلی", icon: "/src/assets/images/12.png" },
        { id: 13, title: "مدیریت عملکرد", icon: "/src/assets/images/13.png" },
      ],
      activeId: null, // آیتم فعال
    };
  },
  mounted() {
    // تنظیم آیتم اول به عنوان پیش‌فرض
    this.activeId = this.listItem[0].id;
  },
  methods: {
    setActiveId(id) {
      this.activeId = id; // تغییر آیتم فعال
    },
  },
};
</script>

<style></style>
