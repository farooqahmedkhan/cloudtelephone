import { ref, computed } from 'vue'
import { useConfigStore } from "@/store/configStore"


export default function useCurrency () {
  const configStore = useConfigStore()
  const currencyList = {
    "USD": "$",
    "EUR": "€",
    "GBP": "£",
    "PKR": "Rs."
  }

  const currencySymbol = computed( () => {
    return currencyList[configStore.config.currency]
  } )


  return {
    currencySymbol,
  }
}