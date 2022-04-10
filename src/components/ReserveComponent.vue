<template>
    <div>
    <div class="modal modal-tour position-static d-block  py-5" tabindex="-1" role="dialog" id="modalTour">
        <div class="modal-dialog" role="document">
          <div class="modal-content rounded-6 shadow">
            <div class="modal-body p-5">
              <h2 class="fw-bold mb-0 tipo1">INFORMACION RESERVA</h2>
      
              <ul class="d-grid gap-4 my-5 list-unstyled">
              <div class="row d-flex">
                <li class="d-flex">
                  <div  class="col lg-5 sm-5 md-5 mx-2">
                    <h5 class="mb-0">Nombre</h5>

                    <div class=" border border-2 my-2" >
                          <span>Niber</span>
                    </div>
                  
                  </div>
                  <div  class="col lg-5 sm-5 md-5 mx-2">
                    <h5 class="mb-0">Apellido</h5>
                    <div class=" border border-2 my-2" >
                          <span>Ramos</span>
                    </div>
                  </div>
                </li>
                </div>

                <div>
                <li class="d-flex">
                  <div class="col lg-5 sm-5 md-5 mx-2">
                    <h5 class="mb-0">E-Mail</h5>
                    <div class=" border border-2 my-2" >
                          <span>niber@gmail.com</span>
                    </div>
                  </div>

                  <div class="col lg-5 sm-5 md-5 mx-2">
                    <h5 class="mb-0">Celular</h5>
                    <div class=" border border-2 my-2" >
                          <span>3059855447</span>
                    </div>
                  </div>
                </li>
                </div>


            
                  
                  <div>
                    <h5 class="mb-0">Fecha</h5>
                    <div class=" border border-2 my-2" >
                          <span>2022/05/03</span>
                    </div>
                  </div>
                

                <div>
                <li class="d-flex ">
                  <div class="col col-lg-5 col-sm-5 col-md-5 mx-2">
                    <h5 class="mb-0">Origen</h5>
                     <div class=" border border-2 my-2" >
                          <span>Popayán</span>
                    </div>
                  </div>
                    <div class="col lg-5 sm-5 md-5 mx-2">
                      <h5 class="mb-0">Destino</h5>
                      <div class=" border border-2 my-2" >
                          <span>Timbio</span>
                    </div>
                    </div>
                    
                  </li>
                  </div>

                  <div>
                    <div class="col lg-4 sm-4 md-4 mx-5">
                      <h6 class="mb-0">N° Puesto</h6>
                       <div class=" border border-2 my-2" >
                          <span>3</span>
                    </div>
                    </div>
                  </div>
              </ul>

              <button type="button" class="btn btn-lg btn-primary mt-5 w-100" data-bs-dismiss="modal">Download</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>


<script>
export default {
  name: "ReserveComponent",
};
</script>

<style >
.tipo1{
  font-family: serif ;
}

</style>