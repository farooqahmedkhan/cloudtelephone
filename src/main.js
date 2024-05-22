import { createApp } from 'vue'
import './style.css'
import VueTablerIcons from "vue-tabler-icons"
import App from './App.vue'
import { createPinia } from 'pinia'
import router from "./router"
import 'swiper/css'
import 'swiper/swiper-bundle.css'
import { defineRule } from 'vee-validate'
import * as AllRules from '@vee-validate/rules'
import VueSignaturePad from 'vue-signature-pad';


Object.keys( AllRules ).forEach( ( rule ) => {
  defineRule( rule, AllRules[rule] )
} )

const pinia = createPinia()
const app = createApp( App )
app.use( router )
app.use(VueSignaturePad);
app.use( pinia )
app.mount( '#app' )
