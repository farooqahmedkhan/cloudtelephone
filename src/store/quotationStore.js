import { defineStore } from 'pinia'
import axios from "../utils/axios"

export const useQuotationStore = defineStore( 'quotationStore', {
  state: () => {
    return {
      leadId: null,
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
    async _createLead ( customerData ) {
      const { data } = await axios.post( '/leads', customerData )
      this.userDetails = {
        ...data,
        offer_code: customerData.code
      }
      this.leadId = data.id
      return data
    },
    async updateLead ( data ) {
      if ( this.leadId === null ) return
      const { data: leadData } = await axios.put( '/leads/' + this.leadId, data )
      return leadData
    },
    async createLead ( leadJSON, type = 'business' ) {
      const { data } = await axios.post( '/leads', { leadJSON: JSON.stringify( leadJSON ), type } )
      return data
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
    // async fetchFeatureProducts () {
    //   const { data } = await axios.get( '/products?category=Pick%20%26%20Mix%20Features' )
    //   this.unifiedCommunicationItems = data.map( product => ( { ...product, value: product.name == 'Softphone' ? 1 : 0 } ) )
    // },
    valuesSetter ( key, data ) {
      this[key] = data
    },
    async submitForm () {
      try {
        const data = {
          userDetails: this.userDetails,
          numberOfUsers: this.numberOfUsers,
          categories: this.categories.filter( category => category.products.some( product => product.value > 0 ) ),
          products: this.products.filter( product => product.value > 0 ),
          phoneTypes: this.phoneTypes,
          unifiedCommunicationItems: this.unifiedCommunicationItems.filter( item => item.value > 0 ),
          featureItems: this.featureItems.filter( item => {
            if ( typeof item.value === 'number' ) {
              return item.value > 0
            } else if ( typeof item.value === 'string' ) {
              return item.value !== null && item.value.trim() !== ''
            } else if ( typeof item.value === 'boolean' ) {
              return item.value === true
            } else {
              return false
            }
          } ),
          numberPorts: this.numberPorts.filter( item => item.value > 0 ),
          newTelephonesNumbers: this.newTelephonesNumbers.filter( item => item.value > 0 ),
          installSupport: this.installSupport,
        }
        const result = await this.createLead( data, 'business' )
        const resp = JSON.parse( result?.leadJSON )
        const productsFromJSON = ( !resp.products || !resp.products.length ) ? [] : resp.products
        const monthlyProducts = productsFromJSON.filter( product => product.price_monthly > 0 )
        const upfrontProducts = productsFromJSON.filter( product => product.price_upfront > 0 )
        this.finalReviewData = {
          name: resp.userDetails.name,
          date: new Date( resp.created_at ).toLocaleDateString( undefined, { day: '2-digit', month: 'long', year: 'numeric' } ),
          monthly_breakdown: monthlyProducts.map( product => {
            return {
              name: product.name,
              price: product.price_monthly,
              quantity: product.value,
              id: product.id,
              total: product.price_monthly * product.value
            }
          } ),
          monthly_total: monthlyProducts.reduce( ( acc, product ) => acc + product.price_monthly * product.value, 0 ),
          upfront_breakdown: upfrontProducts.map( product => {
            return {
              name: product.name,
              price: product.price_upfront,
              quantity: product.value,
              id: product.id,
              total: product.price_upfront * product.value
            }
          } ),
          upfront_total: upfrontProducts.reduce( ( acc, product ) => acc + product.price_upfront * product.value, 0 ),
        }
        window.location.hash = 'review'
      } catch ( error ) {
        console.log( error )
      }
    },
    async createResidentialLead ( data ) {
      try {
        // const [customerData, leadResult] = 
        await Promise.all( [
          this.createCustomer( data ),
          this.createLead( {
            userDetails: {
              ...data,
              product: undefined
            },
            product: data.product,

          }, 'residential' )
        ] )
      } catch ( error ) {
        console.log( error )
      }
    }
  }
} )