<script setup>
import StepOne from "./StepOne.vue"
import StepTwo from "./StepTwo.vue"
import StepThree from "./StepThree.vue"
import { ref } from "vue"

const step = ref( 1 )

function onClickPrev () {
  if ( step.value <= 1 ) {
    window.location.hash = 'equipment'
  } else {
    step.value = 1
  }

}

function onClickNext () {
  if ( step.value > 1 ) {
    window.location.hash = 'payment'
  } else {
    step.value++
  }
}

</script>

<template>
  <div>
    <StepOne v-if="step === 1" @on-click-prev="onClickPrev" @on-click-next="onClickNext" />
    <StepTwo v-if="step === 2" @on-click-prev="onClickPrev" @on-click-yes="step = 3" @on-click-no="onClickNext" />
    <StepThree v-if="step === 3" @on-click-prev="onClickPrev" @on-click-next="onClickNext" />
  </div>
</template>

<style lang="scss" scoped></style>