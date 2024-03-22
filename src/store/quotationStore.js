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
    setUserDetails ( details ) {
      this.userDetails = details
    },
    setUserNumbers ( no ) {
      this.userNumbers = no
    },
    setBroadBands ( broadBands ) {
      this.broadBands = broadBands
    },
    setUnifiedCommunicationItems ( unifiedCommunicationItems ) {
      this.unifiedCommunicationItems = unifiedCommunicationItems
    },
    setDevices ( devices ) {
      this.devices = devices
    },
    setPhoneTypes ( phoneTypes ) {
      this.phoneTypes = phoneTypes
    },
    setExtraFeaturesItems ( featureItems ) {
      this.featureItems = featureItems
    },
    setNumberPorts ( numberPorts ) {
      this.numberPorts = numberPorts
    },
    setNewTelephonesNumbers ( newTelephonesNumbers ) {
      this.newTelephonesNumbers = newTelephonesNumbers
    }
  }
} )