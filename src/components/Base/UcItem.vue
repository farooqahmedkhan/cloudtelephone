<script setup>
import { PlusIcon, MinusIcon } from "vue-tabler-icons"
const props = defineProps( {
  title: {
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
  <table class="w-full  border border-neutral-200 text-left text-sm font-light mt-6">
    <tbody>
      <tr class="border-b border-neutral-200 bg-black/[0.02] dark:order-white/10 whitespace-nowrap">
        <td class="px-6 py-4">
          <h6>{{ title }} </h6>
        </td>
        <td v-if="price > 0" class="px-6 py-4 text-blue">${{ price }}/month</td>
        <td v-else class="px-6 py-4 text-blue">Free</td>
        <td class="px-6 py-4 text-center">
          <div class="my-5 flex gap-3 justify-center text-gray-700">
            <button @click="decrement">
              <minus-icon size="22" />
            </button>
            <input type="number" min="0" :value="modelValue" @input="emit('update:modelValue', $event.target.value)"
              class="form-control w-14 text-center">
            <button @click="emit('update:modelValue', modelValue + 1)" data-action="increment">
              <plus-icon size="22" />
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>
