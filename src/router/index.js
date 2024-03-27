import { createRouter, createWebHistory } from 'vue-router'
import Restaurant from '../components/Restaurant.vue'
import Reservation from '../components/Reservation.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Restaurant',
      component: Restaurant
    },
    {
      path: '/Reservation',
      name: 'Reservation',
      component: Reservation

    }
  ]
})

export default router
