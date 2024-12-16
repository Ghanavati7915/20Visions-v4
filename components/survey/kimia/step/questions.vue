<script setup lang="ts">
const props = defineProps(['items'])
const emit = defineEmits(['onNext'])

//#region Variables
let step = ref<number>(0)
const questions = ref<any[]>([])
//#endregion

watch(() => props.items, async () => {
  console.log('props.items.value : ' , props.items)
  questions.value = props.items
},{deep:true,immediate:true});


//#region Functions
const nextQuestion = ()=> {
  if (step.value < (questions.value.length - 1)) step.value++;
}
const prevQuestion = ()=> {
  if (step.value > 0) step.value--;
}
const gotoNext = () => {
  emit('onNext')
}
//#endregion
</script>

<template>
  <div class="w-full max-w-md mx-auto overflow-hidden bg-[#fefefe] rounded-lg shadow-md dark:bg-gray-800">
    <div class="px-6 py-4">
      <h3 class="mt-3 text-xl font-medium text-start text-gray-800 dark:text-gray-200 Estedad_FD_Bold">
       <span> سوال </span>
        <span> {{step+1}} </span>
        <span> از </span>
        <span> {{questions.length}} </span>
      </h3>

      <div class="mt-3 Estedad_FD_Medium">

        <div class="flex flex-col justify-center items-center text-center w-full Estedad_FD_Bold text-sm my-4">
          <h2> {{questions[step].text}} چیست؟ </h2>
        </div>

        <div class="flex flex-col justify-center items-center text-center w-full mb-4">
          <h5> {{questions[step].description}} </h5>
        </div>

        <div class="flex flex-col justify-center items-start py-3 my-8">
          <div class="w-full mb-2">
            <label>
              تعریف شما ؟
            </label>
            <input class="text-start w-full h-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border
                  rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-red-400
                  dark:focus:border-red-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-red-300 placeholder:text-sm"
                   type="text" placeholder="پاسخ خود را وارد کنید..." aria-label="text" v-model="questions[step].define">
          </div>
          <div class="w-full mb-2">
            <label>
              قیمت روز ؟
            </label>
            <input class="text-start w-full h-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border
                  rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-red-400
                  dark:focus:border-red-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-red-300 placeholder:text-sm"
                   type="text" placeholder="پاسخ خود را وارد کنید..." aria-label="text" v-model="questions[step].price">
          </div>
          <div class="w-full mb-2">
            <label>
              چگونه پرداخت یا تسویه حساب کنیم ؟
            </label>
            <input class="text-start w-full h-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border
                  rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-red-400
                  dark:focus:border-red-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-red-300 placeholder:text-sm"
                   type="text" placeholder="پاسخ خود را وارد کنید..." aria-label="text" v-model="questions[step].howToSettle">
          </div>
          <div class="w-full mb-2">
            <label>
              توضیحات بیشتر :
            </label>
            <input class="text-start w-full h-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border
                  rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-red-400
                  dark:focus:border-red-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-red-300 placeholder:text-sm"
                   type="text" placeholder="پاسخ خود را وارد کنید..." aria-label="text" v-model="questions[step].moreDescribe"/>
          </div>
        </div>

        <div class="flex items-center justify-between mt-4">
          <button :class="[step == 0 ? 'opacity-50  cursor-not-allowed' : '']" class="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors
                  duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring
                  focus:ring-gray-400 focus:ring-opacity-50" type="button" @click="prevQuestion">
            قبلی
          </button>
          <button :class="[step >= (questions.length - 1) ? 'opacity-50 cursor-not-allowed' : '']" class="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors
                  duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-600 focus:outline-none focus:ring
                  focus:ring-gray-400 focus:ring-opacity-50" type="button" @click="nextQuestion">
            بعدی
          </button>
        </div>

        <div class="mt-6" v-if="step == (questions.length - 1)">
          <button class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors
                duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring
                focus:ring-gray-300 focus:ring-opacity-50 cursor-pointer hover-anim-d" @click="gotoNext">
            پایان
          </button>
        </div>

      </div>
    </div>

  </div>
</template>

<style scoped>

</style>