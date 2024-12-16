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

const isMobileMenuOpen = ref<boolean>(false);

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


import {EffectCoverflow, Pagination, Autoplay , Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
const modules = [EffectCoverflow, Pagination, Autoplay , Navigation ];
const coverflowEffect = {
  rotate: 50,
  stretch: 0,
  depth: 100,
  modifier: 1,
  slideShadows: true,
}
let items:any[] = [{url:'/img/sample5.jpg'},{url:'/img/sample6.jpg'},{url:'/img/sample7.jpg'}]

</script>

<template>
  <!--------------------#region Main-------------------->
  <div class="w-screen h-screen  Estedad_FD_Light dir-rtl flex flex-col justify-around" :class="(colorMode.value == 'light') ? 'bg-light' : 'bg-dark'">
    <!--------------------#region Navigation/Desktop-------------------->
    <div class="justify-between w-full h-10 px-2 pt-2 hidden sm:flex">
      <!--------------------#region Navigation-------------------->
      <div class="w-1/2 h-full flex justify-start items-center">
        <!--------------------#region Navigation Logo-------------------->
        <nuxt-link to="/">
          <img :src="(colorMode.value == 'dark') ? '/img/logo123.png' :  '/img/logo.png'" alt="logo" class="w-16 h-16 object-contain">
        </nuxt-link>
        <!--------------------#endregion-------------------->
        <!--------------------#region Navigation Items-------------------->
        <div class=" w-full flex justify-around Estedad_FD_Bold  text-[#1e1e1e] dark:text-[#fefefe]">
          <nuxt-link to="/" class="cursor-pointer">  خانه  </nuxt-link>
          <nuxt-link to="/" class="cursor-pointer">   دپارتمان شرکت  </nuxt-link>
          <nuxt-link to="/" class="cursor-pointer">  ارتباط با ما  </nuxt-link>
          <nuxt-link to="/" class="cursor-pointer">  درباره ما  </nuxt-link>
          <nuxt-link to="/survey/steel" class="cursor-pointer hover-anim-d">  فرم شماره 1  </nuxt-link>
          <nuxt-link to="/survey/kimia" class="cursor-pointer hover-anim-d">  فرم شماره 2  </nuxt-link>
        </div>
        <!--------------------#endregion-------------------->
      </div>
      <!--------------------#endregion-------------------->


      <!--------------------#region Navigation Boxes-------------------->
      <div class="w-1/2 h-full flex justify-start dir-ltr">
        <!--------------------#region Navigation Language Piker-------------------->
        <div class="bg-[#cc3333] rounded-full w-8 h-8 flex justify-center items-center">
          <span>FA</span>
        </div>
        <!--------------------#endregion-------------------->
        <!--------------------#region Navigation Search Input-------------------->
        <div class="bg-[#1e1e1e] dark:bg-[#fefefe] w-48 h-full ml-5 flex rounded-full">
          <div class="bg-[#cc3333] rounded-full w-8 h-8 flex justify-center items-center">
            <icon name="ic:baseline-search"  style="color: #1e1e1e" class="mx-1" />
          </div>
          <input type="text" placeholder="جستجو کنید..." class="bg-[#1e1e1e] dark:bg-[#fefefe] w-full rounded-full dir-rtl px-2 placeholder-[#fefefe] dark:placeholder-[#1e1e1e]">
        </div>
        <!--------------------#endregion-------------------->
        <!--------------------#region Navigation Icons Box-------------------->
        <div class="h-full p-2 ml-5 flex rounded-full bg-[#1e1e1e] dark:bg-[#fefefe] ">
          <icon :name="(colorMode.value == 'dark') ? 'solar:moon-fog-bold-duotone' : 'solar:sun-fog-bold-duotone' "  @click="changeColor" class="mx-1 hover-anim-l text-gray-700 dark:text-[#fefefe]" />
          <icon name="solar:microphone-2-bold-duotone"  class="mx-1 hover-anim-l "  />
          <icon name="solar:lightbulb-bold-duotone" class="mx-1 hover-anim-l    " />
          <icon name="stash:social-whatsapp-duotone" class="mx-1 hover-anim-l " />
          <icon name="uim:telegram"  class="mx-1 hover-anim-l " />
        </div>
        <!--------------------#endregion-------------------->
        <!--------------------#region Navigation Weather Box-------------------->
        <div class="bg-[#1e1e1e] dark:bg-[#fefefe] rounded-full w-8 h-8 ml-5 flex justify-center items-center ">
          <icon name="solar:user-rounded-bold-duotone" :style="`color:${(colorMode.value == 'light') ? 'white' : 'black'}`" class="mx-1 hover-anim-l" />
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
        <nuxt-link to="/">
          <img :src="(colorMode.value == 'dark') ? '/img/logo123.png' :  '/img/logo.png'" alt="logo" class="w-16 h-16 object-contain">
        </nuxt-link>
        <!--------------------#endregion-------------------->
      </div>
      <!--------------------#region Menu Bar-------------------->
      <div class="w-1/2 h-full flex justify-end items-center">
        <icon name="pajamas:hamburger" size="30" class="mx-1 text-[#1e1e1e] dark:text-[#fefefe]"
              @click="isMobileMenuOpen = true" />
      </div>
      <!--------------------#endregion-------------------->
      <!--------------------#endregion-------------------->
    </div>
    <!--------------------#endregion-------------------->

    <!--------------------#region Menu Bar Inside-------------------->
    <div class="w-1/2 h-full flex justify-start dir-ltr">
      <!--------------------#region Menu Bar Inside/Items-------------------->
      <div class="w-[80vw] h-screen top-0 flex flex-col fixed z-50 dark:bg-[#373737] bg-[#BCBCBC] p-3 anim" :class="(isMobileMenuOpen) ? 'left-0' : '-left-[80vw]' ">
        <!--------------------#region Menu Bar Inside/Top-------------------->
        <div class="flex justify-between items-center text-center text-[#1e1e1e] dark:text-[#fefefe]">
          <!--------------------#region Menu Bar Inside/Closing Icon-------------------->
          <icon name="clarity:close-line" size="30" class="m-3 flex justify-center items-center text-[#1e1e1e] dark:text-[#fefefe]" @click="isMobileMenuOpen = false" />
          <!------------------#endregion------------------>
          <!--------------------#region Menu Bar Inside/Top-------------------->
          <div class="text-[#1e1e1e] dark:text-[#fefefe]">
            تجارت الکترونیک 20 آفاق ایرانیان
          </div>
          <!------------------#endregion------------------>
        </div>
        <!------------------#endregion------------------>
        <!--------------------#region Navigation Search Input-------------------->
        <div class="bg-[#fefefe] mt-3 flex rounded-full">
          <div class="bg-[#cc3333] rounded-full w-16 h-10 flex justify-center items-center">
            <icon name="ic:baseline-search"  style="color: #1e1e1e" class="mx-1" />
          </div>
          <input type="text" placeholder="جستجو کنید..." class="bg-[#fefefe] w-full rounded-full dir-rtl px-2 placeholder-[#fefefe] dark:placeholder-[#1e1e1e]">
        </div>
        <!--------------------#endregion-------------------->
        <!--------------------#region Navigation Icons Box-------------------->
        <div class="p-2 w-full mt-4 flex justify-around items-center rounded-full bg-[#1e1e1e] dark:bg-[#fefefe] ">
          <icon :name="(colorMode.value == 'dark') ? 'ph:moon-stars-fill' : 'ph:sun-fill' "  @click="changeColor" class="mx-1 hover-anim-l text:text-steel-800 dark:white" />
          <icon name="ph:music-notes-fill"  class="mx-1 hover-anim-l "  />
          <icon name="ph:lightbulb-fill" class="mx-1 hover-anim-l    " />
          <icon name="mage:whatsapp-filled" class="mx-1 hover-anim-l " />
          <icon name="ic:outline-telegram"  class="mx-1 hover-anim-l " />
        </div>
        <!--------------------#endregion-------------------->

        <!--------------------#region Menu Bar Inside/Navigation Items-------------------->
        <div class="w-full grid grid-cols-1 gap-8 mt-10 Estedad_FD_Bold text-right px-5 text-[#1e1e1e] dark:text-[#fefefe]">
          <nuxt-link to="/" class="cursor-pointer hover-anim-d">  خانه  </nuxt-link>
          <nuxt-link to="/" class="cursor-pointer hover-anim-d">  بازرگانان خارجی  </nuxt-link>
          <nuxt-link to="/" class="cursor-pointer hover-anim-d">  ارتباط با ما  </nuxt-link>
          <nuxt-link to="/" class="cursor-pointer hover-anim-d">  درباره ما  </nuxt-link>
          <nuxt-link to="/survey/steel" class="cursor-pointer hover-anim-d">  فرم شماره 1  </nuxt-link>
          <nuxt-link to="/survey/kimia" class="cursor-pointer hover-anim-d">  فرم شماره 2  </nuxt-link>
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
        <div class="bg-[#1E1E1E] text-[#fefefe] dark:text-[#1E1E1E] dark:bg-[#fefefe] h-full rounded-3xl flex flex-col justify-around p-5">
          <!--------------------#region Black Box Top-------------------->
          <div class="w-full mb-5 flex items-center">
            <!--------------------#region Yellow and White Logo Box-------------------->
            <div class="w-8 h-8 flex">
              <div class="anim1 bg-[#fefefe] dark:bg-[#1e1e1e] w-1/2 h-full border-[#1E1E1E] dark:border-[#fefefe] border-l-2"></div>
              <div class="anim2 bg-[#cc3333] w-1/2 h-full "></div>
            </div>
            <!--------------------#endregion-------------------->
            <!--------------------#region Online Time Line-------------------->
            <div class="flex items-center mr-3">
              <span>{{todayDate}}</span>
              <Icon name="ph:globe-light" style="color: #fefefe" class="mx-1" />
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
            <div class="bg-[#fefefe] text-[#1e1e1e] dark:text-[#fefefe] dark:bg-[#1E1E1E] w-auto rounded-full
             px-3 py-2 text-xl flex text-center justify-center items-center transition-all duration-300 hover:-translate-y-4">
              <Icon name="entypo:dot-single" width="24" height="24" class="text-[#1e1e1e] dark:text-[#fefefe]"/>
              <Icon name="radix-icons:dot-filled" width="24" height="24" class="text-[#1e1e1e] dark:text-[#fefefe]"/>
              <Icon name="oui:dot" width="24" height="24" class="text-[#1e1e1e] dark:text-[#fefefe]" />
              <span class="mx-3">
              پنل کاربری
          </span>
              <Icon name="oui:dot" width="24" height="24" class="text-[#1e1e1e] dark:text-[#fefefe]" />
              <Icon name="radix-icons:dot-filled" width="24" height="24" class="text-[#1e1e1e] dark:text-[#fefefe]"/>
              <Icon name="entypo:dot-single" width="24" height="24" class="text-[#1e1e1e] dark:text-[#fefefe]"/>
            </div>
          </a>
          <!--------------------#endregion-------------------->
        </div>
        <!--------------------#endregion-------------------->
      </div>
      <!--------------------#endregion-------------------->

      <!--#region image box-->
      <div class="col-span-12 sm:col-span-5 p-2">
        <div class="bg-[#1e1e1e] text-[#fefefe] relative sm:h-[60vh] h-[30vh] rounded-3xl">
          <!--#region building image-->
          <div id="left-top-carousel" class="">
            <swiper
                dir="rtl"
                :pagination="true"
                :autoplay="{
                  delay: 3500,
                  disableOnInteraction: false,

                }"
                :modules="modules"
                class="mySwiper"
            >
              <swiper-slide> <img src="/img/One.jpg" alt="Image"> </swiper-slide>
              <swiper-slide> <img src="/img/Two.jpg" alt="Image"> </swiper-slide>
              <swiper-slide> <img src="/img/Three.jpg" alt="Image"> </swiper-slide>
              <swiper-slide> <img src="/img/Four.jpg" alt="Image"> </swiper-slide>
            </swiper>
          </div>
          <!--#endregion-->
          <!--#region top black and white button-->
          <div class="bg-[#1e1e1e] rounded-full w-10 h-8 flex justify-center items-center absolute top-5 left-5 z-50">
            <div class="bg-[#fefefe] rounded-full sm:w-6 w-6 h-6 animate-pulse"></div>
          </div>
          <!--#endregion-->

          <!--#region Pause and play button-->
          <div class="pause">
            <Icon name="carbon-pause-filled"></Icon>
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
        <div id="bluebox" class="bg-gradient-to-r from-[#1c39bb] to-[#455DC7] text-[#fefefe] h-56  rounded-3xl">

          <swiper
              :effect="'coverflow'"
              :grabCursor="true"
              :centeredSlides="true"
              :slidesPerView="'auto'"
              :coverflowEffect="{
      rotate: 45,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }"
              :pagination="true"
              :navigation="true"
              :cssMode="true"
              :modules="modules"
              class="mySwiper"
          >
            <swiper-slide>
              <img src="/img/One.jpg" />
            </swiper-slide>

            <swiper-slide>
            <img src="/img/Two.jpg" />
          </swiper-slide>

            <swiper-slide>
            <img src="/img/Three.jpg" />
            </swiper-slide>

            <swiper-slide>
              <img src="/img/Four.jpg" />
            </swiper-slide>

            <swiper-slide>
              <img src="/img/Five.jpg" />
            </swiper-slide>

            <swiper-slide>
              <img src="/img/Six.jpg" />
            </swiper-slide>

            <swiper-slide>
              <img src="/img/Seven.jpg" />
            </swiper-slide>

          </swiper>

        </div>
      </div>
      <!--------------------#endregion-------------------->
      <!--------------------#region Black Box-------------------->
      <div class="col-span-12 sm:col-span-5 p-2">
        <div class="bg-[#1E1E1E] text-[#fefefe] dark:text-[#1E1E1E] dark:bg-[#fefefe] h-56 rounded-3xl flex justify-around
        items-center gap-6 p-7">
          <!--------------------#region Red News Box-------------------->
          <div class="bg-[#cc3333] rounded-3xl w-1/3 h-full hover:opacity-75 transition delay-150 duration-200"></div>
          <!--------------------#endregion-------------------->
          <!--------------------#region Middle Website Photos-------------------->
          <div class="bg-[#1c39bb] rounded-3xl w-1/3 h-full hover:opacity-75 transition delay-150 duration-200"></div>
          <!--------------------#endregion-------------------->
          <!--------------------#region Chart Box-------------------->
            <div class="bg-[#fefefe] rounded-3xl w-1/3 h-full hover:opacity-75 transition delay-150 duration-200"></div>
        </div>
          <!--------------------#endregion-------------------->
      </div>
      <!--------------------#endregion-------------------->
    </div>
    <!--------------------#endregion-------------------->
  </div>
  <!--------------------#endregion-------------------->

