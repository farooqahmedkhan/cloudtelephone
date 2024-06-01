<script setup>
import useCurrency from "@/composables/useCurrency";
import { useOrderStore } from "@/store/orderStore";
import { computed } from "vue";
import { onMounted } from "vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter()
const orderStore = useOrderStore()

const { currencySymbol } = useCurrency()
const order = ref(null)
const lead = ref(null)
const loading = ref(false)

onMounted(async () => {
  loading.value = true
  order.value = await orderStore.fetchSingleOrder(router.currentRoute.value.params.id)
  lead.value = order.value.lead
  loading.value = false
})

const monthly_products = computed(() => {
  const internetProducts = JSON.parse(lead.value.internetProducts)
  const equipments = JSON.parse(lead.value.equipments)
  return [
    ...(internetProducts ? internetProducts.map(({ name, price_monthly, value, id }) => ({ id, name, price: price_monthly, quantity: value, total: price_monthly * value })) : []),
    ...(equipments ? equipments.filter(({ price_monthly }) => price_monthly > 0)
      .map(({ name, price_monthly, value, id }) => ({ id, name, price: price_monthly, quantity: value, total: price_monthly * value })) : []),
  ]
})

const monthly_total = computed(() => monthly_products.value.reduce((acc, { total }) => acc + total, 0))

const upfront_products = computed(() => {
  const equipments = JSON.parse(lead.value.equipments)
  return (equipments ? equipments.filter(({ price_upfront }) => price_upfront > 0)
    .map(({ name, price_upfront, value, id }) => ({ id, name, price: price_upfront, quantity: value, total: price_upfront * value })) : [])
})

const upfront_total = computed(() => upfront_products.value.reduce((acc, { total }) => acc + total, 0))

</script>

<template>
  <section class="section banner relative">
    <div class="container py-10 lg:col-12">
      <div v-if="loading || !lead">
    loading...
  </div>
  <div v-else class="">
    <div class="seventh-1">
      <div class="p-7 text-center">
        <h4 class="text-3xl font-bold my-2">Order Details</h4>
        <p>For: {{ order?.customer?.name }}</p>
        <p>Company: {{ order?.customer?.company }}</p>
        <p>Date: {{ new Date(order.created_at).toLocaleDateString('en-GB') }}</p>


        <div class="my-8 text-left border px-4 py-3">
          <h4 class="text-xl font-normal text-primary">Number of users: {{ lead?.userCount }}</h4>
          <h4 class="text-xl font-normal text-primary">Number of phone types: {{ lead?.numberOfPhoneTypes }}</h4>
          <h4 class="text-xl font-normal text-primary">Bank: {{ order.bank_name }}</h4>
          <h4 class="text-xl font-normal text-primary">Billing Address: {{ order.billing_address1 }} / {{ order.billing_address2 }}</h4>
          <h4 class="text-xl font-normal text-primary">City: {{ order.billing_city }}</h4>
          <h4 class="text-xl font-normal text-primary">Country: {{ order.billing_country }}</h4>
          <h4 class="text-xl font-normal text-primary">Postcode: {{ order.billing_postcode }}</h4>
          <h4 class="text-xl font-normal text-primary">Billing Email: {{ order.billing_email }}</h4>
        </div>

        <div class="relative overflow-x-auto">
          <!-- monthly -->
          <div v-if="monthly_products.length">
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
          <div v-if="upfront_products.length">
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
        <table v-if="lead?.newTelephoneNumbers"
          class="w-full  border border-neutral-200 text-left text-sm font-light mt-6">
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

        <div v-if="lead?.installationSupport" class="my-8 text-left">
          <h4 class="text-primary">Installation</h4>
          <p class="mt-1 text-sm text-gray-500">{{ lead?.installationSupport }}</p>
        </div>
      </div>
    </div>
  </div>
    </div>
  </section>
</template>