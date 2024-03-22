<script setup>
import { ref } from "vue"
import HeroSection from "../components/Products/HeroSection.vue"
import ProductsSection from "../components/Products/ProductsSection.vue"


const currentTab = ref( 1 )

</script>

<template>
  <div class="">
    <HeroSection />
    <ProductsSection />
    <section class="section features">
      <div class="container">
        <div class="row items-center">
          <div class="col-8 mx-auto mb-10 text-center">
            <h2>
              Aliquam erat volutpat. Phasellus cursus <br>ligula a nibh consectetur vehicula.
            </h2>
          </div>
          <div class="lg:col-6">
            <div class="features-tab-penel relative" :class="`${currentTab === 1 ? 'active' : ''}`">
              <img class="w-full object-contain rounded-2xl" src="/images/img-1.jpg">
            </div>
            <div class="features-tab-penel relative" :class="`${currentTab === 2 ? 'active' : ''}`">
              <img class="w-full object-contain rounded-2xl" src="/images/img-2.jpg">
            </div>
            <div class="features-tab-penel relative" :class="`${currentTab === 3 ? 'active' : ''}`">
              <img class="w-full object-contain rounded-2xl" src="/images/projduct-img.jpg">
            </div>
          </div>

          <div class="mt-6 lg:col-6 lg:mt-0">
            <div class="lg:max-w-[473px]">
              <div class="features-tab-item" :class="`${currentTab === 1 && 'active'}`">
                <h2 class="lg:text-2xl" @click="currentTab = 1">
                  Lorem ipsum dolor sit amet <br>
                  consectetur adipiscing elit
                </h2>
                <p class="mt-4">
                  Donec sollicitudin molestie malesda. Donec sollitudin molestie
                  malesuada. Mauris pellentesque nec, egestas non nisi. Cras
                  ultricies ligula sed
                </p>
              </div>
              <div class="features-tab-item mt-9" :class="`${currentTab === 2 && 'active'}`">
                <h2 class="lg:text-2xl" @click="currentTab = 2">
                  Lorem ipsum dolor sit amet <br>
                  consectetur adipiscing elit
                </h2>
                <p class="mt-4">
                  Donec sollicitudin molestie malesda. Donec sollitudin molestie
                  malesuada. Mauris pellentesque nec, egestas non nisi. Cras
                  ultricies ligula sed
                </p>
              </div>
              <div class="features-tab-item mt-9" :class="`${currentTab === 3 && 'active'}`">
                <h2 class="lg:text-2xl" @click="currentTab = 3">
                  Lorem ipsum dolor sit amet <br>
                  consectetur adipiscing elit
                </h2>
                <p class="mt-4">
                  Donec sollicitudin molestie malesda. Donec sollitudin molestie
                  malesuada. Mauris pellentesque nec, egestas non nisi. Cras
                  ultricies ligula sed
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

</template>

<style lang="scss" scoped></style>