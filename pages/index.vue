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
</script>

<template>
  <!--#region Main-->
<div class="w-screen sm:h-screen Estedad_FD_Light dir-rtl flex flex-col justify-around" style="background-image: url('/img/bg-light.jpg')">

  <!--#region Navigation-->
  <!--#region Navigation Desktop-->
  <div class="justify-between w-full h-10 px-2 pt-2 hidden sm:flex">
    <div class="w-1/2 h-full flex justify-start items-center">
      <!--#region-Logo-image-->
      <nuxt-link to="/">
        <img src="/img/logo.png" class="w-16 h-full object-contain">
      </nuxt-link>
      <!--#endregion-->
      <!--#region Navigation items-->
      <div class="w-full justify-around Estedad_FD_Bold">
        <nuxt-link to="/" class="cursor-pointer">  خانه  </nuxt-link>
        <nuxt-link to="/" class="cursor-pointer">  بازرگانان خارجی  </nuxt-link>
        <nuxt-link to="/" class="cursor-pointer">  ارتباط با ما  </nuxt-link>
        <nuxt-link to="/" class="cursor-pointer">  درباره ما  </nuxt-link>
      </div>
      <!--#endregion-->
    </div>

    <!--#region Left Navigation-->
    <!--#region Button piker-->
    <div class="w-1/2 h-full flex justify-start dir-ltr">
      <div class="bg-[#F7D904] rounded-full w-8 h-8 flex justify-center items-center">
        <span>FA</span>
      </div>
      <!--#endregion-->
      <!--#region search box input-->
      <div class="bg-[#D9D9D9] w-48 h-full ml-5 flex rounded-full">
        <div class="bg-[#F7D904] rounded-full w-8 h-8 flex justify-center items-center">
          <icon name="ic:baseline-search"  style="color: black" class="mx-1" />
        </div>
        <input type="text" placeholder="جستجو کنید..." class="bg-[#D9D9D9] w-full rounded-full dir-rtl px-2 placeholder-black">
      </div>
      <!--#endregion-->
      <!--#region icon box-->
      <div class="bg-black h-full p-2 ml-5 flex rounded-full">
        <icon name="ph:moon-stars-fill" class="mx-1 hover-anim" />
        <icon name="ph:sun-fill" class="mx-1 hover-anim" />
        <icon name="ph:music-notes-fill"  class="mx-1 hover-anim" />
        <icon name="ph:lightbulb-fill" class="mx-1 hover-anim" />
        <icon name="mage:whatsapp-filled" class="mx-1 hover-anim" />
        <icon name="ic:outline-telegram"  class="mx-1 hover-anim" />
      </div>
      <!--#endregion-->
      <!--#region weather box-->
      <div class="bg-black rounded-full w-8 h-8 ml-5 flex justify-center items-center">
        <icon name="fluent:weather-partly-cloudy-day-48-filled"  style="color: white" class="mx-1" />
      </div>
      <!--#endregion-->
    </div>
    <!--#endregion-->
  </div>
  <!--#endregion-->

  <!--#region Navigation Mobile-->
  <div class="justify-between w-full h-10 px-2 my-3 flex items-center sm:hidden">
    <div class="w-1/2 h-full flex justify-start items-center">
      <!--#region-Logo-image-->
      <nuxt-link to="/" class="h-full">
        <img src="/img/logo.png" class="w-16 h-full object-contain">
      </nuxt-link>
      <!--#endregion-->
    </div>
    <div class="w-1/2 h-full flex justify-end items-center">
      <icon name="pajamas:hamburger" size="30" style="color: black" class="mx-1" />
    </div>
  </div>
  <!--#endregion-->
  <!--#endregion-->

  <!--#region Main-->
  <!--#region Top-->
  <div class=" w-full grid grid-cols-12">
    <div class="col-span-12 sm:col-span-7 p-2">
      <!--#region black text box-->
      <div class="bg-[#1E1E1E] text-white h-full rounded-3xl flex flex-col justify-around p-5">
        <div class="w-full mb-5 flex items-center">
          <!--#endregion-->
          <!--#region yellow and white boxs-->
          <div class="w-8 h-8 flex">
            <div class="bg-white w-1/2 h-full border-black border-l-2"></div>
            <div class="bg-yellow-400 w-1/2 h-full "></div>
          </div>
          <!--#endregion-->
          <!--#region online time line-->
          <div class="flex items-center mr-3">
            <span>{{todayDate}}</span>
            <Icon name="ph:globe-light" style="color: white" class="mx-1" />
            <span>{{time}}</span>
          </div>
          <!--#endregion-->
        </div>
        <!--#endregion-->
        <!--#region big bold text-->
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
        <!--#endregion-->
        <!--#region user button-->
        <a href="https://v2.20visions.ir/" target="_blank" class="w-full flex justify-center ">
          <div class="bg-white text-black w-auto rounded-full px-3 py-2 text-xl flex text-center justify-center items-center transition-all duration-300 hover:-translate-y-4">
            <Icon name="tabler:dots" style="color: black" />
          <span class="mx-3">
              پنل کاربری
          </span>
            <Icon name="tabler:dots" style="color: black" />
          </div>
        </a>
        <!--#endregion-->
      </div>
      <!--#endregion-->
    </div>
    <!--#endregion-->

    <!--#region image box-->
    <div class="col-span-12 sm:col-span-5 p-2 ">
      <div class="bg-black text-white relative sm:h-[60vh] h-[30vh] rounded-3xl">
        <!--#region building image-->
        <img src="/img/sample1.jpg" class="w-full h-full object-cover rounded-3xl">
        <!--#endregion-->
        <!--#region top black and white button-->
        <div class="bg-black rounded-full sm:w-12 h-12 w-8 h-8 flex justify-center items-center absolute top-5 left-5">
          <div class="bg-white rounded-full sm:w-6 h-6 w-6 h-6  animate-pulse"></div>
        </div>
        <!--#endregion-->
        <!--#region bottom pause button-->
        <div class="backdrop-blur-md bg-white/30 rounded-full sm:w-12 h-12 w-8 h-8  flex justify-center items-center absolute bottom-5 left-5">
          <Icon name="ph:pause-fill" style="color: white" />
        </div>
        <!--#endregion-->
        <!--#region play button-->
        <div class="backdrop-blur-md bg-white/30 rounded-full sm:w-28 h-12 w-20 h-8 flex justify-center items-center absolute bottom-5 left-20">
          <Icon name="tabler:dots" style="color: white" size="30"/>
          <Icon name="tabler:dots" style="color: white" size="30"/>
        </div>
        <!--#endregion-->
      </div>
    </div>
  </div>
  <!--#endregion-->

  <!--#region buttom-->
  <div class=" w-full grid grid-cols-12">
    <!--#region blue photo slider-->
    <div class="col-span-12 sm:col-span-7 p-2 w-full">
      <div class="bg-gradient-to-r from-[#106ECE] to-[#0A83FD] text-white h-56  rounded-3xl"></div>
    </div>
    <!--#endregion-->
    <!--#region black news box-->
    <div class="col-span-12 sm:col-span-5 p-2">
      <div class="bg-[#1E1E1E] h-56 rounded-3xl flex justify-around items-center gap-6 p-7">
        <!--#endregion-->
        <!--#region news box-->
        <div class="bg-[#B40000] rounded-3xl w-1/3 h-full">
          <img src="/img/sample2.png" class="w-full h-full object-contain  rounded-3xl">
        </div>
        <!--#endregion-->
        <!--#region website photos-->
        <div class="bg-sky-500 rounded-3xl w-1/3 h-full">
          <img src="/img/sample3.jpg" class="w-full h-full object-cover rounded-3xl">
        </div>
        <!--#endregion-->
        <!--#region chart box-->
        <div class="bg-white rounded-3xl w-1/3 h-full">
          <img src="/img/sample4.jpg" class="w-full h-full object-contain rounded-3xl">
        </div>
        <!--#endregion-->
      </div>
    </div>
    <!--#endregion-->
  </div>
  <!--#endregion-->
  <!--#endregion-->


</div>
</template>

<style scoped>
.hover-anim { @apply cursor-pointer transition-all duration-500 hover:-translate-y-1  hover:text-amber-400 text-white;}
</style>