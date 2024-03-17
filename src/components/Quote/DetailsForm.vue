<script setup>
import { reactive } from "vue"

const data = reactive( {
  company: "",
  telephone: "",
  name: "",
  code: "",
  email: ""
} )

</script>

<template>
  <div id="" class="key-feature-grid grid grid-cols-1 gap-7 sm:grid-cols-2 p-7">
    <div class="form-group">
      <label for="Company" class="form-label">Company Name</label>
      <input type="text" v-model="data.company" id="company" class="form-control" placeholder="Company Name">
    </div>
    <div class="form-group">
      <label for="telephone" class="form-label">Telephone</label>
      <input type="tel" id="telephone" v-model="data.telephone" class="form-control" placeholder="Mobile or Landline">
    </div>
    <div class="form-group">
      <label for="Yourname" class="form-label">Your Name</label>
      <input type="text" id="Yourname" class="form-control" placeholder="Full Contact Name" v-model="data.name">
    </div>
    <div class="form-group">
      <label for="Offer" class="form-label">Offer Code</label>
      <input type="text" id="Offer" class="form-control" placeholder="If you have an offer code, enter here"
        v-model="data.code">
    </div>
    <div class="form-group">
      <label for="Email" class="form-label">Email Address</label>
      <input type="email" id="Email" class="form-control" placeholder="Your Email" v-model="data.email">
    </div>
    <button class="btn btn-green mt-10 text-lg" @click="$emit('submit-details', data)">Get an Instant Quote</button>
  </div>
</template>

<style lang="scss" scoped></style>