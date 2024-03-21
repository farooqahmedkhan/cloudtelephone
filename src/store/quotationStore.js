import { defineStore } from 'pinia'

export const useQuotationStore = defineStore( 'quotationStore', {
  state: () => {
    return {
      userDetails: null,
      userNumbers: 0,
      broadBands: null,
      devices: null
    }
  },
  actions: {
    setUserDetails ( details ) {
      this.userDetails = details
    },
    setUserNumbers ( no ) {
      this.userNumbers = no
    },
    setBroadBands ( broadBands ) {
      this.broadBands = broadBands
    },
    setDevices ( devices ) {
      this.devices = devices
    }
  }
} )