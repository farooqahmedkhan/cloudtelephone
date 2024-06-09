<script setup>
import { useConfigStore } from "../../store/configStore";
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import PricingCard from "../Base/PricingCard.vue"

const configStore = useConfigStore()
</script>

<template>
  <section class="section reviews">
    <div class="container-fluid bg-blue text-neutral-50">
      <div class="row">
        <div class="col-12">
          <swiper :slides-per-view="1" :space-between="50" :modules="[Pagination]" loop
            :pagination="{ clickable: true }">
            <swiper-slide v-for="campaign in configStore.campaigns" :key="campaign.id">
              <div class="review">
                <h2 class="mb-2 text-neutral-50">{{ campaign.title }}</h2>
                <div v-html="campaign.content" class="max-w-[420px] mx-auto" />
                <img v-if="campaign.image_url" :src="campaign.image_url" alt="campaign image"
                  class="w-14 h-14 mx-auto my-2 rounded-full border-2 border-primary object-contain" />
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>