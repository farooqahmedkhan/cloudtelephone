<script setup>
import useCurrency from "@/composables/useCurrency";
import { CheckIcon } from "vue-tabler-icons";
import useStep from "@/composables/useStep.js";
import { useQuotationStore } from "@/store/quotationStore";
import UcItem from "../../Base/UcItem.vue";

const { currencySymbol } = useCurrency()

const { jumpToStep } = useStep()

const quotationStore = useQuotationStore()


const features = [
  { feature: 'Calling', values: [true, true, true] },
  { feature: 'Join Meeting', values: [true, true, true] },
  { feature: 'Teams & Spaces', values: [true, true, true] },
  { feature: 'Voice & Video Conferencing', values: [true, true, true] },
  { feature: 'File Sharing', values: [true, true, true] },
  { feature: 'Desktop and Application Sharing', values: [true, true, true] },
  { feature: 'Whiteboard', values: [true, true, true] },
  { feature: 'Space Collaboration', values: [25, 25, 1000] },
  { feature: 'Personal Meeting Room', values: [false, 25, 1000] },
  { feature: 'Schedule Meetings', values: [false, true, true] },
  { feature: 'Lock Meetings', values: [false, false, true] },
  { feature: 'Recording', values: [false, false, true] },
  { feature: 'Transcripts', values: [false, false, true] },
  { feature: 'Presenter Control', values: [false, false, true] },
  { feature: 'Floor Control', values: [false, false, true] },
  { feature: 'Remote Desktop Control', values: [false, false, true] },
]




function save() {
  quotationStore.updateLead({ currentStep: 9, unifiedProducts: JSON.stringify(quotationStore.unifiedCommunicationItems.filter(item => item.value > 0)) })
  jumpToStep(9)
}

</script>


<template>
  <div class="screen-4 pt-page current">
    <div class="key-feature-grid  grid p-7">
      <h4 class="text-primary text-center">App &amp; Unified Communication</h4>
      <p class="font-regular text-center">Our standard price includes the softphone, but we offer a range of upgrades
        for your app to
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
              <th class="px-6 py-3 bg-gray-700 text-white">Webx Teams+</th>
              <th class="px-6 py-3 bg-gray-700 text-white">Webx Presenter</th>
            </tr>
            <tr class="border-b border-neutral-200 bg-black/[0.02] dark:order-white/10 whitespace-nowrap">
              <td class="px-6 py-3"></td>
              <td class="px-6 py-3">
                <p class="m-0 text-blue">Free</p>
              </td>
              <td class="px-6 py-3">
                <p class="m-0 text-blue">+ {{ currencySymbol }}8</p>
              </td>
              <td class="px-6 py-3">
                <p class="m-0 text-blue">+ {{ currencySymbol }}25</p>
              </td>
            </tr>
            <tr v-for="feature in features" :key="feature.feature"
              class="border-b border-neutral-200 bg-black/[0.02] dark:order-white/10 whitespace-nowrap">
              <td class="px-6 py-3">{{ feature.feature }}</td>
              <td class="px-6 py-3" v-for="(v, i) in feature.values" :key="i">
                <div class="flex items-center gap-x-2">
                  <CheckIcon v-if="!!v" size="24" />
                  <span v-if="typeof v === 'number'" class="text-base text-black">{{ v }}</span>
                </div>
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
