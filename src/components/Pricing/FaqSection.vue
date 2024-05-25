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

const questions = ref([
  {
    "title": "How long does it take to set up and running?",
    "description": "It takes 1-3 business day to get up and running. If you don't order any phones, the system setup can take a single day. The phones take around 3-2 days to be delivered."
  },
  {
    "title": "Can I use my existing Fibre or ADSL line?",
    "description": "Yes, as long as you have spare capacity, you can run the system on your existing line, but it all depend on the number of calls you make at any one time. If you are not sure, why not give us a call and we can arrange for live test on your line."
  },
  {
    "title": "Can I plug my phone in anywhere?",
    "description": "As long as you have an internet connection, you can simply plug your phone in and it will start working immediately, or just run the app. It will work anywhere in the world as long as you have an appropriate high enough speed connection, great for those who want to work from a holiday home or who travel a lot!"
  },
  {
    "title": "How easy is it to do the DIY installation?",
    "description": "It's very easy to set-up, as everything comes preconfigured. Equipment is all setup as plug and play. You will need to plug in our phones into your network router or point or if cordless plug the base into an active internet connection."
  },
  {
    "title": "Can I have different area codes?",
    "description": "Yes, you can pick telephone numbers from different area codes within the UK, it doesn't have to be the area code of the place you are based."
  },
  {
    "title": "Is the Free Minute Bundle per user or per company?",
    "description": "The unlimited free minute bundle to 01/02/03 & UK Mobiles, is per user per month. UK Mobile includes O2, Vodafone, EE, Three, Virgin, Giffgaff, Lycamobile, Smarty, BT, Sky, ASDA. Calls not made by a user, such as hunt group redirects are chargeable. 08 numbers are not included, apart from 0800. Fair usage limit of 5000 minutes/user/month applies."
  },
  {
    "title": "Will the mobile App work on 3g or 4g?",
    "description": "The mobile App will only work when it has a stable high quality connection. This means it will work on 4g and Wi-Fi only if there is a good quality connection. If the Wi-Fi has intermittent issues or your 4g signal is weak it might not work or give poor call quality. It also cannot roam like a mobile phone, so you cannot move from one connection to another and maintain a continuous call. We recommend using the PC/Mac App when in a fixed location like an office."
  },
  {
    "title": "Can I transfer my existing telephone numbers?",
    "description": "Yes, we can move your existing telephone numbers to our phone system, we manage this port process for you. When the system is set-up, you are provided a temporary number which you can redirect your current telephone number to. We then run the port process in the background, which can take up to a 10 working days to come into our control. "
  },
  {
    "title": "Do I need to buy or rent any phones?",
    "description": "No, you can use this system with just computers and mobile phones if your budget is tight or pay for the phones by instalments over a 3 year period or just buy phones upfront for the best savings."
  },
  {
    "title": "How long does it take to set up and running?",
    "description": "It takes 1-3 business day to get up and running. If you don't order any phones, the system setup can take a single day. The phones take around 3-2 days to be delivered."
  },
  {
    "title": "Can I plug my phone in anywhere?",
    "description": "As long as you have an internet connection, you can simply plug your phone in and it will start working immediately, or just run the app. It will work anywhere in the world as long as you have an appropriate high enough speed connection, great for those who want to work from abroad."
  },
  {
    "title": "Do I have to pay maintenance?",
    "description": "No, because the telephone system is in the cloud, not your office, there are no additional fees to pay apart from your monthly user costs (plus any phones you need). We take care of any updates and patches. There are no hidden fees or catches."
  },
  {
    "title": "Do I keep my existing telephone lines",
    "description": "When you move to a cloud system, you can cancel all your analogue telephone lines apart from the one that runs your Internet connection (It’s quite common that this is your fax line). A telephone line automatically cancels once the number porting completes if this was the only number attached to it."
  },
  {
    "title": "Is there any charges to move my number away?",
    "description": "If you decide at any point to leave, you can port your number away for free and without hassle. We pride ourselves on having no hidden fees or terms."
  },
  {
    "title": "What are the advantages of a cloud telephone system?",
    "description": "Our cloud telephone system uses the internet to make and receive calls. You eliminate telephone system hardware, telephone connection and maintainer. The system is flexible scalable and simple to administer"
  },
  {
    "title": "What technology does the cloud telephone system use?",
    "description": "The base technology is called hosted PBX often called IP Centrex. Both refer to the same concept the telephone system is not installed at the company site but at an external data centre and can be accessed anywhere using the internet."
  },
  {
    "title": "How secure is Cloud Telephone?",
    "description": "The telephone system is operated over the internet. The system itself is located at secure data centres with resilience and failover at geographically separated servers. All services provide guaranteed uptime."
  },
  {
    "title": "Do you provide business phones and WiFi?",
    "description": "We specialise in providing telephone systems to businesses. We provide state-of-the-art communication systems that increase your business efficiency and success. We also provide the fastest broadband speeds available to your business with 100% Wi-Fi Coverage."
  }
]
)
</script>

<template>
  <section class="faqs section">
    <div class="container max-w-[1230px]">
      <div class="row mt-8">
        <div class="text-center">
          <h2 class="">Frequently Asked Questions</h2>
          <!-- <p class="mt-6 lg:max-w-[404px]"></p> -->
        </div>
        <div class="mt-8">
          <div class="rounded-xl bg-white px-5 py-5 shadow-lg lg:px-10 lg:py-8">
            <div v-for="(question, index) in questions" :class="`${activeTab == index && 'active'}`" class="accordion border-b border-border">
              <div class="accordion-header relative pl-6 text-lg font-semibold text-dark" @click="toggle(index)">
                {{ question.title}}
                <svg class="accordion-icon absolute left-0 top-[22px]" x="0px" y="0px" viewBox="0 0 512 512"
                  xmlspace="preserve">
                  <path fill="currentColor"
                    d="M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0 s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667 C514.096,145.416,514.096,131.933,505.755,123.592z">
                  </path>
                </svg>
              </div>
              <div class="accordion-content pl-6">
                <p>
                  {{ question.description}}
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