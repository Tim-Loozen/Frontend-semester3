<script setup>
import menuDashboard from "@/components/dashboard/menu.vue";
import Search from "@/components/dashboard/search.vue";


</script>

<template >
  <section class="bg-dashboard">
  <div class="container">
    <div class="row">
      <menuDashboard></menuDashboard>
      <div class="col-10 px-5 py-2">
        <search></search>
        <div class="card box-shadow mb-5">
          <div class="card-header bg-light  py-3 px-3">
            <div class="row">
              <div class="col-12">
                <h6>Routes</h6>

              </div>

            </div>
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
                    <th></th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr id="app" v-for="item in data">
                    <td>{{ item.id }}</td>
                    <td>{{ item.postOffice }}</td>
                    <td>{{ item.distance }}</td>
                    <td>{{ item.startpoint }}</td>
                    <td>{{ item.endpoint }}</td>
                    <td :class="`bg-${item.status}`"><span class="badge rounded-pill">{{ item.status }}</span></td>
                    <td>{{ item.earnings }}</td>
                    <td v-if="item.status !== 'Toegekend'">
                      <router-link :to="{name: 'route', params: {id: item.id}}" class="btn btn-primary">Bekijk route
                      </router-link>
                    </td>
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
import axios from "axios";
import api from "@/utils/api";

const a = new api();
export default {
  name: "routes",
  data() {
    return {
      data: []
    }
  },
  created() {
    a.getPostRoutes().then(response => {
      this.data = response.data[0]
      console.log(this.data)
    })
  }
}
</script>

<style scoped>

</style>
