<script setup>
import { ref } from "vue"

const userNo = ref( "0" )
</script>

<template>
  <section class="section relative cta flex items-center">
    <div class="container">
      <div class="row items-center justify-center g-5">
        <div class="md:col-6 lg:col-12 text-center flex flex-col">
          <h2 class="capitalize text-white">User Count</h2>
          <p class="text-white mt-8">Easy, reliable and fairly priced phone systems designed for freelancers, startups &
            growing small businesses.</p>
          <div class="range mt-8">
            {{ value }}
            <input type="range" min="0" max="500" value="0" v-model="userNo" id="range2" class="range-input" />
            <div class="value2 range-slider-bg text-sky-400">
              <span class="text-sky-400 block text-4xl">{{ userNo }} </span>
              <span class="text-sky-400 text-xs">&nbsp;USERS</span>
            </div>
          </div>

        </div>
        <div class=""><img src="/images/cta-3.png" alt="" class="absolute right-0 -bottom-10 cta-img" width="530"
            height="396"></div>
      </div>

    </div>
  </section>
</template>

<style lang="scss" scoped></style>