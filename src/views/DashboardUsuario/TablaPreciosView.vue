<template>

    <div class="n">

        <section class="container-fluid tabla col-12 col-sm-12 col-lg-12 col-xxl-12">
          <h1>EMPRESAS, HORARIOS Y RESERVAS</h1>
        </section>
      <div class="d-flex container ">
        <section class="filtro ocultar-filtro col-sm-2 col-lg-2 col-xxl-2">
          <h3>Filtrar por:</h3>
          <div class="card">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                  <label class="form-check-label" for="flexSwitchCheckDefault">Precio</label>
                </div>
              </li>
              <li class="list-group-item">
                <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                  <label class="form-check-label" for="flexSwitchCheckDefault">Hora salida</label>
                </div>
              </li>
              <li class="list-group-item">
                <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                  <label class="form-check-label" for="flexSwitchCheckDefault">Hora llegada</label>
                </div>
              </li>
              <li class="list-group-item">
                <div class="form-check form-switch">
                  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
                  <label class="form-check-label" for="flexSwitchCheckDefault">Empresa</label>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section class=" tabla col-12 col-sm-10 col-lg-10 col-xxl-10">
          <table class="table table-info table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col " class="ocultar"></th>
                <th scope="col">EMPRESAS</th>
                <th scope="col" class="ocultar-hora">HORA</th>
                <th scope="col">RESERVA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td class="ocultar"><section><img src="@/assets/taxbelalcazar-logo.png" class="imgempresas"></section></td>
                <td>Tax Belalcazar</td>
                <td class="ocultar-hora">12:00 M</td>
                <td><b-button pill variant="success" class="btn boton" to="/ReservaPView" type="submit">RESERVAR</b-button></td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td class="ocultar"><section><img src="@/assets/sotracauca.png" alt="" class="imgempresas col-0"></section></td>
                <td>Sotracauca</td>
                <td class="ocultar-hora">08:00 AM</td>
                <td><b-button pill variant="success" class="btn boton" to="/ReservaPView" type="submit">RESERVAR</b-button></td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td class="ocultar"><section><img src="@/assets/coomotoristas.png" alt="" class="imgempresas col-0"></section></td>
                <td>Coomotoristas</td>
                <td class="ocultar-hora">02:00 PM</td>
                <td><b-button pill variant="success" class="btn boton" to="/ReservaPView" type="submit">RESERVAR</b-button></td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td class="ocultar"><section><img src="@/assets/palmira.png" alt="" class="imgempresas col-0"></section></td>
                <td>Expreso Palmira</td>
                <td class="ocultar-hora">05:00 PM</td>
                <td><b-button pill variant="success" class="btn boton" to="/ReservaPView" type="submit">RESERVAR</b-button></td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td class="ocultar"><section><img src="@/assets/velotax.png" alt="" class="imgempresas col-0"></section></td>
                <td>Velotax</td>
                <td class="ocultar-hora">06:30 PM</td>
                <td><b-button pill variant="success" class="btn boton" to="/ReservaPView" type="submit">RESERVAR</b-button></td>
              </tr>
            </tbody>
          </table>
        </section>
    </div>  
    
    </div>
</template>

<script>

    export default{
        name: "TablaPreciosView",
        components: {

        }
    };
</script>

<style scoped>
    .tabla{
      margin-top: 3%;
      margin-left: 2%;
    }

    .imgempresas{
    width: 90px;
    height: 60px;
    }

    @media screen and (max-width: 700px){
      .ocultar{
        display: none;
      }
    }

    @media screen and (max-width: 600px){
      .ocultar-hora{
        display: none;
      }
    }

    .boton{
      background-color:#2E86C1;
    }

    .precios{
      list-style: none;
    }

    .filtro{
      margin-top: 3%;
      margin-left: 1%;
    }
    .n{
    background-size: cover;
    height: 100vh;
    background-image: url(/src/assets/pop.jpeg) ;
}

    @media screen and (max-width: 768px){
      .ocultar-filtro{
        display: none;
      }
    }
</style>