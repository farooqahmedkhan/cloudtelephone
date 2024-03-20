<script setup>
import { ref } from "vue"
import StepOne from "./StepOne.vue"
import StepTwo from "./StepTwo.vue"
import StepThree from "./StepThree.vue"

const step = ref( 1 )
function onClickPrev () {
  if ( step.value <= 1 ) {
    window.location.hash = 'extra-features'
  } else {
    step.value = 1
  }

}

function onClickNext () {
  if ( step.value > 1 ) {
    window.location.hash = 'install-support'
  } else {
    step.value++
  }
}
</script>


<template>
  <div class="key-feature-grid grid p-7 text-center">
    <StepOne v-if="step == 1" @move-to-previous="onClickPrev" @on-click-no="step = 2" @on-click-yes="step = 3" />
    <StepTwo v-if="step == 2" @on-click-prev="step = 1" @on-click-next="onClickNext" />
    <StepThree v-if="step == 3" @on-click-prev="step = 1" @on-click-next="step = 2" />
  </div>
</template>
