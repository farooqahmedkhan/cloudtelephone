import { defineStore } from 'pinia'
import { ref } from "vue"
import { useQuotationStore } from "./quotationStore"
import axios from "axios"


export const useAvailabilityStore = defineStore('check-availability', () => {
  const quotationStore = useQuotationStore()
  const resp = ref(null)

  function convertXmlToHtml(xml) {
    // Parse XML to DOM object
    const parser = new DOMParser();
    const xmlNodes = parser.parseFromString(xml, 'application/xml');
    return xmlNodes
  }

  // Send the request
  async function checkAvailability(postCode) {
    try {
      const { data } = await axios.post('/leads/check-availability', {
        postCode,
        telephone: quotationStore.userDetails.telephone
      })

      // resp.value = convertXmlToHtml(data)
      resp.value = data
    } catch (error) {
      resp.value = error
    }
  }

  return {
    checkAvailability, resp
  }
})
