<script setup>
import useStep from "@/composables/useStep.js"
import { useQuotationStore } from "@/store/quotationStore"
import { ref } from "vue"
import { MinusIcon, PlusIcon } from "vue-tabler-icons"


const { jumpToStep } = useStep()
const quotationStore = useQuotationStore()
const phoneCount = ref( 0 )


function decrement () {
  if ( phoneCount > 0 ) {
    phoneCount.value--
  }
}

function save () {
  quotationStore.updateLead( { currentStep: 8, numberOfPhoneTypes: phoneCount.value } )
  jumpToStep( 8 )
}

</script>

<template>
  <div class="screen-2-2 pt-page ">
    <div class="key-feature-grid grid p-7 text-center">
      <h4 class="text-primary">Number of Phone Types</h4>
      <!-- Input Number -->
      <div class="my-5 space-x-1 max-w-64 mx-auto flex">
        <button @click="decrement">
          <minus-icon size="22" />
        </button>
        <input type="number" :min="0" v-model="phoneCount">
        <button @click="phoneCount++" data-action="increment">
          <plus-icon size="22" />

        </button>
      </div>
    </div>
    <div class="text-center px-7">

      <!-- <h5>What does this mean?</h5> -->
      <!-- <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie odio id
        gravida fermentum. Etiam quis quam ante. Donec sit amet magna gravida, imperdiet lacinia,
        tempor felis. Duis nec fringilla nibh. Vivamus vitae commodo sem. Vivamus vel lacinia massa.
        Curabitur convallis sem id condimentum vulputate.</p> -->
    </div>

    <div class="w-100 flex justify-between p-7">
      <button @click="jumpToStep(5)"
        class="btn text-white rounded-full bg-theme-dark mt-10  bg-opacity-75 text-lg">Previous</button>
      <button @click="save" class="btn btn-green mt-10 text-lg">Next</button>
    </div>
  </div>
</template>
