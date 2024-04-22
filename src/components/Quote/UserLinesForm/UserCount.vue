<script setup>
import { ref } from "vue"
import { PlusIcon, MinusIcon } from "vue-tabler-icons"
import { useQuotationStore } from "../../../store/quotationStore"
import { useStepsStore } from "../../../store/stepsStore"

const userNo = ref( 0 )
const quotationStore = useQuotationStore()
const stepStore = useStepsStore()


function decrement () {
  if ( userNo.value > 1 ) {
    userNo.value++
  }
}


function saveUserNo () {
  quotationStore.updateLead( { userCount: userNo.value, currentStep: 3 } )
  stepStore.next()
}

</script>

<template>
  <div class="p-7">
    <div class=" key-feature-grid grid text-center">
      <h4 class="text-primary">How many users</h4>
      <!-- Input Number -->
      <div class="my-5 space-x-1 max-w-64 mx-auto flex">
        <button @click="decrement">
          <minus-icon size="22" />
        </button>
        <input type="number" min="1" v-model="userNo">
        <button @click="userNo++" data-action="increment">
          <plus-icon size="22" />

        </button>
      </div>
      <!-- End Input Number -->

      <p class="my-6">Unlimited free minute bundle to 01/02/03 and UK mobile<span class="text-primary">*</span>
        and includues the basic softphone.</p>

      <h5>What is a user?</h5>
      <p class="mt-4">This is the number of people using the system. Each user gets a softphone and can be assigned
        to a physical phone as well.
        All users can be on the phone at the same time making and receiving calls. You can have a single user on
        more than one phone, but both phones will have the same extension, this works well if you want a phone at
        the office and at home.
        You can add and remove users each month and only pay for what you need, so only choose the number of users
        you need to start with. There is no limit to the number of users our system can handle.</p>
    </div>
    <div class="w-100 flex justify-end">
      <button @click="saveUserNo" class="btn btn-green mt-10 text-lg">Next</button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>