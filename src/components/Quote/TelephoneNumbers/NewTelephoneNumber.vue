<script setup>
import useCurrency from "@/composables/useCurrency"
import { ref } from "vue"
import TheCounter from "../../Base/TheCounter.vue"
import { useQuotationStore } from "@/store/quotationStore"
import { useStepsStore } from "@/store/stepsStore"

const stepStore = useStepsStore()
const quotationStore = useQuotationStore()


const { currencySymbol } = useCurrency()
const numbers = ref( [
  {
    id: 1,
    value: 0,
    title: "UK Geopgrahic Numbers",
    price: 5
  },
  {
    id: 2,
    value: 0,
    title: "03 Non Geopgrahic Numbers",
    price: 6
  }
] )

function save () {
  quotationStore.updateLead( { newTelephoneNumbers: JSON.stringify( numbers.value.filter( item => item.value > 0 ) ) } )
  stepStore.moveToStep( 14 )
}


</script>

<template>
  <div class="fifth-1 pt-page current">
    <div class="key-feature-grid grid p-7 text-center">
      <h4 class="text-primary">New Telephone Numbers</h4>
      <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie odio id
        gravida fermentum. Etiam quis quam ante. Donec sit amet magna gravida, imperdiet ex lacinia,
        tempor felis. Duis nec fringilla nibh. Vivamus vitae commodo sem. Vivamus vel lacinia massa.
        Curabitur convallis sem id condimentum vulputate.</p>
      <div class="key-feature-grid grid gap-7 sm:grid-cols-2 p-7">
        <div v-for="number in numbers" :key="number.id">
          <h4>{{ number.title }}</h4>
          <!-- <p class="text-blue mb-2">{{ currencySymbol }} {{ number.price }} per block</p> -->
          <p class="text-blue mb-2">{{ `${currencySymbol}${number.price}` }} per block</p>
          <the-counter v-model="number.value" />
        </div>
      </div>
      <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie odio id
        gravida fermentum. Etiam quis quam ante. Donec sit amet magna gravida, imperdiet ex lacinia,
        tempor felis. Duis nec fringilla nibh. Vivamus vitae commodo sem. Vivamus vel lacinia massa.
        Curabitur convallis sem id condimentum vulputate.</p>


    </div>
    <div class="w-100 flex justify-between p-7">
      <button @click="stepStore.moveToStep(11)"
        class="btn text-white rounded-full bg-theme-dark mt-10  bg-opacity-75 text-lg">Previous</button>
      <button @click="save" class="btn btn-green mt-10 text-lg">Next</button>
    </div>
  </div>
</template>
