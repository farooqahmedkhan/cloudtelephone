<script setup>
import { ref } from "vue"

const activeTab = ref( 1 )

function toggle ( active ) {
  if ( activeTab.value === active ) {
    activeTab.value = 0
  } else {
    activeTab.value = active
  }
}
</script>

<template>
  <section class="faqs section">
    <div class="container max-w-[1230px]">
      <div class="row">
        <div class="text-center lg:col-4 lg:text-start">
          <h2>Frequently Asked Questions</h2>
          <p class="mt-6 lg:max-w-[404px]">
            Vestibulum ante ipsum primis in faucibus orci luctus ultrices posuere
            cubilia Curae Donec
          </p>
        </div>
        <div class="mt-8 lg:col-8 lg:mt-0">
          <div class="rounded-xl bg-white px-5 py-5 shadow-lg lg:px-10 lg:py-8">
            <div :class="`${activeTab == 1 && 'active'}`" class="accordion border-b border-border">
              <div class="accordion-header relative pl-6 text-lg font-semibold text-dark" @click="toggle(1)">
                How can I integrate Avocode to my current tool stack?
                <svg class="accordion-icon absolute left-0 top-[22px]" x="0px" y="0px" viewBox="0 0 512 512"
                  xmlspace="preserve">
                  <path fill="currentColor"
                    d="M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0 s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667 C514.096,145.416,514.096,131.933,505.755,123.592z">
                  </path>
                </svg>
              </div>
              <div class="accordion-content pl-6">
                <p>
                  The Service is provided for free during this pilot project, and
                  is provided "as is" with is not committed to any level of
                  service or availability of the Service.
                </p>
                <p>
                  If you enter into this agreement on behalf of a company, you
                  hereby agree that the company is responsible under this
                  Agreement for all actions and
                </p>
              </div>
            </div>
            <div :class="`${activeTab == 2 && 'active'}`" class="accordion border-b border-border">
              <div class="accordion-header relative pl-6 text-lg font-semibold text-dark" @click="toggle(2)">
                How can I use Avocode with cloud documents?
                <svg class="accordion-icon absolute left-0 top-[22px]" x="0px" y="0px" viewBox="0 0 512 512"
                  xmlspace="preserve">
                  <path fill="currentColor"
                    d="M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0 s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667 C514.096,145.416,514.096,131.933,505.755,123.592z">
                  </path>
                </svg>
              </div>
              <div class="accordion-content pl-6">
                <p>
                  The Service is provided for free during this pilot project, and
                  is provided "as is" with is not committed to any level of
                  service or availability of the Service.
                </p>
                <p>
                  If you enter into this agreement on behalf of a company, you
                  hereby agree that the company is responsible under this
                  Agreement for all actions and
                </p>
              </div>
            </div>
            <div :class="`${activeTab == 3 && 'active'}`" class="accordion border-b border-border">
              <div class="accordion-header relative pl-6 text-lg font-semibold text-dark" @click="toggle(3)">
                If I cancel, can I archive my designs to keep them safe come back?
                <svg class="accordion-icon absolute left-0 top-[22px]" x="0px" y="0px" viewBox="0 0 512 512"
                  xmlspace="preserve">
                  <path fill="currentColor"
                    d="M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0 s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667 C514.096,145.416,514.096,131.933,505.755,123.592z">
                  </path>
                </svg>
              </div>
              <div class="accordion-content pl-6">
                <p>
                  The Service is provided for free during this pilot project, and
                  is provided "as is" with is not committed to any level of
                  service or availability of the Service.
                </p>
                <p>
                  If you enter into this agreement on behalf of a company, you
                  hereby agree that the company is responsible under this
                  Agreement for all actions and
                </p>
              </div>
            </div>
            <div :class="`${activeTab == 4 && 'active'}`" class="accordion">
              <div class="accordion-header relative pl-6 text-lg font-semibold text-dark" @click="toggle(4)">
                How can I adjust user permissions & admin provileges?
                <svg class="accordion-icon absolute left-0 top-[22px]" x="0px" y="0px" viewBox="0 0 512 512"
                  xmlspace="preserve">
                  <path fill="currentColor"
                    d="M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0 s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667 C514.096,145.416,514.096,131.933,505.755,123.592z">
                  </path>
                </svg>
              </div>
              <div class="accordion-content pl-6">
                <p>
                  The Service is provided for free during this pilot project, and
                  is provided "as is" with is not committed to any level of
                  service or availability of the Service.
                </p>
                <p>
                  If you enter into this agreement on behalf of a company, you
                  hereby agree that the company is responsible under this
                  Agreement for all actions and
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped></style>