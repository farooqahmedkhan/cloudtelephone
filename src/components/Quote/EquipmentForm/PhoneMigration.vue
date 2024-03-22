<script setup>
import { PlusIcon, MinusIcon } from "vue-tabler-icons"


const props = defineProps( {
  modelValue: {
    type: Number,
    default: 0
  }
} )

const emit = defineEmits( ["update:modelValue"] )

function decrement () {
  if ( props.modelValue > 0 ) {
    emit( 'update:modelValue', ( props.modelValue - 1 ) )
  }
}


</script>

<template>
  <div class="screen-2-2 pt-page ">
    <div class="key-feature-grid grid p-7 text-center">
      <h4 class="text-primary">Number of Phone Types</h4>
      <!-- Input Number -->
      <div class="my-5 space-x-1 max-w-64 mx-auto flex">
        <button @click="decrement">
          <minus-icon size="22" />
        </button>
        <input type="number" :min="0" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)">
        <button @click="$emit('update:modelValue', modelValue + 1)" data-action="increment">
          <plus-icon size="22" />

        </button>
      </div>
    </div>
    <div class="text-center px-7">

      <h5>What does this mean?</h5>
      <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie odio id
        gravida fermentum. Etiam quis quam ante. Donec sit amet magna gravida, imperdiet lacinia,
        tempor felis. Duis nec fringilla nibh. Vivamus vitae commodo sem. Vivamus vel lacinia massa.
        Curabitur convallis sem id condimentum vulputate.</p>
    </div>

    <div class="w-100 flex justify-between p-7">
      <button @click="$emit('onClickPrev')"
        class="btn text-white rounded-full bg-theme-dark mt-10  bg-opacity-75 text-lg">Previous</button>
      <button @click="$emit('onClickNext')" class="btn btn-green mt-10 text-lg">Next</button>
    </div>
  </div>
</template>
