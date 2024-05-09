<script setup>
import { useConfigStore } from "../../store/configStore";
import Card from "../Base/Card.vue"

const businessItems = [
  "Business telephone line",
  "Hosted Business telephone",
  "Business Mobile",
  "United Conversations",
  "VOIP SIP trunk",
  "Landline",
  "Broadband"
]

const configStore = useConfigStore()
</script>

<template>
  <section class="section mt-12 bg-theme-light relative hero-1 ">
    <div class="bg-overlay overflow-hidden bg-transparent">
      <div class="hero-1-bg" />
    </div>
    <div class="container relative z-10">
      <div class="row lg:px-10 items-center justify-center g-5">
        <template v-if="configStore.plans.length">
          <Card v-for="plan in configStore.plans" :title="plan.title" class="mt-8 lg:mt-0">
            <template #default>
              <div class="border-border py-3 text-center">
                <p class="mt-6">
                  {{plan.description}}
                </p>
                <ul class="mt-6">
                  <li v-for="offer in plan.offerings.split(',')" :key="offer"
                    class="mb-3 flex items-center justify-center font-medium">
                    {{ offer }}
                  </li>
                </ul>
              </div>
            </template>
            <template #footer>
              <div class="text-center">
                <router-link
                  class="btn btn-green btn-sm border-border items-center flex justify-center h-16 text-lg font-bold uppercase"
                  to="/pricing">{{plan.buttonText}}</router-link>
              </div>
            </template>
          </Card>
        </template>
        <template v-else>
          <Card title="Business" class="mt-8 lg:mt-0">
            <template #default>
              <div class="border-border py-3 text-center">
                <p class="mt-6">
                  Tell us more about your business requirements:
                </p>
                <ul class="mt-6">
                  <li v-for="item in businessItems" :key="item"
                    class="mb-3 flex items-center justify-center font-medium">
                    {{ item }}
                  </li>
                </ul>
              </div>
            </template>
            <template #footer>
              <div class="text-center">
                <router-link
                  class="btn btn-green btn-sm border-border items-center flex justify-center h-16 text-lg font-bold uppercase"
                  to="/pricing">GET YOUR PRICING</router-link>
              </div>
            </template>
          </Card>

          <Card title="Residential" class="mt-8 lg:mt-0">
            <template #default>
              <div class="border-border py-3 text-center">
                <p class="mt-6">As low as 12 GBP per month</p>
                <div class="py-5 my-5 text-center flex justify-center"> <img alt="" src="/images/home-service.png"
                    width="250" height="250" class="rounded-lg">
                </div>
              </div>
            </template>
            <template #footer>
              <div class="text-center">
                <router-link
                  class="btn btn-purple btn-sm border-border items-center flex justify-center h-16 text-lg font-bold uppercase"
                  to="/quote/residential">Get your QUOTE</router-link>
              </div>
            </template>
          </Card>
        </template>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>