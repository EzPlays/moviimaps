<template>
<div>

<img src="../assets/mvlogo.jpeg" alt="logo" width="400px" height="100px" class="my-4 col-md-6 col-sm-8">
    <div class="my-5 mx-5 bg-dark bg-opacity-75 py-5 px-3 rounded-start rounded ">

        
        <form>
        <div class="row d-flex justify-content-center align-items-center ">
            
            <!-- PRIMER FORM PARA COMPLETAR MUNICIPIO DE ORIGEN -->
            <div class="col col-lg-3 col-md-3 col-sm-3 text-center">
                <label for="disabledSelect" class="form-label text-center text-white">Ingresa el lugar de origen</label>
                <select id="disabledSelect" class="form-select shadow">
                    <option>Popayán</option>
                    <option>Timbio</option>
                    <option>Tambo</option>
                    <option>Rosas</option>
                </select>
            </div>

            <!-- SEGUNDO FORM PARA COMPLETAR MUNICIPIO DE LLEGADA -->
            <div class="col col-lg-3 col-md-3 col-sm-3 text-center">
                <label for="disabledSelect" class="form-label text-white ">Ingresa el lugar de llegada</label>
                <select id="disabledSelect" class="form-select shadow">
                    <option>Popayán</option>
                    <option>Timbio</option>
                    <option>Tambo</option>
                    <option>Rosas</option>
                    <option>El Bordo</option>
                    <option>La vega</option>
                    <option>Patía</option>
                </select>
            </div>

            <!-- FORM PARA ELEGIR LA FECHA DE VIAJE -->

            <div class="col col-sm-3 col-md-3 col-lg- text-center">
                <label for="disabledSelect" class="form-label text-center text-white ">Ingresa la fecha de el viaje</label>
                <input type="date" class="form-control shadow" id="fecha-de-viaje">
            </div>
        </div>

        <!-- BOTÓN PARA GENERAR BÚSQUEDA -->

        <div class="my-5">
            <div class="row justify-content-center d-flex">
                <div class="col col-sm-5 md-5 lg-5 d-flex justify-content-center">
                    <b-button
        pill
        variant="primary"
        router-link
        class="text-white"
        to="/TablaPreciosView"
        >Busca el Viaje
      </b-button>
                    
                </div>
            </div>
        </div>
    </form>

    </div>
</div>

</template>

<script>
export default {
  name: 'FormularioComponent',
};
</script>


<style>

.y{
   background-color: #1b5291; 
};
</style>