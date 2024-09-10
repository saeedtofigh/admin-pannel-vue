<template>
  <div class="flex bg-gray-200 p-8 w-full rounded-3xl mt-[8rem]">
    <div class="flex flex-col md:flex-row w-full">
      <form @submit.prevent="handleSubmit" class="bg-white p-5 rounded-3xl">
        <p class="text-2xl font-bold">لطفا اطلاعات کاربر را وارد نمایید</p>
        <div class="flex flex-col">
          <div class="flex-col md:flex-row flex my-2">
            <div class="flex-col flex mx-2">
              <label class="m-1">کد پرسنلی</label>
              <input
                v-model="personelycode"
                type="text"
                class="border-2 border-gray-400 p-1 rounded-lg"
              />
            </div>
            <div class="flex-col flex mx-2">
              <label class="m-1">نوع کاربری</label>
              <input
                v-model="type"
                type="text"
                class="border-2 border-gray-400 p-1 rounded-lg"
              />
            </div>
          </div>
          <div class="flex-col md:flex-row flex my-2">
            <div class="flex-col flex mx-2">
              <label class="m-1">نام و نام خانوادگی</label>
              <input
                v-model="name"
                type="text"
                class="border-2 border-gray-400 p-1 rounded-lg"
              />
            </div>
            <div class="flex-col flex mx-2">
              <label class="m-1">سمت</label>
              <input
                v-model="position"
                type="text"
                class="border-2 border-gray-400 p-1 rounded-lg"
              />
            </div>
          </div>
          <div class="flex-col md:flex-row flex my-2">
            <div class="flex-col flex mx-2">
              <label class="m-1">نام کابری</label>
              <input
                v-model="usernaame"
                type="text"
                class="border-2 border-gray-400 p-1 rounded-lg"
              />
            </div>
            <div class="flex-col flex mx-2">
              <label class="m-1">رمز عبور</label>
              <input
                v-model="password"
                type="text"
                class="border-2 border-gray-400 p-1 rounded-lg"
              />
            </div>
          </div>
          <div class="flex-col md:flex-row flex my-2">
            <div class="flex-col flex mx-2 w-full">
              <label class="m-1">شروع فعالیت</label>
              <input
                v-model="startdate"
                type="date"
                class="border-2 border-gray-400 p-1 rounded-lg w-full"
              />
            </div>
            <div class="flex-col flex mx-2 w-full">
              <label class="m-1">پایان فعالیت</label>
              <input
                v-model="enddate"
                type="date"
                class="border-2 border-gray-400 p-1 rounded-lg w-full"
              />
            </div>
          </div>
          <div class="flex-col md:flex-row flex my-2">
            <div class="flex-col flex mx-2">
              <label class="m-1">تلفن همراه</label>
              <input
                v-model="phonenumber"
                type="number"
                class="border-2 border-gray-400 p-1 rounded-lg"
              />
            </div>
            <div class="flex-col flex mx-2">
              <label class="m-1">تلفن ثابت</label>
              <input
                v-model="phone"
                type="number"
                class="border-2 border-gray-400 p-1 rounded-lg"
              />
            </div>
          </div>
          <div class="flex-col md:flex-row flex my-2">
            <div class="flex-col flex mx-2">
              <label class="m-1">کد خط داخلی</label>
              <input
                v-model="innercode"
                type="text"
                class="border-2 border-gray-400 p-1 rounded-lg"
              />
            </div>
            <div class="flex-col flex mx-2">
              <label class="m-1">محل فعالیت</label>
              <input
                v-model="place"
                type="text"
                class="border-2 border-gray-400 p-1 rounded-lg"
              />
            </div>
          </div>
          <div class="flex-col md:flex-row flex my-2">
            <div class="flex-col flex mx-2 w-full">
              <label class="m-1">یادداشت</label>
              <input
                v-model="note"
                type="text"
                class="border-2 border-gray-400 p-1 rounded-lg"
              />
            </div>
          </div>
          <div
            class="text-center flex flex-col md:flex-row w-full justify-center"
          >
            <button
              data-ripple-light="true"
              type="button"
              class="bg-violet-300 focus:bg-violet-200 active:bg-violet-200 hover:bg-violet-200 text-green-950 p-1 md:w-1/2 my-2 rounded-lg mx-1 shadow-md border border-transparent text-sm transition-all active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hover:shadow-lg focus:shadow-none"
            >
              بازگشت
            </button>
            <button
              class="bg-violet-300 text-green-950 p-1 md:w-1/2 my-2 rounded-lg mx-1 shadow-md"
            >
              ذخیره و ماندن
            </button>
          </div>
          <div
            class="text-center flex flex-col md:flex-row w-full justify-center"
          >
            <button
              class="bg-red-500 text-green-950 p-1 md:w-1/2 my-2 rounded-lg mx-1 shadow-md"
            >
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
export default {
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

<style>
input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
*:focus {
  outline: none;
}
</style>
