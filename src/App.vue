<script setup>
import { onMounted } from "vue"
import Footer from "./layouts/Footer.vue"
import navbar from "./layouts/Navbar.vue"
import { useConfigStore } from "./store/configStore"

const configStore = useConfigStore()

onMounted( async () => {
  await configStore.fetchConfig()
} )



</script>

<template>
  <div class="mi-h-screen">
    <navbar />
    <RouterView />
    <Footer />
  </div>
</template>
