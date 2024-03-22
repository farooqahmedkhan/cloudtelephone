<script setup>
import { ref } from "vue"
import FeatureItem from "../../Base/FeatureItem.vue"



const features = ref( [
  {
    id: 1,
    title: "Lorem ipsum dolor sit.",
    price: 4,
    value: 0,
    type: 'number'
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet consectetur.",
    price: 6,
    value: 0,
    type: 'number'
  },
  {
    id: 3,
    title: "Lorem, ipsum dolor.",
    price: 127,
    value: "US",
    type: 'select',
    options: [
      {
        value: "US",
        title: "United States"
      },
      {
        value: "CA",
        title: "Canada"
      },
      {
        value: "FR",
        title: "France"
      },
      {
        value: "DE",
        title: "Germany"
      }
    ]
  },
  {
    id: 4,
    title: "Lorem, ipsum.",
    price: 13,
    value: false,
    type: 'switch'
  }
] )

</script>


<template>
  <div class="screen-4-2 pt-page ">
    <div class="key-feature-grid  grid p-7">
      <h4 class="text-primary text-center">Pick &amp; Mix Features</h4>
      <p class="font-regular text-center">Lorem ipsum dolor sit amet.</p>
      <div class="relative overflow-x-auto">
        <table class="w-full  border border-neutral-200 text-left text-sm font-light mt-6">
          <tbody>
            <FeatureItem v-for="feature in features" :key="feature.id" v-model="feature.value" v-bind="feature" />
          </tbody>
        </table>
      </div>

    </div>
    <div class="w-100 flex justify-between p-7">
      <button @click="$emit('onClickPrev')"
        class="btn text-white rounded-full bg-theme-dark mt-10  bg-opacity-75 text-lg">Previous</button>
      <button @click="$emit('onClickNext', features)" class="btn btn-green mt-10 text-lg">Next</button>
    </div>
  </div>
</template>
