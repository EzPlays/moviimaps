<template>
  <div class="container">
    <main>
      <div class="py-5 text-center">
        <div class="logo2">
          <img alt="Vue logo" src="../assets/moviil.jpeg" width="230px" />
        </div>

        <p class="lead"></p>
        <p>
          Brindamos un servicio de transporte de carga pesada y logística a
          nivel nacional satisfaciendo plenamente en tiempo y forma los
          requerimientos de nuestros clientes garantizando un servicio que
          destaque por la seguridad, puntualidad y calidad, con respaldo de
          tecnología adecuada, personal calificado y competitivo
        </p>
      </div>

      <div class="row g-5">
        <div class="col-md-5 col-lg-4 order-md-last">
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-primary">Horario</span>
          </h4>
          <ul class="list-group mb-3">
            <li class="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 class="my-0">Tax Belalcazar</h6>
              </div>
              <span class="Hora de salida">12:00 M</span>
            </li>
            <li class="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 class="my-0">Sotracauca</h6>
              </div>
              <span class="Hora de salida">04:00 PM</span>
            </li>
            <li class="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 class="my-0">Coomotoristas</h6>
              </div>
              <span class="Hora de salida">02:00 PM</span>
            </li>
            <li class="list-group-item d-flex justify-content-between lh-sm">
              <div>
                <h6 class="my-0">Sotracauca</h6>
              </div>
              <span class="Hora de salida">05:00 PM</span>
            </li>
          </ul>
          <form class="card p-2">
            <div class="input-group">
              <input
                type="text"
                class="form-control"
                placeholder="Buses disponibles "
              />
              <button type="submit" class="btn btn-secondary">Buscar</button>
            </div>
          </form>
        </div>
        <div class="col-md-7 col-lg-8">
          <h4 class="mb-3">Reservas</h4>
          <form class="needs-validation" novalidate>
            <div class="row g-3">
              <div class="col-sm-6">
                <label for="firstName" class="form-label">Nombre</label>
                <input
                  type="text"
                  class="form-control"
                  id="firstName"
                  placeholder=""
                  value=""
                  required
                />
                <div class="invalid-feedback">
                  Valid first name is required.
                </div>
              </div>

              <div class="col-sm-6">
                <label for="lastName" class="form-label">Apellido</label>
                <input
                  type="text"
                  class="form-control"
                  id="lastName"
                  placeholder=""
                  value=""
                  required
                />
                <div class="invalid-feedback">Valid last name is required.</div>
              </div>

              <div class="col-12">
                <label for="email" class="form-label"
                  >Email <span class="text-muted">(Opcional)</span
                ></label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  placeholder="you@example.com"
                />
                <div class="invalid-feedback">
                  Please enter a valid email address for shipping updates.
                </div>
              </div>

              <div class="col-11">
                <label for="Fecha" class="form-label"
                  >Fecha de reservacion  <span class="text-muted"></span
                ></label>
                <input
                  type="date"
                  class="form-control"
                  placeholder="ingresa fecha "
                  id="start"
                  name="trip-start"
                  value="año/mes/dia"
                  min="2022-01-01"
                  max="2030-01-31"
                />
              </div>

              <div class="col-md-5">
                <label for="country" class="form-label">Origen</label>
                <select class="form-select" id="country" required>
                  <option value="">Ciudad de origen</option>
                  <option>Popayan</option>
                  ,
                  <option>Cajibío</option>
                  ,
                  <option>El tambo</option>
                  ,
                  <option>La Sierra</option>
                  ,
                  <option>Morales</option>
                  ,
                  <option>Piendamó</option>
                  ,
                  <option>Rosas</option>
                  ,
                  <option>Soatá</option>
                  ,
                  <option>Timbío</option>
                  ,
                  <option>Almaguer</option>
                  ,
                  <option>Argelia</option>
                  ,
                  <option>Balboa</option>
                  ,
                  <option>Bolívar</option>
                  ,
                  <option>Florencia</option>
                  ,
                  <option>La vega</option>
                  ,
                  <option>Mercaderes</option>
                  ,
                  <option>Patía</option>
                  ,
                  <option>Piamonte</option>
                  ,
                  <option>San Sebastián</option>
                  ,
                  <option>Santa Rosa</option>
                  ,
                  <option>Sucre</option>
                  ,
                </select>
                <div class="invalid-feedback">
                  Please select a valid country.
                </div>
              </div>

              <div class="col-md-4">
                <label for="state" class="form-label">Destino </label>
                <select class="form-select" id="state" required>
                  <option value="">Ciudad de destino</option>
                  <option>Popayan</option>
                  ,
                  <option>Cajibío</option>
                  ,
                  <option>El tambo</option>
                  ,
                  <option>La Sierra</option>
                  ,
                  <option>Morales</option>
                  ,
                  <option>Piendamó</option>
                  ,
                  <option>Rosas</option>
                  ,
                  <option>Soatá</option>
                  ,
                  <option>Timbío</option>
                  ,
                  <option>Almaguer</option>
                  ,
                  <option>Argelia</option>
                  ,
                  <option>Balboa</option>
                  ,
                  <option>Bolívar</option>
                  ,
                  <option>Florencia</option>
                  ,
                  <option>La vega</option>
                  ,
                  <option>Mercaderes</option>
                  ,
                  <option>Patía</option>
                  ,
                  <option>Piamonte</option>
                  ,
                  <option>San Sebastián</option>
                  ,
                  <option>Santa Rosa</option>
                  ,
                  <option>Sucre</option>
                  ,
                </select>
                <div class="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
              <div class="col-md-3">
                <label for="PRUEBA" class="form-label"
                  >Numero de pasajeros
                </label>
                <select class="form-select" id="PRUEBA" required>
                  <option value="">Puestos</option>
                  <option>1</option>
                  ,
                  <option>2</option>
                  ,
                  <option>3</option>
                  ,
                  <option>4</option>
                  ,
                  <option>5</option>
                  ,
                  <option>6</option>
                  ,
                  <option>7</option>
                  ,
                  <option>8</option>
                  ,
                  <option>9</option>
                  ,
                  <option>10</option>
                  ,
                  <option>11</option>
                  ,
                  <option>12</option>
                  ,
                </select>
                <div class="invalid-feedback">
                  Please provide a valid state.
                </div>
              </div>
            </div>
            <div>
              <button class="w-100 btn btn-primary btn-lg" type="submit">
                Reservar
              </button>
            </div>
          </form>
        </div>
      </div>
    </main>
  </div>
</template>


<script>
export default {
  name: "ReservaPComponent",
};
</script>

<style scoped>
    
</style>