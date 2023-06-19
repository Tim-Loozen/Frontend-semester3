<script setup>
import menuDashboard from "@/components/dashboard/menu.vue";
import Search from "@/components/dashboard/search.vue";

</script>
<template>
  <section class="bg-dashboard t">
    <div class="container">
      <div class="row">
        <menuDashboard></menuDashboard>
        <div class="col-10 py-2 px-5">
          <search></search>
          <div class="row">
            <div class="col-12">
              <div class="card box-shadow">
                <div class="card-header">
                  <h6>Post bedrijf accounts</h6>
                </div>
                <div class="card-body">
                  <table class="table table-striped">
                    <thead>
                    <tr>
                      <th scope="col"><h6>#</h6></th>
                      <th scope="col"><h6>E-mail</h6></th>
                      <th scope="col"><h6>voornaam</h6></th>
                      <th scope="col"><h6>achternaam</h6></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr id="app" v-for="item in data">
                      <th scope="row">{{ item.id }}</th>
                      <td>{{ item.email }}</td>
                      <td>{{ item.firstname }}</td>
                      <td>{{ item.lastname }}</td>

                    </tr>
                    </tbody>
                  </table>
                </div>
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
  name: "PostCompaniesAccount",
  data() {
    return {
      data: []
    }
  },
  created() {
    a.getPostCompanyAccounts().then(response => {
      this.data = response.data[0]
      console.log(this.data)
    })
  }
}
</script>

<style scoped>

</style>
