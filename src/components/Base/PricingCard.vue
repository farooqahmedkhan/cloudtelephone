<script setup>
import useCurrency from "@/composables/useCurrency"
import { useConfigStore } from "@/store/configStore";

const configStore = useConfigStore()
const { currencySymbol } = useCurrency()

defineProps({
  plan: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="md:col-6 lg:col-5">
    <div class="rounded-xl bg-white px-8 py-10 shadow-lg pricing">
      <div class="flex items-center justify-between">
        <div>
          <h2 class="h3">{{ plan.title }}</h2>
          <p class="mt-3 text-2xl text-dark">{{ currencySymbol }} {{ plan.price }}</p>
        </div>
        <!-- <span class="overflow-hidden bg-primary inline-flex h-16 w-16 items-center justify-center rounded-full"> -->
        <img v-if="plan.icon_url" class="bg-primary object-cover inline-flex h-16 w-16 items-center justify-center rounded-full"
          :src="plan.icon_url" alt="" />
        <!-- </span> -->
      </div>
      <p class="mt-6">
        {{ plan.description }}
      </p>
      <div v-if="plan.offerings" class="mt-6 border-y border-border py-6">
        <h4 class="h6">What's included?</h4>
        <ul class="mt-6">
          <li v-for="offer in plan.offerings.split(',')" :key="offer" class="mb-3 flex items-center text-sm">
            <svg class="mr-2.5 text-primary" width="16" height="13" viewBox="0 0 16 13" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M2 5.42857L6.36364 10L14 2" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
            </svg>
            {{ offer }}
          </li>
        </ul>
      </div>
      <div v-if="plan.imageUrl" class="h-52 mt-6 rounded-md overflow-hidden">
        <img :src="plan.imageUrl" alt="" class="h-full w-full object-cover">
      </div>
      <div class="text-center mt-6">
        <a class="btn plan_btn border btn-sm rounded-full items-center flex justify-center h-16 text-lg font-bold uppercase"
          :href="`/${plan.redirectUrl}`">{{ plan.buttonText }}</a>
        <a v-if="plan.trialEnabled" class="mt-6 inline-flex items-center text-dark" :href="`/${plan.redirectUrl}`">
          Start Free trial
          <svg class="ml-1.5" width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.7071 8.70711C13.0976 8.31658 13.0976 7.68342 12.7071 7.29289L6.34315 0.928932C5.95262 0.538408 5.31946 0.538408 4.92893 0.928932C4.53841 1.31946 4.53841 1.95262 4.92893 2.34315L10.5858 8L4.92893 13.6569C4.53841 14.0474 4.53841 14.6805 4.92893 15.0711C5.31946 15.4616 5.95262 15.4616 6.34315 15.0711L12.7071 8.70711ZM0 9H12V7H0V9Z"
              fill="currentColor" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>


<style scoped>
.plan_btn {
  color: v-bind('plan.buttonColor');
  border-color: v-bind('plan.buttonColor');
}
.plan_btn:hover {
  /* box-shadow: 0px 15px 34px v-bind('plan.buttonColor');
   */
  color: white;
  background-color: v-bind('plan.buttonColor');
  -webkit-transform: translateY(-3px);
  transform: translateY(-3px);
}
</style>