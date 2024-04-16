<script setup>
import { onMounted, reactive, ref } from "vue"
import Input from "@/components/Base/Input.vue"
import ProductCard from "@/components/Quote/Residential/ProductCard.vue"
import { useForm } from "vee-validate"


const { validate } = useForm()

const selectedProduct = ref( 1 )

const data = reactive( {
  name: "",
  email: "",
  telephone: "",
  area_code: "",
} )


async function submitDetails () {
  const { valid } = await validate()
  if ( !valid ) return
  console.log( { ...data, product: selectedProduct.value } )
}

const products = [
  {
    id: 1,
    title: "Mobile or PC App",
    type: 'residential',
    description: 'Apple, Andriod, PC or Mac App.',
    image_url: "https://telephonesystems.cloud/images/mobileandpcapp.jpg",
    price: 0,
    price_monthly: 0
  },
  {
    id: 2,
    title: "Portable Phone",
    type: 'residential',
    description: 'Comes in two parts, the base which plugs into your router and the handset and charger that you can put anywhere in your home.',
    image_url: "https://telephonesystems.cloud/images/W73Pm.jpg",
    price: 130,
    price_monthly: 0
  },
  {
    id: 3,
    title: "Home Desk Phone",
    type: 'residential',
    description: 'Needs to be connected directly to your Internet router with a network cable, or use a Powerline Adapter with a network port.',
    image_url: "https://telephonesystems.cloud/images/T31P.png",
    price: 99,
    price_monthly: 0
  },
]


onMounted( () => {
  if ( process.env.NODE_ENV === "development" ) {
    document.addEventListener( "keydown", handleKeyDown )
  }
} )

function handleKeyDown ( event ) {
  if ( event.metaKey && event.key === "k" ) {
    populateDummyData()
  }
}


function populateDummyData () {
  data.telephone = "1234567890"
  data.name = "John Doe"
  data.area_code = "OFFERCODE"
  data.email = "john@doe.com"
}


</script>


<template>
  <div>
    <section class="section banner relative">
      <div class="container">
        <div class="row">
          <div class="py-10 lg:col-12">
            <div class="mx-auto w-full max-w-[1230px]">
              <h2 class="text-center mb-3">Home Internet Phone Quote <br><span class="text-blue uppercase">£11.80 a
                  month including unlimited minute bundle*</span>
              </h2>
              <p class="text-center">Just fill in the form below and we will give you an instant online quotation.</p>
            </div>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-7 sm:grid-cols-2 p-7 bg-white rounded border">
          <!-- name -->
          <Input rules="required" name="Name" v-model="data.name" label="Your Name" placeholder="Full Contact name"
            id="yourname" />
          <!-- email -->
          <Input rules="required|email" name="Email" v-model="data.email" label="Email Address" placeholder="Your Email"
            id="email" />
          <!-- telephone -->
          <Input type="tel" name="Telephone" rules="required" v-model="data.telephone" label="Telephone"
            placeholder="Mobile or Landline" id="telephone" />
          <!-- area code -->
          <Input name="Area Code" v-model="data.area_code" label="Area Code" placeholder="Enter area code"
            id="area_code" />
        </div>

        <div class="my-6">
          <h2 class="text-center mb-3 text-blue uppercase">Your Phone Choice
          </h2>
          <div class="grid grid-cols-1 gap-4 sm:grid-cols-3">
            <ProductCard v-for="product in products" :key="product.id" v-bind="product"
              :selected="selectedProduct === product.id" @click="selectedProduct = product.id" />
          </div>
          <button class="btn btn-green w-full mt-10 text-lg" @click="submitDetails">Get an
            Instant
            Quote</button>
        </div>

        <img class="banner-shape absolute -top-28 right-0 -z-[1] w-full max-w-[600px]" src="/images/banner-shape.svg"
          alt="">
      </div>
    </section>
  </div>
</template>
