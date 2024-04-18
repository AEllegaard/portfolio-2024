import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import WorkView from '../views/WorkView.vue'
import ContactView from '../views/ContactView.vue'
import ProjectView from '../views/ProjectView.vue'
import CreativeCodeView from '../views/CreativeCodeView.vue'
import AiGalleryView from '../views/AiGalleryView.vue'
import ProjectComponent from '../components/ProjectComponent.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/work',
      name: 'Work',
      component: WorkView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      //Project side som indeholder designet, hvori indholds elementerne er dynamiske - skiftbare.
      path: '/project/:slug',
      name: 'project',
      component: ProjectView,
    },
    
  ]
})

export default router
