import { defineStore } from 'pinia'
import axios from "../utils/axios"
import useLeadId from "../composables/useLeadId.js"

export const useQuotationStore = defineStore( 'quotationStore', {
  state: () => {
    return {
      userDetails: null,
      numberOfUsers: 0,
      categories: [],
      products: [],
      phoneTypes: 0,
      featureItems: [],
      numberPorts: [],
      newTelephonesNumbers: [],
      unifiedCommunicationItems: [],
      installSupport: "automatic" | "manual",
      finalReviewData: null
    }
  },
  actions: {
    async createLead ( customerData ) {
      const { data } = await axios.post( '/leads', customerData )
      this.userDetails = {
        ...data,
        offer_code: customerData.code
      }
      return data
    },
    async getLead () {
      const leadId = useLeadId()
      const { data } = await axios.get( '/leads/' + leadId )
      return data
    },
    async updateLead ( data ) {
      const leadId = useLeadId()
      if ( leadId === null ) return
      const { data: leadData } = await axios.put( '/leads/' + leadId, data )
      return leadData
    },
    async fetchCategories () {
      const { data } = await axios.get( '/categories?name=Broadband&name=Mobile&name=Hardware%20Upgrades' )
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
      const { data } = await axios.get( '/products?category=Equipment' )
      this.products = data.map( product => ( { ...product, value: 0 } ) )
    },
    async fetchUnifiedProducts () {
      const { data } = await axios.get( '/products?category=App%20%26%20Unified%20Communications' )
      this.unifiedCommunicationItems = data.sort( ( a, b ) => a.price - b.price ).map( product => ( { ...product, value: product.name == 'Softphone' ? 1 : 0 } ) )
    },
    valuesSetter ( key, data ) {
      this[key] = data
    },
    async createResidentialLead ( data ) {
      try {
        await Promise.all( [
          this.createCustomer( data ),
          axios.post( '/leads', {
            leadJSON: JSON.stringify( {
              userDetails: {
                ...data,
                product: undefined
              },
              product: data.product,

            } ), type: 'residential'
          } )
        ] )
      } catch ( error ) {
        console.log( error )
      }
    }
  }
} )