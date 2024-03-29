import { defineStore } from 'pinia'

export const useQuotationStore = defineStore( 'quotationStore', {
  state: () => {
    return {
      userDetails: null,
      userNumbers: 0,
      broadBands: null,
      phoneTypes: 0,
      featureItems: null,
      numberPorts: null,
      newTelephonesNumbers: null,
      unifiedCommunicationItems: null,
      devices: null
    }
  },
  actions: {
    valuesSetter ( key, data ) {
      this[key] = data
    },
    submitForm () {
      console.log( {
        userDetails: this.userDetails,
        userNumbers: this.userNumbers,
        broadBands: this.broadBands,
        phoneTypes: this.phoneTypes,
        featureItems: this.featureItems,
        numberPorts: this.numberPorts,
        newTelephonesNumbers: this.newTelephonesNumbers,
        unifiedCommunicationItems: this.unifiedCommunicationItems,
        devices: this.devices
      } )
    }
  }
} )