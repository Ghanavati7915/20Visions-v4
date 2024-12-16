<script setup lang="ts">

//#region Variables
// Track the active div
const activeDiv = ref("info"); // Default to the 'info' div
const productList = ref<any[]>([]);
//#endregion

//#region Functions
const changeDiv = (divName: "info" | "products" | "question" | "finish") => {
  activeDiv.value = divName;
};
//#endregion
</script>

<template>
  <div class="bg-[#E6E6E6] grid items-center dir-rtl Estedad_FD_Light text-xs">

    <!--------------------#region Info-------------------->
    <SurveyKimiaStepInfo v-if="activeDiv === 'info'" @onNext="changeDiv('products')"/>
    <!--------------------#endregion-------------------->

    <!--------------------#region login-------------------->
    <SurveyKimiaStepProducts v-if="activeDiv === 'products'" @onNext="changeDiv('question')" @onList="(data:any)=>{productList = data}"/>
    <!--------------------#endregion-------------------->

    <!--------------------#region questions-------------------->
    <SurveyKimiaStepQuestions v-if="activeDiv === 'question'" :items="productList" @onNext="changeDiv('finish')"/>
    <!--------------------#endregion-------------------->

    <!--------------------#region finish-------------------->
    <SurveyKimiaStepFinish v-if="activeDiv === 'finish'"/>
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
