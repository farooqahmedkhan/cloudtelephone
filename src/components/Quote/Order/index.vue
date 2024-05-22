<script setup>
import useStep from "@/composables/useStep.js"
import { ref, onMounted, computed } from "vue"
import { useQuotationStore } from "../../../store/quotationStore"
import QuoteStats from "../QuoteStats.vue";
import CreateOrderForm from "./CreateOrderForm.vue";

const quotatonStore = useQuotationStore()
const lead = ref( null )
const loading = ref( false )
onMounted( async () => {
  loading.value = true
  lead.value = await quotatonStore.getLead()
  loading.value = false
} )

const { jumpToStep } = useStep()

</script>

<template>
  <div v-if="loading || !lead">
    loading...
  </div>
  <div v-else>
    <div class="seventh-1">
      <div class="p-7 text-center">
        <h4 class="text-primary">Place Order</h4>
        <p>For: {{ lead?.customer?.name }}</p>
        <p>Company: {{ lead?.customer?.company }}</p>
        <p>Date: {{ new Date(lead.created_at).toLocaleDateString('en-GB') }}</p>

        <div class="my-8 text-left">
          <h4 class="text-primary">Number of users: {{ lead?.userCount }}</h4>
          <h4 class="text-primary">Number of phone types: {{ lead?.numberOfPhoneTypes }}</h4>
        </div>
        <quote-stats :lead="lead"></quote-stats>
        <create-order-form v-if="lead" :lead="lead" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>