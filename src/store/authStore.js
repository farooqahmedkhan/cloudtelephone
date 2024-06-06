import { useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { useRouter } from "vue-router"
import axios from "../utils/axios.js"



export const useAuthStore = defineStore('auth-store', () => {
  const router = useRouter()
  async function login({ email, password }) {
    try {
      const { data } = await axios.post("/auth/login-customer", { email, password })
      router.push('/dashboard')
      const token = useStorage('token',  data.token)
      // useStorage('user', { token: data.token, id: data.id, name: data.name, email: data.email })

    } catch (error) {
      console.log(error);
    }
  }
  return { login }
})
