import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/PrincipalView.vue'

import DashboardView from '../views/DashboardUsuario/DashboardView.vue'
import InicioSesionPView from '../views/InicioSesionPView.vue'
import DashboardDView from '../views/DashboardDespachador/DashboardDView.vue'
import ReservaEView from '../views/DashboardUsuario/ReservaEView.vue'
// import PrincipalView from '../views/PrincipalView.vue'


Vue.use(VueRouter)

const routes = [

  // NOS DIRIJE A LA PAGINA PRINCIPAL
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  // {
  //   path: '/InicioSesionPView',
  //   name: 'InicioSesionPView',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/DashboardUsuario/InicioSesionView.vue')
  // },


  // NOS DIRIJE AL DASHBOARD DE USUARIO

  {
    path: '/DashboardView',
    component: DashboardView,
    children: [

      {
        path: '/HomeView',
        name: 'HomenView',
        component: () => import(/* webpackChunkName: "OverView" */ '../views/DashboardUsuario/HomeView.vue')
      },

      {
        path: '/IniciosesionView',
        name: 'IniciosesionView',
        component: () => import(/* webpackChunkName: "OverView" */ '../views/DashboardUsuario/InicioSesionView.vue')
      },

      {
        path: '/RegistrateView',
        name: 'RegistrateView',
        component: () => import(/* webpackChunkName: "OverView" */ '../views/DashboardUsuario/RegistrateView.vue')
      },

      {
        path: '/ReservaPView',
        name: 'ReservaPView',
        component: () => import(/* webpackChunkName: "OverView" */ '../views/DashboardUsuario/ReservaPView.vue')
      },
      {
        path: '/registro',
        name: 'registro',
        component: () => import('../views/DashboardUsuario/RegistrateView.vue')
      },
      {
        path: '/NosotrosView',
        name: 'NosotrosView',
        component: () => import('../views/DashboardUsuario/NosotrosView.vue')
      },
      {
        path: '/ReserveView',
        name: 'ReserveView',
        component: () => import('../views/DashboardUsuario/ReservaCPView.vue')
      },
      {
        path: '/EncomiendaCPView',
        name: 'EncomiendaCPView',
        component: () => import('../views/DashboardUsuario/EncomiendaCPView.vue')
      },


      // ES EL DASHBOARD DE RESERVA PARA ENCOMIENDA: DOCUMENTO Y PAQUETE
      {
        path: '/ReservaEview',
        component: ReservaEView,
        children: [
          {
            path: '/ReservaEview',
            component: () => import('../views/dashboard/ArchivosView.vue')
          },
          {
            path: '/paquetes',
            component: () => import('../views/dashboard/PaquetesView.vue')
          },

        ]
      },


    ]
  },


  // NOS DIRIJE A LA OPCION DE INICIAR SESION Y OPCION DE REGISTRATE EN PAGINA PRINCIPAL 
  {
    path: '/InicioSesionPView',
    component: InicioSesionPView,
    children: [
      {
        path: '/InicioSesionPView',
        name: 'InicioSesioPView',
        component: () => import(/* webpackChunkName: "OverView" */ '../views/DashboardUsuario/InicioSesionView.vue')
      },
      
      {
        path: '/RegistratePView',
        name: 'RegistratePView',
        component: () => import(/* webpackChunkName: "OverView" */ '../views/DashboardUsuario/RegistrateView.vue')
      },

    ]
  },


// NOS DIRIJE AL DASHBOARD DE DESPACHADOR
{
    path: '/DashboardDView',
    component: DashboardDView,
    children: [

      {
        path: '/HomeDView',
        name: 'HomeDView',
        component: () => import(/* webpackChunkName: "OverView" */ '../views/DashboardDespachador/HomeDView.vue')
      },
      {
        path: '/NovedadesDView',
        name: 'NovedadesDView',
        component: () => import(/* webpackChunkName: "OverView" */ '../views/DashboardDespachador/NovedadesDView.vue')
      },
      {
        path: '/ReservasDView',
        name: 'ReservasDView',
        component: () => import(/* webpackChunkName: "OverView" */ '../views/DashboardDespachador/ReservasDView.vue')
      },
      {
        path: '/RutasDView',
        name: 'RutasDView',
        component: () => import(/* webpackChunkName: "OverView" */ '../views/DashboardDespachador/RutasDView.vue')
      },

    ]
  },



  // NOS DIRIJE A LA TABLA DE PRECIOS DEsPUES DE FILTRAR LA BUSQUEDA DE VIAJES
  {
    path: '/TablaPreciosView',
    name: 'TablaPreciosView',
    component: () => import('../views/DashboardUsuario/TablaPreciosView.vue')
  },
  {
    path: '/PrincipalView',
    name: 'PrincipalView',
    component: () => import('../views/PrincipalView.vue')
  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
