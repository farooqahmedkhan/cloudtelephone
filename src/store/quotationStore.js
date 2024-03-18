import { defineStore } from 'pinia'

export const useQuotationStore = defineStore( 'quotationStore', {
  state: () => {
    return {
      userDetails: null
    }
  },
  actions: {
    setUserDetails ( details ) {
      this.userDetails = details
    }
  }
} )