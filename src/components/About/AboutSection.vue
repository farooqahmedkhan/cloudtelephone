<script setup>
import AboutCard from "../Base/AboutCard.vue"

const users = [
  {
    id: 1,
    img: "/images/users/user-1.png",
    name: "Eleanor Pena",
    desg: "Co-founder &amp; COO"
  },
  {
    id: 2,
    img: "/images/users/user-2.png",
    name: "Savannah Nguyen",
    desg: "Co-founder &amp; COO"
  },
  {
    id: 3,
    img: "/images/users/user-3.png",
    name: "Courtney Henry",
    desg: "Head of Brand Marketing"
  },
  {
    id: 4,
    img: "/images/users/user-4.png",
    name: "Floyd Miles",
    desg: "Head of Infrastructure"
  },
  {
    id: 5,
    img: "/images/users/user-5.png",
    name: "Robert Fox",
    desg: "Head of Product Design"
  },
  {
    id: 6,
    img: "/images/users/user-5.png",
    name: "Darrell Steward",
    desg: "Head of People &amp; HR"
  },
]
</script>

<template>
  <section class="mt-16 section bg-theme-light">
    <div class="container">
      <div class="row">
        <div class="mx-auto text-center lg:col-6">
          <h2 class="text-blue">This is who we are</h2>
          <p class="mt-4">
            Donec sollicitudin molestie malesda. Donec sollitudin mol estie
            ultricies ligula sed magna dictum
          </p>
        </div>
      </div>
      <div class="row mt-12 justify-center">
        <div class="lg:col-10">
          <div class="row">
            <AboutCard v-for="user in users" :key="user.id" :user="user" />
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<style lang="scss" scoped></style>