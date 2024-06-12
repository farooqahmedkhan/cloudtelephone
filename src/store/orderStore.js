import { defineStore } from 'pinia'
import axios from "../utils/axios.js"
import { useRouter } from "vue-router"
import { ref } from "vue"


export const useOrderStore = defineStore('order-store', () => {
  const router = useRouter()
  const ipAddress = ref(null)

  async function createOrder(orderData) {
    try {
      const { data } = await axios.post("/orders", orderData)
      return data
    } catch (error) {
      throw error
    }
  }

  async function getMyOrders(){
    try {
      const { data } = await axios.get("/orders/get-by-customer")
      return data
    } catch (error) {
      if (error.response.status == '401') {
        // clear local storage
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        router.push('/signin')
      }
      throw error
    }
  }


  async function fetchSingleOrder(id) {
    try {
      const { data } = await axios.get(`/orders/${id}`)
      return data
    } catch (error) {
      if (error.response.status == '401') {
        // clear local storage
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        router.push('/signin')
      }
      console.log(error);
    }
  }
  async function sendMessage({ orderId, content }) {
    try {
      const { data } = await axios.post(`/orders/${orderId}/send-message`, { content })
      return data
    } catch (error) {
      if (error.response.status == '401') {
        // clear local storage
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        router.push('/signin')
      }
      console.error(error);
    }
  }

  const setIpAddress = async (ip) => {
    ipAddress.value = ip
  }


  return { createOrder, getMyOrders, fetchSingleOrder, sendMessage, setIpAddress }
})
