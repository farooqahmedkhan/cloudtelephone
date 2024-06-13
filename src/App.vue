<script setup>
import { onMounted, watch } from "vue"
import { useRoute } from "vue-router"
import Footer from "./layouts/Footer.vue"
import navbar from "./layouts/Navbar.vue"
import { useConfigStore } from "./store/configStore"
import { useOrderStore } from "./store/orderStore"
import { useQuotationStore } from "./store/quotationStore"

const configStore = useConfigStore()
const quotationStore = useQuotationStore()
const orderStore = useOrderStore()
const route = useRoute()

onMounted( async () => {
  await configStore.fetchConfig()
  window.addEventListener( 'blur', () => {
    onWindowBlur()
  } )
  const res = await fetch('https://api.ipify.org?format=json')

  const { ip } = await res.json()
  if ( ip ) {
    quotationStore.ipAddress = ip
    orderStore.setIpAddress(ip)
  }
} )

watch( () => route.name, ( newValue, oldValue ) => {
  if ( oldValue === 'quote' && newValue !== 'quote' ) {
    onWindowBlur()
  }
} )

async function onWindowBlur () {
  if ( !quotationStore.leadData || quotationStore.leadData.lost_focus || quotationStore.leadData.currentStep <= 1 ) return
  await quotationStore.updateLeadFocusStatus()
}

</script>

<template>
  <div>
    <template v-if="$route.meta.fullscreen">
      <RouterView />
    </template>
    <template v-else>
      <navbar />
      <RouterView />
      <Footer />
    </template>
  </div>
</template>
