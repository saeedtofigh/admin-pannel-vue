<template>
  <div class="bg-white mx-3 p-5 rounded-3xl my-2 w-full lg:w-1/2">
    <p class="text-2xl font-bold">تعیین سطوح دسترسی</p>
    <div class="flex flex-col mt-6">
      <div class="flex-col md:flex-row flex my-2">
        <OptionField :options="['تعاریف پایه', 'لورم ایپسوم', 'لورم ایپسوم']" />
        <OptionField
          :options="['مدیریت فرآیند ها', 'لورم ایپسوم', 'لورم ایپسوم']"
        />
      </div>
      <div class="flex-col md:flex-row flex my-2">
        <OptionField
          :options="['مدیریت ذی نفعان', 'لورم ایپسوم', 'لورم ایپسوم']"
        />
        <OptionField :options="['مدیریت ریسک', 'لورم ایپسوم', 'لورم ایپسوم']" />
      </div>
      <div class="flex-col md:flex-row flex my-2">
        <OptionField
          :options="['مدیریت بهره وری', 'لورم ایپسوم', 'لورم ایپسوم']"
        />
        <OptionField :options="['مسیله شناسی', 'لورم ایپسوم', 'لورم ایپسوم']" />
      </div>
      <div class="flex-col md:flex-row flex my-2">
        <OptionField
          :options="['مدیریت تغییر', 'لورم ایپسوم', 'لورم ایپسوم']"
        />
        <OptionField :options="['خلاقیت و نوآوری', 'لورم ایپسوم', 'لورم ایپسوم']" />
      </div>
      <div class="flex-col md:flex-row flex my-2">
        <OptionField
          :options="['مدیریت دانش', 'لورم ایپسوم', 'لورم ایپسوم']"
        />
        <OptionField :options="['مدیریت فناوری', 'لورم ایپسوم', 'لورم ایپسوم']" />
      </div>
      <div class="flex-col md:flex-row flex my-2">
        <OptionField
          :options="['بهینه کاوی', 'لورم ایپسوم', 'لورم ایپسوم']"
        />
        <OptionField :options="['ممیزی داخلی', 'لورم ایپسوم', 'لورم ایپسوم']" />
      </div>
      <div class="flex-col md:flex-row flex my-2 ">
        <OptionField
          :options="['مدیریت عملکرد', 'لورم ایپسوم', 'لورم ایپسوم']"
        />
      </div>
    </div>
  </div>
</template>

<script>
import OptionField from "./OptionField.vue";
export default {
  components: { OptionField },
};
</script>
