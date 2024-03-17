<script setup>
const services = [
  "Feature & Pricing",
  "APP & TEAMS",
  "Phones & Accessories",
  "Internet line",
  "voice messages"
]
</script>

<template>
  <section class="section key-feature relative bg-gray-500">
    <div class="container">
      <div class="row justify-between text-center lg:text-start">
        <div class="lg:col-12">
          <h2 class="text-center text-white">Buy trending
            <span class="block text-white uppercase">Services</span>
          </h2>
        </div>
      </div>
      <div class="row justify-between text-center lg:text-start">
        <div class="lg:col-12">
          <div class="key-feature-grid mt-10 grid grid-cols-2 gap-7 md:grid-cols-3 xl:grid-cols-5">
            <div v-for="service in services" :key="service"
              class="flex justify-center rounded-lg bg-white p-5 shadow-lg items-center">
              <h6 class="uppercase text-center">{{ service }}</h6>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<style lang="scss" scoped></style>