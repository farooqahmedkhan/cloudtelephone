<script setup>
import useStep from "@/composables/useStep.js"


const { moveToPreviousStep, jumpToStep } = useStep()


</script>

<template>
  <div class="p-7 text-center">
    <h4 class="text-primary">See Internet Options</h4>
    <div class="key-feature-grid grid gap-7 sm:grid-cols-2 p-7">
      <!-- yes button -->
      <button @click="jumpToStep(4)" class="mb-8 rounded-xl bg-theme-dark text-white py-5 px-5 shadow-lg">
        <h5 class="h5 text-white">Yes</h5>
        <p class="mt-4">
          View Internet Options
        </p>
      </button>

      <!-- no button -->
      <button @click="jumpToStep(5)" class="mb-8 rounded-xl bg-theme-dark text-white py-5 px-5 shadow-lg">
        <h5 class="h5 text-white">No</h5>
        <p class="mt-2">
          Use my existing internet
        </p>
      </button>
    </div>
    <h5>What does this mean?</h5>
    <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie odio id
      gravida fermentum. Etiam quis quam ante. Donec sit amet magna gravida, imperdiet ex lacinia,
      tempor felis. Duis nec fringilla nibh. Vivamus vitae commodo sem. Vivamus vel lacinia massa.
      Curabitur convallis sem id condimentum vulputate.</p>

    <div class="w-100 flex justify-start">
      <button @click="moveToPreviousStep" class="btn text-white rounded-full bg-theme-dark mt-10  bg-opacity-75 text-lg"
        type="submit">Previous</button>
    </div>
  </div>
</template>
