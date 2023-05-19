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
            <h2>Verzoeken</h2>
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
            <p><b>verzoeken</b></p>
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
                <th scope="col">Verzocht door</th>
                <th scope="col">Route nummer</th>
                <th scope="col">Beschrijving</th>
                <th scope="col">Reageren</th>
                <th scope="col">Status</th>
                <th scope="col"></th>
              </tr>
              </thead>
              <tbody>
              <tr id="app" v-for="item in data">
                <td>{{ item.requestId }}</td>
                <td>{{ item.username }}</td>
                <td><a :href="`/dashboard/route/${item.route}`">{{ item.route }}</a></td>
                <td>{{ item.description }}</td>
                <td></td>
                <td>{{item.RequestStatus}}</td>
                <td v-if="item.RequestStatus === 'Toegekend'">
                  <button class="btn btn-success">Route starten</button></td>
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
import api from "@/utils/api";

const a = new api();
export default {
  name: "postRequests",
  data() {
    return {
      data: []
    }
  },
  created() {
    a.getRouteRequests().then(response => {
      this.data = response.data[0]
      console.log(this.data)
    })
  }

}
</script>

<style scoped>

</style>
