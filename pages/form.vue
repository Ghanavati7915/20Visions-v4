<script setup lang="ts">

let questions = ref<any[]>([
    {id:1,question:'ورق روغنی',answer:'',price:'',howToSettle:''},
{id:2,question:'آهن سوپر ویژه',answer:'',price:'',howToSettle:''},
{id:3,question:'آهن ویژه',answer:'',price:'',howToSettle:''},
])
let step = ref<number>(1)
const nextQuestion = ()=> {
  if (step > (questions.length - 1)) step.value++;
}
const prevQuestion = ()=> {
 if (step > 0) step.value--;
}

import { ref } from "vue";

// Track the active div
const activeDiv = ref("info"); // Default to the 'info' div

// Function to change the active div
const changeDiv = (divName: "info" | "login" | "question") => {
  activeDiv.value = divName;
};
</script>

<template>
  <div class="w-screen h-screen bg-gray-300 grid items-center dir-rtl">

    <!--------------------#region Info-------------------->
    <div v-if="activeDiv === 'info'">
      <div class="flex w-full max-w-sm mx-auto  overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl  dir-rtl">
        <div class="hidden bg-cover lg:block lg:w-1/2" style="background-image: url('https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80');"></div>

        <div class="w-full px-6 py-8 md:px-8 lg:w-1/2 grid grid-rows-4 grid-flow-col gap-4">
          <div class="flex items-center justify-center text-center">
            <img class="w-auto h-20 sm:h-15" src="/public/favicon.ico" alt="logo">
          </div>

         <div class="flex items-center justify-center text-center text-xl ">
           <p class="text-gray-800 dark:text-gray-200 Estedad_FD_Bold ">
             تجارت الکترونیک 20 آفاق
           </p>
         </div>

          <div class="flex items-center justify-center text-center ">
            <span class="text-sm text-center text-gray-600 dark:text-gray-400 Estedad_FD_Light">
              از شما بابت زمانی که برای پاسخ به سوالات ما اختصاص می‌دهید، صمیمانه سپاسگزاریم.
            </span>
          </div>


          <div class="mt-6">
            <button class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors
                duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring
                focus:ring-gray-300 focus:ring-opacity-50" @click="changeDiv('login')">
              <a href="/question" class="cursor-pointer hover-anim-d">  شروع  </a>
            </button>
          </div>

        </div>
      </div>
    </div>
    <!--------------------#endregion-------------------->

    <!--------------------#region login-------------------->
        <div v-if="activeDiv === 'login'">
          <div class="flex w-full max-w-sm mx-auto  overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl  dir-rtl">
            <div class="hidden bg-cover lg:block lg:w-1/2" style="background-image: url('https://images.unsplash.com/photo-1606660265514-358ebbadc80d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1575&q=80');"></div>

            <div class="w-full px-6 py-8 md:px-8 lg:w-1/2">
              <div class="flex justify-center mx-auto">
                <img class="w-auto h-20 sm:h-15" src="/public/favicon.ico" alt="logo">
              </div>

              <p class="mt-3 text-xl text-center text-gray-600 dark:text-gray-200 Estedad_FD_Bold">
                تجارت الکترونیک 20 آفاق
              </p>

              <div class="flex items-center justify-between mt-4">
                <span class="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>

                <a href="#" class="text-xs text-center text-gray-600 dark:text-gray-400 Estedad_FD_Light">
                  اطلاعات خود را وارد کنید
                </a>

                <span class="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
              </div>

              <div class="mt-4">
                <label class="block mb-2 text-sm font-medium Estedad_FD_Bold text-gray-600 dark:text-gray-200" for="LoggingEmailAddress">نام</label>
                <input id="LoggingEmailAddress" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 focus:ring-opacity-40 dark:focus:border-red-300 focus:outline-none focus:ring focus:ring-red-300" required type="text" />
              </div>


              <div class="mt-4">
                <label class="block mb-2 text-sm font-medium Estedad_FD_Bold text-gray-600 dark:text-gray-200" for="LoggingEmailAddress"> نام خانوادگی</label>
                <input id="LoggingEmailAddress" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 focus:ring-opacity-40 dark:focus:border-red-300 focus:outline-none focus:ring focus:ring-red-300" required type="text" />
              </div>

              <div class="mt-4">
                <div class="flex justify-between">
                  <label class="block mb-2 text-sm font-medium Estedad_FD_Bold text-gray-600 dark:text-gray-200" for="loggingPassword">عنوان شرکت</label>
                </div>

                <input id="loggingPassword" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 focus:ring-opacity-40 dark:focus:border-red-300 focus:outline-none focus:ring focus:ring-red-300" required type="text" />
              </div>

              <div class="mt-4">
                <label class="block mb-2 text-sm font-medium Estedad_FD_Bold text-gray-600 dark:text-gray-200" for="LoggingEmailAddress">شماره موبایل</label>
                <input id="LoggingEmailAddress" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 focus:ring-opacity-40 dark:focus:border-red-300 focus:outline-none focus:ring focus:ring-red-300" required type="tel" />
              </div>

              <div class="mt-6">
                <button class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors
                duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring
                focus:ring-gray-300 focus:ring-opacity-50" @click="changeDiv('question')">
                  <a href="/question" class="cursor-pointer hover-anim-d">  شروع  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
    <!--------------------#endregion-------------------->

    <!--------------------#region questions-------------------->
        <div v-if="activeDiv === 'question'">
          <div class="w-full max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
            <div class="px-6 py-4">
              <h3 class="mt-3 text-xl font-medium text-start text-gray-800 dark:text-gray-200 Estedad_FD_Bold">
                سوال 1 از 40
              </h3>

              <form class="mt-3 Estedad_FD_Medium">
                <div class="flex flex-col justify-center items-start py-3 my-8">
                  <h2> {{questions[step].question}} ؟ </h2>
                  <div class="w-full">
                    <label>
                      قیمت؟
                    </label>
                    <input class="text-start w-full h-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border
                  rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-red-400
                  dark:focus:border-red-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-red-300"
                           type="text" placeholder="پاسخ خود را وارد کنید..." aria-label="text" v-model="questions[step].price">
                  </div>
                  <div class="w-full">
                    <label>
                      چگونه پرداخت کنیم؟
                    </label>
                    <input class="text-start w-full h-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border
                  rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-red-400
                  dark:focus:border-red-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-red-300"
                           type="text" placeholder="پاسخ خود را وارد کنید..." aria-label="text" v-model="questions[step].howToSettle">
                  </div>
                  <div class="w-full">
                    <label>
                      پاسخ
                    </label>
                    <input class="text-start w-full h-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border
                  rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-red-400
                  dark:focus:border-red-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-red-300"
                           type="text" placeholder="پاسخ خود را وارد کنید..." aria-label="text" v-model="questions[step].answer"/>
                  </div>
                </div>

                <div class="flex items-center justify-between mt-4">
                  <button class="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors
                  duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring
                  focus:ring-gray-400 focus:ring-opacity-50" @click="changeDiv('login')">
                   قبلی
                  </button>
                  <button class="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors
                  duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring
                  focus:ring-gray-400 focus:ring-opacity-50" @click="changeDiv('info')">
                    بعدی
                  </button>
                </div>
              </form>
            </div>

          </div>
     </div>
    <!--------------------#endregion-------------------->

  </div>
</template>

<style scoped>
.flex {
  display: flex;
  gap: 1rem;
}
</style>
