<script setup>
defineProps( {
  product: {
    type: Object
  }
} )
</script>

<template>
  <div class="mb-8 sm:col-6 lg:col-4">
    <div class="rounded-xl bg-white p-6 shadow-lg lg:p-8">
      <div class="gradient-number relative inline-block">
        <span class="bg-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">01</span>
        <img :src="product.img" alt="">
      </div>
      <h4 class="my-6">{{ product.title }}</h4>
      <p>
        {{ product.desc }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>