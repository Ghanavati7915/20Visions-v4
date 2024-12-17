<script setup lang="ts">
const emit = defineEmits(['onNext'])

const gotoNext = () => {
  emit('onNext')
}

</script>

<template>
    <div class="bg-[#E6E6E6] dark:bg-gray-900">
      <div class="flex justify-center h-screen">
        <div class="hidden bg-cover lg:block lg:w-2/3" style="background-image: url('/img/Three.jpg')">
          <div class="flex h-full px-20 bg-gray-900 bg-opacity-40 justify-center items-center">
            <div>
              <h2 class="text-2xl font-bold text-[#fefefe] sm:text-3xl">
                تجارت الکترونیک 20 آفاق
              </h2>
            </div>
          </div>
        </div>


          <div class="w-full px-6 py-8 md:px-8 lg:w-1/3 h-full flex items-center justify-center text-center">
            <div class="bg-[#fefefe] w-full p-8 rounded-xl">
              <div class="flex items-center justify-center text-center">
                <img class="w-auto h-20 sm:h-15" src="/public/favicon.ico" alt="logo">
              </div>

              <div class="flex items-center justify-center text-center text-xl ">
                <p class="text-gray-800 dark:text-gray-200 Estedad_FD_Bold ">
                  تجارت الکترونیک 20 آفاق
                </p>
              </div>

              <div class="flex flex-col items-center justify-center text-center mt-12">
            <span class="text-sm text-justify text-gray-800 dark:text-gray-500 Estedad_FD_Light leading-6">
از همکاری ارزشمند و تعامل سازنده جنابعالی و تیم حرفه‌ای شرکت کیمیا با مجموعه تجارت الکترونیک 20 آفاق، صمیمانه تقدیر و تشکر می‌کنیم.
            </span>
                <span class="text-sm text-justify text-gray-800 dark:text-gray-500 Estedad_FD_Light leading-6 mt-5">
                  پرسشنامه پیش‌رو در رابطه با حوزه کاری، محصولات و خدمات ارائه‌شده توسط شرکت کیمیا می‌باشد. به منظور ایجاد تعامل بیشتر و دستیابی به تعریفی مشترک از مفاهیم تخصصی، خواهشمند است این پرسشنامه را با دقت تکمیل فرمایید.
                </span>
              </div>


              <div class="mt-6">
                <button class="w-full px-6 py-3 text-sm font-medium tracking-wide text-[#fefefe] capitalize transition-colors
                duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring
                focus:ring-gray-300 focus:ring-opacity-50 cursor-pointer hover-anim-d" @click="gotoNext">
                  شروع
                </button>
              </div>
            </div>
          </div>

      </div>
    </div>
</template>

<style scoped>

</style>