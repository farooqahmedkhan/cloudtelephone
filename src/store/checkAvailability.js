import { defineStore } from 'pinia'
import { ref } from "vue"
import { useQuotationStore } from "./quotationStore"
import axios from "axios"


export const useAvailabilityStore = defineStore( 'check-availability', () => {
  const quotationStore = useQuotationStore()
  const url = 'https://onramp-comms-api.cloud.market'

  const resp = ref( null )


  const config = {
    headers: {
      'Content-Type': 'application/xml'
    }
  }

  // Send the request
  async function checkAvailability ( postCode ) {
    postCode = postCode
    try {
      const xmlData = `<?xml version="1.0"?>
        <Request module="XPS" call="availability" id="E3BW5qUjwDihOrgogpzCum2jm0jokprq" version="2.0.1">
            <a name="cli" format="phone">${quotationStore.userDetails.telephone}</a>
            <a name="postcode" format="postcode">${postCode}</a>
            <a name="username" format="text">api@dmvcomms.com</a>
            <a name="password" format="password">Sweeper1!</a>
            <a name="detailed" format="yesno">Y</a>
            <a name="order-type" format="text">llu migrate in</a>
            <a name="service-type" format="text">adsl</a>
            <a name="address-reference" format="text">an address reference as returned from address_search</a>
            <a name="css-database-code" format="text">a css database code as returned from address_search</a>
        </Request>`
      resp.value = await axios.post( url, xmlData, config )
    } catch ( error ) {
      resp.value = error
    }
  }

  return {
    checkAvailability, resp
  }
} )
