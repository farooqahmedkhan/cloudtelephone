<script setup>
import useStep from "@/composables/useStep.js"
import { useForm } from "vee-validate"
import { onMounted, reactive } from "vue"
import { useQuotationStore } from "../../store/quotationStore"
import Input from "../Base/Input.vue"

const { moveToNextStep } = useStep()
const { validate } = useForm()


const data = reactive( {
  company: "",
  telephone: "",
  name: "",
  code: "",
  email: ""
} )

const quotationStore = useQuotationStore()


async function submitDetails () {
  const { valid } = await validate()
  if ( !valid ) return
  const resp = await quotationStore.createLead( data )
  moveToNextStep( resp.id )
}


onMounted( () => {
  // if ( process.env.NODE_ENV === "development" ) {
  document.addEventListener( "keydown", handleKeyDown )
  // }
} )

function handleKeyDown ( event ) {
  if ( event.metaKey && event.key === "k" ) {
    populateDummyData()
  }
}

function populateDummyData () {
  data.company = "Company Name"
  data.telephone = "1234567890"
  data.name = "John Doe"
  data.code = "COUPON"
  data.email = "john@doe.com"
}
</script>

<template>
  <div class="key-feature-grid grid grid-cols-1 gap-7 sm:grid-cols-2 p-7">
    <Input name="Company Name" rules="required" v-model="data.company" label="Company Name" placeholder="Company Name"
      id="company-name" />
    <Input type="tel" name="Telephone" rules="required" v-model="data.telephone" label="Telephone"
      placeholder="Mobile or Landline" id="telephone" />
    <Input rules="required" name="Name" v-model="data.name" label="Your Name" placeholder="Full Contact name"
      id="yourname" />
    <Input name="Offer Code" v-model="data.code" label="Discount Coupon" placeholder="If you have a discount offer coupon, enter here"
      id="offer-code" />
    <Input rules="required|email" name="Email" v-model="data.email" label="Email Address" placeholder="Your Email"
      id="email" />
    <button class="btn btn-green mt-10 text-lg text-black font-semibold" @click="submitDetails">Get an Instant Quote</button>
  </div>
</template>

<style lang="scss" scoped></style>