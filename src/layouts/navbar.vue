<script setup>

</script>

<template>
  <header class="header">
    <nav class="navbar container">
      <!-- logo -->
      <div class="order-0">
        <router-link to="/">
          <img src="../assets/images/logo.jpg" height="60" width="250" alt="logo" />
        </router-link>
      </div>
      <!-- navbar toggler -->
      <router-link class="btn btn-green btn-sm border-border show-mobile" to="/signup">Get A Quote</router-link>
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
        class="navbar-nav order-2 hidden w-full flex-[0_0_100%] lg:order-1 lg:flex lg:w-auto lg:flex-auto lg:justify-end lg:space-x-5">
        <li class="nav-item">
          <router-link to="/about" class="nav-link">About Us</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/products" class="nav-link">Products</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/pricing" class="nav-link">Pricing</router-link>
        </li>
        <li class="nav-item mobile-hidden">
          <router-link class="btn btn-green btn-sm border-border" to="/signup">Get A Quote</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>


<style lang="scss" scoped></style>