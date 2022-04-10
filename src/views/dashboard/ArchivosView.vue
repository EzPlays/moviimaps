<template>
  <div class="container col-sm-12 col-xl-12 col-lg-8" id="padre">
    <br />
    <h1 class="mb-6" id="title">Informacion Documentos</h1>
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

        <div class="col-sm-12">
          <input
            type="number"
            class="form-control"
            id="firstName"
            placeholder="Peso maximo: 2kg"
            value=""
            required
          />
        </div>

        <div class="col-sm-12">
          <input
            type="number"
            class="form-control"
            id="lastName"
            placeholder="Valor del envio minimo: 5.000"
            value=""
            required
          />
          <br />
        </div>
      </div>
      <br />
      <div id="btenvio">
        <button class="btn btn-light text-dark btn-lg col-md-6" type="submit">
          Cotizar Envio
        </button>
      </div>
      <br />
    </form>
  </div>
</template>

<script>
export default {
  name: "ArchivosView",
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