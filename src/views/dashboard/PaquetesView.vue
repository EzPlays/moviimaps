<template>
  <div class="container col-sm-12 col-xl-12 col-lg-12 " id="padre">
    <br />
    <h1 class="mb-6" id="title">Informacion Paquetes</h1>
    <br />
    <form class="needs-validation" novalidate>
      <div class="row g-4" id="coso">
        <div class="col-sm-12 container">
          <input
            type="text"
            class="form-control"
            id="firstName"
            placeholder="Ciudad de Origen"
            value=""
            required
          />
        </div>

        <div class="col-sm-12">
          <input
            type="text"
            class="form-control"
            id="lastName"
            placeholder="Ciudad de Destino"
            value=""
            required
          />
        </div>

        <div class="col-sm-4">
          <input
            type="number"
            class="form-control"
            id="firstName"
            placeholder="Alto (cm)"
            value="number"
            required
          />
        </div>

        <div class="col-sm-4">
          <input
            type="number"
            class="form-control"
            id="firstName"
            placeholder="Largo (cm)"
            value=""
            required
          />
        </div>

        <div class="col-sm-4">
          <input
            type="number"
            class="form-control"
            id="firstName"
            placeholder="Ancho (cm)"
            value=""
            required
          />
        </div>

        <div class="col-sm-12">
          <input
            type="number"
            class="form-control"
            id="firstName"
            placeholder="Peso minimo: 3kg"
            value=""
            required
          />
        </div>

        <div class="col-sm-12">
          <input
            type="number"
            class="form-control"
            id="lastName"
            placeholder="Valor del envio minimo: 25.000"
            value=""
            required
          />
          <br />
        </div>
      </div>
      <br />
      <div id="btenvio">
        <button class="btn btn-light btn-lg col-md-6" type="submit">
          Cotizar Envio
        </button>
      </div>
      <br />
    </form>
  </div>
</template>

<script>
export default {
  name: "PaquetesView",
};
</script>

<style scoped>
#padre {
  border: #0648b3 solid 10px;
  border-radius: 30px;
  background-color: #0648b3;
}
#btenvio {
  background-color: #0648b3;
}
#coso {
  border-radius: 10px;
}
#title {
  color: aliceblue;
}

div {
  background-color: rgb(255, 255, 255);
}

</style>