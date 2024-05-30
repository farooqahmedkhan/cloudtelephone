<template>
  <section class="section banner relative">
    <div class="container">
      <div class="row">
        <div class="py-10 lg:col-12">
          <div class="mx-auto w-full max-w-[1230px] text-center">
            <div class="space-x-7">
              <button class="btn btn-green btn-sm text-lg" @click="$router.push('/my-orders')">My Orders</button>
              <button class="btn btn-green btn-sm text-lg" @click="$router.push('/my-leads')">My Leads</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>

</script>
