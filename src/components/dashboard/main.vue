<script setup>
import routes from './routes/routes.vue'
import Departs from "@/components/dashboard/departs/departs.vue";

</script>

<template>
  <section>
    <div class="container-fluid my-5">
      <div class="row">
        <div class="col-8">
          <h2>Dashboard</h2>
        </div>
        <div class="col-4 ">
          <div class="text-right">
            <a href="/dashboard/settings" class="btn btn-primary">Instellingen</a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <hr class="my-5">
          <div class="row">
            <div class="col-8">
              <div class="dashboard__routes--container my-2">
                <routes></routes>
              </div>
            </div>
            <div class="col-4">
              <div class="my-2">
                <departs></departs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="py-5">
    <div class="container-fluid">
      <div class="row">
        <div class="col-6">
          <div class="card">
            <div class="card-header bg-primary--blue text-white"><p><b>Mijn opbrengsten</b></p></div>
            <div class="card-body">


            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="card">
            <div class="card-header bg-primary--blue text-white"><p><b>Mijn routes</b></p></div>
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
                  <td>          <button type="button" class="btn btn-success">Bekijk route</button></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>2.0km</td>
                  <td>50,-</td>
                  <td>Strijp</td>
                  <td>          <button type="button" class="btn btn-success">Bekijk route</button></td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>2.0km</td>
                  <td>50,-</td>
                  <td>Strijp</td>
                  <td>          <button type="button" class="btn btn-success">Bekijk route</button></td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>2.0km</td>
                  <td>50,-</td>
                  <td>Strijp</td>
                  <td>          <button type="button" class="btn btn-success">Bekijk route</button></td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>2.0km</td>
                  <td>50,-</td>
                  <td>Strijp</td>
                  <td>          <button type="button" class="btn btn-success">Bekijk route</button></td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>2.0km</td>
                  <td>50,-</td>
                  <td>Strijp</td>
                  <td>          <button type="button" class="btn btn-success">Bekijk route</button></td>
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
  name: "main"
}
</script>

<style scoped>

</style>
