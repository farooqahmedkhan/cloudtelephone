<script setup>
import { useRouter } from "vue-router";
const router = useRouter()
</script>

<template>
  <div>
    <section class="section banner relative">
      <div class="container">
        <div class="row">
          <div class="py-10 lg:col-12">
            <div class="mx-auto w-full max-w-[1230px] text-center">
              <h1>Thank You!</h1>
              <p>Thank you for your order. Our team will review your information and contact you for delivery.</p>
              <div class="w-100 text-center pb-7 col-span-2">
                <button type="submit" class="btn btn-green mt-10 text-lg" @click="router.push('/quote')">Generate New Quote</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>


<style lang="scss" scoped></style>