<script setup>
import UnifiedCommunication from "./UnifiedCommunication.vue"
import ExtraFeatures from "./ExtraFeatures.vue"
import MixFeatures from "./MixFeatures.vue"
import { ref } from "vue"
import { useQuotationStore } from "../../../store/quotationStore"


const quotationStore = useQuotationStore()

const step = ref( 1 )

function onClickPrev () {
  if ( step.value <= 1 ) {
    window.location.hash = 'equipment'
  } else {
    step.value = 1
  }

}

function onClickNext ( items = null ) {
  if ( step.value === 3 ) {
    quotationStore.valuesSetter( 'featureItems', items )
  }
  if ( step.value > 1 ) {
    window.location.hash = 'tel-numbers'
  } else {
    step.value++
  }
}

</script>

<template>
  <div>
    <UnifiedCommunication v-if="step === 1" @on-click-prev="onClickPrev" @on-click-next="onClickNext" />
    <ExtraFeatures v-if="step === 2" @on-click-prev="onClickPrev" @on-click-yes="step = 3" @on-click-no="onClickNext" />
    <MixFeatures v-if="step === 3" @on-click-prev="onClickPrev" @on-click-next="onClickNext" />
  </div>
</template>
