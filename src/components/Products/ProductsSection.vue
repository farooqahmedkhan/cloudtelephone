<script setup>
import ProductCard from "../Base/ProductCard.vue"
const product = {
  img: "/images/gradient-number-bg.svg",
  title: "Product",
  desc: "Nulla porttitor acmsan tinci dunt. posuere cubilia Cudfrae Donec velit neque, autor sit amet aliuam vel"
}
</script>

<template>
  <section class="section features pb-0 pt-0">
    <div class="container">
      <div class="row mt-14">
        <ProductCard v-for="i in 6" :key="i" :product="product"></ProductCard>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>