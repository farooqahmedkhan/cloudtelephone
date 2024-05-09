import { defineStore } from 'pinia'
import { ref } from "vue"
import axios from "../utils/axios.js"


export const useConfigStore = defineStore('config-store', () => {
  const config = ref({ currency: "USD" })
  const plans = ref([])
  // fetch settings
  async function fetchConfig() {
    try {
      const [configResp, plansResp] = await Promise.all([
        axios.get("/config"),
        axios.get("/plans")
      ])
      config.value = configResp.data
      plans.value = plansResp.data
    } catch (error) {
      console.log(error)
    }
  }


  return { fetchConfig, config, plans }
})
