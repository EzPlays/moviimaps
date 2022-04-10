<template>
  <div>
    <div>
    <section class=" registro container  col-10 col-sm-6 col-lg-4 col-xxl-3 shadow ">
        <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class=" form-label">Nombre</label>
                  <input type="text" class="form-control" id="text" aria-describedby="text">
                <label for="exampleInputEmail1" class="form-label">Apellido</label>
                  <input type="text" class="form-control" id="text" aria-describedby="text">
                <label for="exampleInputEmail1" class="form-label">Celular</label>
                    <div class="caja">
                          <input type="tel" class=" margencelular form-control" id="tel" aria-describedby="tel">
                             <img src="@/assets/celular.png" alt="logo" class="celular">
              </div> 
              <label for="exampleInputEmail1" class="form-label">Identificación</label>
              <input type="tel" class="form-control" id="tel" aria-describedby="tel">
           </div>
            <div class=" mb-3">
              <label for="exampleInputPassword1" class="form-label">Contraseña</label>
              <div class="contraseña">
                <input type="password" class="margencontraseña form-control" id="exampleInputPassword1">
              <img src="@/assets/oculto.png" alt="oculto" class="oculto">
              </div>
            </div>
            <div id="passwordHelpBlock" class="text-center form-text">
                Su contraseña debe tener entre 8 y 20 caracteres, contener letras y números,caracteres especiales ni emoji.
              </div>
            <br>
            <div class="mb-3 form-check">
              <input type="checkbox" class="form-check-input" id="exampleCheck1">
              <label class="form-check-label" for="exampleCheck1">Recordar mis datos</label>
            </div>
            <div id="Identificacion" class="text-center form-text">No compartas tu información con nadie.</div>
            <hr>
            <div class="d-grid gap-2 col-6 mx-auto">
            <button type="submit" class=" btn btn-primary"><router-link to="/InicioSesionPView">Registrate</router-link></button>
        </div>
          </form>
        </section>
        </div>
        </div>
</template>
<script>
export default {
    name:"RegistroComponent",
};
</script>
<style scoped>
.registro{
    padding: 10px;
    border: outset 7px rgb(90, 177, 248 );
    border-radius: 10px;
}
.caja{
  border: 1px solid rgb(195, 185, 185);
  border-radius: 5px;
  display: flex;
}
.margencelular{
  border:  none;
}
.celular{
  margin-top: 3px;
  width:25px;
  height: 30px;
  margin-right: 5px;
}
.contraseña{
  border: 1px solid rgb(195, 185, 185);
  border-radius: 5px;
  display: flex;
}
.oculto{
  width:20px;
  height: 20px;
  margin-top: 8px;
  margin-right: 10px;
}
.margencontraseña{
  border: none;
  
}


</style>