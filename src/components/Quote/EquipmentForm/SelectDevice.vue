<script setup>
import { useQuotationStore } from "@/store/quotationStore"
import DeviceComponent from "../../Base/DeviceComponent.vue"
import Switch from "../../Base/Switch.vue"
import { onMounted, ref } from "vue"


const items = ref( [
  {
    id: 1,
    img: '/images/cta-phone.png',
    title: "Card Title",
    value: 0,
    price: 128
  },
  {
    id: 2,
    img: '/images/cta-phone.png',
    title: "Card Title 2",
    value: 0,
    price: 18
  },
  {
    id: 3,
    img: '/images/cta-phone.png',
    title: "Card Title 3",
    value: 0,
    price: 158
  },
  {
    id: 4,
    img: '/images/cta-phone.png',
    title: "Card Title 4",
    value: 0,
    price: 971
  },
] )


const quotationStore = useQuotationStore()
const loading = ref( false )

onMounted( async () => {
  loading.value = true
  await quotationStore.fetchProducts()
  loading.value = false
} )

const changePricing = ref( false )
const stepNo = ref( 1 )

function onClickPrev () {
  if ( stepNo.value <= 1 ) {
    window.location.hash = 'user-lines'
  } else {
    stepNo.value--
  }

}

function onClickNext () {
  if ( stepNo.value > 1 ) {
    window.location.hash = "extra-features"
  } else {
    stepNo.value++
  }
}
</script>

<template>
  <div class="screen-3-1 pt-page ">
    <div class="key-feature-grid  grid p-7 text-center">
      <h4 class="text-primary">Equipment</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget nibh cursus, egestas
        sapien consequat, aliquet ligula. Vestibulum in commodo augue</p>

      <div class="my-5 space-y-4">
        <h5 class="mb-2">Change Pricing Options</h5>
        <Switch v-model="changePricing" class="mx-auto" />
      </div>
      <div class="key-feature-grid grid gap-7 sm:grid-cols-2 md:grid-cols-3 p-7">
        <DeviceComponent v-for="prod in quotationStore.products" :key="prod.id" v-bind="prod" v-model="prod.value" />
      </div>

    </div>
    <div class="w-100 flex justify-between p-7">
      <button @click="$emit('onClickPrev')"
        class="btn text-white rounded-full bg-theme-dark mt-10  bg-opacity-75 text-lg">Previous</button>
      <button @click="$emit('onClickNext', items)" class="btn btn-green mt-10 text-lg">Next</button>
    </div>
  </div>
</template>