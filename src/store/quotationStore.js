import { defineStore } from 'pinia'
import axios from "../utils/axios"

export const useQuotationStore = defineStore( 'quotationStore', {
  state: () => {
    return {
      userDetails: null,
      userNumbers: 0,
      categories: [],
      products: [],
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
    async createCustomer ( customerData ) {
      const { data } = await axios.post( '/customers', customerData )
      this.userDetails = {
        ...data,
        offer_code: customerData.code
      }
      return data
    },
    async createLead ( leadsData ) {
      const { data } = await axios.post( '/leads', leadsData )
      return data
    },
    async fetchCategories () {
      const { data } = await axios.get( '/categories' )
      this.categories = data.map( category => {
        const products = category.products.map( product => {
          return {
            ...product,
            value: 0
          }
        } )

        return {
          ...category,
          products
        }
      } )
    },
    async fetchProducts () {
      const { data } = await axios.get( '/products' )
      this.products = data.map( product => ( { ...product, value: 0 } ) )
      console.log( this.products )
    },
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