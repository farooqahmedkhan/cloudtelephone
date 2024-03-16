<script setup>

</script>

<template>
  <section class="mt-16 section bg-theme-light">
    <div class="container">
      <div class="row">
        <div class="lg:col-12">
          <div class="text-center">
            <h2>Features</h2>
          </div>
          <div class="relative overflow-x-auto">
            <table class="w-full border border-neutral-200 text-left text-sm font-light mt-6">
              <tbody>
                <tr class="border-b border-neutral-200 bg-white  dark:border-black/10  whitespace-nowrap">
                  <th class="px-6 py-3"></th>
                  <th class="px-6 py-3 bg-gray-700 text-white">Softphone</th>
                  <th class="px-6 py-3 bg-gray-700 text-white">Webx Teams</th>
                  <th class="px-6 py-3 bg-gray-700 text-white">Webx Teams+</th>
                  <th class="px-6 py-3 bg-gray-700 text-white">Webx Presenter</th>
                </tr>
                <tr class="border-b border-neutral-200 bg-white dark:border-black/10 whitespace-nowrap">
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
                <tr v-for="i in 3" :key="i"
                  class="border-b border-neutral-200 bg-white  dark:border-black/10 whitespace-nowrap">
                  <td class="px-6 py-3">Calling</td>
                  <td class="px-6 py-3" v-for="i in 4" :key="i">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-check" width="14"
                      height="14" viewBox="0 0 24 24" stroke-width="1.5" stroke="#333" fill="none"
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
    </div>
  </section>
</template>

<style lang="scss" scoped></style>