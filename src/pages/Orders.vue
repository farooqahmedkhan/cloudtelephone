<script setup>
import { onMounted, ref } from "vue";
import { useOrderStore } from "../store/orderStore";
const orderStore = useOrderStore()
const orders = ref([])
const loading = ref(false)
onMounted(async () => {
  loading.value = true
  const res = await orderStore.getMyOrders()
  loading.value = false
  orders.value = res
})

const columns = [
  {
    label: 'Name',
    value: 'name'
  },
  {
    label: 'Email',
    value: 'email'
  },
  {
    label: 'Bank Name',
    value: 'bank_name'
  },
  {
    label: 'Billing Address',
    value: 'billing_address1'
  },
  {
    label: 'Order Status',
    value: 'order_status'
  }
]

</script>

<template>
  <section class="section banner relative">
    <div class="container py-10 lg:col-12">
      <span class="block text-2xl font-semibold text-blue capitalize">My Orders</span>
      <div class="mt-8 flex flex-col">
        <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table v-if="!loading" class="min-w-full divide-y divide-gray-300">
                <thead class="bg-gray-50">
                  <tr>
                    <th v-for="column in columns" :key="column.value" scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">{{column.label}}</th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 bg-white">
                  <tr v-for="order in orders" :key="order.id" class="cursor-pointer" @click="$router.push(`/orders/${order.id}`)">
                    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                      {{ order.customer.name }}</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ order.customer.email }}</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ order.bank_name }}</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ order.billing_address1 }}</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 capitalize">{{ order.order_status }}</td>
                    <td @click.stop class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <button @click="$router.push({ path: `/orders/${order.id}`, hash: '#msg-box' })" class="text-indigo-600 hover:text-indigo-700 hover:underline">Contact</button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div v-else>Loading...</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
