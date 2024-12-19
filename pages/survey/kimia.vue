<script setup lang="ts">

//#region Variables
// Track the active div
const activeDiv = ref("step1"); // Default to the 'info' div
const productList = ref<any[]>([]);
//#endregion

//#region Functions
const changeDiv = (divName: string) => {
  activeDiv.value = divName;
};
//#endregion
</script>

<template>
  <div class="bg-[#E6E6E6] grid items-center dir-rtl Estedad_FD_Light text-xs">

    <!--------------------#region Info-------------------->
    <SurveyKimiaStepStep1 v-if="activeDiv === 'step1'" @onNext="changeDiv('step2')"/>
    <!--------------------#endregion-------------------->

    <!--------------------#region Properties-------------------->
    <SurveyKimiaStepStep2 v-if="activeDiv === 'step2'" @onNext="changeDiv('step3')"  @onList="(data:any)=>{productList = data}"/>
    <!--------------------#endregion-------------------->

    <!--------------------#region editing-------------------->
    <SurveyKimiaStepStep3  v-if="activeDiv === 'step3'" @onNext="changeDiv('step4')" :items="productList" @onList="(data:any)=>{productList = data}"/>
    <!--------------------#endregion-------------------->

    <!------------------#region Questions------------------>
    <SurveyKimiaStepStep4 v-if="activeDiv === 'step4'" @onNext="changeDiv('step5')" @onList="(data:any)=>{productList = data}" :items="productList" />
    <!------------------#endregion------------------>

    <!------------------#region finish-------------------->
    <SurveyKimiaStepStep5 v-if="activeDiv === 'step5'"/>
    <!--------------------#endregion-------------------->


<!--    <div class="logoHolder">
      <div class="logo">
        <img class="w-full h-full" src="/public/favicon.ico" alt="logo">
      </div>
      <span class="text-xs logoText"> تجارت الکترونیک 20 آفاق ایرانیان </span>
    </div>-->
  </div>
</template>

<style scoped>
.flex {
  display: flex;
  gap: 1rem;
}

.logoHolder{
  @apply fixed top-8 right-8 flex flex-col items-center justify-center text-center;
  gap: 0 !important;

  .logo{
    @apply w-16 h-16 flex flex-col m-auto text-center items-center justify-center ;
    gap: 0 !important;

    img{
      animation: rotation 5s infinite linear;
    }
  }

  .logoText{
    @apply w-full m-auto text-center items-center justify-center text-xs;
  }

}



@keyframes rotation {
  100%{ transform:rotatey(360deg); }
}

</style>
