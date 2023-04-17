<script setup>
import menuDashboard from "@/components/dashboard/menu.vue";
import Token from "@/components/authentication/Token.vue";
</script>
<template>
  <Token></Token>
  <div class="container-fluid ">
    <div class="row">
      <div class="col-2 bg-light">
        <menuDashboard></menuDashboard>
      </div>
      <div class="col-10 px-5 py-5">
        <div class="row py-1">
          <div class="col-6">
            <h2>Post bedrijf accounts</h2>
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
            <p><b>Post bedrijf accounts</b></p>
          </div>
          <div class="card-body">
            <table class="table table-striped">
              <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">E-mail</th>
                <th scope="col">voornaam</th>
                <th scope="col">achternaam</th>
              </tr>
              </thead>
              <tbody>
              <tr id="app" v-for="item in data" >
                <th scope="row">{{item.id}}</th>
                <td>{{item.email}}</td>
                <td>{{ item.firstname }}</td>
                <td>{{item.lastname}}</td>

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

export default {
  name: "PostCompaniesAccount",
  data() {
    return {
      data: []
    }
  },
  created() {
    axios.get(`http://fontys_semester3_api.test/post_office_account`).then(response => {
      this.data = response.data[0]
      console.log(this.data)
    })
  }
}
</script>

<style scoped>

</style>
