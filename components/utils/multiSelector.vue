<script setup lang="ts">
const props = defineProps(['options'])
const emit = defineEmits(['select'])

let items = ref(props.options);

watch(() => items.value, async () => {
  emit('select',items.value)
},{deep:true,immediate:true});

</script>

<template>
  <label v-for="(item , j) in items" :key="j" :for="`item-${item.id}`" class="relative flex flex-col bg-white dark:bg-slate-800 p-5 rounded-sm border border-slate-200 cursor-pointer">
    <span class="font-bold text-gray-900 dark:text-white"> <span class="text-sm">{{item.text}}</span> </span>

    <input type="checkbox" name="plan" :id="`item-${item.id}`" :value="item.value" v-model="item.isSelected" class="absolute h-0 w-0 appearance-none" />

    <span aria-hidden="true" class="hidden absolute inset-0 border-2 border-green-500 bg-green-200 bg-opacity-10 rounded-sm">
            <span class="absolute top-4 left-4 h-6 w-6 inline-flex items-center justify-center rounded-full bg-green-200">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-green-600">
                <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
              </svg>
            </span>
          </span>
  </label>
</template>

<style scoped>
input[type="checkbox"]:checked + span {
  display: block;
}

/* You can use @apply when moving this into your tailwind css file, like so */
/*
input[type="radio"]:checked + span {
  @apply block;
}
*/
</style>
