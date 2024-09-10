<!-- FormComponent.vue -->
<template>
    <div class="flex bg-gray-200 p-8 w-full rounded-3xl mt-[8rem]">
      <div class="flex flex-col md:flex-row w-full">
        <form @submit.prevent="handleSubmit" class="bg-white p-5 rounded-3xl">
          <p class="text-2xl font-bold">لطفا اطلاعات کاربر را وارد نمایید</p>
          <div class="flex flex-col">
            <div class="flex-col md:flex-row flex my-2">
              <InputField label="کد پرسنلی" v-model="personelycode" />
              <InputField label="نوع کاربری" v-model="type" />
            </div>
            <div class="flex-col md:flex-row flex my-2">
              <InputField label="نام و نام خانوادگی" v-model="name" />
              <InputField label="سمت" v-model="position" />
            </div>
            <div class="flex-col md:flex-row flex my-2">
              <InputField label="نام کابری" v-model="usernaame" />
              <InputField label="رمز عبور" v-model="password" />
            </div>
            <div class="flex-col md:flex-row flex my-2">
              <InputField label="شروع فعالیت" type="date" v-model="startdate" />
              <InputField label="پایان فعالیت" type="date" v-model="enddate" />
            </div>
            <div class="flex-col md:flex-row flex my-2">
              <InputField label="تلفن همراه" type="number" v-model="phonenumber" />
              <InputField label="تلفن ثابت" type="number" v-model="phone" />
            </div>
            <div class="flex-col md:flex-row flex my-2">
              <InputField label="کد خط داخلی" v-model="innercode" />
              <InputField label="محل فعالیت" v-model="place" />
            </div>
            <div class="flex-col md:flex-row flex my-2">
              <InputField label="یادداشت" v-model="note" />
            </div>
            <div class="text-center flex flex-col md:flex-row w-full justify-center">
              <button
                data-ripple-light="true"
                type="button"
                class="bg-violet-300 focus:bg-violet-200 active:bg-violet-200 hover:bg-violet-200 text-green-950 p-1 md:w-1/2 my-2 rounded-lg mx-1 shadow-md border border-transparent text-sm transition-all active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hover:shadow-lg focus:shadow-none"
              >
                بازگشت
              </button>
              <button class="bg-violet-300 text-green-950 p-1 md:w-1/2 my-2 rounded-lg mx-1 shadow-md">
                ذخیره و ماندن
              </button>
            </div>
            <div class="text-center flex flex-col md:flex-row w-full justify-center">
              <button class="bg-red-500 text-green-950 p-1 md:w-1/2 my-2 rounded-lg mx-1 shadow-md">
                پاک کردن
              </button>
              <button
                @click="handleSubmit"
                class="bg-green-500 text-green-950 p-1 md:w-1/2 my-2 rounded-lg mx-1 shadow-md"
              >
                تایید کردن
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import InputField from './InputField.vue'; // ایمپورت کردن کامپوننت
  
  export default {
    components: {
      InputField,
    },
    data() {
      return {
        personelycode: "",
        type: "",
        name: "",
        position: "",
        usernaame: "",
        password: "",
        startdate: "",
        enddate: "",
        phonenumber: "",
        phone: "",
        innercode: "",
        place: "",
        note: "",
      };
    },
    methods: {
      handleSubmit() {
        let information = {
          personelycode: this.personelycode,
          type: this.type,
          name: this.name,
          position: this.position,
          usernaame: this.usernaame,
          password: this.password,
          startdate: this.startdate,
          enddate: this.enddate,
          phonenumber: this.phonenumber,
          phone: this.phone,
          innercode: this.innercode,
          place: this.place,
          note: this.note,
        };
        console.log(information);
        this.clearForm();
      },
      clearForm() {
        this.personelycode = "";
        this.type = "";
        this.name = "";
        this.position = "";
        this.usernaame = "";
        this.password = "";
        this.startdate = "";
        this.enddate = "";
        this.phonenumber = "";
        this.phone = "";
        this.innercode = "";
        this.place = "";
        this.note = "";
      },
    },
  };
  </script>
  