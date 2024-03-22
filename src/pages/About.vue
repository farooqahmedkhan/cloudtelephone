<script setup>
import AboutSection from "../components/About/AboutSection.vue"
import HeroSection from "../components/About/HeroSection.vue";

</script>

<template>
  <div>
    <HeroSection />
    <div class="container">
      <div class="row gx-5 mt-12 items-center">
        <div class="lg:col-7 lg:order-2">
          <div class="relative">
            <img class="w-full object-contain rounded-2xl" src="/images/img-2.jpg" />
          </div>
        </div>
        <div class="mt-6 lg:col-5 lg:order-1 lg:mt-0">
          <div class="text-container">
            <h2 class="lg:text-4xl">
              Lorem ipsum dolor sit amet, adipiscing elit.
            </h2>
            <ul class="mt-6 text-dark lg:-ml-4">
              <li class="mb-2 flex items-center rounded px-4">
                <i class="fa-solid fa-square-check mr-2 text-blue"></i>
                Supporting more than 119 country world
              </li>
              <li class="mb-2 flex items-center rounded px-4">
                <i class="fa-solid fa-square-check mr-2 text-blue"></i>
                Open transaction with more than currencies
              </li>
              <li class="flex items-center rounded px-4">
                <i class="fa-solid fa-square-check mr-2 text-blue"></i>
                Customer Service with 79 languages
              </li>
            </ul>
            <p class="mt-6 font-medium text-dark">
              Output: Detailed and Actionable Designs
            </p>
          </div>
        </div>
      </div>
      <div class="row gx-5 mt-16 items-center">
        <div class="lg:col-7">
          <div class="relative">
            <img class="w-full object-contain rounded-2xl" src="/images/img-1.jpg" />
          </div>
        </div>
        <div class="mt-6 lg:col-5 lg:mt-0">
          <div class="text-container">
            <h2 class="lg:text-4xl">Nunc ornare, nulla ut faucibus faucibu.</h2>
            <ul class="mt-6 text-dark lg:-ml-4">
              <li class="mb-2 flex items-center rounded px-4">
                <i class="fa-solid fa-square-check mr-2 text-blue"></i>
                Supporting more than 119 country world
              </li>
              <li class="mb-2 flex items-center rounded px-4">
                <i class="fa-solid fa-square-check mr-2 text-blue"></i>
                Open transaction with more than currencies
              </li>
              <li class="mb-2 flex items-center rounded px-4">
                <i class="fa-solid fa-square-check mr-2 text-blue"></i>
                design your own seamless for a fiber case.
              </li>
              <li class="flex items-center rounded px-4">
                <i class="fa-solid fa-square-check mr-2 text-blue"></i>
                Customer Service with 79 languages
              </li>
            </ul>
          </div>
        </div>
      </div>

    </div>
    <AboutSection />
  </div>
</template>

<style lang="scss" scoped></style>