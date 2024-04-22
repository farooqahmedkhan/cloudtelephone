<script setup>
import { onMounted, reactive } from "vue"
import Input from "../Base/Input.vue"
import { useForm } from "vee-validate"
import { useQuotationStore } from "../../store/quotationStore"
import { useStepsStore } from "../../store/stepsStore.js"



const stepStore = useStepsStore()
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
  quotationStore._createLead( data )
  stepStore.next()
}


onMounted( () => {
  if ( process.env.NODE_ENV === "development" ) {
    document.addEventListener( "keydown", handleKeyDown )
  }
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
  data.code = "OFFERCODE"
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
    <Input name="Offer Code" v-model="data.code" label="Offer Code" placeholder="If you have an offer code, enter here"
      id="offer-code" />
    <Input rules="required|email" name="Email" v-model="data.email" label="Email Address" placeholder="Your Email"
      id="email" />
    <button class="btn btn-green mt-10 text-lg" @click="submitDetails">Get an Instant Quote</button>
  </div>
</template>

<style lang="scss" scoped></style>