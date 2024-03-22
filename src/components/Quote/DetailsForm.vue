<script setup>
import { reactive } from "vue"
import Input from "../Base/Input.vue"
import { useForm } from "vee-validate"
import { useQuotationStore } from "../../store/quotationStore"


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
  quotationStore.valuesSetter( 'userDetails', data )
  window.location.hash = 'user-lines'
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
    <Input rules="required" name="Offer Code" v-model="data.code" label="Offer Code"
      placeholder="If you have an offer code, enter here" id="offer-code" />
    <Input rules="required|email" name="Email" v-model="data.email" label="Email Address" placeholder="Your Email"
      id="email" />
    <button class="btn btn-green mt-10 text-lg" @click="submitDetails">Get an Instant Quote</button>
  </div>
</template>

<style lang="scss" scoped></style>