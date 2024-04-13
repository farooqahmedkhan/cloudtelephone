<script setup>
import { PlusIcon, MinusIcon } from "vue-tabler-icons"
import TheCounter from "@/components/Base/TheCounter.vue"
const props = defineProps( {
  name: {
    type: String,
    default: ""
  },
  price: {
    type: Number,
    default: 0
  },
  modelValue: {
    type: Number,
    default: 0
  },
} )


const emit = defineEmits( ["update:modelValue"] )

function decrement () {
  if ( props.modelValue > 0 ) {
    emit( 'update:modelValue', ( props.modelValue - 1 ) )
  }
}
</script>

<template>
  <div
    class="grid grid-cols-3 items-sart w-full border bg-black/[0.02] rounded  whitespace-normal items-center px-6 py-4 border-neutral-200 text-left text-sm font-light gap-4">
    <h6 class="col-span-3 md:col-span-1 break-words">{{ name }}</h6>
    <span class="col-span-3 md:col-span-1 px-6 py-4 text-blue bg-red flex justify-center md:justify-start">
      <template v-if="price > 0">
        ${{ price }}/month
      </template>
      <template v-else>Free</template>
    </span>

    <!-- col-3: Adjusted for responsive layout -->
    <the-counter v-if="price > 0" :model-value="modelValue" @update:model-value="$emit('update:modelValue', $event)" />
    <div v-else class="col-span-3 md:col-span-1 my-5 flex gap-3 justify-center text-gray-700">
      <span>{{ modelValue }}</span>
    </div>
  </div>
</template>
