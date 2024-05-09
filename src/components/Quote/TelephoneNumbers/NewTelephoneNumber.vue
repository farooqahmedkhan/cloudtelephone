<script setup>
import useCurrency from "@/composables/useCurrency"
import useStep from "@/composables/useStep.js"
import { useQuotationStore } from "@/store/quotationStore"
import { ref } from "vue"
import TheCounter from "../../Base/TheCounter.vue"



const { jumpToStep } = useStep()
const quotationStore = useQuotationStore()


const { currencySymbol } = useCurrency()

function save () {
  quotationStore.updateLead( { newTelephoneNumbers: JSON.stringify( quotationStore.newNumbers.filter( item => item.value > 0 ) ) } )
  jumpToStep( 14 )
}


</script>

<template>
  <div class="fifth-1 pt-page current">
    <div class="key-feature-grid grid p-7 text-center">
      <h4 class="text-primary">New Telephone Numbers</h4>
      <p class="mt-4">Our system needs a range of phone numbers to allow features to work such as direct dials,
hunt groups, auto attendants etc., you can choose in your set-up if they are displayed or
not.</p>
      <div class="key-feature-grid grid gap-7 sm:grid-cols-2 p-7">
        <div v-for="number in quotationStore.newNumbers" :key="number.id">
          <h4>{{ number.title }}</h4>
          <!-- <p class="text-blue mb-2">{{ currencySymbol }} {{ number.price }} per block</p> -->
          <p class="text-blue mb-2">{{ `${currencySymbol}${number.price}` }} per block</p>
          <the-counter v-model="number.value" />
        </div>
      </div>
      <p class="mt-4">You have 2 users, so you must have a minimum of 1 block(s) of telephone numbers.

UK Geographic Numbers are sold in blocks of 5. Area codes are chosen after placing your
order. If you require international numbers, please call.</p>


    </div>
    <div class="w-100 flex justify-between p-7">
      <button @click="jumpToStep(11)"
        class="btn text-white rounded-full bg-theme-dark mt-10  bg-opacity-75 text-lg">Previous</button>
      <button @click="save" class="btn btn-green mt-10 text-lg">Next</button>
    </div>
  </div>
</template>
