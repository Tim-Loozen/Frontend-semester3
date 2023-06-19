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
              <h6>Routes history</h6>
            </div>
            <div class="card-body">
              <div class="responsiveTable">
                <table class="table table-striped bg-white">
                  <thead>
                  <tr>
                    <th scope="col"><h6>Route</h6></th>
                    <th scope="col"><h6>Post bedrijf</h6></th>
                    <th scope="col"><h6>Afstand</h6></th>
                    <th scope="col"><h6>startpunt</h6></th>
                    <th scope="col"><h6>eindpunt</h6></th>
                    <th scope="col"><h6>Status</h6></th>
                    <th scope="col"><h6>Opbrengst</h6></th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr id="app" v-for="item in data">
                    <td>{{ item.id }}</td>
                    <td>{{ item.postOffice }}</td>
                    <td>{{ item.distance }}km</td>
                    <td>{{ item.startpoint }}</td>
                    <td>{{ item.endpoint }}</td>
                    <td>{{ item.status }}</td>
                    <td>{{ item.earnings }},-</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import api from "@/utils/api";

const a = new api();
export default {
  name: "history",
  data() {
    return {
      data: []
    }
  },
  created() {
    a.getPostRoutes().then(response => {
      this.data = response.data[1]
      console.log(this.data)
    })
  }
}
</script>

<style scoped>

</style>
