import { createWebHistory, createRouter } from 'vue-router'
import Home from "./pages/Home.vue"
import About from "./pages/About.vue"
import Products from "./pages/Products.vue"
import Pricing from "./pages/Pricing.vue"
import PricingAndFeatures from "./pages/PricingAndFeatures.vue"
import QuotePage from "./pages/QuotePage.vue"
import ResidentialQuote from "./pages/ResidentialQuote.vue"
import OrderThanks from "./pages/OrderThanks.vue";
import FAQs from "./pages/FAQs.vue"
import Login from "./pages/Login.vue"
import Dashboard from "./pages/Dashboard.vue"
import Orders from "./pages/Orders.vue";
import OrderDetails from "./pages/OrderDetails.vue";
import LeadDetails from "./pages/LeadDetails.vue";
import Leads from "./pages/Leads.vue";

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
    path: '/pricing-and-features', component: PricingAndFeatures, name: 'pricing-and-features',
  },
  {
    path: '/quote', component: QuotePage, name: 'quote',
  },
  {
    path: '/thanks', component: OrderThanks, name: 'thanks',
  },
  {
    path: '/quote/residential', component: ResidentialQuote, name: 'residential-quote',
  },
  {
    path: '/faq', component: FAQs, name: 'faq',
  },
  {
    path: '/dashboard', component: Orders, name: 'dashboard',
    meta: {
      requiresAuth: true
    }
  },
  // {
  //   path: '/orders', component: Orders, name: 'orders',
  //   meta: {
  //     requiresAuth: true
  //   }
  // },
  {
    path: '/orders/:id', component: OrderDetails, name: 'order-details',
    meta: {
      requiresAuth: true
    }
  },
  // {
  //   path: '/leads/:id', component: LeadDetails, name: 'lead-details',
  //   meta: {
  //     requiresAuth: true
  //   }
  // },
  // {
  //   path: '/leads', component: Leads, name: 'leads',
  //   meta: {
  //     requiresAuth: true
  //   }
  // },
  {
    path: '/login', component: Login, name: 'login', meta: {
      fullscreen: true
    }
  },
  // 404 page
  {
    path: '/:pathMatch(.*)*',
    component: () => import('./pages/404.vue'),
  },
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            el: to.hash,
            behavior: 'smooth'
          })
        }, 200)
      })
    }
    return { x: 0, y: 0 };
  },
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')

  // Check if the route requires authentication
  if (to.meta.requiresAuth && !token) {
    // Redirect to sign-in route if token doesn't exist
    next('/login')
  } else {
    // Continue to the requested route
    next()
  }
})

export default router