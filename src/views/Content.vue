<template>
  <div class="flex bg-gray-200 p-8 w-full rounded-3xl mt-[8rem]">
    <div class="flex flex-col md:flex-row w-full ">
      <div class="bg-white p-5 rounded-3xl">
        <p class="text-2xl">لطفا اطلاعات کاربر را وارد نمایید</p>
        <div class="flex flex-col">
          <div class="flex-col md:flex-row flex my-2">
            <div class="flex-col flex mx-2">
              <label class="m-1">کد پرسنلی</label>
              <input
                type="text"
                class="border-2 border-gray-400 p-1 rounded-lg"
              />
            </div>
            <div class="flex-col flex mx-2">
              <label class="m-1">نوع کاربری</label>
              <input
                type="text"
                class="border-2 border-gray-400 p-1 rounded-lg"
              />
            </div>
          </div>
          <div class="flex-col md:flex-row flex my-2">
            <div class="flex-col flex mx-2">
              <label class="m-1">نام و نام خانوادگی</label>
              <input
                type="text"
                class="border-2 border-gray-400 p-1 rounded-lg"
              />
            </div>
            <div class="flex-col flex mx-2">
              <label class="m-1">سمت</label>
              <input
                type="text"
                class="border-2 border-gray-400 p-1 rounded-lg"
              />
            </div>
          </div>
          <div class="flex-col md:flex-row flex my-2">
            <div class="flex-col flex mx-2">
              <label class="m-1">نام کابری</label>
              <input
                type="text"
                class="border-2 border-gray-400 p-1 rounded-lg"
              />
            </div>
            <div class="flex-col flex mx-2">
              <label class="m-1">رمز عبور</label>
              <input
                type="text"
                class="border-2 border-gray-400 p-1 rounded-lg"
              />
            </div>
          </div>
          <div class="flex-col md:flex-row flex my-2">
            <div class="flex-col flex mx-2">
              <label class="m-1">شروع فعالیت</label>
              <input
                type="date"
                class="border-2 border-gray-400 p-1 rounded-lg"
              />
            </div>
            <div class="flex-col flex mx-2">
              <label class="m-1">پایان فعالیت</label>
              <input
                type="text"
                class="border-2 border-gray-400 p-1 rounded-lg"
              />
            </div>
          </div>
          <div class="flex-col md:flex-row flex my-2">
            <div class="flex-col flex mx-2">
              <label class="m-1">تلفن همراه</label>
              <input
                type="number"
                class="border-2 border-gray-400 p-1 rounded-lg"
              />
            </div>
            <div class="flex-col flex mx-2">
              <label class="m-1">تلفن ثابت</label>
              <input
                type="number"
                class="border-2 border-gray-400 p-1 rounded-lg"
              />
            </div>
          </div>
          <div class="flex-col md:flex-row flex my-2">
            <div class="flex-col flex mx-2">
              <label class="m-1">کد خط داخلی</label>
              <input
                type="text"
                class="border-2 border-gray-400 p-1 rounded-lg"
              />
            </div>
            <div class="flex-col flex mx-2">
              <label class="m-1">محل فعالیت</label>
              <input
                type="text"
                class="border-2 border-gray-400 p-1 rounded-lg"
              />
            </div>
          </div>
          <div class="flex-col md:flex-row flex my-2">
            <div class="flex-col flex mx-2 w-full">
              <label class="m-1">یادداشت</label>
              <input
                type="text"
                class="border-2 border-gray-400 p-1 rounded-lg"
              />
            </div>
          </div>
          <div class="text-center flex flex-col md:flex-row w-full justify-center ">
            <button
              class="bg-violet-300 text-green-950 p-1 md:w-1/2 my-2 rounded-lg mx-1 shadow-md"
            >
              بازگشت
            </button>
            <button
              class="bg-violet-300 text-green-950 p-1 md:w-1/2 my-2 rounded-lg mx-1 shadow-md"
            >
              ذخیره و ماندن
            </button>
          </div>
          <div class="text-center flex flex-col md:flex-row w-full justify-center ">
            <button
              class="bg-red-500 text-green-950  p-1 md:w-1/2 my-2 rounded-lg mx-1 shadow-md"
            >
              پاک کردن
            </button>
            <button
              class="bg-green-500 text-green-950  p-1 md:w-1/2 my-2 rounded-lg mx-1 shadow-md"
            >
              تایید کردن
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
