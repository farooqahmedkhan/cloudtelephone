<script setup>
import { ref } from "vue"
import NewNumbers from "./NewNumbers.vue"
import NumberPorting from "./NumberPorting.vue"
import { useQuotationStore } from "../../../store/quotationStore"

const quotationStore = useQuotationStore()

const step = ref( 1 )
function onClickPrev () {
  if ( step.value <= 1 ) {
    window.location.hash = 'extra-features'
  } else {
    step.value = 1
  }

}

function onClickNext ( items = null ) {
  if ( step.value === 2 ) {
    quotationStore.setNewTelephonesNumbers( items )
  }
  if ( step.value > 1 ) {
    window.location.hash = 'install-support'
  } else {
    step.value++
  }
}
</script>


<template>
  <div class="key-feature-grid grid p-7 text-center">
    <div class="screen-2 pt-page current" v-if="step == 1">
      <h4 class="text-primary">Port Existing Numbers</h4>
      <div class="key-feature-grid grid gap-7 sm:grid-cols-2 p-7">
        <!-- yes button -->
        <button @click="step = 3" class="mb-8 rounded-xl bg-theme-dark text-white py-5 px-5 shadow-lg">
          <h5 class="h5 text-white">Yes</h5>
          <p class="mt-4">
            View Internet Options
          </p>
        </button>

        <!-- no button -->
        <button @click="step = 2" class="mb-8 rounded-xl bg-theme-dark text-white py-5 px-5 shadow-lg">
          <h5 class="h5 text-white">No</h5>
          <p class="mt-2">
            Use my existing internet
          </p>
        </button>

      </div>
      <h5>What does this mean?</h5>
      <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie odio id
        gravida fermentum. Etiam quis quam ante. Donec sit amet magna gravida, imperdiet ex lacinia,
        tempor felis. Duis nec fringilla nibh. Vivamus vitae commodo sem. Vivamus vel lacinia massa.
        Curabitur convallis sem id condimentum vulputate.</p>

      <div class="w-100 flex justify-start">
        <button @click="onClickPrev" class="btn text-white rounded-full bg-theme-dark mt-10  bg-opacity-75 text-lg"
          type="submit">Previous</button>
      </div>
    </div>
    <NewNumbers v-if="step == 2" @on-click-prev="step = 1" @on-click-next="onClickNext" />
    <NumberPorting v-if="step == 3" @on-click-prev="step = 1" @on-click-next="step = 2" />
  </div>
</template>
