<template>
  <div class="">
    <!-- NAV SIDEBAR LADO IZQUIERDO -->
    <nav
      class="bg-dark bg-opacity-75 text-white border border-dark border-2 "
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
        <!-- <div class="col col-lg-1"> -->
        <img
          src="../assets/mvlogo.jpeg"
          alt="Logo página"
          width="100%"
          height="30%"
        />
        <!-- </div> -->
      </div>

      <!-- LINEA ESPACACIO -->
      <hr />

      <!-- Nav donde se encuentran las opciones -->
      <div class=" ">
        <ul class="nav px-3">
          <!-- 1ra opcion -->
          <li class="my-4 mx-2">
            <router-link to="/HomeView"
              ><b-icon
                icon="signpost-split"
                font-scale="1.5"
                variant="white"
              ></b-icon>
              <span class="text-white mx-3">Home</span>
            </router-link>
          </li>


          <li class="my-4 mx-2">
            <router-link to="/NosotrosView" active-class="active" exact class="side-btn">
              <b-icon icon="people" font-scale="1.5" variant="white"></b-icon>
              <span class="text-white mx-3">Nosotros</span>
            </router-link>
          </li>

          <!-- 4ta opcion -->

          <li class="my-4 mx-2">
            <router-link
              to="/ReservaPView"
              active-class="active"
              exact
              class="side-btn"
            >
              <b-icon
                icon="calendar3"
                font-scale="1.5"
                variant="white"
              ></b-icon>
              <span class="text-white mx-3">Reservas Pasajero</span>
            </router-link>
          </li>

          <!-- 5ta OPCION -->
          <li class="my-4 mx-2">
            <router-link to="/ReservaEView">
              <b-icon icon="box" font-scale="1.5" variant="white"></b-icon>
              <span class="text-white mx-3">Reservas Encomienda</span>
            </router-link>
          </li>

          <!-- 5ta opcion -->
          <!-- <li class="my-4 mx-2">
            <router-link
              to="/RegistrateView"
              active-class="active"
              exact
              class="side-btn"
            >
              <b-icon
                icon="person-plus"
                font-scale="1.5"
                variant="white"
              ></b-icon>
              <span class="text-white mx-3">Registrate</span>
            </router-link>
          </li> -->

          <!-- 6ts opcion -->
          <li class="my-4 mx-2">
            <router-link to="" active-class="active" exact class="side-btn">
              <b-icon icon="gear" font-scale="1.5" variant="white"></b-icon>
              <span class="text-white mx-3">Configuracion Perfil</span>
            </router-link>
          </li>

          <li class="my-4 mx-2">
            <router-link to="/ReserveView" active-class="active" exact class="side-btn">
              <b-icon
                icon="cash-stack"
                font-scale="1.5"
                variant="white"
              ></b-icon>
              <span class="text-white mx-3">Comprobante de reserva Pasajero</span>
            </router-link>
          </li>

          <li class="my-4 mx-2">
            <router-link to="/EncomiendaCPView" active-class="active" exact class="side-btn">
              <b-icon
                icon="cash-stack"
                font-scale="1.5"
                variant="white"
              ></b-icon>
              <span class="text-white mx-3">Comprobante de reserva Encomienda</span>
            </router-link>
          </li>

          <hr />
          <b-button
        pill
        variant="primary"
        router-link
        class="text-white"
        to="/DashboardDView"
        >Despachador
      </b-button>
        </ul>
        
      </div>

      
    </nav>
  </div>
</template>

<script>
export default {
  name: "SidebarComponent",
};
</script>

<style scoped>
.fondonav {
  background-color: rgb(40, 87, 128);
}
</style>
