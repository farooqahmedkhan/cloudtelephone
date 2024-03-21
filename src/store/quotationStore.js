import { defineStore } from 'pinia'

export const useQuotationStore = defineStore( 'quotationStore', {
  state: () => {
    return {
      userDetails: null,
      userNumbers: 0,
      broadBands: null,
      phoneTypes: 0,
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
    },
    setPhoneTypes ( phoneTypes ) {
      this.phoneTypes = phoneTypes
    },
  }
} )