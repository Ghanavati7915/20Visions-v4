<script setup lang="ts">
//#region Import
import moment from 'moment-jalaali'
//#endregion

//#region Variables
const todayDate = ref('')
const time = ref<string>('');
let intervalId: number;
//#endregion

//#region Functions
const calculateTodayDate = () => {
  // Set the locale to Persian
  moment.loadPersian({usePersianDigits: true});

// Get the current date in the desired format
  const persianDate = moment().format('jD jMMMM ماه jYYYY');

// Display the formatted date
  todayDate.value = `امروز ${persianDate}`;
}
const updateTime = () => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  time.value = `${hours}:${minutes}:${seconds}`;
};

const isMobileMenuOpen = ref<boolean>(false);

//#endregion

//#region Constructors
onMounted(async () => {
  calculateTodayDate()
  updateTime();
  intervalId = window.setInterval(updateTime, 1000);
})

onUnmounted(() => {
  clearInterval(intervalId);
});
//#endregion

/*Theme*/
const colorMode = useColorMode();

const changeColor = () => (colorMode.preference = (colorMode.value === 'light' ? 'dark' : 'light'))


const layer = ref('sample4')


</script>

<template>
  <!--------------------#region Main-------------------->
<div class="w-screen sm:h-screen Estedad_FD_Light dir-rtl flex flex-col justify-around" :class="(colorMode.value == 'light') ? 'bg-light' : 'bg-dark'">
  <!--------------------#region Navigation/Desktop-------------------->
  <div class="justify-between w-full h-10 px-2 pt-2 hidden sm:flex">
    <!--------------------#region Navigation-------------------->
    <div class="w-1/2 h-full flex justify-start items-center">
      <!--------------------#region Navigation Logo-------------------->
      <nuxt-link to="/">
        <img src="/img/logo.png" alt="logo" class="w-16 h-full object-contain">
      </nuxt-link>
      <!--------------------#endregion-------------------->
      <!--------------------#region Navigation Items-------------------->
      <div class=" w-full flex justify-around Estedad_FD_Bold  text-black dark:text-white">
        <nuxt-link to="/" class="cursor-pointer">  خانه  </nuxt-link>
        <nuxt-link to="/" class="cursor-pointer">  بازرگانان خارجی  </nuxt-link>
        <nuxt-link to="/" class="cursor-pointer">  ارتباط با ما  </nuxt-link>
        <nuxt-link to="/" class="cursor-pointer">  درباره ما  </nuxt-link>
      </div>
      <!--------------------#endregion-------------------->
    </div>
    <!--------------------#endregion-------------------->


    <!--------------------#region Navigation Boxes-------------------->
    <div class="w-1/2 h-full flex justify-start dir-ltr">
      <!--------------------#region Navigation Language Piker-------------------->
      <div class="bg-[#F7D904] rounded-full w-8 h-8 flex justify-center items-center">
        <span>FA</span>
      </div>
      <!--------------------#endregion-------------------->
      <!--------------------#region Navigation Search Input-------------------->
      <div class="bg-[#D9D9D9] w-48 h-full ml-5 flex rounded-full">
        <div class="bg-[#F7D904] rounded-full w-8 h-8 flex justify-center items-center">
          <icon name="ic:baseline-search"  style="color: black" class="mx-1" />
        </div>
        <input type="text" placeholder="جستجو کنید..." class="bg-[#D9D9D9] w-full rounded-full dir-rtl px-2 placeholder-black">
      </div>
      <!--------------------#endregion-------------------->
      <!--------------------#region Navigation Icons Box-------------------->
      <div class="h-full p-2 ml-5 flex rounded-full bg-black dark:bg-white ">
        <icon :name="(colorMode.value == 'dark') ? 'ph:moon-stars-fill' : 'ph:sun-fill' "  @click="changeColor" class="mx-1 hover-anim-l text:text-steel-800 dark:white" />
        <icon name="ph:music-notes-fill"  class="mx-1 hover-anim-l "  />
        <icon name="ph:lightbulb-fill" class="mx-1 hover-anim-l    " />
        <icon name="mage:whatsapp-filled" class="mx-1 hover-anim-l " />
        <icon name="ic:outline-telegram"  class="mx-1 hover-anim-l " />
      </div>
      <!--------------------#endregion-------------------->
      <!--------------------#region Navigation Weather Box-------------------->
      <div class="bg-black rounded-full w-8 h-8 ml-5 flex justify-center items-center">
        <icon name="fluent:weather-partly-cloudy-day-48-filled"  style="color: white" class="mx-1" />
      </div>
      <!--------------------#endregion-------------------->
    </div>
    <!--------------------#endregion-------------------->
  </div>
  <!--------------------#endregion-------------------->

  <!--------------------#region Navigation/Mobile-------------------->
  <div class="justify-between w-full h-10 px-2 my-3 flex items-center sm:hidden">
    <!--------------------#region Navigation-------------------->
    <div class="w-1/2 h-full flex justify-start items-center">
      <!--------------------#region Logo-------------------->
      <nuxt-link to="/" class="h-full">
        <img src="/img/logo.png" alt="logo" class="w-16 h-full object-contain">
      </nuxt-link>
      <!--------------------#endregion-------------------->
    </div>
    <!--------------------#region Menu Bar-------------------->
    <div class="w-1/2 h-full flex justify-end items-center" @click="isMobileMenuOpen = true">
      <icon name="pajamas:hamburger" size="30" class="mx-1 text-black dark:text-white" />
    </div>
    <!--------------------#endregion-------------------->
   <!--------------------#endregion-------------------->
  </div>
  <!--------------------#endregion-------------------->

  <!--------------------#region Menu Bar Inside-------------------->
  <div class="w-1/2 h-full flex justify-start dir-ltr">
    <!--------------------#region Menu Bar Inside/Language Piker------------------
    <div class="bg-[#F7D904] rounded-full w-8 h-8 flex justify-center items-center">
      <span>FA</span>
    </div>
    ------------------#endregion------------------
   ------------------#region Menu Bar Inside/Search Input------------------
    <div class="bg-[#D9D9D9] w-48 h-full ml-5 flex rounded-full">
      <div class="bg-[#F7D904] rounded-full w-8 h-8 flex justify-center items-center">
        <icon name="ic:baseline-search"  style="color: black" class="mx-1" />
      </div>
      <input type="text" placeholder="جستجو کنید..." class="bg-[#D9D9D9] w-full rounded-full dir-rtl px-2 placeholder-black">
    </div>
    ------------------#endregion-------------------->
    <!--------------------#region Menu Bar Inside/Items-------------------->
    <div class="w-[80vw] h-screen top-0 flex flex-col fixed z-50 bg-slate-200 dark:bg-slate-800 p-3 anim" :class="(isMobileMenuOpen) ? 'left-0' : '-left-[80vw]' ">
      <!--------------------#region Menu Bar Inside/Closing Icon-------------------->
      <icon name="clarity:close-line" size="30" class="mx-1 text-black dark:text-white" @click="isMobileMenuOpen = false" />
      <!------------------#endregion------------------>
      <!--------------------#region Menu Bar Inside/Navigation Items-------------------->
      <div class="w-full grid grid-cols-1 gap-5 mt-10 Estedad_FD_Bold  text-black dark:text-white">
      <nuxt-link to="/" class="cursor-pointer hover-anim-d">  خانه  </nuxt-link>
      <nuxt-link to="/" class="cursor-pointer hover-anim-d">  بازرگانان خارجی  </nuxt-link>
      <nuxt-link to="/" class="cursor-pointer hover-anim-d">  ارتباط با ما  </nuxt-link>
      <nuxt-link to="/" class="cursor-pointer hover-anim-d">  درباره ما  </nuxt-link>
      </div>
    <!------------------#endregion------------------>
    </div>
    <!--------------------#endregion-------------------->
  </div>
  <!--------------------#endregion-------------------->

  <!--------------------#region Main Body-------------------->
  <div class=" w-full grid grid-cols-12">
    <!--------------------#region Main Top-------------------->
    <div class="col-span-12 sm:col-span-7 p-2">
      <!--------------------#region Black Text Box-------------------->
      <div class="bg-[#1E1E1E] text-white dark:text-[#1E1E1E] dark:bg-white h-full rounded-3xl flex flex-col justify-around p-5">
        <!--------------------#region Black Box Top-------------------->
        <div class="w-full mb-5 flex items-center">
          <!--------------------#region Yellow and White Logo Box-------------------->
          <div class="w-8 h-8 flex">
            <div class="bg-white w-1/2 h-full border-[#1E1E1E] border-l-2"></div>
            <div class="bg-yellow-400 w-1/2 h-full "></div>
          </div>
          <!--------------------#endregion-------------------->
          <!--------------------#region Online Time Line-------------------->
          <div class="flex items-center mr-3">
            <span>{{todayDate}}</span>
            <Icon name="ph:globe-light" style="color: white" class="mx-1" />
            <span>{{time}}</span>
          </div>
          <!--------------------#endregion-------------------->
        </div>
        <!--------------------#endregion-------------------->
        <!--------------------#region Black Box Middle Text-------------------->
        <div class="w-full flex flex-col mb-5 ">
        <span class="Estedad_FD_Bold mb-3 sm:text-7xl text-4xl">
          معـامـلات خـودت رو
        </span>
          <span class="Estedad_FD_Bold sm:text-7xl text-4xl">
             تـقـویـت کـن
          </span>
        </div>
        <div class="w-full mb-8 sm:text-xl text-md">
          <span>
         هوشـمند خریـد کن...
        </span>
        </div>
        <!--------------------#endregion-------------------->
        <!--------------------#region Black Box Bottom Button-------------------->
        <a href="https://v2.20visions.ir/" target="_blank" class="w-full flex justify-center ">
          <div class="bg-white text-black dark:text-white dark:bg-[#1E1E1E] w-auto rounded-full px-3 py-2 text-xl flex text-center justify-center items-center transition-all duration-300 hover:-translate-y-4">
            <Icon name="tabler:dots" class="text-black dark:text-white" />
          <span class="mx-3">
              پنل کاربری
          </span>
            <Icon name="tabler:dots" class="text-black dark:text-white" />
          </div>
        </a>
        <!--------------------#endregion-------------------->
      </div>
      <!--------------------#endregion-------------------->
    </div>
    <!--------------------#endregion-------------------->

    <!--#region image box-->
    <div class="col-span-12 sm:col-span-5 p-2 ">
      <div class="bg-black text-white relative sm:h-[60vh] h-[30vh] rounded-3xl">
        <!--#region building image-->
        <img src="/img/sample1.jpg" alt="sample1" class="w-full h-full object-cover rounded-3xl">
        <!--#endregion-->
        <!--#region top black and white button-->
        <div class="bg-black rounded-full sm:w-12 w-8 h-8 flex justify-center items-center absolute top-5 left-5">
          <div class="bg-white rounded-full sm:w-6 w-6 h-6  animate-pulse"></div>
        </div>
        <!--#endregion-->
        <!--#region bottom pause button-->
        <div class="backdrop-blur-md bg-white/30 rounded-full sm:w-12 w-8 h-8  flex justify-center items-center absolute bottom-5 left-5">
          <Icon name="ph:pause-fill" style="color: white" />
        </div>
        <!--#endregion-->
        <!--#region play button-->
        <div class="backdrop-blur-md bg-white/30 rounded-full sm:w-28 w-20 h-8 flex justify-center items-center absolute bottom-5 left-20">
          <Icon name="tabler:dots" style="color: white" size="30"/>
          <Icon name="tabler:dots" style="color: white" size="30"/>
        </div>
        <!--#endregion-->
      </div>
    </div>
    <!--#endregion-->
  </div>
  <!--#endregion-->

  <!--------------------#region Bottom-------------------->
  <div class=" w-full grid grid-cols-12">
    <!--------------------#region Blue Photo Slider-------------------->
    <div class="col-span-12 sm:col-span-7 p-2 w-full">
      <div class="bg-gradient-to-r from-[#106ECE] to-[#0A83FD] text-white h-56  rounded-3xl"></div>
    </div>
    <!--------------------#endregion-------------------->
    <!--------------------#region Black Box-------------------->
    <div class="col-span-12 sm:col-span-5 p-2">
      <div class="bg-[#1E1E1E] text-white dark:text-[#1E1E1E] dark:bg-white h-56 rounded-3xl flex justify-around items-center gap-6 p-7">
        <!--------------------#region Red News Box-------------------->
        <div class="bg-[#B40000] rounded-3xl w-1/3 h-full">
          <img src="/img/sample2.png"  alt="sample2" class="w-full h-full object-contain  rounded-3xl">
        </div>
        <!--------------------#endregion-------------------->
        <!--------------------#region Middle Website Photos-------------------->
        <div class="bg-sky-500 rounded-3xl w-1/3 h-full">
          <img src="/img/sample3.jpg"  alt="sample3" class="w-full h-full object-cover rounded-3xl">
        </div>
        <!--------------------#endregion-------------------->
        <!--------------------#region Chart Box-------------------->
        <div class="bg-white rounded-3xl w-1/3 h-full">
          <img v-if="layer=='sample4'"  alt="sample4" src="/img/sample4.jpg" class="w-full h-full object-contain rounded-3xl">
          <img v-if="layer=='sample10'"  alt="sample10" src="/img/sample10.png"  class="w-full h-full object-contain rounded-3xl">
        </div>
        <!--------------------#endregion-------------------->
      </div>
    </div>
    <!--------------------#endregion-------------------->
  </div>
  <!--------------------#endregion-------------------->
</div>
  <!--------------------#endregion-------------------->

</template>

<style scoped>
.hover-anim-l { @apply cursor-pointer transition-all duration-500 hover:-translate-y-1  hover:text-amber-400 text-white dark:text-black;}
.hover-anim-d { @apply cursor-pointer transition-all duration-500 hover:-translate-y-1  hover:text-amber-400 text-black dark:text-white;}

.bg-light {
  background-image: url('/img/bg-light.jpg');
}

.bg-dark {
  background-image: url('/img/bg-dark.png');
}
.anim {
  @apply transition-all duration-700;
}
</style>