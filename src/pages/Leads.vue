<script setup>
import { onMounted, ref } from "vue";
import { useLeadStore } from "../store/leadStore";
import { CheckIcon, XIcon } from "vue-tabler-icons";
import dayjs from "dayjs";

const leadStore = useLeadStore()
const leads = ref([])
const loading = ref(false)
onMounted(async () => {
  loading.value = true
  const res = await leadStore.getMyLeads()
  loading.value = false
  leads.value = res
})

const columns = [
  {
    label: 'Name',
    value: 'name'
  },
  {
    label: 'Company Name',
    value: 'company'
  },
  {
    label: 'Lead Type',
    value: 'type'
  },
  {
    label: 'Date',
    value: 'created_at'
  },
  {
    label: 'Is Partial',
    value: 'isPartial'
  }
]

</script>

<template>
  <section class="section banner relative">
    <div class="container py-10 lg:col-12">
      <span class="block text-2xl font-semibold text-blue capitalize">My Leads</span>
      <div class="mt-8 flex flex-col">
        <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table v-if="!loading" class="min-w-full divide-y divide-gray-300">
                <thead class="bg-gray-50">
                  <tr>
                    <th v-for="column in columns" :key="column.value" scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">{{ column.label }}</th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 bg-white">
                  <tr v-for="lead in leads" :key="lead.id" class="cursor-pointer"
                    @click="$router.push(`/leads/${lead.id}`)">
                    <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                      {{ lead.customer.name }}
                    </td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ lead.customer.company }}</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ lead.type }}</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ dayjs(lead.created_at).format('DD MMM YYYY') }}</td>
                    <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <check-icon v-if="lead.isPartial" class="w-5 h-5 text-green-500" />
                      <x-icon v-else class="w-5 h-5 text-red-500" />
                    </td>
                    <td @click.stop class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                      <router-link to="/orders" class="text-indigo-600 hover:text-indigo-700 hover:underline">Order
                        Again</router-link>
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
