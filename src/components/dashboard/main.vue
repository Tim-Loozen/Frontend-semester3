<script setup>
import menuDashboard from "@/components/dashboard/menu.vue";
import Search from "@/components/dashboard/search.vue";
import Routes from "@/components/dashboard/routes/routes.vue";
</script>

<template>
  <section class="bg-dashboard">
  <div class="container">
    <div class="row ">
      <menuDashboard></menuDashboard>
      <div class="col-10  px-5 py-2">

        <search></search>
        <div class="row">
          <div class="col-6">
            <div class="card box-shadow">
              <div class="card-header ">
                <h6>Routes</h6>
              </div>
              <div class="card-body">

              </div>
            </div>
          </div>
          <div class="col-6">
            <div class="card box-shadow">
              <div class="card-header ">
                <h6>Postbedrijven</h6>
              </div>
              <div class="card-body">

              </div>
            </div>
          </div>
        </div>
        <div class="row my-4">
          <div class="col-12">
            <div class="card box-shadow">
              <div class="card-header ">
                <h6>Gebruikers</h6>
              </div>
              <div class="card-body">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
</template>
<script>

</script>

<style scoped>

</style>
