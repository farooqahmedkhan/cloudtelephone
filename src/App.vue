<script setup>
import { onMounted, watch } from "vue"
import { useRoute } from "vue-router"
import Footer from "./layouts/Footer.vue"
import navbar from "./layouts/Navbar.vue"
import { useConfigStore } from "./store/configStore"
import { useQuotationStore } from "./store/quotationStore"

const configStore = useConfigStore()
const quotationStore = useQuotationStore()
const route = useRoute()

onMounted( async () => {
  await configStore.fetchConfig()
  window.addEventListener( 'blur', () => {
    onWindowBlur()
  } )
} )

watch( () => route.name, ( newValue, oldValue ) => {
  if ( oldValue === 'quote' && newValue !== 'quote' ) {
    onWindowBlur()
  }
} )

async function onWindowBlur () {
  let lost_focus = quotationStore.leadData.lost_focus
  if ( !quotationStore.leadData || lost_focus ) return
  await quotationStore.updateLead( {
    lost_focus: true,
    lost_focus_at: new Date()
  } )
  lost_focus = true
}

</script>

<template>
  <div class="mi-h-screen">
    <navbar />
    <RouterView />
    <Footer />
  </div>
</template>
