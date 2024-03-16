<script setup>
import BreadCrumb from "../Base/BreadCrumb.vue"
import TimeLineItem from "../Base/TimeLineItem.vue"

const items = [
  {
    id: 1,
    title: "measurable results",
    description: "Encourage frequent & timely recognition integrating with communication tools",
    img: "../assets/images/results.png",
  },
  {
    id: 2,
    title: "market professionals",
    description: "Encourage frequent & timely recognition integrating with communication tools",
    img: "../assets/images/market-professionals.png",
  },
  {
    id: 3,
    title: "international award",
    description: "Encourage frequent & timely recognition integrating with communication tools",
    img: "../assets/images/awards.png",
  },
]
</script>

<template>
  <section class="section banner relative">
    <div class="container">
      <div class="row">
        <BreadCrumb current-page="About Us" />
        <div class="page-hero-content mx-auto max-w-[883px] text-center">
          <h1 class="mb-5 mt-8 capitalize">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h1>
          <p>
            Donec sollicitudin molestie malesda. Donec sollitudin molestie
            malesuada. Mauris pellentesque <br />
            nec, egestas non nisi. Cras ultricies ligula sed magna dictum porta.
            Lorem
          </p>
        </div>

        <div class="row mt-14">
          <time-line-item v-for="(item, i) in items" :key="item.id" :item="item" :last="i === items.length - 1" />
        </div>
      </div>
      <img class="banner-shape absolute -top-28 right-0 -z-[1] w-full max-w-[600px]"
        src="@/assets/images/banner-shape.svg" alt="">

    </div>
  </section>
</template>

<style lang="scss" scoped></style>