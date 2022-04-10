<template>
  <div class="my-1 mx-3 px-1 py-2 bg-white rounded-bottom shadow">
    <div class="row d-flex justify-content-evenly align-items-center">
      <div class="col col-lg-5 col-md-5 sm-5">
        <img
          src="../assets/mvlogo.jpeg"
          alt=" "
          width="400px"
          height="100px"
          class="logo"
        />
      </div>
      <div class="col col-lg7 md-7 sm-7 justify-content-center d-flex">
        <nav class="navbar navbar-expand-lg navbar-light bg-white">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="menu collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                <li class="nav-item mx-4">
                  <router-link
                    class="nav-link active fs-6"
                    aria-current="page"
                   
                    to="/PrincipalView"
                    >Inicio</router-link
                  >
                </li>
                <li class="nav-item mx-4">
                  <router-link
                    class="nav-link active fs-6"
                    aria-current="page"
                    href="#"
                    to="/InicioSesionPView"
                    >Iniciar Sesión</router-link
                  >
                </li>
                <li class="nav-item mx-4">
                  <router-link
                    class="nav-link active fs-6"
                    aria-current="page"
                    to="/RegistratePView"
                    >Registrate</router-link
                  >
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderDComponent",
};
</script>

<style scoped>
.nosotros {
  text-decoration: none;
}
.registro {
  text-decoration: none;
}
.imagenes {
  display: flex;
  width: 50px;
  height: 50px;
}
</style>

