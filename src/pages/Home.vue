<script setup>
import CounterSection from "../components/Home/CounterSection.vue"
import HeroSection from "../components/Home/HeroSection.vue"
import PricingSection from "../components/Home/PricingSection.vue"
import CampaignSection from "../components/Home/CampaignSection.vue"
import ReviewsSection from "../components/Home/ReviewsSection.vue"
import Footer from "../layouts/Footer.vue"


</script>

<template>
  <div class="">
    <HeroSection />
    <!-- Key features -->
    <section class="section key-feature relative">
      <div class="container">
        <div class="row justify-between text-center lg:text-center">
          <div class="lg:col-12">
            <h2 class="capitalize">Offer best affordable <br><span class="text-blue uppercase">Cloud Service</span> in
              UK
            </h2>
            <router-link class="btn rounded-full border-sky-400 mt-8 uppercase text-blue font-semibold hover:bg-sky-400 hover:text-white" to="/pricing">Enquire now</router-link>
          </div>
        </div>
      </div>
    </section>
    
    <CampaignSection />
    <PricingSection />
    <ReviewsSection />
    <CounterSection />


    <section class="section key-feature relative">
      <div class="container">
        <div class="row justify-between text-center lg:text-start">
          <div class="lg:col-12">
            <h2 class="text-center capitalize">OUR
              <span class="text-blue uppercase">SERVICES</span>
            </h2>
          </div>
        </div>
        <div class="key-feature-grid mt-10 grid grid-cols-2 gap-7 md:grid-cols-3 xl:grid-cols-6">
          <div class="flex justify-center rounded-lg bg-white p-5 shadow-lg items-center">
            <h6 class="uppercase text-center">Feature & Pricing</h6>
          </div>
          <div class="flex justify-center rounded-lg bg-white p-5 shadow-lg items-center">
            <h6 class="uppercase text-center">APP & TEAMS</h6>
          </div>
          <div class="flex justify-center rounded-lg bg-white p-5 shadow-lg items-center">
            <h6 class="uppercase text-center">Handsets</h6>
          </div>
          <div class="flex justify-center rounded-lg bg-white p-5 shadow-lg items-center">
            <h6 class="uppercase text-center">Internet line</h6>
          </div>
          <div class="flex justify-center rounded-lg bg-white p-5 shadow-lg items-center">
            <h6 class="uppercase text-center">Voice messages</h6>
          </div>
          <div class="flex justify-center rounded-lg bg-white p-5 shadow-lg items-center">
            <h6 class="uppercase text-center">Accessories</h6>
          </div>

        </div>
      </div>
    </section>
  </div>
</template>


<style lang="scss" scoped></style>