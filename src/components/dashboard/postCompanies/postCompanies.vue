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
            <p><b>Post bedrijven</b><a type="button" href="/dashboard/post-companies/create"
                                       class="btn float-end btn-success">New Postoffice</a></p>
          </div>
          <div class="card-body" id="app" v-for="data in results">
            <p>
              {{data}}
            </p>
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
      results: []
    }
  },
  created() {
    axios.get(`http://fontys_semester3_api.test/post_office`).then(response => {
      this.results = response.data
      console.log(this.results)
    })
  }
}


</script>

<style scoped>

</style>
