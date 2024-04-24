<script setup>
import useStep from "@/composables/useStep.js"
import { useQuotationStore } from "@/store/quotationStore"
import { ref } from "vue"
import FeatureItem from "../../Base/FeatureItem.vue"


const { jumpToStep } = useStep()
const quotationStore = useQuotationStore()


const features = ref( [
  {
    id: 1,
    title: "Call Center User",
    price: "£2/user/month",
    value: 0,
    type: 'number'
  },
  {
    id: 2,
    title: "Fax To Email",
    price: "£5/number/month",
    value: 0,
    type: 'number'
  },
  {
    id: 3,
    title: "Professional Recordings",
    price: 127,
    price: "Silver: £174 \n Gold: £375 on off fee",
    desc: "Find Out More",
    type: 'select',
    value: "no",
    options: [
      {
        value: "no",
        title: "No"
      },
      {
        value: "silver",
        title: "Silver"
      },
      {
        value: "gold",
        title: "Gold"
      },
    ]
  },
  {
    id: 4,
    title: "Call Recording",
    desc: "(6 Months Storage)",
    price: "£6/user/month",
    value: false,
    type: 'switch'
  },
  {
    id: 5,
    title: "Call Recording",
    desc: "(7 Months Storage MIFID2)",
    price: "£6/user + £3/GB Stored",
    value: false,
    type: 'switch'
  },
  {
    id: 6,
    title: "Live Call Reporting",
    price: "£4/user + £35 Admin User",
    value: false,
    type: 'switch'
  },
  {
    id: 7,
    title: "Insight Reporting",
    price: "£1/user + £5 Admin User",
    value: false,
    type: 'switch'
  },
  {
    id: 8,
    title: "CRM Integration",
    price: "£6/user",
    value: false,
    type: 'switch'
  },
  {
    id: 9,
    title: "Reception Console",
    price: "£40/site",
    value: false,
    type: 'switch'
  },
  {
    id: 10,
    title: "Multi-Company Set-up",
    price: "£150.00 Setup",
    value: false,
    type: 'switch'
  },

] )

function save () {
  const selectedFeatures = features.value.filter( item => {
    if ( typeof item.value === 'number' ) {
      return item.value > 0
    } else if ( typeof item.value === 'string' ) {
      return item.value !== null && item.value.trim() !== ''
    } else if ( typeof item.value === 'boolean' ) {
      return item.value === true
    } else {
      return false
    }
  } )
  quotationStore.updateLead( { currentStep: 11, extraFeatures: JSON.stringify( selectedFeatures ) } )
  jumpToStep( 11 )
}

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
      <button @click="jumpToStep(9)"
        class="btn text-white rounded-full bg-theme-dark mt-10  bg-opacity-75 text-lg">Previous</button>
      <button @click="save" class="btn btn-green mt-10 text-lg">Next</button>
    </div>
  </div>
</template>
