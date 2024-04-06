<script setup>

</script>

<template>
  <div id="" class="">
    <div>
      <div class="screen-4 pt-page current">
        <div class="key-feature-grid  grid p-7">
          <h4 class="text-primary text-center">App &amp; Unified Communication</h4>
          <p class="font-regular text-center">Lorem ipsum dolor sit amet.</p>
          <div class="relative overflow-x-auto">
            <table class="w-full  border border-neutral-200 text-left text-sm font-light mt-6">
              <tbody>
                <tr class="border-b border-neutral-200 bg-black/[0.02] dark:order-white/10 whitespace-nowrap">
                  <td class="px-6 py-4">
                    <h6>Lorem ipsum dolor. </h6>
                  </td>
                  <td class="px-6 py-4 text-blue">$33/month</td>
                  <td class="px-6 py-4 text-center"><input type="text" class="form-control w-14"></td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="my-5">
            <h4 class="text-dark text-center">What does this means?</h4>
            <p class="font-regular text-center">Lorem ipsum dolor sit amet.</p>

          </div>
          <div class="relative overflow-x-auto">
            <table class="w-full  border border-neutral-200 text-left text-sm font-light mt-6">
              <tbody>
                <tr class="border-b border-neutral-200 bg-black/[0.02] dark:order-white/10  whitespace-nowrap">
                  <th class="px-6 py-3"></th>
                  <th class="px-6 py-3 bg-gray-700 text-white">Softphone</th>
                  <th class="px-6 py-3 bg-gray-700 text-white">Webx Teams</th>
                  <th class="px-6 py-3 bg-gray-700 text-white">Webx Teams+</th>
                  <th class="px-6 py-3 bg-gray-700 text-white">Webx Presenter</th>
                </tr>
                <tr class="border-b border-neutral-200 bg-black/[0.02] dark:order-white/10 whitespace-nowrap">
                  <td class="px-6 py-3"></td>
                  <td class="px-6 py-3">
                    <p class="m-0 text-blue">Free</p>
                  </td>
                  <td class="px-6 py-3">
                    <p class="m-0 text-blue">Free</p>
                  </td>
                  <td class="px-6 py-3">
                    <p class="m-0 text-blue">Free</p>
                  </td>
                  <td class="px-6 py-3">
                    <p class="m-0 text-blue">Free</p>
                  </td>
                </tr>
                <tr class="border-b border-neutral-200 bg-black/[0.02] dark:order-white/10 whitespace-nowrap">
                  <td class="px-6 py-3">Calling</td>
                  <td class="px-6 py-3" v-for="i in 4" :key="i">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="12"
                      height="12" viewBox="0 0 24 24" stroke-width="1.5" stroke="#333" fill="none"
                      stroke-linecap="round" stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M5 12l5 5l10 -10" />
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="screen-4-1 pt-page ">
        <div class="key-feature-grid  grid p-7  text-center">
          <h4 class="text-primary">Extra Features</h4>
          <div class="key-feature-grid grid gap-7 sm:grid-cols-2 p-7">
            <div class="mb-8 rounded-xl bg-theme-dark text-white py-5 px-5 shadow-lg">
              <h5 class="h5 text-white">Yes</h5>
              <p class="mt-4">See Pick & Mix Featuresq</p>
            </div>
            <div class="mb-8 rounded-xl bg-theme-dark text-white py-5 px-5 shadow-lg">
              <h5 class="h5 text-white">No</h5>
              <p class="mt-2">
                The standard setup is fine
              </p>
            </div>
          </div>
          <h5>What does this mean?</h5>
          <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie odio id
            gravida fermentum. Etiam quis quam ante. Donec sit amet magna gravida, imperdiet ex lacinia,
            tempor felis. Duis nec fringilla nibh. Vivamus vitae commodo sem. Vivamus vel lacinia massa.
            Curabitur convallis sem id condimentum vulputate.</p>
        </div>
      </div>

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
                        <span
                          class="w-7 h-7 right-7 absolute rounded-full transform transition-transform bg-gray-200" />
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
      </div>
    </div>

    <div class="w-100 flex justify-between  p-7">
      <input id="prev" class="btn text-white rounded-full bg-theme-dark mt-10  bg-opacity-75 text-lg" type="submit"
        value="Previous ">
      <input id="next" class="btn btn-green mt-10 text-lg " type="submit" value="Next">
    </div>
  </div>
</template>

<style lang="scss" scoped></style>