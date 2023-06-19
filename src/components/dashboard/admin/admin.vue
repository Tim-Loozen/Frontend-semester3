<script setup>
import menuDashboard from "@/components/dashboard/menu.vue";
</script>
<template>
  <section class="py-5">
    <div class="container t">
      <div class="row">
        <div class="col-3">
          <div class="card">
            <div class="card-header bg-primary--blue">
              <p class="text-white"><b>Wijken.</b></p>
            </div>
            <div class="card-body">
              <button type="button" class="btn btn-danger"> overzicht</button>
              <button type="button" class=" mx-2 btn btn-success">Toevoegen</button>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="card">
            <div class="card-header bg-primary--blue">
              <p class="text-white"><b>Routes</b></p>
            </div>
            <div class="card-body">
              <button type="button" class="btn btn-danger"> overzicht</button>
              <button type="button" class=" mx-2 btn btn-success">Toevoegen</button>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="card">
            <div class="card-header bg-primary--blue">
              <p class="text-white"><b>ZZP</b></p>
            </div>
              <div class="card-body">
                <button type="button" class="btn btn-danger"> overzicht</button>
                <button type="button" class=" mx-2 btn btn-success">Toevoegen</button>
              </div>
          </div>
        </div>
        <div class="col-3">
          <div class="card">
            <div class="card-header bg-primary--blue">
              <p class="text-white"><b>Post bedrijven</b></p>
            </div>
            <div class="card-body">
              <button type="button" class="btn btn-danger"> overzicht</button>
              <button type="button" class=" mx-2 btn btn-success">Toevoegen</button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
  <section class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-header text-white bg-primary--blue">
              <p><b>Overzicht van: </b></p>
            </div>
            <div class="card-body">
              <nav class="navbar navbar-light bg-light">
                <form class="form-inline">
                  <input class="form-control " type="search" placeholder="Search" aria-label="Search">
                </form>
              </nav>
              <table class="table table-striped">
                <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Afstand</th>
                  <th scope="col">Opbrengst</th>
                  <th scope="col">Wijk</th>
                  <th></th>
                </tr>
                </thead>
                <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>2.0km</td>
                  <td>50,-</td>
                  <td>Strijp</td>
                  <td>          <button type="button" class="btn btn-success mx-1">Bekijk </button><button type="button" class=" mx-1 btn btn-danger">  verwijderen</button></td>

                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>2.0km</td>
                  <td>50,-</td>
                  <td>Strijp</td>
                  <td>          <button type="button" class="btn btn-success mx-1">Bekijk </button><button type="button" class=" mx-1 btn btn-danger">  verwijderen</button></td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>2.0km</td>
                  <td>50,-</td>
                  <td>Strijp</td>
                  <td>          <button type="button" class="btn btn-success mx-1">Bekijk </button><button type="button" class=" mx-1 btn btn-danger">  verwijderen</button></td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>2.0km</td>
                  <td>50,-</td>
                  <td>Strijp</td>
                  <td>          <button type="button" class="btn btn-success mx-1">Bekijk </button><button type="button" class=" mx-1 btn btn-danger">  verwijderen</button></td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>2.0km</td>
                  <td>50,-</td>
                  <td>Strijp</td>
                  <td>          <button type="button" class="btn btn-success mx-1">Bekijk </button><button type="button" class=" mx-1 btn btn-danger">  verwijderen</button></td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>2.0km</td>
                  <td>50,-</td>
                  <td>Strijp</td>
                  <td>          <button type="button" class="btn btn-success mx-1">Bekijk </button><button type="button" class=" mx-1 btn btn-danger">  verwijderen</button></td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "admin"
}
</script>

<style scoped>

</style>
