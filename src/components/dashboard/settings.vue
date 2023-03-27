<script setup>
import menuDashboard from "@/components/dashboard/menu.vue";
</script>
<template>
  <div class="container-fluid ">
    <div class="row">
      <div class="col-2 bg-light">
        <menuDashboard></menuDashboard>
      </div>
      <div class="col-10 px-5 py-5">
        <div class="row py-1">
          <div class="col-6">
            <h2>Instellingen</h2>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-6">
            <div class="card">
              <div class="card-header bg-primary--blue">
                <p class="text-white"><b>Instellingen</b></p>
              </div>
              <div class="card-body">
                <h5 class="py-1">Algemeen</h5>
                <hr>
                <div class="row">
                  <div class="form-group col-md-6">
                    <label for="">Voornaam</label>
                    <input type="email" class="form-control" id="voornaam" placeholder="">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="">Achternaam</label>
                    <input type="email" class="form-control" id="voornaam" placeholder="">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="">E-mail</label>
                    <input type="email" class="form-control" id="voornaam" placeholder="">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="">Wachtwoord</label>
                    <input type="email" class="form-control" id="voornaam" placeholder="">
                  </div>
                </div>
                <h5 class="py-1">Adres</h5>
                <hr>
                <div class="row">
                  <div class="form-group col-md-6">
                    <label for="">Adres</label>
                    <input type="email" class="form-control" id="voornaam" placeholder="">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="">Stad</label>
                    <input type="email" class="form-control" id="voornaam" placeholder="">
                  </div>

                </div>
                <div class="row">
                  <div class="form-group col-md-6">
                    <label for="">Provincie</label>
                    <input type="email" class="form-control" id="voornaam" placeholder="">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="">Postcode</label>
                    <input type="email" class="form-control" id="voornaam" placeholder="">
                  </div>

                  <div class="row">
                    <h5 class="py-1">Bedrijf</h5>
                    <hr>
                    <div class="form-group col-md-12">
                      <label for="">Bedrijfsnaam</label>
                      <input type="email" class="form-control" id="voornaam" placeholder="">
                    </div>
                    <div class="form-group col-md-12">
                      <label for="">Kvk</label>
                      <input type="email" class="form-control" id="voornaam" placeholder="">
                    </div>
                  </div>

                  <div class="py-2">
                    <button type="button" class="btn btn-success">Opslaan</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="card">
              <div class="card-header bg-primary--blue">
                <p class="text-white"><b>Profiel foto</b></p>
              </div>
              <div class="card-body">
                <div class="text-center">
                  <img src="/public/istockphoto-1337144146-612x612.jpg" width="50%" height="50%" alt="">
                </div>
                <button type="button" class="btn btn-success">Nieuwe foto</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "settings"
}
</script>

<style scoped>

</style>
