import { createWebHistory, createRouter } from 'vue-router'
import Home from "./pages/Home.vue"
import About from "./pages/About.vue"
import Products from "./pages/Products.vue"
import Pricing from "./pages/Pricing.vue"
import QuotePage from "./pages/QuotePage.vue"
import ResidentialQuote from "./pages/ResidentialQuote.vue"

const routes = [
  {
    path: '/', component: Home, name: 'home',
  },
  {
    path: '/about', component: About, name: 'about',
  },
  {
    path: '/products', component: Products, name: 'products',
  },
  {
    path: '/pricing', component: Pricing, name: 'pricing',
  },
  {
    path: '/quote', component: QuotePage, name: 'quote',
  },
  {
    path: '/quote/residential', component: ResidentialQuote, name: 'residential-quote',
  },
  // 404 page
  {
    path: '/:pathMatch(.*)*',
    component: () => import( './pages/404.vue' ),
  },
]

export default createRouter( {
  history: createWebHistory( import.meta.env.BASE_URL ),
  routes,
} )