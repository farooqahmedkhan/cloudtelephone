<script setup>

</script>


<template>
  <div class="screen-4-2 pt-page ">
    <div class="key-feature-grid  grid p-7">
      <h4 class="text-primary text-center">Pick &amp; Mix Features</h4>
      <p class="font-regular text-center">Lorem ipsum dolor sit amet.</p>
      <div class="relative overflow-x-auto">
        <table class="w-full  border border-neutral-200 text-left text-sm font-light mt-6">
          <tbody>
            <tr class="border-b border-neutral-200 bg-black/[0.02] dark:order-white/10 whitespace-nowrap">
              <td class="px-6 py-4">
                <!-- Input Number -->
                <div class="flex gap-3 justify-center">
                  <button data-action="decrement"><i class="fa-solid fa-minus"></i></button>
                  <input type="text" value="0" class="form-control w-14 text-center">
                  <button data-action="increment"><i class="fa-solid fa-plus"></i></button>
                </div>
                <!-- End Input Number -->
              </td>
              <td class="px-6 py-4">
                <h6>Call center user </h6>
              </td>
              <td class="px-6 py-4 text-blue">$33/user/month</td>
            </tr>
            <tr class="border-b border-neutral-200 bg-black/[0.02] dark:order-white/10 whitespace-nowrap">
              <td class="px-6 py-4">

                <form class="max-w-sm mx-auto">
                  <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select
                    an
                    option</label>
                  <select id="countries"
                    class="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option selected>Choose a country</option>
                    <option value="US">United States</option>
                    <option value="CA">Canada</option>
                    <option value="FR">France</option>
                    <option value="DE">Germany</option>
                  </select>
                </form>

              </td>
              <td class="px-6 py-4">
                <h6>Call center user </h6>
              </td>
              <td class="px-6 py-4 text-blue">$33/user/month</td>
            </tr>
            <tr class="border-b border-neutral-200 bg-black/[0.02] dark:order-white/10 whitespace-nowrap">
              <td class="px-6 py-4">
                <div class="switch">
                  <label class="flex items-center relative w-max cursor-pointer select-none">
                    <input type="checkbox"
                      class="appearance-none transition-colors cursor-pointer w-14 h-7 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-blue-500 bg-red-500" />
                    <span class="absolute font-medium text-xs uppercase right-1 text-white"> OFF </span>
                    <span class="absolute font-medium text-xs uppercase right-8 text-white"> ON </span>
                    <span class="w-7 h-7 right-7 absolute rounded-full transform transition-transform bg-gray-200" />
                  </label>
                </div>

              </td>
              <td class="px-6 py-4">
                <h6>Call center user </h6>
              </td>
              <td class="px-6 py-4 text-blue">$33/user/month</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
    <div class="w-100 flex justify-between p-7">
      <button @click="$emit('onClickPrev')"
        class="btn text-white rounded-full bg-theme-dark mt-10  bg-opacity-75 text-lg">Previous</button>
      <button @click="$emit('onClickNext')" class="btn btn-green mt-10 text-lg">Next</button>
    </div>
  </div>
</template>
