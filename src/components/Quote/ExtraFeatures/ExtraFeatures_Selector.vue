<script setup>
import useStep from "@/composables/useStep.js"
import { useQuotationStore } from "@/store/quotationStore"


const { jumpToStep, moveToPreviousStep } = useStep()
const quotationStore = useQuotationStore()


function saveStepInDB ( step ) {
  quotationStore.updateLead( { currentStep: step } )
  jumpToStep( step )
}

</script>


<template>
  <div class="screen-4-1 pt-page ">
    <div class="key-feature-grid  grid p-7  text-center">
      <h4 class="text-primary">Extra Features</h4>
      <div class="key-feature-grid grid gap-7 sm:grid-cols-2 p-7">
        <!-- yes -->
        <button @click="saveStepInDB(10)" class="mb-8 rounded-xl bg-theme-dark text-white py-5 px-5 shadow-lg">
          <h5 class="h5 text-white">Yes</h5>
          <p class="mt-4">See Pick & Mix Features</p>
        </button>
        <!-- no -->
        <button @click="saveStepInDB(11)" class="mb-8 rounded-xl bg-theme-dark text-white py-5 px-5 shadow-lg">
          <h5 class="h5 text-white">No</h5>
          <p class="mt-2">
            The standard setup is fine
          </p>
        </button>
      </div>
      <h5>What does this mean?</h5>
      <p class="mt-4">Our Standard setup includes: Call Analysis Reporting, Auto-Attendant, Custom Greetings,
Voicemail, Hunt Groups, Conferencing (3 Way), Click to Dial, App, Caller-Id, Busy Status,
Video Calls and Hot Desking are all included as standard. We have some additional Pick &amp;
Mix options you can choose from that are charged additionally.</p>
    </div>
    <div class="w-100 flex justify-between p-7">
      <button @click="moveToPreviousStep"
        class="btn text-white rounded-full bg-theme-dark mt-10  bg-opacity-75 text-lg">Previous</button>
    </div>
  </div>
</template>
