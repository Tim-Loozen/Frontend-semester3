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
            <h2>Post bedrijven</h2>
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
            <p><b>Post bedrijven</b></p>
          </div>
          <div class="card-body">
            <table class="table table-striped">
              <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">naam</th>
                <th scope="col">kvk</th>
              </tr>
              </thead>
              <tbody>
              <tr id="app" v-for="item in data" >
                <th scope="row">{{item.id}}</th>
                <td>{{ item.name }}</td>
                <td>{{item.kvk}}</td>
                <td><a href="/dashboard/post-companies/account/create" class="btn btn-primary">Voeg account toe</a></td>
                <td>

                </td>
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
import axios, {Axios} from "axios";
import {createApp} from "vue";

export default {
  name: "postCompanies",
  data() {
    return {
      data: []
    }
  },
  created() {
    axios.get(`http://fontys_semester3_api.test/post_office`).then(response => {
      this.data = response.data[0]
      console.log(this.data)
    })
  }
}


</script>

<style scoped>

</style>
