<script setup>
import Footer from "./layouts/Footer.vue"
import navbar from "./layouts/Navbar.vue"

</script>

<template>
  <div class="mi-h-screen">
    <navbar />
    <router-view />
    <Footer />
  </div>
</template>
