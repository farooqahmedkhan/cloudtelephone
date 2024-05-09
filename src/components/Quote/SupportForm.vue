<script setup>
import useStep from "@/composables/useStep.js"
import { useQuotationStore } from "@/store/quotationStore"


const { jumpToStep } = useStep()
const quotationStore = useQuotationStore()

function moveToCompleteSection ( value ) {
  if ( value === 'automatic' ) {
    quotationStore.updateLead( { installationSupport: 'Automatic Install & Ongoing Support Free', currentStep: 15 } )
    jumpToStep( 15 )
  } else {
    quotationStore.updateLead( { installationSupport: 'On-Site CAbling 550 per Day (Approx)', currentStep: 15 } )
    jumpToStep( 15 )
  }
}
</script>


<template>
  <div class="key-feature-grid grid p-7 text-center">
    <div class="fifth-1 pt-page current">
      <div class="key-feature-grid  grid p-7 text-center">
        <h4 class="text-primary">Installation & Suppport</h4>
        <div class="key-feature-grid grid gap-7 sm:grid-cols-2 p-7">
          <!-- automatic -->
          <button @click="moveToCompleteSection('automatic')"
            class="mb-8 rounded-xl bg-theme-dark text-white py-5 px-5 shadow-lg">
            <p class="mb-3">Automatic Install & Ongoing Support Free</p>
          </button>
          <button @click="moveToCompleteSection('manual')"
            class="mb-8 rounded-xl bg-theme-dark text-white py-5 px-5 shadow-lg">
            <p class="mb-3">On-Site Cabling 550 per Day (Approx.)</p>
          </button>
        </div>
        <h5>What does this mean?</h5>
        <p class="mt-4">Our telephones are dispatched already configured and ready to go, all you need to do is plug
the phone into your Internet Connection. Connectivity can be via existing Network Cabling,
plugged directly into your Router or by using &#39;Ethernet Over Power&#39; Adapters. We can
provide onsite cabling if require, or this can be done by your own local IT company.</p>
      </div>
      <div class="w-100 flex justify-between p-7">
        <button @click="jumpToStep(11)"
          class="btn text-white rounded-full bg-theme-dark mt-10  bg-opacity-75 text-lg">Previous</button>
      </div>
    </div>
  </div>
</template>
