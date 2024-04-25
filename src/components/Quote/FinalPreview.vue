<script setup>
import { ref, onMounted, computed } from "vue"
import { useQuotationStore } from "../../store/quotationStore"
import useCurrency from "@/composables/useCurrency"

const { currencySymbol } = useCurrency()

const quotatonStore = useQuotationStore()
const lead = ref( null )
const loading = ref( false )
onMounted( async () => {
  loading.value = true
  lead.value = await quotatonStore.getLead()
  loading.value = false
} )

const monthly_products = computed( () => {
  const internetProducts = JSON.parse( lead.value.internetProducts )
  const equipments = JSON.parse( lead.value.equipments )
  return [
    ...( internetProducts ? internetProducts.map( ( { name, price_monthly, value, id } ) => ( { id, name, price: price_monthly, quantity: value, total: price_monthly * value } ) ) : [] ),
    ...( equipments ? equipments.filter( ( { price_monthly } ) => price_monthly > 0 )
      .map( ( { name, price_monthly, value, id } ) => ( { id, name, price: price_monthly, quantity: value, total: price_monthly * value } ) ) : [] ),
  ]
} )

const monthly_total = computed( () => monthly_products.value.reduce( ( acc, { total } ) => acc + total, 0 ) )

const upfront_products = computed( () => {
  const equipments = JSON.parse( lead.value.equipments )
  return ( equipments ? equipments.filter( ( { price_upfront } ) => price_upfront > 0 )
    .map( ( { name, price_upfront, value, id } ) => ( { id, name, price: price_upfront, quantity: value, total: price_upfront * value } ) ) : [] )
} )

const upfront_total = computed( () => upfront_products.value.reduce( ( acc, { total } ) => acc + total, 0 ) )

</script>

<template>
  <div v-if="loading || !lead">
    loading...
  </div>
  <div v-else>
    <div class="seventh-1">
      <div class="p-7 text-center">
        <h4 class="text-primary">Your Quotation</h4>
        <p>For: {{ lead?.customer?.name }}</p>
        <p>Date: {{ new Date(lead.created_at).toLocaleDateString('en-GB') }}</p>

        <div class="relative overflow-x-auto">
          <!-- monthly -->
          <div>
            <table class="w-full  border border-neutral-200 text-left text-sm font-light mt-6">
              <tbody>
                <tr class="border-b border-neutral-200 bg-black/[0.02] dark:order-white/10 whitespace-nowrap">
                  <td colspan="4" class="px-6 py-4">
                    <h5 class="text-center">Monthly Breakdown</h5>
                  </td>
                </tr>
                <tr v-for="prod in monthly_products" :key="prod.id"
                  class="border-b border-neutral-200 bg-black/[0.02] dark:order-white/10 whitespace-nowrap">
                  <td class="px-6 py-4 max-w-24 truncate">{{ prod.name }}</td>
                  <td class="px-6 py-4 max-w-24 truncate">{{ currencySymbol }}{{ prod.price }}</td>
                  <td class="px-6 py-4 max-w-24 truncate">{{ prod.quantity }}</td>
                  <td class="px-6 py-4 max-w-24 truncate">{{ currencySymbol }}{{ prod.total }}</td>
                </tr>
              </tbody>
            </table>
            <div class="text-left my-4">
              <h4 class="text-primary">Set-up cost:
                {{ currencySymbol }}{{ monthly_total }}
              </h4>
              <p class="text-primary">Price including VAT
                {{ currencySymbol }}{{ monthly_total + (monthly_total * 0.2) }}
              </p>
            </div>
          </div>
          <!-- setup -->
          <div>
            <table class="w-full  border border-neutral-200 text-left text-sm font-light mt-6">
              <tbody>
                <tr class="border-b border-neutral-200 bg-black/[0.02] dark:order-white/10 whitespace-nowrap">
                  <td colspan="4" class="px-6 py-4">
                    <h5 class="text-center">Set-up Breakdown</h5>
                  </td>
                </tr>
                <tr v-for="prod in upfront_products" :key="prod.id"
                  class="border-b border-neutral-200 bg-black/[0.02] dark:order-white/10 whitespace-nowrap">
                  <td class="px-6 py-4 max-w-24 truncate">{{ prod.name }}</td>
                  <td class="px-6 py-4 max-w-24 truncate">{{ currencySymbol }}{{ prod.price }}</td>
                  <td class="px-6 py-4 max-w-24 truncate">{{ prod.quantity }}</td>
                  <td class="px-6 py-4 max-w-24 truncate">{{ currencySymbol }}{{ prod.total }}</td>
                </tr>
              </tbody>
            </table>
            <div class="text-left my-4">
              <h4 class="text-primary">Set-up cost:
                {{ currencySymbol }}{{ upfront_total }}
              </h4>
              <p class="text-primary">Price including VAT
                {{ currencySymbol }}{{ upfront_total + (upfront_total * 0.2) }}
              </p>
            </div>
          </div>

        </div>
        <div class="my-8 text-left">
          <h4 class="text-primary">Contract</h4>
          <p class="mt-1 text-sm text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
            exercitationem
            repellendus modi maiores
            repudiandae,
            saepe deserunt cumque molestiae facilis tempore laudantium autem perspiciatis nisi illum nostrum enim
            necessitatibus
            cum, itaque reprehenderit veritatis assumenda id quisquam deleniti ad! Unde dicta fuga suscipit saepe
            voluptatum,
            culpa natus non eos atque accusamus dolores!</p>
        </div>
      </div>
    </div>
    <div class="w-100 text-center pb-7">
      <button class="btn btn-green mt-10 text-lg">Order Today</button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>