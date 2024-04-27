<script setup>
import BreadCrumb from "../components/Base/BreadCrumb.vue"
import QuoteStepButton from "../components/Base/QuoteStepButton.vue"
import ServicesSection from "../components/Quote/ServicesSection.vue"
import { useQuotationStore } from "../store/quotationStore.js"

import DetailsForm from "@/components/Quote/DetailsForm.vue"
import Eq_Products from "@/components/Quote/EquipmentForm/Eq_Products.vue"
import Eq_Selector from "@/components/Quote/EquipmentForm/Eq_Selector.vue"
import PhoneTypes from "@/components/Quote/EquipmentForm/PhoneTypes.vue"
import ExtraFeatures_Selector from "@/components/Quote/ExtraFeatures/ExtraFeatures_Selector.vue"
import MixFeatures from "@/components/Quote/ExtraFeatures/MixFeatures.vue"
import UnifiedCommunication from "@/components/Quote/ExtraFeatures/UnifiedCommunication.vue"
import FinalForm from "@/components/Quote/FinalForm.vue"
import FinalPreview from "@/components/Quote/FinalPreview.vue"
import SupportForm from "@/components/Quote/SupportForm.vue"
import NewTelephoneNumber from "@/components/Quote/TelephoneNumbers/NewTelephoneNumber.vue"
import NumberPorting from "@/components/Quote/TelephoneNumbers/NumberPorting.vue"
import PortNumber_Selector from "@/components/Quote/TelephoneNumbers/PortNumber_Selector.vue"
import IO_Products from "@/components/Quote/UserLinesForm/IO_Products.vue"
import IO_Selector from "@/components/Quote/UserLinesForm/IO_Selector.vue"
import UserCount from "@/components/Quote/UserLinesForm/UserCount.vue"
import { computed, onMounted } from "vue"
import useStep from "../composables/useStep.js"

const { step, stepButtons } = useStep()



const activeStep = {
  1: DetailsForm,
  2: UserCount,
  3: IO_Selector,
  4: IO_Products,
  5: Eq_Selector,
  6: Eq_Products,
  7: PhoneTypes,
  8: UnifiedCommunication,
  9: ExtraFeatures_Selector,
  10: MixFeatures,
  11: PortNumber_Selector,
  12: NumberPorting,
  13: NewTelephoneNumber,
  14: SupportForm,
  15: FinalForm,
  16: FinalPreview
}

const getActiveComponent = computed( () => {
  return activeStep[step.value]
} )

const quotationStore = useQuotationStore()
onMounted( async () => {
  await quotationStore.fetchAllData()
} )

</script>

<template>
  <div>
    <section class="section banner relative">
      <div class="container">
        <div class="row">
          <div class="py-10 lg:col-12">
            <div class="mx-auto w-full max-w-[1230px]">
              <div class="text-center my-5">
                <BreadCrumb currentPage="Get A Quote" />
              </div>
              <h2 class="text-center mb-3">Instant Phone System <br><span class="text-blue uppercase">Quote
                  Wizard</span>
              </h2>
              <p class="text-center">Complete in 60 second</p>
            </div>
          </div>
        </div>

        <!-- quote calculator -->
        <div class="row">
          <div class="lg:col-3">
            <ul id="tabs"
              class="divide-x divide-gray-100  mt-10 rounded-lg border border-gray-100 text-sm text-gray-5 bg-white">
              <QuoteStepButton v-for="step in stepButtons" :key="step.id" :step="step"
                :class="`${step.active ? 'active' : ''}`" />
            </ul>
          </div>
          <div class="lg:col-9">
            <form @submit.prevent>
              <div id="tab-contents" class="border rounded-lg mt-10 bg-white relative overflow-hidden">
                <keep-alive>
                  <component :is="getActiveComponent" />
                </keep-alive>
                <div v-if="!quotationStore.leadDataFetched && step > 1"
                  class="absolute text-gray-700 text-2xl capitalize font-bold inset-0 z-20 backdrop-blur-sm bg-white/30 flex justify-center items-center">
                  <!-- loading... -->
                </div>
              </div>
            </form>
          </div>
        </div>

        <img class="banner-shape absolute -top-28 right-0 -z-[1] w-full max-w-[600px]" src="/images/banner-shape.svg"
          alt="">
      </div>
    </section>

    <ServicesSection />
  </div>
</template>

<style lang="scss" scoped></style>