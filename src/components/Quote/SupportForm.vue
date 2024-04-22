<script setup>
import { useQuotationStore } from "@/store/quotationStore"
import { useStepsStore } from "@/store/stepsStore"

const stepStore = useStepsStore()
const quotationStore = useQuotationStore()

function moveToCompleteSection ( value ) {
  if ( value === 'automatic' ) {
    quotationStore.updateLead( { installationSupport: 'Automatic Install & Ongoing Support Free', currentStep: 15 } )
    stepStore.moveToStep( 15 )
  } else {
    quotationStore.updateLead( { installationSupport: 'On-Site CAbling 550 per Day (Approx)', currentStep: 15 } )
    stepStore.moveToStep( 15 )
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
        <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie odio id
          gravida fermentum. Etiam quis quam ante. Donec sit amet magna gravida, imperdiet ex lacinia,
          tempor felis. Duis nec fringilla nibh. Vivamus vitae commodo sem. Vivamus vel lacinia massa.
          Curabitur convallis sem id condimentum vulputate.</p>
      </div>
      <div class="w-100 flex justify-between p-7">
        <button @click="stepStore.moveToStep(11)"
          class="btn text-white rounded-full bg-theme-dark mt-10  bg-opacity-75 text-lg">Previous</button>
      </div>
    </div>
  </div>
</template>
