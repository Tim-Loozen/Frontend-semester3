<script setup>
import menuDashboard from "@/components/dashboard/menu.vue";
import Search from "@/components/dashboard/search.vue";
</script>

<template>
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
                <h6>Verzoeken</h6>
              </div>
            </div>
          </div>
          <div class="card-body">
            <div class="responsiveTable">
            <table class="table table-striped">
              <thead>
              <tr>
                <th scope="col"><h6>#</h6></th>
                <th scope="col"><h6>Verzocht door</h6></th>
                <th scope="col"><h6>Route nummer</h6></th>
                <th scope="col"><h6>Beschrijving</h6></th>
                <th scope="col"><h6>Reageren</h6></th>
                <th scope="col"><h6>Status</h6></th>
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
                <td>
                  <button @click="showDialog" id="myBtn" v-if="item.RequestStatus === 'Toegekend'" class="btn btn-success">Route starten</button></td>
                <dialog id="dialog" style="margin:auto;">
                  <h6>Route starten</h6>
                  <p>Weet je zeker dat je de route wilt starten?</p>
                  <form @submit="" method="post">
                    <button @click="startRoute()" type="submit">Ja</button>
                    <button>Nee</button>
                  </form>
                </dialog>
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
  name: "postRequests",
  data() {
    return {
      data: [],
      RouteStatus:[
          routeStatus: ""
      ]
    }
  },
  methods:{
    showDialog() {
      document.getElementById('dialog').showModal();
    },
    startRoute(){
      a.changePostRouteStatus()
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
