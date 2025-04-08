import { createRouter, createWebHashHistory } from 'vue-router'
import MainView from '@/views/MainView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
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
          path: '/info',
          name: 'AttendeeInfo',
          component: () => import('../views/AttendeeInfoView.vue'),
        },
      ],
    },
  ],
})

export default router
