import { createRouter, createWebHistory } from 'vue-router'
import WelcomeView from '../views/WelcomeView.vue'
import MainView from '@/views/MainView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'StartPage',
      component: WelcomeView,
    },
    {
      path: '/main',
      name: 'Main',
      component: MainView,
      redirect: { name: 'Home' },
      children: [
        {
          path: 'home',
          name: 'Home',
          component: () => import('../views/HomeView.vue'),
        },
        {
          path: 'organizer',
          name: 'Organizer',
          component: () => import('../views/OrganizerView.vue'),
        },
        {
          path: 'speakers',
          name: 'Speakers',
          component: () => import('../views/SpeakersView.vue'),
        },
        {
          path: 'agenda',
          name: 'Agenda',
          component: () => import('../views/AgendaView.vue'),
        },
        {
          path: 'sponsors',
          name: 'Sponsors',
          component: () => import('../views/SponsorsView.vue'),
        },
        {
          path: 'faq',
          name: 'FAQ',
          component: () => import('../views/FAQView.vue'),
        },
      ],
    },
  ],
})

export default router
