<script setup>
import { ref } from "vue"
import FirstStep from "./FirstStep.vue"
import SelectDevice from "./SelectDevice.vue"
import StepThree from "./StepThree.vue"


const stepNo = ref( 1 )

function onClickPrev () {
  if ( stepNo.value <= 1 ) {
    window.location.hash = 'user-lines'
  } else {
    stepNo.value = 1
  }

}

function onClickNext () {
  if ( stepNo.value > 1 ) {
    moveToExtraFeatures()
  } else {
    stepNo.value++
  }
}

function moveToExtraFeatures () {
  window.location.hash = "extra-features"
}

</script>

<template>
  <div>
    <FirstStep v-if="stepNo == 1" @on-click-yes="stepNo = 2" @on-click-app-only="moveToExtraFeatures"
      @on-click-own-phones="stepNo = 3" @on-click-prev="onClickPrev" />
    <SelectDevice v-if="stepNo == 2" @on-click-prev="onClickPrev" @on-click-next="onClickNext" />
    <StepThree v-if="stepNo == 3" @on-click-prev="onClickPrev" @on-click-next="onClickNext" />
  </div>
</template>