<script setup>
import { useForm } from "vee-validate";
import { reactive } from "vue";
import { useAuthStore } from "../store/authStore.js";


const authStore = useAuthStore()

import Input from "../components/Base/Input.vue";
const userData = reactive({
  email: "",
  password: "",
})

const { validate } = useForm()


async function login() {
  const { valid } = await validate()
  if (!valid) return
  authStore.login(userData)
  console.log('login');
}


function populateDummyData() {
  userData.email = "john@doe.com"
  userData.password = "12345678"
  
}
</script>

<template>
  <div class="flex w-full h-screen bg-gray-50 justify-center items-center">
    <div class="flex w-full mx-2 lg:mx-0 lg:w-[35rem] flex-col">
      <div class="bg-white px-6 py-8 rounded-md shadow-md text-black w-full">
        <h1 class="mb-8 text-3xl text-center" @dblclick="populateDummyData">Login</h1>
        <Input rules="required|email" name="Email" v-model="userData.email" label="Email Address"
          placeholder="Enter Email" id="email" />
        <Input rules="required" name="Password" v-model="userData.password" label="Password"
          placeholder="Enter Password" id="password" type="password" class="mt-5" />
        <button @click="login" class="btn mt-5 text-lg mx-auto w-full rounded-full bg-sky-500 text-white hover:bg-white hover:border hover:border-sky-500 hover:text-primary hover:font-semibold hover:shadow-sky-500 hover:shadow-md">Login</button>
      </div>
    </div>
  </div>
</template>
