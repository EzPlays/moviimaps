<template>
  <div class="container col-sm-12 col-xl-12 col-lg-8" id="dashnav">
    <ul class="flex-lg-column">
      <div>
        <b-button-group >
          <b-button variant="primary" id="boton2"
            router-link to="/ReservaEview" class="text-white"
          >Documentos</b-button>
          <b-button variant="primary" id="boton2"
            router-link to="/paquetes" class="text-white"
          >Paquetes</b-button>
        </b-button-group>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SidebarencoComponent",
};
</script>

<style scoped>
#dashnav {
  display: flex;
  justify-content:center
}
#boton1 {
  width: 150px;
}
#boton2 {
  width: 130px;
}

</style>