<script setup>
import useCurrency from "@/composables/useCurrency"
import useStep from "@/composables/useStep.js"
import { useQuotationStore } from "@/store/quotationStore"
import TheCounter from "../../Base/TheCounter.vue"


const { jumpToStep } = useStep()
const quotationStore = useQuotationStore()

const { currencySymbol } = useCurrency()


function save () {
  quotationStore.updateLead( { portingNumbers: JSON.stringify( quotationStore.portingNumbers.filter( item => item.value > 0 ) ) } )
  jumpToStep( 13 )
}
</script>

<template>
  <div class="fifth-1 pt-page current">
    <div class="fifth-2 pt-page ">
      <div class="key-feature-grid  grid p-7  text-center">
        <h4 class="text-primary">Number Porting</h4>
        <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie odio id
          gravida fermentum. Etiam quis quam ante. Donec sit amet magna gravida, imperdiet ex lacinia,
          tempor felis. Duis nec fringilla nibh. Vivamus vitae commodo sem. Vivamus vel lacinia massa.
          Curabitur convallis sem id condimentum vulputate.</p>
        <div class="key-feature-grid grid gap-7 sm:grid-cols-2 md:grid-cols-3 p-7">
          <div v-for="number in quotationStore.portingNumbers" :key="number.id">
            <h4>{{ number.title }}</h4>
            <p class="text-blue mb-2">{{ currencySymbol }}{{ number.price }} per block</p>
            <the-counter v-model="number.value" />
          </div>
        </div>
        <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie odio id
          gravida fermentum. Etiam quis quam ante. Donec sit amet magna gravida, imperdiet ex lacinia,
          tempor felis. Duis nec fringilla nibh. Vivamus vitae commodo sem. Vivamus vel lacinia massa.
          Curabitur convallis sem id condimentum vulputate.</p>


      </div>
    </div>
    <div class="w-100 flex justify-between p-7">
      <button @click="jumpToStep(11)"
        class="btn text-white rounded-full bg-theme-dark mt-10  bg-opacity-75 text-lg">Previous</button>
      <button @click="save" class="btn btn-green mt-10 text-lg">Next</button>
    </div>
  </div>
</template>
