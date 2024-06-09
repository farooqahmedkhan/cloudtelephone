<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'

const reviews = [
  {
    id: 1,
    text: "Ever since I started using your services I have never been disappointed. I think that your service charges are reflective and provide great value. I have never experienced any issues from your service and transferring our numbers was seamless. Thank you for a great service!",
    pic: "/images/users/user-1.png",
    name: "Ever since I started using your…",
    from: "Greater London Properties"
  },
  {
    id: 2,
    text: "We are a firm of accountants that has just signed up for another provider. The service has been excellent, and the whole team has been amazing, from sales to accounts and support to customer service.",
    pic: "/images/users/user-2.png",
    name: "Enjoying Telecoms with freedom",
    from: "A K Plumbing & Central Heating"
  },
  {
    id: 3,
    text: "On the first call i couldn't spend time on the phone with Joe and he said he would call me back he did bang on time and helped very quickly and easily and patiently explaining the technical jargon.",
    pic: "/images/users/user-3.png",
    name: "on the first call i couldn't spend time…",
    from: "Accu Rite Business Solutions"
  },
  {
    id: 4,
    text: "Fantastic customer service and Nikita is really help very patiently to install the mobile application and solved any first time connection issues for me. Much appreciated for her support",
    pic: "/images/users/user-4.png",
    name: "Fantastic customer service",
    from: "Active Homes"
  },
  {
    id: 5,
    text: "CloudTelephone have looked after our mobiles for many years and during that time we have been very happy with the service provided to us. As well as ongoing day to day support, the team have kept us abreast of changes in technology and the new products and services offered by the mobile networks. We have also been happy to recommend them to our own clients, happy in the knowledge that they would provide the same service levels which are delivered in relation to our own account with them.",
    pic: "/images/users/user-5.png",
    name: "",
    from: "London Properties"
  },
  {
    id: 6,
    text: "It was an absolute pleasure to deal with Cloud Telephone. They established our requirements and provided a great package. They handled the transfer from our existing provide including all the admin, making sure everything went to plan. They gave us good honest advice and provided exactly the equipment we needed. There’s no question we will remain with them for the foreseeable future as the service they provide is excellent.",
    pic: "/images/users/user-6.png",
    name: "",
    from: "Nationwide Care Services"
  },
  {
    id: 7,
    text: "We’ve worked with the team for a number of years and we find their support invaluable to keep our telecoms account on track",
    pic: "/images/users/user-7.png",
    name: "",
    from: "Pathway Group"
  },
  {
    id: 8,
    text: "We have been customers of Cloud Telephone for several years and we are very happy to provide a testimonial in relation to the service they provide. As well as providing support for our general day to day enquiries, they continue to suggest ways in which we can minimise our expenditure. The personal account management we receive is very welcome in these days of call centres and increasingly faceless network operators.",
    pic: "/images/users/user-8.png",
    name: "",
    from: "Midland Housing"
  },
  {
    id: 9,
    text: "Cloud Telephone have been like a breath of fresh air, initially they were able to provide our company with considerable savings with their knowledge of how the phone industry operate and since our signup they have continued to notify our company of technologies that can assist our business. Cloud Telephone provide a personal service which in this day and age of call centres is rare.",
    pic: "/images/users/user-9.png",
    name: "",
    from: "Urban Vehicle Logistics"
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
                  <img :src="review.pic" alt="" />
                </div>
                <h4 class="mb-2 text-sky-400">{{ review.name }}</h4>
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