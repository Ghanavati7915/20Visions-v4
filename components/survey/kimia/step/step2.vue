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
    text:'ضایعات ورق روغنی',
    value:'ضایعات ورق روغنی',
    isSelected:false,
    description:'',
    define:'',
    moreDescribe:'',
    price:'',
    howToSettle:''
  },
  {
    id:2,
    text:'ضایعات روغنی فله',
    value:'ضایعات روغنی فله',
    isSelected:false,
    description:'',
    define:'',
    moreDescribe:'',
    price:'',
    howToSettle:''
  },
  {
    id:3,
    text:'ضایعات روغنی پرسی',
    value:'ضایعات روغنی پرسی',
    isSelected:false,
    description:'',
    define:'',
    moreDescribe:'',
    price:'',
    howToSettle:''
  },
  {
    id:4,
    text:'ضایعات آهن ویژه',
    value:'ضایعات آهن ویژه',
    isSelected:false,
    description:'',
    define:'',
    moreDescribe:'',
    price:'',
    howToSettle:''
  },
  {
    id:5,
    text:'ضایعات سوپر ویژه',
    value:'ضایعات سوپر ویژه',
    isSelected:false,
    description:'',
    define:'',
    moreDescribe:'',
    price:'',
    howToSettle:''
  },
  {
    id:6,
    text:'ضایعات آهن درجه 1',
    value:'ضایعات آهن درجه 1',
    isSelected:false,
    description:'',
    define:'',
    moreDescribe:'',
    price:'',
    howToSettle:''
  },
  {
    id:7,
    text:'ضایعات آهن درجه 2',
    value:'ضایعات آهن درجه 2',
    isSelected:false,
    description:'',
    define:'',
    moreDescribe:'',
    price:'',
    howToSettle:''
  },
  {
    id:8,
    text:'ضایعات آهن درجه 3',
    value:'ضایعات آهن درجه 3 ',
    isSelected:false,
    description:'',
    define:'',
    moreDescribe:'',
    price:'',
    howToSettle:''
  },
  {
    id:9,
    text:'ضایعات آهن سنگین 1',
    value:'ضایعات آهن سنگین 1',
    isSelected:false,
    description:'',
    define:'',
    moreDescribe:'',
    price:'',
    howToSettle:''
  },
  {
    id:10,
    text:'ضایعات آهن سنگین 2',
    value:'ضایعات آهن سنگین 2',
    isSelected:false,
    description:'',
    define:'',
    moreDescribe:'',
    price:'',
    howToSettle:''
  },
  {
    id:11,
    text:'ضایعات پرسی خودرو',
    value:'ضایعات پرسی خودرو',
    isSelected:false,
    description:'',
    define:'',
    moreDescribe:'',
    price:'',
    howToSettle:''
  },
  {
    id:12,
    text:'ضایعات پرسی بدنه',
    value:'ضایعات پرسی بدنه',
    isSelected:false,
    description:'',
    define:'',
    moreDescribe:'',
    price:'',
    howToSettle:''
  },
  {
    id:13,
    text:'ضایعات پرس 1',
    value:'ضایعات پرس 1',
    isSelected:false,
    description:'',
    define:'',
    moreDescribe:'',
    price:'',
    howToSettle:''
  },
  {
    id:14,
    text:'ضایعات پرس 2',
    value:'ضایعات پرس 2',
    isSelected:false,
    description:'',
    define:'',
    moreDescribe:'',
    price:'',
    howToSettle:''
  },
  {
    id:15,
    text:'ضایعات پرس 3',
    value:'ضایعات پرس 3',
    isSelected:false,
    description:'',
    define:'',
    moreDescribe:'',
    price:'',
    howToSettle:''
  },
  {
    id:16,
    text:'ضایعات آهن گالوانیزه',
    value:'ضایعات آهن گالوانیزه',
    isSelected:false,
    description:'',
    define:'',
    moreDescribe:'',
    price:'',
    howToSettle:''
  },
  {
    id:17,
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
    id:18,
    text:'ضایعات حلب پرسی',
    value:'ضایعات حلب پرسی',
    isSelected:false,
    description:'',
    define:'',
    moreDescribe:'',
    price:'',
    howToSettle:''
  },
  {
    id:19,
    text:'ضایعات حلب فله',
    value:'ضایعات حلب فله',
    isSelected:false,
    description:'',
    define:'',
    moreDescribe:'',
    price:'',
    howToSettle:''
  },
  {
    id:20,
    text:'ضایعات بارهای ممنوعه',
    value:'ضایعات بارهای ممنوعه',
    isSelected:false,
    description:'',
    define:'',
    moreDescribe:'',
    price:'',
    howToSettle:''
  },
  {
    id:21,
    text:'ضایعات سوفاله یا سوفاره آهن',
    value:'ضایعات سوفاله یا سوفاره آهن',
    isSelected:false,
    description:'',
    define:'',
    moreDescribe:'',
    price:'',
    howToSettle:''
  },
  {
    id:22,
    text:'ضایعات شریدر درجه 1',
    value:'ضایعات شریدر درجه 1',
    isSelected:false,
    description:'',
    define:'',
    moreDescribe:'',
    price:'',
    howToSettle:''
  },
  {
    id:23,
    text:'ضایعات شریدر درجه 2',
    value:'ضایعات شریدر درجه 2',
    isSelected:false,
    description:'',
    define:'',
    moreDescribe:'',
    price:'',
    howToSettle:''
  },
  {
    id:24,
    text:'ضایعات مکانیکی و ته کارگاهی',
    value:'ضایعات مکانیکی و ته کارگاهی',
    isSelected:false,
    description:'',
    define:'',
    moreDescribe:'',
    price:'',
    howToSettle:''
  },
  {
    id:25,
    text:'ضایعات سبک بار',
    value:'ضایعات سبک بار',
    isSelected:false,
    description:'',
    define:'',
    moreDescribe:'',
    price:'',
    howToSettle:''
  },
  {
    id:26,
    text:'ضایعات سفاله ناخنی',
    value:'ضایعات سفاله ناخنی',
    isSelected:false,
    description:'',
    define:'',
    moreDescribe:'',
    price:'',
    howToSettle:''
  },
  {
    id:27,
    text:'ضایعات چدن ریز بار',
    value:'ضایعات چدن ریز بار',
    isSelected:false,
    description:'',
    define:'',
    moreDescribe:'',
    price:'',
    howToSettle:''
  },
  {
    id:28,
    text:'ضایعات چدن درشت بار',
    value:'ضایعات چدن درشت بار',
    isSelected:false,
    description:'',
    define:'',
    moreDescribe:'',
    price:'',
    howToSettle:''
  },
  {
    id:29,
    text:'ضایعات کیلو بار داغونی',
    value:'ضایعات کیلو بار داغونی',
    isSelected:false,
    description:'',
    define:'',
    moreDescribe:'',
    price:'',
    howToSettle:''
  },
  {
    id:30,
    text:'ضایعات سفاله پوشالی',
    value:'ضایعات سفاله پوشالی',
    isSelected:false,
    description:'',
    define:'',
    moreDescribe:'',
    price:'',
    howToSettle:''
  },
  {
    id:31,
    text:'ضایعات ابعادی',
    value:'ضایعات ابعادی',
    isSelected:false,
    description:'',
    define:'',
    moreDescribe:'',
    price:'',
    howToSettle:''
  },
  {
    id:32,
    text:'ضایعات خرسک',
    value:'ضایعات خرسک',
    isSelected:false,
    description:'',
    define:'',
    moreDescribe:'',
    price:'',
    howToSettle:''
  },
  {
    id:33,
    text:'ضایعات شلاکه',
    value:'ضایعات شلاکه',
    isSelected:false,
    description:'',
    define:'',
    moreDescribe:'',
    price:'',
    howToSettle:''
  },
  {
    id:34,
    text:'ضایعات ته تاندیش',
    value:'ضایعات ته تاندیش',
    isSelected:false,
    description:'',
    define:'',
    moreDescribe:'',
    price:'',
    howToSettle:''
  },
  {
    id:35,
    text:'ضایعات قراضه داخلی',
    value:'ضایعات قراضه داخلی',
    isSelected:false,
    description:'',
    define:'',
    moreDescribe:'',
    price:'',
    howToSettle:''
  },
  {
    id:36,
    text:'ضایعات قراضه خارجی',
    value:'ضایعات قراضه خارجی',
    isSelected:false,
    description:'',
    define:'',
    moreDescribe:'',
    price:'',
    howToSettle:''
  },  {
    id:37,
    text:'ضایعات داکتیل ریز بار',
    value:'ضایعات داکتیل ریز بار',
    isSelected:false,
    description:'',
    define:'',
    moreDescribe:'',
    price:'',
    howToSettle:''
  },
  {
    id:38,
    text:'ضایعات داکتیل درشت بار',
    value:'ضایعات داکتیل درشت بار',
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
    <div class="w-full px-4 py-8 md:px-8 lg:w-full">


      <section class="container px-4 mx-auto">
        <hr class="border-black my-16">

        <div class="mt-4">
          <p class="mt-3 text-lg text-center text-gray-600 dark:text-gray-200 Estedad_FD_Bold leading-7">
            همکار گرامی ؛ خواهشمندیم محصولاتی که در حوزه فعالیت شما هستند را انتخاب کرده و در صورتی که جزو موارد زیر نمی باشند ، آنها را اضافه نمایید.
          </p>

          <div class="mt-4 grid grid-cols-4 gap-3 text-center">
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


        </div>
        <div class="mt-6">
          <button class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors
                duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring
                focus:ring-gray-300 focus:ring-opacity-50 cursor-pointer hover-anim-d" @click="gotoNext">
            بعدی
          </button>
        </div>
      </section>

    </div>
  </div>
</template>

<style scoped>

</style>