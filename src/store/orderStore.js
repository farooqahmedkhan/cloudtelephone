import { defineStore } from 'pinia'
import axios from "../utils/axios.js"


export const useOrderStore = defineStore('order-store', () => {

  async function createOrder(orderData) {
    try {
      const { data } = await axios.post("/orders", orderData)
      return data
    } catch (error) {
      console.log(error);
    }
  }

  return { createOrder }
})
