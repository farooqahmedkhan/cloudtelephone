<script setup>
import { LoginIcon, UserCircleIcon } from "vue-tabler-icons";
import { onMounted, ref } from "vue"
import { useStorage } from '@vueuse/core'
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'

const open = ref(false)
const scrolled = ref(false)
onMounted(() => {
  window.onscroll = () => {
    scrolled.value = window.scrollY > 0
  }
})

const token = useStorage('token')

const logout = () => {
  token.value = null
};

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
        <router-link class="btn btn-green btn-sm border-border show-mobile text-xs text-black font-semibold" to="/quote">Get A Quote</router-link>
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
          class="navbar-nav order-2 hidden w-full flex-[0_0_100%] lg:order-1 lg:flex items-center lg:w-auto lg:flex-auto lg:justify-end lg:space-x-3">
          <li class="nav-item show-mobile">
            <router-link to="/dashboard" class="nav-link hover:text-primary hover:font-medium">Dashboard</router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link" @click="() => open = !open">
              <label class="hover:text-primary hover:font-medium">Cloud Phone System</label>
              <svg class="inline ml-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                fill="currentColor">
                <path fill-rule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.19l3.71-3.96a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clip-rule="evenodd" />
              </svg>
              <div v-if="open"
                class="absolute z-10 mt-4 w-48 bg-white rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <router-link to="/pricing" class="px-4 block text-sm text-gray-700">
                  <router-link to="/pricing-and-features" class="hover:text-primary hover:font-semibold">Pricing and
                    features</router-link>
                  <ul class="px-2 py-2">
                    <li class="pb-1 text-sm"><router-link class="hover:text-primary hover:font-semibold cursor-pointer"
                        to="/features/app">-&nbsp;Apps & Teams</router-link></li>
                    <li class="pb-1 text-sm"><router-link class="hover:text-primary hover:font-semibold cursor-pointer"
                        to="/features/recording">-&nbsp;Call Recording</router-link></li>
                    <li class="pb-1 text-sm"><router-link class="hover:text-primary hover:font-semibold cursor-pointer"
                        to="/features/call-center">-&nbsp;Call Centre</router-link></li>
                    <li class="pb-1 text-sm"><router-link class="hover:text-primary hover:font-semibold cursor-pointer"
                        to="/features/crm-integration">-&nbsp;CRM Integration</router-link></li>
                    <li class="pb-1 text-sm"><router-link class="hover:text-primary hover:font-semibold cursor-pointer"
                        to="/features/live-call-reporting">-&nbsp;Live Call Reporting</router-link></li>
                  </ul>
                </router-link>
                <a href="#" class="block px-4 py-1 text-sm text-gray-700 hover:text-primary hover:font-semibold">Phone &
                  Accessories</a>
                <a href="#" class="block px-4 py-1 text-sm text-gray-700 hover:text-primary hover:font-semibold">Fibre &
                  Broadband</a>
                <a href="#"
                  class="block px-4 py-1 text-sm text-gray-700 hover:text-primary hover:font-semibold">Telephone
                  Numbers</a>
                <a href="#" class="block px-4 py-1 text-sm text-gray-700 hover:text-primary hover:font-semibold">Voice
                  Messages</a>
                <a href="#" class="block px-4 py-1 text-sm text-gray-700 hover:text-primary hover:font-semibold">Mobile
                  SIM's</a>
                <a href="#" class="block px-4 py-1 text-sm text-gray-700 hover:text-primary hover:font-semibold">Free
                  Install & Support</a>
              </div>
            </a>
          </li>
          <li class="nav-item">
            <router-link to="/how-it-works" class="nav-link hover:text-primary hover:font-medium">How It
              Works</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/faq" class="nav-link hover:text-primary hover:font-medium">FAQs</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/why-cloudtelephone" class="nav-link hover:text-primary hover:font-medium">Why
              CloudTelephone</router-link>
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
            <router-link class="btn btn-green btn-sm border-border text-black font-semibold" to="/quote">Get A
              Quote</router-link>
          </li>
          <li v-if="!token" class="nav-item show-mobile">
            <router-link to="/login" class="nav-link hover:text-primary hover:font-medium">Login</router-link>
          </li>
          <li v-else class="nav-item show-mobile">
            <button @click="logout" class="nav-link mx-auto hover:text-primary hover:font-medium">Logout</button>
          </li>
          <li v-if="!token" class="nav-item mobile-hidden">
            <button class="btn btn-green btn-sm disabled:opacity-50 text-black font-semibold" @click="$router.push('/login')">
              <LoginIcon size="32" class="-mt-1 inline" />
              Login
            </button>
          </li>
          <li v-else class="nav-item mobile-hidden">
            <Menu as="div">
              <MenuButton class="mt-2">
                <UserCircleIcon class="text-black hover:text-sky-500" size="32" />
              </MenuButton>

              <transition enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0" enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in" leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0">
                <MenuItems class="absolute right-0 mt-2 w-32 border origin-top-right divide-y
                   divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
                  <MenuItem>
                  <button @click="logout"
                    class="hover:bg-[#99ff33] text-left hover:text w-full text-black px-2 py-2 text-sm">
                    Logout
                  </button>
                  </MenuItem>
                  <MenuItem>
                  <button @click="$router.push('/dashboard')"
                    class="hover:bg-[#99ff33] text-left hover:text w-full text-black px-2 py-2 text-sm">
                    Dashboard
                  </button>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
            <!-- <Listbox as="div" class="relative">
              <ListboxButton class="bg-blue-500 text-white px-4 py-2 rounded-md">
                Account
              </ListboxButton>
              <ListboxOptions
                class="absolute mt-1 bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                <ListboxOption as="template" v-slot="{ active }">
                  <button @click="logout"
                    class="text-gray-900 cursor-default select-none relative py-2 pl-10 pr-4 hover:bg-gray-100"
                    :class="{ 'bg-gray-100': active }">
                    Logout
                  </button>
                </ListboxOption>
              </ListboxOptions>
            </Listbox> -->
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>


<style lang="scss" scoped></style>