<script setup>
import useCurrency from "@/composables/useCurrency"

const { currencySymbol } = useCurrency()

defineProps( {
  image_url: {
    type: String,
    default: ""
  },
  title: {
    type: String,
    default: ""
  },
  description: {
    type: String,
    default: ""
  },
  price: {
    type: Number,
    default: 0
  },
  selected: {
    type: Boolean,
    default: false
  }
} )
</script>

<template>
  <button class="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark border"
    :class="`${selected ? 'border-blue-800' : 'border-gray-200'}`">
    <div class="relative overflow-hidden bg-cover bg-no-repeat">
      <img class="rounded-t-lg h-40 w-full object-contain" :src="image_url || 'https://rb.gy/rbhxma'" alt="" />
    </div>
    <div class="p-4 text-surface dark:text-white">
      <h5 class="mb-2 text-xl font-medium leading-tight">{{ title }}</h5>
      <h6 class="text-primary">{{ price < 1 ? 'Free' : `${currencySymbol}` + price }}</h6>
      <p class="mb-4 text-base"> {{ description }} </p>
    </div>
  </button>
</template>
