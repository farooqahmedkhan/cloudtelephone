<script setup>
import BreadCrumb from "../Base/BreadCrumb.vue"


</script>

<template>
  <section class="section banner relative">
    <div class="container">
      <div class="row">
        <div class="py-10 lg:col-12 text-center">
          <BreadCrumb currentPage="Products" class="inline-flex lg:hidden" />
        </div>
      </div>

      <div class="row">
        <div class="lg:col-6 lg:order-2">
          <img class="mx-auto w-full object-contain rounded-2xl" src="/images/projduct-img.jpg" width="412" height="483"
            alt="" />
        </div>
        <div class="mt-10 lg:col-6 lg:order-1 lg:mt-0">
          <BreadCrumb currentPage="Products" class="hidden lg:inline-flex" />
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h1>
          <p class="mt-6">
            Donec sollicitudin molestie malesda. Donec sollitudin molestie
            malesuada. Mauris pellentesque nec, egestas non nisi. Cras ultricies
            ligula sed magna dictum porta. Lorem
          </p>
        </div>
      </div>
      <img class="banner-shape absolute -top-28 right-0 -z-[1] w-full max-w-[600px]" src="/images/banner-shape.svg"
        alt="">
    </div>
  </section>
</template>

<style lang="scss" scoped></style>