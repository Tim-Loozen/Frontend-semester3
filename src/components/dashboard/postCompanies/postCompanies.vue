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
        <div class="card box-shadow">
          <div class="card-header ">
            <h6>Post bedrijven</h6>
          </div>
          <div class="card-body">
            <table class="table table-striped">
              <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">naam</th>
                <th scope="col">kvk</th>
                <th scope="col">Actie</th>
              </tr>
              </thead>
              <tbody>
              <tr id="app" v-for="item in data" >
                <th scope="row">{{item.id}}</th>
                <td>{{ item.name }}</td>
                <td>{{item.kvk}}</td>
                <td><router-link :to="{name: 'createPostCompanyAccount', params: {id: item.id}}"  class="btn btn-primary">Voeg account toe</router-link></td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
import axios, {Axios} from "axios";
import api from "@/utils/api";
const a = new api();
export default {
  name: "postCompanies",
  data() {
    return {
      data: []
    }
  },
  created() {
   a.getPostCompanies().then(response => {
     this.data = response.data[0]
     console.log(this.data)
   });
  }
}


</script>

<style scoped>

</style>
