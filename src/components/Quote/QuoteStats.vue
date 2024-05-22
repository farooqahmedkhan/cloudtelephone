<script setup>
import useCurrency from "@/composables/useCurrency";
import { computed } from "vue";

const props = defineProps( {
  lead: Object
} )

const { currencySymbol } = useCurrency()

const monthly_products = computed( () => {
  const internetProducts = JSON.parse( props.lead.internetProducts )
  const equipments = JSON.parse( props.lead.equipments )
  return [
    ...( internetProducts ? internetProducts.map( ( { name, price_monthly, value, id } ) => ( { id, name, price: price_monthly, quantity: value, total: price_monthly * value } ) ) : [] ),
    ...( equipments ? equipments.filter( ( { price_monthly } ) => price_monthly > 0 )
      .map( ( { name, price_monthly, value, id } ) => ( { id, name, price: price_monthly, quantity: value, total: price_monthly * value } ) ) : [] ),
  ]
} )

const monthly_total = computed( () => monthly_products.value.reduce( ( acc, { total } ) => acc + total, 0 ) )

const upfront_products = computed( () => {
  const equipments = JSON.parse( props.lead.equipments )
  return ( equipments ? equipments.filter( ( { price_upfront } ) => price_upfront > 0 )
    .map( ( { name, price_upfront, value, id } ) => ( { id, name, price: price_upfront, quantity: value, total: price_upfront * value } ) ) : [] )
} )

const upfront_total = computed( () => upfront_products.value.reduce( ( acc, { total } ) => acc + total, 0 ) )

</script>

<template>
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
    <!-- unified products -->
    <table v-if="lead?.unifiedProducts" class="w-full  border border-neutral-200 text-left text-sm font-light mt-6">
      <tbody>
        <tr class="border-b border-neutral-200 bg-black/[0.02] dark:order-white/10 whitespace-nowrap">
          <td colspan="4" class="px-6 py-4">
            <h5 class="text-center">Unified Products</h5>
          </td>
        </tr>
        <tr v-for="prod in JSON.parse(lead?.unifiedProducts)" :key="prod.id"
          class="border-b border-neutral-200 bg-black/[0.02] dark:order-white/10 whitespace-nowrap">
          <td class="px-6 py-4 max-w-24 truncate">{{ prod.name }}</td>
          <td class="px-6 py-4 max-w-24 truncate">{{ currencySymbol }}{{ prod.price }}</td>
          <td class="px-6 py-4 max-w-24 truncate">{{ prod.value }}</td>
          <td class="px-6 py-4 max-w-24 truncate">{{ currencySymbol }}{{ prod.price * prod.value }}</td>
        </tr>
      </tbody>
    </table>

    <!-- extra features -->
    <table v-if="lead?.extraFeatures" class="w-full  border border-neutral-200 text-left text-sm font-light mt-6">
      <tbody>
        <tr class="border-b border-neutral-200 bg-black/[0.02] dark:order-white/10 whitespace-nowrap">
          <td colspan="4" class="px-6 py-4">
            <h5 class="text-center">Extra Features</h5>
          </td>
        </tr>
        <tr v-for="prod in JSON.parse(lead?.extraFeatures)" :key="prod.id"
          class="border-b border-neutral-200 bg-black/[0.02] dark:order-white/10 whitespace-nowrap">
          <td class="px-6 py-4 max-w-24 truncate">{{ prod.title }}</td>
          <td class="px-6 py-4 max-w-24 truncate">{{ currencySymbol }}{{ prod.price }}</td>
          <td class="px-6 py-4 max-w-24 truncate">{{ prod.value }}</td>
        </tr>
      </tbody>
    </table>

    <!-- new telephone numbers -->
    <table v-if="lead?.newTelephoneNumbers" class="w-full  border border-neutral-200 text-left text-sm font-light mt-6">
      <tbody>
        <tr class="border-b border-neutral-200 bg-black/[0.02] dark:order-white/10 whitespace-nowrap">
          <td colspan="4" class="px-6 py-4">
            <h5 class="text-center">New Telephone Numbers</h5>
          </td>
        </tr>
        <tr v-for="no in JSON.parse(lead?.newTelephoneNumbers)" :key="no.id"
          class="border-b border-neutral-200 bg-black/[0.02] dark:order-white/10 whitespace-nowrap">
          <td class="px-6 py-4 max-w-24 truncate">{{ no.title }}</td>
          <td class="px-6 py-4 max-w-24 truncate">{{ currencySymbol }}{{ no.price }}</td>
          <td class="px-6 py-4 max-w-24 truncate">{{ no.value }}</td>
          <td class="px-6 py-4 max-w-24 truncate">{{ currencySymbol }}{{ no.price * no.value }}</td>
        </tr>
      </tbody>
    </table>

    <!-- porting numbers -->
    <table v-if="lead?.portingNumbers" class="w-full  border border-neutral-200 text-left text-sm font-light mt-6">
      <tbody>
        <tr class="border-b border-neutral-200 bg-black/[0.02] dark:order-white/10 whitespace-nowrap">
          <td colspan="4" class="px-6 py-4">
            <h5 class="text-center">Porting Numbers</h5>
          </td>
        </tr>
        <tr v-for="no in JSON.parse(lead?.portingNumbers)" :key="no.id"
          class="border-b border-neutral-200 bg-black/[0.02] dark:order-white/10 whitespace-nowrap">
          <td class="px-6 py-4 max-w-24 truncate">{{ no.title }}</td>
          <td class="px-6 py-4 max-w-24 truncate">{{ currencySymbol }}{{ no.price }}</td>
          <td class="px-6 py-4 max-w-24 truncate">{{ no.value }}</td>
          <td class="px-6 py-4 max-w-24 truncate">{{ currencySymbol }}{{ no.price * no.value }}</td>
        </tr>
      </tbody>
    </table>

    <div class="my-8 text-left">
      <h4 class="text-primary">Installation</h4>
      <p class="mt-1 text-sm text-gray-500">{{ lead?.installationSupport }}</p>
    </div>
</template>


<style lang="scss" scoped></style>