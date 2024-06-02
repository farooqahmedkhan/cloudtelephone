import { useStorage } from '@vueuse/core'
import { defineStore } from 'pinia'
import { useRouter } from "vue-router"
import axios from "../utils/axios.js"



export const useLeadStore = defineStore('lead-store', () => {

  async function getMyLeads() {
    try {
      const { data } = await axios.get("/leads/get-by-customer")
      return data
    } catch (error) {
      throw error
    }
  }


  async function fetchSingleLead(id) {
    try {
      const { data } = await axios.get(`/leads/${id}`)
      return data
    } catch (error) {
      console.log(error);
    }
  }

  return { getMyLeads, fetchSingleLead }
})
