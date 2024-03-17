<script setup>

</script>

<template>
  <div id="">
    <div>
      <div class="screen-3  pt-page current">
        <div class="key-feature-grid  grid p-7 text-center">
          <h4 class="text-primary">Equipment</h4>
          <div class="key-feature-grid grid gap-7 sm:grid-cols-2 md:grid-cols-3 p-7">
            <div class="mb-8 rounded-xl bg-theme-dark text-white py-5 px-5 shadow-lg">
              <h5 class="h5 text-white">Yes</h5>
              <p class="mt-4">See our range if devices</p>
            </div>
            <div class="mb-8 rounded-xl bg-theme-dark text-white py-5 px-5 shadow-lg">
              <h5 class="h5 text-white">Apply Only</h5>
              <p class="mt-2">I don't need any hardware</p>
            </div>
            <div class="mb-8 rounded-xl bg-theme-dark text-white py-5 px-5 shadow-lg">
              <h5 class="h5 text-white">Own Phones</h5>
              <p class="mt-2">I will use my own phone</p>
            </div>
          </div>
          <h5>What does this mean?</h5>
          <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie odio id
            gravida fermentum. Etiam quis quam ante. Donec sit amet magna gravida, imperdiet ex lacinia,
            tempor felis. Duis nec fringilla nibh. Vivamus vitae commodo sem. Vivamus vel lacinia massa.
            Curabitur convallis sem id condimentum vulputate.</p>
        </div>
      </div>
      <div class="screen-3-1 pt-page ">
        <div class="key-feature-grid  grid p-7 text-center">
          <h4 class="text-primary">Equipment</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget nibh cursus, egestas
            sapien consequat, aliquet ligula. Vestibulum in commodo augue</p>

          <div class="bg-white dark:bg-gray-900 min-h-screen w-full justify-center flex flex-col items-center my-5">
            <h5 class="mb-2">Change Pricing Options</h5>
            <div class="flex flex-row justify-between toggle">
              <label for="dark-toggle" class="flex items-center cursor-pointer">
                <div class="relative">
                  <input type="checkbox" name="dark-mode" id="dark-toggle" class="checkbox hidden">
                  <div class="block border-[1px] dark:border-white border-gray-900 w-14 h-8 rounded-full">
                  </div>
                  <div class="dot absolute left-1 top-1 dark:bg-white bg-gray-800 w-6 h-6 rounded-full transition">
                  </div>
                </div>
              </label>
            </div>
          </div>

          <div class="key-feature-grid grid gap-7 sm:grid-cols-2 md:grid-cols-3 p-7">
            <div class="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark">
              <div class="relative overflow-hidden bg-cover bg-no-repeat">
                <img class="rounded-t-lg" src="/images/cta-phone.png" alt="" />
                <a href="#!">
                  <div
                    class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                  </div>
                </a>
              </div>
              <div class="p-4 text-surface dark:text-white">
                <!-- Input Number -->
                <div class="my-5 flex gap-3 justify-center">
                  <button data-action="decrement"><i class="fa-solid fa-minus"></i></button>
                  <input type="text" value="0" class="form-control w-14 text-center">
                  <button data-action="increment"><i class="fa-solid fa-plus"></i></button>
                </div>
                <!-- End Input Number -->
                <h5 class="mb-2 text-xl font-medium leading-tight">Card title</h5>
                <h6 class="text-primary">$150</h6>
                <p class="mb-4 text-base"> Some quick example text to build on the card title and make up
                  the bulk of the card's content. </p>
              </div>
            </div>

            <div class="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark">
              <div class="relative overflow-hidden bg-cover bg-no-repeat">
                <img class="rounded-t-lg" src="/images/cta-phone.png" alt="" />
                <a href="#!">
                  <div
                    class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                  </div>
                </a>
              </div>
              <div class="p-4 text-surface dark:text-white">
                <!-- Input Number -->
                <div class="my-5 flex gap-3 justify-center">
                  <button data-action="decrement"><i class="fa-solid fa-minus"></i></button>
                  <input type="text" value="0" class="form-control w-14 text-center">
                  <button data-action="increment"><i class="fa-solid fa-plus"></i></button>
                </div>
                <!-- End Input Number -->
                <h5 class="mb-2 text-xl font-medium leading-tight">Card title</h5>
                <h6 class="text-primary">$150</h6>

                <p class="mb-4 text-base"> Some quick example text to build on the card title and make up
                  the bulk of the card's content. </p>
              </div>
            </div>

            <div class="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark">
              <div class="relative overflow-hidden bg-cover bg-no-repeat">
                <img class="rounded-t-lg" src="/images/cta-phone.png" alt="" />
                <a href="#!">
                  <div
                    class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
                  </div>
                </a>
              </div>
              <div class="p-4 text-surface dark:text-white">
                <div class="my-5 flex gap-3 justify-center">
                  <button data-action="decrement"><i class="fa-solid fa-minus"></i></button>
                  <input type="text" value="0" class="form-control w-14 text-center">
                  <button data-action="increment"><i class="fa-solid fa-plus"></i></button>
                </div>
                <h5 class="mb-2 text-xl font-medium leading-tight">Card title</h5>
                <h6 class="text-primary">$150</h6>
                <p class="mb-4 text-base"> Some quick example text to build on the card title and make up
                  the bulk of the card's content. </p>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div class="screen-3-2 pt-page ">
        <div class="key-feature-grid  grid p-7">
          <h4 class="text-primary text-center">App & Unified Communication</h4>
          <p class="font-regular text-center">Lorem ipsum dolor sit amet.</p>
          <div class="relative overflow-x-auto">
            <table class="w-full  border border-neutral-200 text-left text-sm font-light mt-6">
              <tbody>
                <tr class="border-b border-neutral-200 bg-black/[0.02] dark:border-white/10 whitespace-nowrap">
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
                <tr class="border-b border-neutral-200 bg-black/[0.02] dark:border-white/10  whitespace-nowrap">
                  <th class="px-6 py-3"></th>
                  <th class="px-6 py-3 bg-gray-700 text-white">Softphone</th>
                  <th class="px-6 py-3 bg-gray-700 text-white">Webx Teams</th>
                  <th class="px-6 py-3 bg-gray-700 text-white">Webx Teams+</th>
                  <th class="px-6 py-3 bg-gray-700 text-white">Webx Presenter</th>
                </tr>
                <tr class="border-b border-neutral-200 bg-black/[0.02] dark:border-white/10 whitespace-nowrap">
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
                <tr class="border-b border-neutral-200 bg-black/[0.02] dark:border-white/10 whitespace-nowrap">
                  <td class="px-6 py-3">Calling</td>
                  <td class="px-6 py-3">
                    <p class="m-0 text-dark"><i class="fa-solid fa-check"></i></p>
                  </td>
                  <td class="px-6 py-3">
                    <p class="m-0 text-dark"><i class="fa-solid fa-check"></i></p>
                  </td>
                  <td class="px-6 py-3">
                    <p class="m-0 text-dark"><i class="fa-solid fa-check"></i></p>
                  </td>
                  <td class="px-6 py-3">
                    <p class="m-0 text-dark"><i class="fa-solid fa-check"></i></p>
                  </td>
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