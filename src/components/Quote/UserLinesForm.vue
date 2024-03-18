<script setup>
import { ref } from "vue"

const step = ref( 1 )
const userNo = ref( 0 )

function onClickPrev () {
  window.location.hash = 'details'
}
</script>

<template>
  <div id="" class="key-feature-grid grid p-7 text-center">
    <div>
      <div v-if="step == 1" class="screen-2-2 pt-page ">
        <div class="key-feature-grid grid p-7 text-center">
          <h4 class="text-primary">How many users</h4>
          <!-- Input Number -->
          <div class="my-5 space-x-1">
            <button @click="userNo--" data-action="decrement">Decrement</button>
            <input type="text" v-model="userNo">
            <button @click="userNo++" data-action="increment">Increment</button>
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
        <!-- buttons -->
        <div class="w-100 flex justify-between">
          <button @click="onClickPrev" class="btn text-white rounded-full bg-theme-dark mt-10  bg-opacity-75 text-lg"
            type="submit">Previous</button>
          <button @click="step = 2" class="btn btn-green mt-10 text-lg">Next</button>
        </div>
      </div>
      <div v-else class="screen-2 pt-page current">
        <h4 class="text-primary">See Internet Options</h4>
        <div class="key-feature-grid grid gap-7 sm:grid-cols-2 p-7">
          <div class="mb-8 rounded-xl bg-theme-dark text-white py-5 px-5 shadow-lg">
            <h5 class="h5 text-white">Yes</h5>
            <p class="mt-4">
              View Internet Options
            </p>
          </div>
          <div class="mb-8 rounded-xl bg-theme-dark text-white py-5 px-5 shadow-lg">
            <h5 class="h5 text-white">No</h5>
            <p class="mt-2">
              Use my existing internet
            </p>
          </div>
        </div>
        <h5>What does this mean?</h5>
        <p class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam molestie odio id
          gravida fermentum. Etiam quis quam ante. Donec sit amet magna gravida, imperdiet ex lacinia,
          tempor felis. Duis nec fringilla nibh. Vivamus vitae commodo sem. Vivamus vel lacinia massa.
          Curabitur convallis sem id condimentum vulputate.</p>
      </div>
      <!-- <div class="screen-2-1 pt-page ">
        <div class="key-feature-grid grid p-7">
          <h4 class="text-primary text-center">Internet Options</h4>
          <img alt="" src="/images/internet-options.jpg" class="mx-auto">
          <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <h5>Broadband</h5>
                <p class="font-regular">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                  urna elit, congue eget metus sed, <a href="#"> tempus purus.</a> Donec scelerisque urna
                  eget enim interdum, nec euismod nibh consectetur.</p>

              </div>
            </div>
          </div>
          <div class="relative overflow-x-auto">
            <table class="w-full  border border-neutral-200 text-left text-sm font-light mt-6">

              <tbody>
                <tr class="border border-neutral-200 bg-black/[0.02]  whitespace-nowrap">
                  <td class="px-6 py-4" style="white-space: normal;">
                    <h6>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h6>
                    <p>Vivamus urna elit, congue eget metus sed, rhoncus tempus purus. Donec scelerisque
                      urna eget enim interdum, nec euismod nibh consectetur.</p>
                  </td>
                  <td class="px-6 py-4">$33/month</td>
                  <td class="px-6 py-4"><input type="text" class="form-control"></td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div> -->

    </div>
  </div>
</template>

<style lang="scss" scoped></style>