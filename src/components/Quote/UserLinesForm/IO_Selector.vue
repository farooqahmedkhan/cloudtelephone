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
    <p class="mt-4 mx-auto">
      We can provide your Internet connection, including Fibre, SOGEA, 4G, and Lease line. You
      do not have to use our Internet connection to use our phone system, you can stay with your
      current supplier, or you can choose us as your supplier and enjoy our competitive rates
    </p>
    <h5 class="mt-4 mx-auto">Do I need hardware?</h5>
    <p class="mt-4 mx-auto">
      Each user includes an App for both mobile and computers, so you can make and receive
      calls without any hardware. However many people prefer phones, conference pods or
      headsets and we offer a range of quality equipment.
    </p>

    <div class="w-100 flex justify-start">
      <button @click="moveToPreviousStep" class="btn text-white rounded-full bg-theme-dark mt-10  bg-opacity-75 text-lg"
        type="submit">Previous</button>
    </div>
  </div>
</template>
