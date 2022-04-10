<template>
<div class="cards a">
  <b-card no-body class="overflow-hidden" style="max-width: 400px;">
    <b-row no-gutters>
      <b-col md="11">
        <!-- <b-card-img src="../assets/moviil.jpeg" alt="Image" class="rounded-0"></b-card-img> -->
        <img src="../assets/moviil.jpeg" alt="dfdd" class="imagen1" style="max-width: 90%;">
       
      </b-col>
      <b-col md="11">
        <b-card-body title="Mision">
          <b-card-text>
             El planteamiento principal es ofrecer un software de calidad donde se supere las expectativas de los clientes, tanto de las empresas de transportes como de los usuarios del servicio de las mismas. Brindando un soporte adecuado y oportuno que garantice la seguridad y el correcto funcionamiento en cualquier momento.
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>

  <b-card no-body class="cars" style="max-width: 400px;">
    <b-row no-gutters>
      <b-col md="11">
        <!-- <b-card-img src="../assets/moviil.jpeg" alt="Image" class="rounded-0"></b-card-img> -->
        <img src="../assets/logocar.jpeg" alt="dfdd" class="imagen1" style="max-width: 100%;">
       
      </b-col>
      <b-col md="11">
        <b-card-body title="Vision">
          <b-card-text>
             Brindamos un servicio de transporte de carga pesada y logística a
          nivel nacional satisfaciendo plenamente en tiempo y forma los
          requerimientos de nuestros clientes garantizando un servicio que
          destaque por la seguridad, puntualidad y calidad, con respaldo de
          tecnología adecuada, personal calificado y competitivo
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
  
  
</div>


</template>
<script>
export default {
    name: "InformacionComponent"
}
</script>
<style scoped>

.a {
  display: flex;
  justify-content:space-evenly;
}

</style>