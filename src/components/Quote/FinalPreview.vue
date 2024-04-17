<script setup>
import { useQuotationStore } from "../../store/quotationStore"
import useCurrency from "@/composables/useCurrency"

const { currencySymbol } = useCurrency()

const quotatonStore = useQuotationStore()

</script>

<template>
  <div>
    <div class="seventh-1">
      <div class="p-7 text-center">
        <h4 class="text-primary">Your Quotation</h4>
        <p>For: {{ quotatonStore.finalReviewData.name }}</p>
        <p>Date: {{ quotatonStore.finalReviewData.date }}</p>
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
                <tr v-for="prod in quotatonStore.finalReviewData.monthly_breakdown" :key="prod.id"
                  class="border-b border-neutral-200 bg-black/[0.02] dark:order-white/10 whitespace-nowrap">
                  <td class="px-6 py-4">{{ prod.name }}</td>
                  <td class="px-6 py-4">{{ currencySymbol }}{{ prod.price }}</td>
                  <td class="px-6 py-4">{{ prod.quantity }}</td>
                  <td class="px-6 py-4">{{ currencySymbol }}{{ prod.total }}</td>
                </tr>
              </tbody>
            </table>
            <div class="text-left my-4">
              <h4 class="text-primary">Set-up cost:
                {{ currencySymbol }}{{ quotatonStore.finalReviewData.monthly_total }}
              </h4>
              <p class="text-primary">Price including VAT {{ currencySymbol }}6790.00</p>
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
                <tr v-for="prod in quotatonStore.finalReviewData.upfront_breakdown" :key="prod.id"
                  class="border-b border-neutral-200 bg-black/[0.02] dark:order-white/10 whitespace-nowrap">
                  <td class="px-6 py-4">{{ prod.name }}</td>
                  <td class="px-6 py-4">{{ currencySymbol }}{{ prod.price }}</td>
                  <td class="px-6 py-4">{{ prod.quantity }}</td>
                  <td class="px-6 py-4">{{ currencySymbol }}{{ prod.total }}</td>
                </tr>
              </tbody>
            </table>
            <div class="text-left my-4">
              <h4 class="text-primary">Set-up cost:
                {{ currencySymbol }}{{ quotatonStore.finalReviewData.upfront_total }}
              </h4>
              <p class="text-primary">Price including VAT {{ currencySymbol }}6790.00</p>
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