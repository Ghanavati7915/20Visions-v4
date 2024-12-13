<script setup lang="ts">
const emit = defineEmits(['onNext','onList'])

const form = ref<Object>({
  title : {
    value : '',
    error : '',
  }
})
//#region Variables
let items = ref<any[]>([
  {
    id:1,
    text:'ورق روغنی',
    value:'ورق روغنی',
    isSelected:false,
    description:'',
    define:'',
    moreDescribe:'',
    price:'',
    howToSettle:''
  },
  {
    id:2,
    text:'ضایعات آهن آلیاژی',
    value:'ضایعات آهن آلیاژی',
    isSelected:false,
    description:'',
    define:'',
    moreDescribe:'',
    price:'',
    howToSettle:''
  },
  {
    id:3,
    text:'ضایعات حلب',
    value:'ضایعات حلب',
    isSelected:false,
    description:'',
    define:'',
    moreDescribe:'',
    price:'',
    howToSettle:''
  },
  {
    id:4,
    text:'روغنی پرسی',
    value:'روغنی پرسی',
    isSelected:false,
    description:'',
    define:'',
    moreDescribe:'',
    price:'',
    howToSettle:''
  },
  {
    id:5,
    text:'روغنی فله',
    value:'روغنی فله',
    isSelected:false,
    description:'',
    define:'',
    moreDescribe:'',
    price:'',
    howToSettle:''
  }
])

//#endregion

const add = () => {
  form.value.title.error = '';
  if (form.value.title.value == ""){
    form.value.title.error = 'عنوان را وارد کنید'
  }else {
    items.value.push(
        {
          id:items.value.length+1,
          text:form.value.title.value,
          value:form.value.title.value,
          isSelected:false,
          description:'',
          define:'',
          moreDescribe:'',
          price:'',
          howToSettle:''
        })
    form.value.title.value = '';
  }
}
const gotoNext = () => {
  if (!items.value.find((item:any)=> item.isSelected)){
    alert('حداقل یک گزینه را مشخص کنید.')
  }else {
    emit('onList',items.value.filter((item:any) => item.isSelected))
    emit('onNext')
  }
}

</script>

<template>
  <div class="flex w-full max-w-sm mx-auto  overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 lg:max-w-4xl  dir-rtl">
    <div class="w-full px-6 py-8 md:px-8 lg:w-full">

      <p class="mt-3 text-xl text-center text-gray-600 dark:text-gray-200 Estedad_FD_Bold">
        محصولات مورد نظر را انتخاب یا اضافه نمایید
      </p>

      <div class="flex items-center justify-between mt-4">
        <span class="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
        <div class="text-xs text-center text-gray-600 dark:text-gray-400 Estedad_FD_Light">
          اطلاعات خود را وارد کنید
        </div>
        <span class="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
      </div>

      <div class="mt-4 grid grid-cols-4 gap-3">
          <UtilsMultiSelector :options="items" />
      </div>


      <div class="flex items-center justify-between mt-4">
        <span class="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
        <div class="text-xs text-center text-gray-600 dark:text-gray-400 Estedad_FD_Light">
          گزینه جدیدی اضافه کنید
        </div>
        <span class="w-1/5 border-b dark:border-gray-600 lg:w-1/4"></span>
      </div>

      <div class="mt-4 grid grid-cols-12 gap-3">
        <div class="col-span-9">
          <label class="block mb-2 text-sm font-medium Estedad_FD_Bold text-gray-600 dark:text-gray-200" for="title"> </label>
          <label class="block mb-2 text-sm font-medium Estedad_FD_Bold text-gray-600 dark:text-gray-200" for="title">
            عنوان
            <small class="text-rose-600">*</small>
          </label>
          <input v-model="form.title.value" class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-red-400 focus:ring-opacity-40 dark:focus:border-red-300 focus:outline-none focus:ring focus:ring-red-300" type="text"  @keyup.enter="add" />
          <small v-if="form.title.error" class="text-rose-600 mt-1">{{form.title.error}}</small>
        </div>
        <div class="col-span-3 flex justify-center items-end">
          <button class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors
                duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring
                focus:ring-gray-300 focus:ring-opacity-50 cursor-pointer hover-anim-d" @click="add">
            افزودن
          </button>
        </div>

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