import { defineStore } from 'pinia'
import axios from "../utils/axios"

export const useQuotationStore = defineStore( 'quotationStore', {
  state: () => {
    return {
      userDetails: null,
      numberOfUsers: 0,
      categories: [],
      products: [],
      phoneTypes: 0,
      featureItems: null,
      numberPorts: null,
      newTelephonesNumbers: null,
      unifiedCommunicationItems: null,
      installSupport: "automatic" | "manual",
      finalReviewData: null
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
    async createLead ( leadJSON ) {
      const { data } = await axios.post( '/leads', leadJSON )
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
        const resp = await this.createLead( JSON.stringify( data ) )
        const monthlyProducts = resp.products.filter( product => product.price_monthly > 0 )
        const upfrontProducts = resp.products.filter( product => product.price_upfront > 0 )
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
    }
  }
} )