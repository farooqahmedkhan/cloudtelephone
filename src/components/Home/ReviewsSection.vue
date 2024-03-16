<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'

const reviews = [
  {
    id: 1,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempus sollicitudin tellus, ut auctor ligula lacinia eget. Aenean in varius orci. Ut scelerisque feugiat ultricies. Fusce molestie consectetur lacus a euismod.',
    pic: "@/assets/images/users/user-5.png",
    name: "Courtney Henry",
    from: "microsoft corp"
  },
  {
    id: 2,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempus sollicitudin tellus, ut auctor ligula lacinia eget. Aenean in varius orci. Ut scelerisque feugiat ultricies. Fusce molestie consectetur lacus a euismod.',
    pic: "@/assets/images/users/user-5.png",
    name: "Courtney Henry",
    from: "microsoft corp"
  },
  {
    id: 3,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempus sollicitudin tellus, ut auctor ligula lacinia eget. Aenean in varius orci. Ut scelerisque feugiat ultricies. Fusce molestie consectetur lacus a euismod.',
    pic: "@/assets/images/users/user-5.png",
    name: "Courtney Henry",
    from: "microsoft corp"
  },
  {
    id: 4,
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent tempus sollicitudin tellus, ut auctor ligula lacinia eget. Aenean in varius orci. Ut scelerisque feugiat ultricies. Fusce molestie consectetur lacus a euismod.',
    pic: "@/assets/images/users/user-5.png",
    name: "Courtney Henry",
    from: "microsoft corp"
  },
]

</script>

<template>
  <section class="section reviews">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <swiper :slides-per-view="1" :space-between="50" :modules="[Pagination]" loop
            :pagination="{ clickable: true }">
            <swiper-slide v-for="review in reviews" :key="review.id">
              <div class="review">
                <p>
                  {{ review.text }}
                </p>
                <div class="review-author-avatar bg-gradient">
                  <img src="@/assets/images/users/user-5.png" alt="" />
                </div>
                <h4 class="mb-2">{{ review.name }}</h4>
                <p class="mb-4 text-[#666]">{{ review.from }}</p>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>