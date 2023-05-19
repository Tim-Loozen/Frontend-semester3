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
            <h2>Routes</h2>
          </div>
          <div class="col-6 ">
            <div class="text-end">
              <a href="/dashboard/settings" class="btn btn-primary">Instellingen</a>
            </div>
          </div>
        </div>
        <hr>
        <div class="card">
          <div class="card-header text-white bg-primary--blue">
            <p><b>beschikbare routes</b></p>
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
                <th scope="col">Post bedrijf</th>
                <th scope="col">Afstand</th>
                <th scope="col">startpunt</th>
                <th scope="col">eindpunt</th>
                <th scope="col">Status</th>
                <th scope="col">Opbrengst</th>
                <th></th>
              </tr>
              </thead>
              <tbody>
              <tr id="app" v-for="item in data" >
                <td>{{ item.id }}</td>
                <td>{{ item.postOffice }}</td>
                <td>{{ item.distance }}</td>
                <td>{{ item.startpoint }}</td>
                <td>{{ item.endpoint }}</td>
                <td :class="`bg-${item.status}`"><span style="color:white">{{item.status}}</span></td>
                <td>{{ item.earnings }}</td>
                <td  v-if="item.status !== 'Toegekend'"><router-link :to="{name: 'route', params: {id: item.id}}"  class="btn btn-primary">Bekijk route</router-link></td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
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
