import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import router from "./router"
import 'swiper/css'
import 'swiper/swiper-bundle.css'
import { defineRule } from 'vee-validate'
import * as AllRules from '@vee-validate/rules'


Object.keys( AllRules ).forEach( ( rule ) => {
  defineRule( rule, AllRules[rule] )
} )

const pinia = createPinia()
const app = createApp( App )
app.use( router )
app.use( pinia )
app.mount( '#app' )
