<script setup>
import { ref } from "vue"
import { useQuotationStore } from "../../../store/quotationStore.js"
import Broadband from "./Broadband.vue"
import InternetOptions from "./InternetOptions.vue"
import UserCount from "./UserCount.vue"

const step = ref( 1 )

const quotationStore = useQuotationStore()

function moveToEquipment () {
  window.location.hash = 'equipment'
  if ( step.value == 3 ) {
    const products = quotationStore.categories.flatMap( cate =>
      cate.products.filter( product => product.value > 0 )
    )
    if ( products.length ) {
      quotationStore.updateLead( { internetProducts: JSON.stringify( products ) } )
    }

  }
}

const userCount = ref( 1 )

function moveToNextStep () {
  quotationStore.valuesSetter( 'numberOfUsers', userCount.value )
  quotationStore.updateLead( { userCount: userCount.value } )
  step.value++
}

</script>

<template>
  <div id="" class="key-feature-grid grid p-7 text-center">
    <UserCount v-if="step == 1" v-model="userCount" @move-to-next="moveToNextStep" />
    <InternetOptions v-else-if="step == 2" @move-to-previous="step--" @on-click-no="moveToEquipment"
      @on-click-yes="step = 3" />
    <Broadband v-else-if="step == 3" @move-to-previous="step--" @move-to-next="moveToEquipment" />
  </div>
</template>