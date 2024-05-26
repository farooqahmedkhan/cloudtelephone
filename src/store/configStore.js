import { defineStore } from 'pinia'
import { ref } from "vue"
import axios from "../utils/axios.js"


export const useConfigStore = defineStore('config-store', () => {
  const config = ref({ currency: "USD" })
  const plans = ref([])
  const campaigns = ref([])
  // fetch settings
  async function fetchConfig() {
    try {
      const [configResp, plansResp, campaignsResp] = await Promise.all([
        axios.get("/config"),
        axios.get("/plans"),
        axios.get("/campaigns")
      ])
      config.value = configResp.data
      plans.value = plansResp.data
      campaigns.value = campaignsResp.data
    } catch (error) {
      console.log(error)
    }
  }



  return { fetchConfig, config, plans, campaigns }
})
