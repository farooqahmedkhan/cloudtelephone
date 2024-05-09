<script setup>
import useStep from "@/composables/useStep.js"
import { useQuotationStore } from "@/store/quotationStore"
import { onMounted, ref } from "vue"
import UcItem from "../../Base/UcItem.vue"


const { jumpToStep } = useStep()

const quotationStore = useQuotationStore()



function save () {
  quotationStore.updateLead( { currentStep: 9, unifiedProducts: JSON.stringify( quotationStore.unifiedCommunicationItems.filter( item => item.value > 0 ) ) } )
  jumpToStep( 9 )
}

</script>


<template>
  <div class="screen-4 pt-page current">
    <div class="key-feature-grid  grid p-7">
      <h4 class="text-primary text-center">App &amp; Unified Communication</h4>
      <p class="font-regular text-center">Our standard price includes the softphone, but we offer a range of upgrades for your app to
allow full unified communication. Allowing your phone system to be totally integrated into a
WebEx Teams experience.</p>
      <div class="relative overflow-x-auto space-y-6 mt-6">
        <uc-item v-for="item in quotationStore.unifiedCommunicationItems" :key="item.id" v-bind="item"
          v-model="item.value" />
      </div>
      <div class="my-5">
        <h4 class="text-dark text-center">What does this means?</h4>
        <p class="font-regular text-center">
          Our Standard setup includes: Call Analysis Reporting, Auto-Attendant, Custom Greetings,
Voicemail, Hunt Groups, Conferencing (3 Way), Click to Dial, App, Caller-Id, Busy Status,
Video Calls and Hot Desking are all included as standard. We have some additional Pick &amp;
Mix options you can choose from that are charged additionally.
        </p>

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
      <button @click="jumpToStep(5)"
        class="btn text-white rounded-full bg-theme-dark mt-10  bg-opacity-75 text-lg">Previous</button>
      <button @click="save" class="btn btn-green mt-10 text-lg">Next</button>
    </div>
  </div>
</template>
