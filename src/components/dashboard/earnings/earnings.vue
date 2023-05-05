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
            <h2>Verdiensten</h2>
          </div>
          <div class="col-6 ">
            <div class="text-end">
              <a href="/dashboard/settings" class="btn btn-primary">Instellingen</a>
            </div>
          </div>
        </div>
        <hr>
        <div class="card">
          <div class="card-header bg-primary--blue text-white"><p><b>Mijn opbrengsten</b></p></div>
          <div class="card-body">
          </div>
        </div>
      </div>

  </div>
  </div>

</template>

<script>
export default {
  name: "earnings"
}
</script>

<style scoped>

</style>
