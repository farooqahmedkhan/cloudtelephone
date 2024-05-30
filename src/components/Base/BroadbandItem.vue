<script setup>
import useCurrency from "@/composables/useCurrency"

const { currencySymbol } = useCurrency()

defineProps({
  name: {
    type: String,
    default: ""
  },
  description: {
    type: String,
    default: ""
  },
  price_monthly: {
    type: Number,
    default: 0
  },
  modelValue: {
    type: Number,
    default: 0
  },
})
</script>

<template>
  <div
    class="grid w-full items-center grid-cols-5 border border-neutral-200 text-left text-sm font-light mt-6 bg-black/[0.02] whitespace-nowrap">
    <div class="px-6 py-4 col-span-3" style="white-space: normal;">
      <h6 v-if="name">{{ name }}</h6>
      <p v-if="description">{{ description }}</p>
    </div>
    <div class="px-6 py-4">{{ currencySymbol }}{{ price_monthly }}/month</div>
    <div class="px-6 py-4"><input type="number" min="0" :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)" class="form-control"></div>
  </div>
</template>
