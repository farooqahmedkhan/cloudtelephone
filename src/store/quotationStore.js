import { defineStore } from 'pinia'
import axios from "../utils/axios"
import useLeadId from "../composables/useLeadId.js"

export const useQuotationStore = defineStore( 'quotationStore', {
  state: () => {
    return {
      userDetails: null,
      categories: [],
      userCount: 0,
      products: [],
      phoneTypes: 0,
      newTelephonesNumbers: [],
      unifiedCommunicationItems: [],
      installSupport: "automatic" | "manual",
      finalReviewData: null,
      leadDataFetched: false,
      extraFeatures: [
        {
          id: 1,
          title: "Call Center User",
          price: "£2/user/month",
          value: 0,
          type: 'number'
        },
        {
          id: 2,
          title: "Fax To Email",
          price: "£5/number/month",
          value: 0,
          type: 'number'
        },
        {
          id: 3,
          title: "Professional Recordings",
          price: 127,
          price: "Silver: £174 \n Gold: £375 on off fee",
          desc: "Find Out More",
          type: 'select',
          value: "no",
          options: [
            {
              value: "no",
              title: "No"
            },
            {
              value: "silver",
              title: "Silver"
            },
            {
              value: "gold",
              title: "Gold"
            },
          ]
        },
        {
          id: 4,
          title: "Call Recording",
          desc: "(6 Months Storage)",
          price: "£6/user/month",
          value: false,
          type: 'switch'
        },
        {
          id: 5,
          title: "Call Recording",
          desc: "(7 Months Storage MIFID2)",
          price: "£6/user + £3/GB Stored",
          value: false,
          type: 'switch'
        },
        {
          id: 6,
          title: "Live Call Reporting",
          price: "£4/user + £35 Admin User",
          value: false,
          type: 'switch'
        },
        {
          id: 7,
          title: "Insight Reporting",
          price: "£1/user + £5 Admin User",
          value: false,
          type: 'switch'
        },
        {
          id: 8,
          title: "CRM Integration",
          price: "£6/user",
          value: false,
          type: 'switch'
        },
        {
          id: 9,
          title: "Reception Console",
          price: "£40/site",
          value: false,
          type: 'switch'
        },
        {
          id: 10,
          title: "Multi-Company Set-up",
          price: "£150.00 Setup",
          value: false,
          type: 'switch'
        }
      ],
      portingNumbers: [
        {
          id: 1,
          value: 0,
          title: "UK Geopgrahic Numbers",
          price: 5
        },
        {
          id: 2,
          value: 0,
          title: "03 Non Geopgrahic Numbers",
          price: 6
        },
        {
          id: 3,
          value: 0,
          title: "04 PK Geopgrahic Numbers",
          price: 14
        }
      ],
      newNumbers: [
        {
          id: 1,
          value: 0,
          title: "UK Geopgrahic Numbers",
          price: 5
        },
        {
          id: 2,
          value: 0,
          title: "03 Non Geopgrahic Numbers",
          price: 6
        }
      ]
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
      if ( !leadId ) return null
      const { data } = await axios.get( '/leads/' + leadId )
      return data
    },
    async updateLead ( data ) {
      const leadId = useLeadId()
      if ( !leadId ) return
      const { data: leadData } = await axios.put( '/leads/' + leadId, data )
      return leadData
    },
    async fetchAllData () {
      const savedLeadData = await this.getLead()
      const [categoriesData, productsData, unifiedData] = await Promise.all( [
        this.fetchCategories(),
        this.fetchProducts(),
        this.fetchUnifiedProducts()
      ] )
      this.categories = categoriesData.map( category => {
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
      this.products = productsData.map( product => ( { ...product, value: 0 } ) )
      this.unifiedCommunicationItems = unifiedData.map( product => ( { ...product, value: product.name == 'Softphone' ? 1 : 0 } ) )
      if ( savedLeadData ) {
        // set user count
        this.userCount = savedLeadData.userCount || 0
        // set categories | internet options
        const internetProducts = JSON.parse( savedLeadData.internetProducts )
        if ( internetProducts ) {
          this.categories.forEach( category => {
            const internetProductsByCategory = internetProducts.filter( product => product.categoryId == category.id )
            // set the value of the products
            category.products.forEach( product => {
              const internetProduct = internetProductsByCategory.find( item => item.id == product.id )
              if ( internetProduct ) {
                product.value = internetProduct.value
              }
            } )
          } )
        }
        // set equipments
        const equipments = JSON.parse( savedLeadData.equipments )
        if ( equipments ) {
          this.products = productsData.map( product => {
            const equipment = equipments.find( item => item.id == product.id )
            if ( equipment ) {
              product.value = equipment.value
            }
            return product
          } )
        }
        // set unified communication items
        const unifiedProducts = JSON.parse( savedLeadData.unifiedProducts )
        if ( unifiedProducts ) {
          this.unifiedCommunicationItems = unifiedData.map( product => {
            const unifiedProduct = unifiedProducts.find( item => item.id == product.id )
            if ( unifiedProduct ) {
              product.value = unifiedProduct.value
            }
            return product
          } )
        }

        // mix features
        const extraFeatures = JSON.parse( savedLeadData.extraFeatures )
        if ( extraFeatures ) {
          this.extraFeatures = this.extraFeatures.map( feature => {
            const savedFeature = extraFeatures.find( item => item.id == feature.id )
            if ( savedFeature ) {
              feature.value = savedFeature.value
            }
            return feature
          } )
        }

        // fetch phone types
        const phoneTypes = JSON.parse( savedLeadData.portingNumbers )
        if ( phoneTypes ) {
          this.portingNumbers = this.portingNumbers.map( phoneType => {
            const savedPhoneType = phoneTypes.find( item => item.id == phoneType.id )
            if ( savedPhoneType ) {
              phoneType.value = savedPhoneType.value
            }
            return phoneType
          } )
        }

        // fetch new number
        const new_numbers = JSON.parse( savedLeadData.newTelephoneNumbers )
        if ( new_numbers ) {
          this.newNumbers = this.newNumbers.map( newNumber => {
            const savedNewNumber = new_numbers.find( item => item.id == newNumber.id )
            if ( savedNewNumber ) {
              newNumber.value = savedNewNumber.value
            }
            return newNumber
          } )
        }

      }
      this.unifiedCommunicationItems = this.unifiedCommunicationItems.sort( ( a, b ) => a.price - b.price )
      this.leadDataFetched = true
    },
    async fetchCategories () {
      const { data } = await axios.get( '/categories?name=Broadband&name=Mobile&name=Hardware%20Upgrades' )
      return data
    },
    async fetchProducts () {
      const { data } = await axios.get( '/products?category=Equipment' )
      return data
    },
    async fetchUnifiedProducts () {
      const { data } = await axios.get( '/products?category=App%20%26%20Unified%20Communications' )
      return data
    },
    valuesSetter ( key, data ) {
      this[key] = data
    }
  }
} )