<script setup>
import { useConfigStore } from "../../store/configStore";
import PricingCard from "../Base/PricingCard.vue"

const businessItems = [
  "Business telephone line",
  "Hosted Business telephone",
  "Business Mobile",
  "United Conversations",
  "VOIP SIP trunk",
  "Landline",
  "Broadband"
]

const configStore = useConfigStore()
</script>

<template>
  <section class="section mt-12 bg-theme-light relative hero-1 ">
    <div class="bg-overlay overflow-hidden bg-transparent">
      <div class="hero-1-bg" />
    </div>
    <div class="container relative z-10">
      <div class="row lg:px-10 items-center justify-center gap-5">
        <PricingCard v-for="plan in configStore.plans" :plan="plan"/>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>