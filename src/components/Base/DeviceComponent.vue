<script setup>
import { PlusIcon, MinusIcon } from "vue-tabler-icons"

const props = defineProps( {
  img: {
    type: String,
    default: ""
  },
  title: {
    type: String,
    default: ""
  },
  modelValue: {
    type: Number,
    default: 0
  },
  price: {
    type: Number,
    default: 0
  },
} )
const emit = defineEmits( ["update:modelValue"] )

function decrement () {
  if ( props.modelValue > 1 ) {
    emit( 'update:modelValue', ( props.modelValue - 1 ) )
  }
}

</script>

<template>
  <div class="block rounded-lg bg-white shadow-secondary-1 dark:bg-surface-dark">
    <div class="relative overflow-hidden bg-cover bg-no-repeat">
      <img class="rounded-t-lg" :src="img" alt="" />
      <a href="#!">
        <div
          class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
        </div>
      </a>
    </div>
    <div class="p-4 text-surface dark:text-white">
      <!-- Input Number -->
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
      <!-- End Input Number -->
      <h5 class="mb-2 text-xl font-medium leading-tight">{{ title }}</h5>
      <h6 class="text-primary">${{ price }}</h6>
      <p class="mb-4 text-base"> Some quick example text to build on the card title and make up
        the bulk of the card's content. </p>
    </div>
  </div>
</template>
