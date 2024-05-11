<script setup>
import useCurrency from "@/composables/useCurrency"
import { useConfigStore } from "@/store/configStore";
import PricingCard from "../Base/PricingCard.vue";

const configStore = useConfigStore()

</script>

<template>
  <section class="section mt-12 pt-0">
    <div class="container">
      <div class="row space-y-10 lg:px-10 justify-center">
        <pricing-card v-for="plan in configStore.plans" :key="plan.id" :plan="plan"></pricing-card>
      </div>

    </div>
  </section>
</template>

<style lang="scss" scoped></style>