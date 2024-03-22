<script setup>
defineProps( {
  title: {
    type: String,
    default: ""
  },
} )
</script>

<template>
  <div class="md:col-6 lg:col-5">
    <div class="rounded-xl bg-white px-8 py-10 shadow-lg text-center pricing">
      <h2 class="h3 border-b border-border pb-5 uppercase">{{ title }}</h2>
      <slot name="default" />
      <slot name="footer" />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>