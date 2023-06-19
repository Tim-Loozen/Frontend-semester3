<script setup>
import menuDashboard from "@/components/dashboard/menu.vue";
import Search from "@/components/dashboard/search.vue";
</script>
<template>
  <section class="bg-dashboard t">
    <div class="container">
      <div class="row">
        <menuDashboard></menuDashboard>
        <div class="col-10 px-5 py-2">
          <search></search>
          <div class="card box-shadow mb-5">
            <div class="card-header bg-light  py-3 px-3">
              <div class="row">
                <div class="col-12">
                  <h6>Mijn opbrengsten</h6>
                </div>
              </div>
            </div>
            <div class="card-body">

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "earnings"
}
</script>

<style scoped>

</style>
