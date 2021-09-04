import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    name: "not_found",
    component: () => import(/* webpackChunkName: "AppNotFound" */ "../views/notFound.vue"),
  },
  /////////
  {
    path: "/",
    name: "index",
    component: () => import(/* webpackChunkName: "AppIndex" */ "../views/Index.vue"),
  },
  {
    path: "/home",
    redirect: {name: 'index'},
  },
  {
    path: "/inicio",
    redirect: {name: 'index'},
  },
  {
    path: "/portada",
    redirect: {name: 'index'},
  },
  /////////
  {
    path: "/sobremi",
    name: "sobremi",
    alias: ["/acerca"],
    component: () => import(/* webpackChunkName: "AppSobremi" */ "../views/About.vue"),
  },
  {
    path: "/contacto",
    name: "contacto",
    alias: ["/contactame"],
    component: () => import(/* webpackChunkName: "AppContacto" */ "../views/Contact.vue"),
  },
  {
    path: "/post",
    name: "post",
    component: () => import(/* webpackChunkName: "AppPost" */ "../views/Latest.vue"),
    children: [
      {
        path: "1",
        name: "article",
        component: () => import(/* webpackChunkName: "AppUltimoPost" */ "../views/Article.vue")
      },
    ]
  },
  {
    path: "/administrador",
    name: "admin",
    component: () => import(/* webpackChunkName: "AppAdmin" */ "../views/Admin.vue"),
    children: [
      {
        path: "simple",
        name: "simple",
        component: () => import(/* webpackChunkName: "AppAdminSimple" */ "../views/AdminSimple.vue")
      },
      {
        path: "avanzado",
        name: "avanzado",
        component: () => import(/* webpackChunkName: "AppAdminAvanzado" */ "../views/AdminAdvanced.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
