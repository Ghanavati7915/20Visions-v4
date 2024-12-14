<script setup lang="ts">


const emit = defineEmits(['onNext'])

const form = ref<Object>({
  fullName : {
    value : '',
    error : '',
  },
  mobile : {
    value : '',
    error : '',
  },
  company : {
    value : '',
    error : '',
  },
})

const errorClear = () =>{
  form.value.fullName.error = '';
  form.value.mobile.error = '';
  form.value.company.error = '';
}

const gotoNext = () => {
  errorClear();

  var regexMobile = new RegExp("^(?:(?:(?:\\+?|00)(98))|(0))?((?:90|91|92|93|99)[0-9]{8})$");
  let errorFlag = false;

  if (form.value.fullName.value == ""){
    errorFlag = true;
    form.value.fullName.error = 'نام و نام خانوادگی خود را وارد کنید'
  }
  if (form.value.mobile.value == ""){
    errorFlag = true;
    form.value.mobile.error = 'شماره تلفن همراه را وارد کنید'
  }
  else if (!regexMobile.test(form.value.mobile.value)){
    errorFlag = true;
    form.value.mobile.error = 'شماره تلفن همراه را بصورت صحیح وارد کنید'
  }

  if (form.value.company.value == ""){
    errorFlag = true;
    form.value.company.error = 'عنوان شرکت را وارد کنید'
  }
  if (!errorFlag) emit('onNext')
}


</script>

<template>

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
        <label class="block mb-2 text-sm font-medium Estedad_FD_Bold text-gray-600 dark:text-gray-200" for="LoggingEmailAddress"> </label>
        <label class="block mb-2 text-sm font-medium Estedad_FD_Bold text-gray-600 dark:text-gray-200" for="LoggingEmailAddress">
          نام و نام خانوادگی
          <small class="text-rose-600">*</small>
        </label>
        <input v-model="form.fullName.value" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 focus:ring-opacity-40 dark:focus:border-red-300 focus:outline-none focus:ring focus:ring-red-300" type="text" />
        <small v-if="form.fullName.error" class="text-rose-600 mt-1">{{form.fullName.error}}</small>
      </div>

      <div class="mt-4">
        <div class="flex justify-between">
          <label class="block mb-2 text-sm font-medium Estedad_FD_Bold text-gray-600 dark:text-gray-200" for="LoggingEmailAddress">
            عنوان شرکت
            <small class="text-rose-600">*</small>
          </label>
        </div>

        <input v-model="form.company.value" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 focus:ring-opacity-40 dark:focus:border-red-300 focus:outline-none focus:ring focus:ring-red-300" type="text" />
        <small v-if="form.company.error" class="text-rose-600 mt-1">{{form.company.error}}</small>
      </div>

      <div class="mt-4">
        <label class="block mb-2 text-sm font-medium Estedad_FD_Bold text-gray-600 dark:text-gray-200" for="LoggingEmailAddress">
          شماره موبایل
          <small class="text-rose-600">*</small>
        </label>

        <input v-model="form.mobile.value" maxlength="11" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 focus:ring-opacity-40 dark:focus:border-red-300 focus:outline-none focus:ring focus:ring-red-300" type="text" />
        <small v-if="form.mobile.error" class="text-rose-600 mt-1">{{form.mobile.error}}</small>
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
.container {
  max-width: 100%;
}
</style>