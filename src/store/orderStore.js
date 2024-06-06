import { defineStore } from 'pinia'
import axios from "../utils/axios.js"


export const useOrderStore = defineStore('order-store', () => {

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
      console.log(error);
    }
  }


  return { createOrder, getMyOrders, fetchSingleOrder }
})
