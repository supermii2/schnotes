import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateView from '../views/CreateView.vue'
import NoteView from '../views/NoteView.vue'
import NoteNotFoundView from '../views/NoteNotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/create',
      name: 'create',
      component: CreateView,
    },
    {
      path: '/note/:title',
      name: 'note',
      component: NoteView,
      props: true,
    },
    {
      path: '/notenotfound',
      name: 'notenotfound',
      component: NoteNotFoundView,
      props: true,
    },
  ],
})

export default router
