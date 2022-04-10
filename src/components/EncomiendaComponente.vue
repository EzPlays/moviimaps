<template>
     <div class="modal modal-tour position-static d-block  py-5" tabindex="-1" role="dialog" id="modalTour">
    <div class="modal-dialog" role="document">
      <div class="modal-content rounded-6 shadow">
        <div class="modal-body p-5">
          <h2 class="fw-bold mb-0 tipo">INFORMACION ENCOMIENDA</h2>
  
          <ul class="d-grid gap-4 my-5 list-unstyled">
          <div class="row d-flex">
            <li class="d-flex">
              <div class="col lg-5 sm-5 md-5 mx-2">
                <h5 class="mb-0">Nombre</h5>
                    <div class=" border border-2 my-2" >
                          <span>Emmanuel</span>
                    </div>
              </div>
              <div class="col lg-5 mx-2">
                <h5 class="mb-0">Apellido</h5>
                <div class=" border border-2 my-2" >
                          <span>Zapata</span>
                    </div>
              </div>
            </li>
            </div>

            <div class="row d-flex">
            <li class="d-flex">
              <div class="col lg-5 sm-5 md-5 mx-2">
                <h5 class="mb-0">E-Mail</h5>
                <div class=" border border-2 my-2" >
                          <span>emmanuel@gmail.com</span>
                    </div>
              </div>
              <div class="col lg-5 sm-5 md-5 mx-2">
                <h5 class="mb-0">CELULAR</h5>
                <div class=" border border-2 my-2" >
                          <span>3125596474</span>
                    </div>
              </div>
            </li>
            </div>


            <div class="row d-flex">
            <li class="d-flex">
              <div class="col lg-5 sm-5 md-5 mx-2">
                <h5 class="mb-0">ORIGEN</h5>
                <div class=" border border-2 my-2" >
                          <span>Popayán</span>
                    </div>
              </div>
              <div class="col lg-5 sm-5 md-5 mx-2">
                <h5 class="mb-0">DESTINO</h5>
                <div class=" border border-2 my-2" >
                          <span>Rosas</span>
                    </div>
              </div>
            </li>
            </div>


          
              <div>
                <h5 class="mb-0">Peso</h5>
                <div class=" border border-2 mx-5 my-1" >
                          <span>20kg</span>
                    </div>
              </div>
            
          </ul>
          <button type="button" class="btn btn-lg btn-primary mt-5 w-50" data-bs-dismiss="modal">Download</button>
        </div>
      </div>
    </div>
  </div> 
</template>

<script>
export default {
    name: 'EncomiendaComponente',
};
</script>


<style scoped>

.tipo{
  font-family: serif;
}

</style>