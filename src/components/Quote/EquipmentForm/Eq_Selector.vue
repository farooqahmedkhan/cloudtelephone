<script setup>
import { useQuotationStore } from "@/store/quotationStore"
import useStep from "@/composables/useStep.js"


const { jumpToStep } = useStep()

const quotationStore = useQuotationStore()

async function saveStepInDB ( step ) {
  await quotationStore.updateLead( { currentStep: step } )
  jumpToStep( step )
}

</script>

<template>
  <div class="screen-3  pt-page current">
    <div class="key-feature-grid  grid p-7 text-center">
      <h4 class="text-primary">Equipment</h4>

      <div class="key-feature-grid grid gap-7 sm:grid-cols-2 md:grid-cols-3 p-7">
        <!-- yes button -->
        <button @click="saveStepInDB(6)" class="mb-8 rounded-xl bg-theme-dark text-white py-5 px-5 shadow-lg">
          <h5 class="h5 text-white">Yes</h5>
          <p class="mt-4">See our range if devices</p>
        </button>
        <!-- app only button -->
        <button @click="saveStepInDB(8)" class="mb-8 rounded-xl bg-theme-dark text-white py-5 px-5 shadow-lg">
          <h5 class="h5 text-white">Apply Only</h5>
          <p class="mt-2">I don't need any hardware</p>
        </button>

        <!-- own phones -->
        <button @click="saveStepInDB(7)" class="mb-8 rounded-xl bg-theme-dark text-white py-5 px-5 shadow-lg">
          <h5 class="h5 text-white">Own Phones</h5>
          <p class="mt-2">I will use my own phone</p>
        </button>
      </div>
      <h5>What does this mean?</h5>
      <p class="mt-4 text-justify mx-auto">You can choose to add a phone as part of your monthly billing cost, or buy up front and save
money. Use the toggle to view the different pricing options.</p>
    </div>
    <div class="w-100 flex justify-between p-7">
      <button @click="jumpToStep(3)"
        class="btn text-white rounded-full bg-theme-dark mt-10  bg-opacity-75 text-lg">Previous</button>
    </div>
  </div>
</template>