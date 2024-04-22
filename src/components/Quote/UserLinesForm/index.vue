<script setup>
import { ref } from "vue"
import { useQuotationStore } from "../../../store/quotationStore.js"
import Broadband from "./IO_Products.vue"
import InternetOptions from "./IO_Selector.vue"
import UserCount from "./UserCount.vue"

const step = ref( 1 )

const quotationStore = useQuotationStore()

function moveToEquipment () {
  window.location.hash = 'equipment'

}

const userCount = ref( 1 )

function moveToNextStep () {
  quotationStore.valuesSetter( 'numberOfUsers', userCount.value )
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