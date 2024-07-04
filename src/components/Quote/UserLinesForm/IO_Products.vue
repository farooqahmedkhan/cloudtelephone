<script setup>
import Input from "@/components/Base/Input.vue"
import useStep from "@/composables/useStep.js"
import { useAvailabilityStore } from "@/store/checkAvailability"
import { useQuotationStore } from "@/store/quotationStore"
import { ref } from "vue"
import BroadbandItem from "../../Base/BroadbandItem.vue"


const { moveToNextStep, moveToPreviousStep } = useStep()



const quotationStore = useQuotationStore()
const availabilityStore = useAvailabilityStore()
const postCode = ref( "" ) //TN27 0JH


const checkAvailability = async () => {
  await availabilityStore.checkAvailability( postCode.value )
}


async function save () {
  const products = quotationStore.categories.flatMap( cate =>
    cate.products.filter( product => product.value > 0 ).map( product => ( {
      ...product,
      categoryId: cate.id,
    } ) )
  )
  if ( products.length ) {
    await quotationStore.updateLead( { internetProducts: JSON.stringify( products ), currentStep: 5 } )
  }
  moveToNextStep()
}

</script>

<template>
  <div class="p-7">
    <div class="key-feature-grid grid">
      <h4 class="text-primary text-center">Internet Options</h4>
      <img alt="" src="/images/internet-options.jpg" class="mx-auto">
      <div class="my-3" v-for="category in quotationStore.categories" :key="category.id">
        <div class="flex flex-col">
          <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block text-center min-w-full py-2 sm:px-6 lg:px-8">
              <h5>{{ category.name }}</h5>
              <p class="font-regular" v-html="category.description" />
            </div>
          </div>
        </div>
        <div class="relative overflow-x-auto">
          <BroadbandItem v-for="prod in category.products" :key="prod.id" v-bind="prod" v-model.number="prod.value" />
        </div>
      </div>

      <hr>
      <div class="space-y-4 mt-4">
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <h5>What is SOGEA?</h5>
          <p class="font-regular">
            SOGEA is the new fibre replacement that comes without PSTN phone capability, allowing it to be delivered at
            at
            lower cost and improved performance - perfect for using with a cloud phone system. Our connections come with
            a
            basic router, or you can upgrade to our business router with VPN.
          </p>
        </div>
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <h5>Check your availability</h5>
          <p class="font-regular">
            To find out what services are available in your area, enter your postcode below:
          </p>
        </div>
        <div class="flex flex-wrap items-center gap-x-6 w-1/2 mx-auto">

          <Input name="''" placeholder="Postcode" class="flex-1" v-model="postCode" id="postcode" />
          <button class="btn btn-green text-lg" @click="checkAvailability">Check</button>
        </div>
        <!-- <pre>{{availabilityStore.availability}}</pre> -->
        <div class="relative overflow-x-auto" v-if="availabilityStore.availability.status">
          <div class="card" v-for="category in availabilityStore.availability.json">
            <div class="card-title">
              <h1 class="text-xl">{{category.name.toUpperCase()}}</h1>
            </div>
            <div class="card-content p-1">
              <table class="w-full border border-neutral-200 text-left text-sm font-light mt-6">
                <tbody>
                  <tr>
                    <td class="px-6 py-3 font-bold">Product</td>
                    <td class="px-6 py-3 font-bold">Throughput(%)</td>
                    <td class="px-6 py-3 font-bold">Up Speed</td>
                    <td class="px-6 py-3 font-bold">Down Speed</td>
                    <td class="px-6 py-3 font-bold">Min Range</td>
                    <!-- <td class="px-6 py-3 font-bold">Max Range</td> -->
                    <!-- <td class="px-6 py-3 font-bold">Max Speed Up</td> -->
                    <!-- <td class="px-6 py-3 font-bold">Max Speed Down</td> -->
                    <!-- <td class="px-6 py-3 font-bold">Min Threshold</td> -->
                    <!-- <td class="px-6 py-3 font-bold">Min Guaranteed Speed</td> -->
                    <!-- <td class="px-6 py-3 font-bold">Est Dowload Range</td> -->
                    <!-- <td class="px-6 py-3 font-bold">Est Upload Range</td> -->
                  </tr>
                  <tr v-for="product in category.block.block" :key="i"
                    class="border-b border-neutral-200 bg-white  dark:border-black/10 whitespace-nowrap">
                    <td class="px-6 py-3">{{ product.a[0].value}}</td>
                    <td class="px-6 py-3">{{ product.a[1].value}}</td>
                    <td class="px-6 py-3">{{ product.a[2].value}}</td>
                    <td class="px-6 py-3">{{ product.a[3].value}}</td>
                    <td class="px-6 py-3">{{ product.a[4].value}}</td>
                    <!-- <td class="px-6 py-3">{{ product.a[5].value}}</td> -->
                    <!-- <td class="px-6 py-3">{{ product.a[6].value}}</td> -->
                    <!-- <td class="px-6 py-3">{{ product.a[7].value}}</td> -->
                    <!-- <td class="px-6 py-3">{{ product.a[8].value}}</td> -->
                    <!-- <td class="px-6 py-3">{{ product.a[9].value}}</td> -->
                    <!-- <td class="px-6 py-3">{{ product.a[10].value}}</td> -->
                    <!-- <td class="px-6 py-3">{{ product.a[11].value}}</td> -->
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-100 flex justify-between">
      <button @click="moveToPreviousStep"
        class="btn text-white rounded-full bg-theme-dark mt-10  bg-opacity-75 text-lg">Previous</button>
      <button @click="save" class="btn btn-green mt-10 text-lg">Next</button>
    </div>
  </div>
</template>