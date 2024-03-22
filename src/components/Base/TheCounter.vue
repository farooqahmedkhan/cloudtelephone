<script setup>
import { PlusIcon, MinusIcon } from "vue-tabler-icons"
const props = defineProps( {
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
  <div class="flex gap-3 justify-center text-gray-700">
    <button @click="decrement">
      <minus-icon size="22" />
    </button>
    <input type="number" min="0" :value="modelValue" @input="emit('update:modelValue', $event.target.value)"
      class="form-control w-14 text-center">
    <button @click="emit('update:modelValue', modelValue + 1)" data-action="increment">
      <plus-icon size="22" />
    </button>
  </div>
</template>