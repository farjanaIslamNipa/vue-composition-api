import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'tutorials',
      component: () => import("../components/TutorialsList.vue")
    },
    {
      path: "/tutorials/:id",
      name: "tutorial-details",
      component: () => import("../components/Tutorial.vue")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("../components/AddTutorial.vue")
    },
    {
      path: "/home",
      name: "HomeView",
      component: () => import("../views/HomeView.vue")
    },
    {
      path: "/quiz",
      name: "Quiz",
      component: () => import("../views/Quiz.vue")
    },
    {
      path: "/quiz/:id",
      name: "QuizCategory",
      component: () => import("../views/QuizCategory.vue")
    },
  ]
})

export default router
