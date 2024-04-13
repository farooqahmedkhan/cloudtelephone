<script setup>
import { onMounted, ref } from "vue"
import UcItem from "../../Base/UcItem.vue"
import { useQuotationStore } from "../../../store/quotationStore"

const quotationStore = useQuotationStore()
const loading = ref( false )

onMounted( async () => {
  loading.value = true
  await quotationStore.fetchUnifiedProducts()
  loading.value = false
}
)

const ucItems = ref( [
  {
    id: 1,
    title: "Softphone",
    price: 0,
    value: 1
  },
  {
    id: 2,
    title: "WebEx Teams+",
    price: 8,
    value: 0
  },
  {
    id: 2,
    title: "WebEx Presenter",
    price: 20,
    value: 0
  },
] )

</script>


<template>
  <div class="screen-4 pt-page current">
    <div class="key-feature-grid  grid p-7">
      <h4 class="text-primary text-center">App &amp; Unified Communication</h4>
      <p class="font-regular text-center">Please choose the number of users for each style of app required</p>
      <div v-if="!loading" class="relative overflow-x-auto space-y-6 mt-6">
        <uc-item v-for="item in quotationStore.unifiedCommunicationItems" :key="item.id" v-bind="item"
          v-model="item.value" />
      </div>
      <div class="my-5">
        <h4 class="text-dark text-center">What does this means?</h4>
        <p class="font-regular text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem molestiae
          officia iure eius maxime dolorem non molestias! Assumenda blanditiis culpa earum atque dicta hic, ipsa quidem
          modi possimus, animi quia.</p>

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
                  height="12" viewBox="0 0 24 24" stroke-width="1.5" stroke="#333" fill="none" stroke-linecap="round"
                  stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </td>
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
