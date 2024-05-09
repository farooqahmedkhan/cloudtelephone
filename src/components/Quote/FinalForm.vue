<script setup>
import useStep from "@/composables/useStep.js"
import { useQuotationStore } from "@/store/quotationStore"


const { jumpToStep } = useStep()
const quotationStore = useQuotationStore()

function submit () {
  quotationStore.updateLead( { isPartial: false, currentStep: 16 } )
  jumpToStep( 16 )

}
</script>

<template>
  <div>
    <div class="seventh-1">
      <div class="p-7 text-center">
        <h4 class="text-primary">Thankyou</h4>
        <h5 class="text-blue mt-4">What does this mean?</h5>
        <p class="mt-4">Our telephones are dispatched already configured and ready to go, all you need to do is plug
the phone into your Internet Connection. Connectivity can be via existing Network Cabling,
plugged directly into your Router or by using &#39;Ethernet Over Power&#39; Adapters. We can
provide onsite cabling if require, or this can be done by your own local IT company.</p>
        <div class="relative overflow-x-auto">
          <!-- <table class="w-full  border border-neutral-200 text-left text-sm font-light mt-6">
            <tbody>
              <tr class="border-b border-neutral-200 bg-black/[0.02] dark:order-white/10 whitespace-nowrap">
                <td colspan="4" class="px-6 py-4">
                  <h5 class="text-center">Cisco</h5>
                </td>
              </tr>
              <tr class="border-b border-neutral-200 bg-black/[0.02] dark:order-white/10 whitespace-nowrap">
                <td class="px-6 py-4">Lorem ipsum</td>
                <td class="px-6 py-4">Lorem ipsum</td>
                <td class="px-6 py-4">Lorem ipsum</td>
                <td class="px-6 py-4">Lorem ipsum</td>
              </tr>
              <tr class="border-b border-neutral-200 bg-black/[0.02] dark:order-white/10 whitespace-nowrap">
                <td colspan="4" class="px-6 py-4">
                  <h5 class="text-center">Polycorn</h5>
                </td>
              </tr>
              <tr class="border-b border-neutral-200 bg-black/[0.02] dark:order-white/10 whitespace-nowrap">
                <td class="px-6 py-4">Lorem ipsum</td>
                <td class="px-6 py-4">Lorem ipsum</td>
                <td class="px-6 py-4">Lorem ipsum</td>
                <td class="px-6 py-4">Lorem ipsum</td>
              </tr>
            </tbody>
          </table> -->
        </div>

      </div>
    </div>
    <div class="w-100 text-center pb-7">
      <button @click="submit" class="btn btn-green mt-10 text-lg">Submit</button>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>