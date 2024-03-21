<script setup>
import { ref } from "vue"
import FirstStep from "./FirstStep.vue"
import SelectDevice from "./SelectDevice.vue"
import PhoneMigration from "./PhoneMigration.vue"
import { useQuotationStore } from "../../../store/quotationStore.js"


const stepNo = ref( 1 )
const phoneTypes = ref( 0 )
const quotationStore = useQuotationStore()

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
function saveDevices ( devices ) {
  quotationStore.setDevices( devices )
  moveToExtraFeatures()
}

function savePhoneTypes () {
  quotationStore.setPhoneTypes( phoneTypes.value )
  moveToExtraFeatures()
}

</script>

<template>
  <div>
    <FirstStep v-if="stepNo == 1" @on-click-yes="stepNo = 2" @on-click-app-only="moveToExtraFeatures"
      @on-click-own-phones="stepNo = 3" @on-click-prev="onClickPrev" />
    <SelectDevice v-if="stepNo == 2" @on-click-prev="onClickPrev" @on-click-next="saveDevices" />
    <PhoneMigration v-if="stepNo == 3" v-model="phoneTypes" @on-click-prev="onClickPrev"
      @on-click-next="savePhoneTypes" />
  </div>
</template>