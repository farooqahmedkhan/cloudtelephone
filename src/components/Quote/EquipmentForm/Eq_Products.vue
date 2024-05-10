<script setup>
import useStep from "@/composables/useStep.js"
import { useQuotationStore } from "@/store/quotationStore"
import { Switch } from '@headlessui/vue'
import { computed, ref } from "vue"
import DeviceComponent from "../../Base/DeviceComponent.vue"


const { jumpToStep } = useStep()


const quotationStore = useQuotationStore()



const pay_monthly = ref(false)

function saveProducts() {
  quotationStore.updateLead({ currentStep: 8, equipments: JSON.stringify(quotationStore.products.filter(product => product.value > 0)) })
  jumpToStep(8)
}

const proudctsToShow = computed(() => {
  if (pay_monthly.value) {
    return quotationStore.products.filter(prod => prod.price_monthly > 0)
  }
  return quotationStore.products.filter(prod => prod.price_upfront > 0)
})
</script>

<template>
  <div class="screen-3-1 pt-page ">
    <div class="key-feature-grid  grid p-7 text-center">
      <h4 class="text-primary">Equipment</h4>
      <p class="mt-4 text-justify mx-auto">You can choose to add a phone as part of your monthly billing cost, or buy up
        front and save
        money. Use the toggle to view the different pricing options.</p>

      <div class="my-5 space-y-4">
        <h5 class="mb-2">Change Pricing Options</h5>
        <div class="flex justify-center items-center gap-x-4">
          <p class="text-sm text-gray-500 ml-2">Up front</p>
          <Switch v-model="pay_monthly"
            class="relative inline-flex bg-red-500 h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
            <span aria-hidden="true" :class="pay_monthly ? 'translate-x-9' : 'translate-x-0'"
              class="pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out" />
          </Switch>
          <p class="text-sm text-gray-500">Pay Monthly</p>
        </div>
      </div>
      <div class="key-feature-grid grid gap-7 sm:grid-cols-2 md:grid-cols-3 p-7">
        <DeviceComponent v-for="prod in proudctsToShow" :key="prod.id" v-bind="prod" v-model="prod.value"
          :show-monthly-price="pay_monthly" />
      </div>

    </div>
    <div class="w-100 flex justify-between p-7">
      <button @click="jumpToStep(5)"
        class="btn text-white rounded-full bg-theme-dark mt-10  bg-opacity-75 text-lg">Previous</button>
      <button @click="saveProducts" class="btn btn-green mt-10 text-lg">Next</button>
    </div>
  </div>
</template>