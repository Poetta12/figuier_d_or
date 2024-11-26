import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/catalogue',
      name: 'catalogue',
      component: () => import('../views/CatalogueView.vue'), // Lazy-loaded
    },
    {
      path: '/faq',
      name: 'faq',
      component: () => import('../components/FAQComp.vue'), // Lazy-loaded
    },
    {
      path: '/eco-commitment',
      name: 'eco-commitment',
      component: () => import('../components/EcoCommitmentComp.vue'), // Lazy-loaded
    },
    {
      path: '/conditions-livraison',
      name: 'conditions-livraison',
      component: () => import('../components/ConditionsLivraisonComp.vue'),
    },
    {
      path: '/form', // Nouvelle route pour FormView
      name: 'form',
      component: () => import('../views/FormView.vue'), // Lazy-loaded
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (savedPosition) {
          window.scrollTo({
            top: savedPosition.top,
            behavior: 'smooth',
          });
        } else {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        }
        resolve();
      }, 0); // Délai optionnel pour fluidité
    });
  },
})

export default router
