import { defineStore } from 'pinia'

export const useQuotationStore = defineStore( 'quotationStore', {
  state: () => {
    return {
      userDetails: null,
      userNumbers: 0,
    }
  },
  actions: {
    setUserDetails ( details ) {
      this.userDetails = details
    },
    setUserNumbers ( no ) {
      this.userNumbers = no
    },
  }
} )