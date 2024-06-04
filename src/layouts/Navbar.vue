<script setup>
import { onMounted, ref } from "vue"

const open = ref( false )
const scrolled = ref( false )
onMounted( () => {
    window.onscroll = () => {
      scrolled.value = window.scrollY > 0
    }
} )



</script>

<template>
  <header class="header" :class="`${scrolled ? 'header-sticky' : ''}`">
    <nav class="navbar container">
      <!-- logo -->
      <div class="order-0">
        <router-link to="/">
          <img src="/new-logo.svg" height="60" width="250" alt="logo" />
        </router-link>
      </div>
      <div class="flex items-center justify-end w-auto gap-4">

        <!-- navbar toggler -->
        <router-link class="btn btn-green btn-sm border-border show-mobile" to="/quote">Get A Quote</router-link>
        <input id="nav-toggle" type="checkbox" class="hidden" />
        <label id="show-button" for="nav-toggle" class="order-1 flex cursor-pointer items-center lg:order-1 lg:hidden">
          <svg class="h-6 fill-current" viewBox="0 0 20 20">
            <title>Menu Open</title>
            <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z"></path>
          </svg>
        </label>
        <label id="hide-button" for="nav-toggle" class="order-2 hidden cursor-pointer items-center lg:order-1">
          <svg class="h-6 fill-current" viewBox="0 0 20 20">
            <title>Menu Close</title>
            <polygon points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
              transform="rotate(45 10 10)">
            </polygon>
          </svg>
        </label>
        <!-- /navbar toggler -->
        <ul id="nav-menu"
          class="navbar-nav order-2 hidden w-full flex-[0_0_100%] lg:order-1 lg:flex lg:w-auto lg:flex-auto lg:justify-end lg:space-x-3">
          <li class="nav-item">
            <a class="nav-link cursor-pointer" @click="() => open = !open">
              Cloud Phone System
              <svg class="inline ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.19l3.71-3.96a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd" />
              </svg>
              <div v-if="open" class="absolute z-10 mt-4 w-48 bg-white rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <router-link to="/pricing" class="px-4 block text-sm text-gray-700">
                  Pricing and features
                  <ul class="px-2 py-2">
                    <li class="pb-1 text-sm"><router-link to="/features/app">-&nbsp;Apps & Teams</router-link></li>
                    <li class="pb-1 text-sm"><router-link to="/features/recording">-&nbsp;Call Recording</router-link></li>
                    <li class="pb-1 text-sm"><router-link to="/features/call-center">-&nbsp;Call Centre</router-link></li>
                    <li class="pb-1 text-sm"><router-link to="/features/crm-integration">-&nbsp;CRM Integration</router-link></li>
                    <li class="pb-1 text-sm"><router-link to="/features/live-call-reporting">-&nbsp;Live Call Reporting</router-link></li>
                  </ul>
                </router-link>
                <a href="#" class="block px-4 py-1 text-sm text-gray-700">Phone & Accessories</a>
                <a href="#" class="block px-4 py-1 text-sm text-gray-700">Fibre & Broadband</a>
                <a href="#" class="block px-4 py-1 text-sm text-gray-700">Telephone Numbers</a>
                <a href="#" class="block px-4 py-1 text-sm text-gray-700">Voice Messages</a>
                <a href="#" class="block px-4 py-1 text-sm text-gray-700">Mobile SIM's</a>
                <a href="#" class="block px-4 py-1 text-sm text-gray-700">Free Install & Support</a>
              </div>
            </a>
          </li>
          <li class="nav-item">
            <router-link to="/how-it-works" class="nav-link">How It Works</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/faq" class="nav-link">FAQs</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/why-cloudtelephone" class="nav-link">Why CloudTelephone</router-link>
          </li>
          <!-- <li class="nav-item">
          <router-link to="/about" class="nav-link">About Us</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/products" class="nav-link">Products</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/pricing" class="nav-link">Pricing</router-link>
        </li> -->
          <li class="nav-item mobile-hidden">
            <router-link class="btn btn-green btn-sm border-border" to="/quote">Get A Quote</router-link>
          </li>
          <li class="nav-item mobile-hidden">
            <button class="btn btn-green btn-sm disabled:opacity-50" @click="$router.push('/login')">Login</button>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>


<style lang="scss" scoped></style>