</template>

<style scoped>
.hover-anim-l { @apply cursor-pointer transition-all duration-500 hover:-translate-y-1  hover:text-[#cc3333] text-[#fefefe] dark:text-[#1e1e1e];}
.hover-anim-d { @apply cursor-pointer transition-all duration-500 hover:-translate-y-1  hover:text-[#cc3333] text-[#1e1e1e] dark:text-[#fefefe];}

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

<style>
#left-top-carousel {
  @apply w-full h-full overflow-hidden rounded-3xl border-solid border-4 border-[#1e1e1e] dark:border-[#fefefe];
}
#left-top-carousel .swiper {
  width: 100%;
  height: 100%;
}
#left-top-carousel .swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fefefe;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}
#left-top-carousel .swiper-slide img {
  @apply h-full w-full object-cover;
  display: block;
}

#left-top-carousel .swiper-slide {
  @apply rounded-3xl;
  display: block;
}

#left-top-carousel .swiper-pagination {
  @apply rounded-3xl bg-[#fefefe] opacity-50 w-1/5 h-10 left-20 flex items-center justify-center z-50;
}
#left-top-carousel .swiper-pagination-bullet-active {
  background: #1e1e1e;
}
#bluebox .swiper {
  @apply w-full py-5 ;
}
#bluebox .swiper-slide {
  @apply w-40 h-full ;
}

#bluebox .swiper-slide img {
  @apply block w-40 h-40 object-cover;
}
.pause {
  @apply rounded-3xl bg-[#fefefe] opacity-50 w-10 h-10 left-5 flex items-center justify-center z-50 absolute bottom-3.5 text-[#1e1e1e];
}
.swiper-button-prev, .swiper-button-next {
  color: #fefefe;
}

@keyframes animation1 {
  0% {
    transform: translate(0, 0);
  }

  35% {
    transform: translate(0, 10px);
  }

  70% {
    transform: translate(0, -5px);
  }


  100% {
    transform: translate(0, 0);
  }
}

@keyframes animation2 {
  0% {
    transform: translate(0, 0);
  }

  35% {
    transform: translate(0, -10px);
  }

  70% {
    transform: translate(0, 5px);
  }

  100% {
    transform: translate(0, 0);
  }
}

.anim1 {
  animation: 4s ease-in-out infinite  animation1;
}

.anim2 {
  animation: 4s ease-in-out infinite  animation2;
}

.swiper-pagination-bullet-active {
  background-color: #fefefe;
}
</style>