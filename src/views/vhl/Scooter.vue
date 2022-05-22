<template>
  <h1 class="text-success">SCOOTER</h1>

  <div class="container">
    <div class="row">
      <div class="col-md-9">
        <div class="card bg-light" style="max-width: 700px">
          <div class="row">
            <div class="col-sm-3 border-end">
              <img
                src="../../assets/motor.svg"
                class="img-fluid"
                alt="salamo"
                style="width: 80px; opacity: 0.15"
              />
              <p class="text-danger fs-3 fw-bold card-img-overlay">6-09999</p>
            </div>

            <div class="col-6">
              <div class="card-body">
                <p class="card-text">Mr : <spam class="fw-bold">Khalid Dghouli</spam></p>
                <p class="card-text">Year : 2019</p>
                <p class="card-text">Affectation : Marrakech</p>
                <p class="card-text">Etat Actuel : Bien</p>

                <a class="btn btn-sm btn-warning"
                  >Reclamation
                  <span class="badge bg-secondary">4</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="col-md-3 rounded-3 bg-danger opacity-75 d-flex align-items-center justify-content-center fw-bolder"
      >
        Réclamation / Observation
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "scooter",
};
</script>

<style>
root {
  margin: 0;
  background-color: darkgray;
}
</style>
