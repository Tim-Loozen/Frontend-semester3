<script setup>
import routes from './routes/routes.vue'
import menuDashboard from "@/components/dashboard/menu.vue";
import Token from "@/components/authentication/Token.vue";


</script>

<template>
  <div class="container-fluid ">
    <div class="row ">
<Token></Token>
      <div class="col-2 bg-light">
        <menuDashboard></menuDashboard>
      </div>
      <div class="col-10 px-3 py-5">
        <div class="row py-1">
          <div class="col-6">
            <h2>Dashboard</h2>
          </div>
          <div class="col-6 ">
            <div class="text-end">
              <a href="/dashboard/settings" class="btn btn-primary">Instellingen</a>
            </div>
          </div>
        </div>
        <hr class="my-5">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-header">

              </div>
              <div class="card-body">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style scoped>

</style>
