<script setup>
import BroadbandItem from "../../Base/BroadbandItem.vue"
import { ref } from "vue"

const options = ref( [
  {
    title: "Broadband Unlimited 80/20MB (SOGEA)",
    desc: "Line speed up to 80MB download and 20MB upload, this is our most popular connectivity",
    price: 33,
    value: 0
  },
  {
    title: "Broadband & Mobile Unlimited 80/20MB 4G (SOGEA + 4G)",
    desc: "Add 4G backup to your broadband to enjoy always on broadband with automatic failover.",
    price: 68,
    value: 0
  },
  {
    title: "Superfast Unlimited 160/30MB (FTTP)",
    desc: "Available in some places, FTTP (fibre to the premises) is faster than broadband.",
    price: 46,
    value: 0
  },
  {
    title: "Superfast Unlimited 550/75MB (FTTP)",
    desc: "Available in some places, with speed of up to 550MB download, this is our popular FTTP",
    price: 55,
    value: 0
  },
  {
    title: "Superfast Unlimited 1000/115MB (FTTP)",
    desc: "Available in some places, the fastest available FTTP for super high speed internet.",
    price: 58,
    value: 0
  },
  {
    title: "FTTP 4G Failover",
    desc: "Add Unlimited 4G mobile backup to your FTTP connection",
    price: 35,
    value: 0
  }
]
)

</script>

<template>
  <div class="screen-2-1 pt-page ">
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
        <BroadbandItem v-for="op in options" :key="op.title" v-bind="op" v-model.number="op.value" />
      </div>
    </div>
    <div class="w-100 flex justify-between">
      <button @click="$emit('moveToPrevious')"
        class="btn text-white rounded-full bg-theme-dark mt-10  bg-opacity-75 text-lg">Previous</button>
      <button @click="$emit('moveToNext', options)" class="btn btn-green mt-10 text-lg">Next</button>
    </div>
  </div>
</template>