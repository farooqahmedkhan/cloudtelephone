<script setup>
import useStep from "@/composables/useStep.js"
import { useQuotationStore } from "@/store/quotationStore"


const { jumpToStep } = useStep()

const quotationStore = useQuotationStore()

function saveStepInDB ( step ) {
  quotationStore.updateLead( { currentStep: step } )
  jumpToStep( step )
}
</script>

<template>
  <div class="p-7 text-center">
    <h4 class="text-primary">Port Existing Numbers</h4>
    <div class="key-feature-grid grid gap-7 sm:grid-cols-2 p-7">
      <!-- yes button -->
      <button @click="saveStepInDB(12)" class="mb-8 rounded-xl bg-theme-dark text-white py-5 px-5 shadow-lg">
        <h5 class="h5 text-white">Yes</h5>
        <p class="mt-4">
          View Internet Options
        </p>
      </button>

      <!-- no button -->
      <button @click="saveStepInDB(13)" class="mb-8 rounded-xl bg-theme-dark text-white py-5 px-5 shadow-lg">
        <h5 class="h5 text-white">No</h5>
        <p class="mt-2">
          Use my existing internet
        </p>
      </button>

    </div>
    <h5>What does this mean?</h5>
    <p class="mt-4">If you have an existing number with another supplier, we can port that number into our
system.</p>

    <div class="w-100 flex justify-start">
      <button @click="jumpToStep(8)" class="btn text-white rounded-full bg-theme-dark mt-10  bg-opacity-75 text-lg"
        type="submit">Previous</button>
    </div>
  </div>
</template>
