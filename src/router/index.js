import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Camion from "../views/vhl/Camion.vue";
import Voiture from "../views/vhl/Voiture.vue";
import Scooter from "../views/vhl/Scooter.vue";
import Creation from "../views/vhl/Creation.vue";
import Show from "../views/vhl/Show.vue";
import Edit from "../views/vhl/Update.vue";
import Reclam from "../views/vhl/Reclamation.vue";


const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/camion",
    name: "camion",
    component: Camion,
  },
  {
    path: "/voiture",
    name: "voiture",
    component: Voiture,
  },
  {
    path: "/scooter",
    name: "scooter",
    component: Scooter,
  },
  {
    path: '/new',
    component: Creation
  },
  {
    path: '/camion/:id',
    name: 'vhl-show',
    component: Show,
    props: true
  },
  {
    path: '/edit/:id',
    name: 'vhl-edit',
    component: Edit,
    props: true
  },
  {
    path: '/reclam/:id',
    name: 'vhl-reclam',
    component: Reclam,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
