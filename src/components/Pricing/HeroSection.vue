<script setup>
import BreadCrumb from "../Base/BreadCrumb.vue"
</script>

<template>
  <section class="page-hero py-16">
    <div class="section banner relative">
      <div class="text-center">
        <BreadCrumb currentPage="Pricing" />
      </div>
      <div class="page-hero-content mx-auto max-w-[768px] text-center">
        <h1 class="mb-5 mt-8"> Pricing</h1>
        <p>
          Donec sollicitudin molestie malesda. Donec sollitudin molestie
          malesuada. Mauris <br />
          pellentesque nec, egestas non nisi. Cras ultricies ligula sed magna
        </p>
      </div>
      <img class="banner-shape absolute -top-28 right-0 -z-[1] w-full max-w-[600px]" src="/images/banner-shape.svg"
        alt="">

    </div>
  </section>
</template>

<style lang="scss" scoped></style>