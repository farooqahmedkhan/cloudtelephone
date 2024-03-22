<script setup>
import ServicesSection from "../components/Quote/ServicesSection.vue"
import BreadCrumb from "../components/Base/BreadCrumb.vue"
import QuoteStepButton from "../components/Base/QuoteStepButton.vue"
import useHash from "../composables/useHash.js"
import DetailsForm from "../components/Quote/DetailsForm.vue"
import UserLinesForm from "../components/Quote/UserLinesForm/index.vue"
import EquipmentForm from "../components/Quote/EquipmentForm/index.vue"
import FeaturesForm from "../components/Quote/ExtraFeatures/index.vue"
import TelephoneNumbers from "../components/Quote/TelephoneNumbers/index.vue"
import SupportForm from "../components/Quote/SupportForm.vue"
import FinalForm from "../components/Quote/FinalForm.vue"


const stepButtons = [
  {
    id: 1,
    title: "Your Details",
    slug: "details",
    desc: "Some info about you."
  },
  {
    id: 2,
    title: "Users & Lines",
    slug: "user-lines",
    desc: "Where we sending it?"
  },
  {
    id: 3,
    title: "Equipment",
    slug: "equipment",
    desc: "Where we sending it?"
  },
  {
    id: 5,
    title: "Extra Features",
    slug: "extra-features",
    desc: "Where we sending it?"
  },
  {
    id: 6,
    title: "Telephone Numbers",
    slug: "tel-numbers",
    desc: "Lorem ipsum dolor sit"
  },
  {
    id: 7,
    title: "Install & Support",
    slug: "install-support",
    desc: "Show us the money."
  },
  {
    id: 8,
    title: "Complete",
    slug: "complete",
    desc: "Show us the money."
  },
]

const hash = useHash()

window.location.hash = 'details'

const activeStep = {
  "details": DetailsForm,
  "user-lines": UserLinesForm,
  "equipment": EquipmentForm,
  "extra-features": FeaturesForm,
  "tel-numbers": TelephoneNumbers,
  "install-support": SupportForm,
  "complete": FinalForm
}


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
                :class="`${hash === step.slug ? 'active' : ''}`" />
            </ul>
          </div>
          <div class="lg:col-9">
            <form @submit.prevent>
              <div id="tab-contents" class="border rounded-lg mt-10 bg-white">
                <keep-alive>
                  <component :is="activeStep[hash]" />
                </keep-alive>
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