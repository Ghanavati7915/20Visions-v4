<script setup lang="ts">

//#region Variables
// Track the active div
const activeDiv = ref("info"); // Default to the 'info' div
//#endregion

//#region Functions
const changeDiv = (divName: "info" | "login" | "question" | "finish") => {
  activeDiv.value = divName;
};
//#endregion
</script>

<template>
  <div class="w-screen h-screen bg-gray-300 grid items-center dir-rtl Estedad_FD_Light text-xs">

    <!--------------------#region Info-------------------->
    <SurveyStepInfo v-if="activeDiv === 'info'" @onNext="changeDiv('login')"/>
    <!--------------------#endregion-------------------->

    <!--------------------#region login-------------------->
    <SurveyStepLogin v-if="activeDiv === 'login'" @onNext="changeDiv('question')"/>
    <!--------------------#endregion-------------------->

    <!--------------------#region questions-------------------->
    <SurveyStepQuestions v-if="activeDiv === 'question'" @onNext="changeDiv('finish')"/>
    <!--------------------#endregion-------------------->

    <!--------------------#region finish-------------------->
    <SurveyStepFinish v-if="activeDiv === 'finish'"/>
    <!--------------------#endregion-------------------->

    <div class="logoHolder">
      <div class="logo">
        <img class="w-full h-full" src="/public/favicon.ico" alt="logo">
      </div>
      <span class="text-xs logoText"> تجارت الکترونیک 20 آفاق ایرانیان </span>
    </div>
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
