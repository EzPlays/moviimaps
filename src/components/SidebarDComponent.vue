<template>
  <div class="">
    <!-- NAV SIDEBAR LADO IZQUIERDO -->
    <nav
      class="bg-dark bg-opacity-75 text-white border border-dark border-2"
      style="width: 100%; height: 100vh"
    >
      <!-- DIV QUE CONTIENE LOGO Y MOVIIMAPS -->
      <div
        class="
          d-flex
          justify-content-evenly
          align-items-center
          col col-lg-12 col-md-12 col-sm-12
        "
      >
        <img
          src="../assets/mvlogo.jpeg"
          alt="Logo página"
          width="100%"
          height="30%"
        />
      </div>

      <!-- LINEA ESPACACIO -->
      <hr />

      <!-- Nav donde se encuentran las opciones -->
      <div class="col col-lg-12 col-md-12 col-sm-12 col-xs-12">
        <ul class="nav mx-4">
          <!-- 1ra opcion -->
          <li class="my-4 mx-2">
            <router-link to=""
              ><b-icon
                icon="house-fill"
                font-scale="1.5"
                variant="white"
              ></b-icon>
              <span class="text-white mx-3">Home</span></router-link
            >
          </li>

          <!-- 2da opcion -->

          <!-- <li class=" row my-4 mx-1 d-flex">
            <router-link to="/IniciosesionView" active-class="active"  exact class="side-btn">
              <b-icon icon="person-lines-fill" font-scale="1.5"  variant="white"></b-icon>
              <span>Inicio Sesion</span>
              
            </router-link>
          </li> -->

          <!-- 3ra opcion -->

          <!-- <li class="my-4 mx-2 ">
           
                <router-link to="/AlertasDView" class="text-white">
              <b-icon icon="exclamation-triangle" font-scale="1.5" variant="white"></b-icon>
                Alertas</router-link> 
          </li> -->

          <li class="my-4 mx-2 d-flex">
            <router-link to="/NovedadesDView" active-class="active" exact class="side-btn">
              <b-icon
                icon="person-lines-fill"
                font-scale="1.5"
                variant="white"
              ></b-icon>
              <span class="text-white mx-3">Novedades</span>
            </router-link>
          </li>

          <!-- 4ta opcion -->

          <li class="my-4 mx-2">
            <router-link to="/ReservasDView">
              <b-icon
                icon="calendar3"
                font-scale="1.5"
                variant="white"
              ></b-icon>
              <span class="text-white mx-3">Reservas</span>
            </router-link>
          </li>

          <!-- 5ta opcion -->
          <li class="my-4 mx-2">
            <router-link to="">
              <b-icon icon="geo-alt" font-scale="1.5" variant="white"></b-icon>
              <span class="text-white mx-3">Rutas</span>
            </router-link>
          </li>

          <!-- 6ts opcion -->
          <li class="my-4 mx-2">
            <router-link to="">
              <b-icon icon="gear" font-scale="1.5" variant="white"></b-icon>
              <span class="text-white mx-3">Configuracion</span>
            </router-link>
          </li>

          <hr />
      <b-button
        pill
        variant="primary"
        router-link
        class="text-white"
        to="/HomeView"
        >Usuario
      </b-button>

        </ul>
      </div>

    </nav>
  </div>
</template>

<script>
export default {
  name: "SidebarDComponent",
};
</script>

<style scoped>
</style>