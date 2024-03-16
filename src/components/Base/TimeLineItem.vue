<script setup>
defineProps( {
  item: {
    type: Object,
    required: true
  },
  last: {
    type: Boolean,
    default: false
  }
} )

</script>

<template>
  <div class="mt-10 text-center sm:col-6 md:col-4 md:mb-0">
    <div class="relative mx-auto mb-8 flex h-[184px] w-[184px] items-center justify-center rounded-xl
       bg-white p-4 shadow-lg after:absolute after:-right-4 after:-z-[1] after:hidden after:w-full
        after:translate-x-full after:border-b-2 after:border-primary/50 after:content-[''] 
        md:after:block" :class="`${last ? 'after:border-none' : 'after:border-dashed'}`">
      <img src="../../assets/images/awards.png" alt="" />
    </div>
    <h2 class="h5 capitalize">{{ item.title }}</h2>
    <p class="mt-4">{{ item.description }}</p>
  </div>
</template>

<style lang="scss" scoped></style>