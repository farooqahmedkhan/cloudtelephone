<script setup>
defineProps( {
  user: Object
} )
</script>

<template>
  <div class="mb-6 flex flex-col px-6 text-center sm:col-6 lg:col-4 sm:items-center">
    <div class="member-avatar inline-flex justify-center">
      <img class="rouded-full h-28 w-28" :src="user.img" alt="">
    </div>
    <div class="mt-6 w-full flex-1 rounded-xl bg-white py-8 px-4 shadow-lg">
      <h5 class="font-primary">{{ user.name }}</h5>
      <p class="mt-1.5">{{ user.desg }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>