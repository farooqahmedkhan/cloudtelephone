<script setup>
import BroadbandItem from "../../Base/BroadbandItem.vue"
import Input from "@/components/Base/Input.vue"
import { useQuotationStore } from "@/store/quotationStore"
import { onMounted, ref } from "vue"


const quotationStore = useQuotationStore()
const fetchingData = ref( false )


onMounted( async () => {
  fetchingData.value = true
  await quotationStore.fetchCategories()
  fetchingData.value = false
} )

</script>

<template>
  <div class="screen-2-1 pt-page ">
    <div class="key-feature-grid grid p-7">
      <h4 class="text-primary text-center">Internet Options</h4>
      <img alt="" src="/images/internet-options.jpg" class="mx-auto">
      <div v-if="fetchingData" class="mt-4">
        loading...
      </div>
      <template v-else>
        <div class="my-3" v-for="category in quotationStore.categories" :key="category.id">
          <div class="flex flex-col">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                <h5>{{ category.name }}</h5>
                <p class="font-regular" v-html="category.description" />
              </div>
            </div>
          </div>
          <div class="relative overflow-x-auto">
            <BroadbandItem v-for="prod in category.products" :key="prod.id" v-bind="prod" v-model.number="prod.value" />
          </div>
        </div>
      </template>
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

          <Input name="''" placeholder="Postcode" class="flex-1" />
          <button class="btn btn-green text-lg">Check</button>
        </div>
      </div>
    </div>
    <div class="w-100 flex justify-between">
      <button @click="$emit('moveToPrevious')"
        class="btn text-white rounded-full bg-theme-dark mt-10  bg-opacity-75 text-lg">Previous</button>
      <button @click="$emit('moveToNext')" class="btn btn-green mt-10 text-lg">Next</button>
    </div>
  </div>
</template>