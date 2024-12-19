<script setup lang="ts" xmlns="http://www.w3.org/1999/html">

const emit = defineEmits(['onNext'])

const prop =  defineProps(['items'])

const gotoNext = () => {
  emit('onNext')
}

const form = ref<any>({
  title : '',
  price : '',
  description : '',
  pay : '',
})

const selectRow = (item:any)=>{
  console.log('index   : ' , item)
  form.value.title = item.title
  form.value.price = item.price
  form.value.pay =item.pay
  form.value.description = item.description
}



</script>

<template>
  <section class="container p-5 mx-auto min-h-screen">
    <div class="flex sm:items-center text-lg text-center w-full justify-center">
        همکار گرامی در صورت تمایل میتوانید با انتخاب هر کدام از محصولات زیر اطلاعات آن را ویرایش و تکمیل نمایید.
    </div>

<!--------------------#region Form-------------------->
    <div class="flex flex-col mt-6 justify-around">

      <div class="bg-white rounded-sm flex gap-3 p-4 items-center justify-around">
        <div>
          <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="text">عنوان</label>
          <input v-model="form.title" class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="email" name="text" />
        </div>

        <div>
          <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="text">قیمت</label>
          <input v-model="form.pay" class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="email" name="text" />
        </div>

        <div>
          <button class="ring-offset-background focus-visible:ring-ring flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-[#1e1e1e] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#1e1e1e]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" type="submit"> ثبت </button>
        </div>
      </div>

      <div class="bg-gray-200 rounded-sm flex gap-3 p-4 items-center justify-around">
        <div>
          <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="text">عنوان</label>
          <input v-model="form.title" class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="email" name="text" />
        </div>

        <div>
          <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="text">قیمت</label>
          <input v-model="form.pay" class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="email" name="text" />
        </div>

        <div>
          <button class="ring-offset-background focus-visible:ring-ring flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-[#1e1e1e] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#1e1e1e]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" type="submit"> ثبت </button>
        </div>
      </div>

      <div class="bg-white rounded-sm flex gap-3 p-4 items-center justify-around">
        <div>
          <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="text">عنوان</label>
          <input v-model="form.title" class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="email" name="text" />
        </div>

        <div>
          <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="text">قیمت</label>
          <input v-model="form.pay" class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="email" name="text" />
        </div>

        <div>
          <button class="ring-offset-background focus-visible:ring-ring flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-[#1e1e1e] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#1e1e1e]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" type="submit"> ثبت </button>
        </div>
      </div>

      <div class="bg-gray-200 rounded-sm flex gap-3 p-4 items-center justify-around">
        <div>
          <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="text">عنوان</label>
          <input v-model="form.title" class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="email" name="text" />
        </div>

        <div>
          <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="text">قیمت</label>
          <input v-model="form.pay" class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="email" name="text" />
        </div>

        <div>
          <button class="ring-offset-background focus-visible:ring-ring flex h-10 w-full items-center justify-center whitespace-nowrap rounded-md bg-[#1e1e1e] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#1e1e1e]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" type="submit"> ثبت </button>
        </div>
      </div>

    </div>
    <!--------------------#endregion-------------------->

      <!-- component -->
      <!-- Main container -->
      <div class="bg-white">
        <!-- Flex container for centering items -->
        <div class="flex  flex-col items-center justify-center">
          <!-- Container for login form -->
          <div class="max-h-auto mx-auto max-w-xl">

            <!-- Login form -->
            <div class="w-full">
              <div class="mb-10 space-y-3">
                <div class="space-y-1">
                  <div class="space-y-2">
                    <!-- Email label and input field -->
                  </div>
                </div>
                <!-- Login button -->
              </div>
            </div>
          </div>
        </div>
      </div>


    <div class="flex flex-col mt-6">
      <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div class="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead class="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th scope="col" class="px-4 py-3.5 text-sm font-normal text-right text-gray-500 dark:text-gray-400">
                  عنوان محصول
                </th>

                <th scope="col" class="px-4 py-3.5 text-sm font-normal text-right text-gray-500 dark:text-gray-400">
                  قیمت ( تقریب )
                </th>

                <th scope="col" class="px-4 py-3.5 text-sm font-normal text-right text-gray-500 dark:text-gray-400">
                  نحوه تسویه حساب
                </th>

                <th scope="col" class="px-4 py-3.5 text-sm font-normal text-right text-gray-500 dark:text-gray-400">
               شرح و تعریف
                </th>
                <th scope="col" class="px-4 py-3.5 text-sm font-normal text-right text-gray-500 dark:text-gray-400">
                  عملیات
                </th>
              </tr>
              </thead>

              <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
              <tr class="hover:bg-slate-200 cursor-pointer" v-for="(item , i) in items" :key="`table_${i}`" @dblclick="selectRow(item)">
                <td class="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                  <h2 class="font-normal text-gray-800 dark:text-white ">{{item.title}}</h2>
                </td>
                <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{{item.price}}</td>
                <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap"> {{item.pay}} </td>
                <td class="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{{item.description}}</td>
                <td class="px-4 py-4 text-sm whitespace-nowrap">
                  <button class="px-1 py-1 text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-100">
                    <Icon name="fluent:delete-32-light"  class="text-xl" />
                  </button>
                </td>
              </tr>
              </tbody>

            </table>
          </div>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-between mt-6">
      <div class="flex items-center px-5 py-2 text-sm text-white capitalize transition-colors duration-200
       bg-[#1e1e1e] border rounded-md gap-x-2 hover:bg-text-white dark:bg-text-white dark:text-text-white dark:border-text-white
        dark:hover:bg-text-white cursor-pointer">
        <Icon name="solar:arrow-right-bold-duotone" width="30" height="30" />
        <span>
                قبلی
            </span>
      </div>

      <div class="flex items-center px-5 py-2 text-sm text-white capitalize transition-colors duration-200
       bg-[#1e1e1e] border rounded-md gap-x-2 hover:bg-text-white dark:bg-text-white dark:text-text-white dark:border-text-white
        dark:hover:bg-text-white cursor-pointer" @click="gotoNext">
            <span>
                بعدی
            </span>
        <Icon name="solar:arrow-left-bold-duotone" width="30" height="30" />
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>