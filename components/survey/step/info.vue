<script setup lang="ts">
const emit = defineEmits(['onNext'])

const gotoNext = () => {
  emit('onNext')
}

</script>

<template>
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
              فرم استیل
            </span>
      </div>


      <div class="mt-6">
        <button class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors
                duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring
                focus:ring-gray-300 focus:ring-opacity-50 cursor-pointer hover-anim-d" @click="gotoNext">
          شروع
        </button>
      </div>

    </div>
  </div>
</template>

<style scoped>

</style>