import { defineStore } from 'pinia'
import { ref } from "vue"
import axios from "../utils/axios.js"


export const useConfigStore = defineStore( 'config-store', () => {
  const config = ref( { currency: "USD" } )
  // fetch settings
  async function fetchConfig () {
    try {
      const { data } = await axios.get( "/config" )
      config.value = data
    } catch ( error ) {
      console.log( error )
    }
  }


  return { fetchConfig, config }
} )
