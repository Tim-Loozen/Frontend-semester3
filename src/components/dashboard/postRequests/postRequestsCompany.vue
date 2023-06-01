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
        <div class="row mb-4">
          <div class="col-12">
            <div class="card box-shadow">
              <div v-if="success" class="alert alert-success" role="alert">
                Status is aangepast
              </div>
              <div class="card-header">
                  <h6>Verzoeken</h6>
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
                      <th scope="col"><h6>Status veranderen</h6></th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr id="app" v-for="item in data">
                      <td><input type="hidden" v-model="item.requestId">{{ item.requestId }}</td>
                      <td>{{ item.username }}</td>
                      <td><input type="hidden" v-model="item.route">{{ item.route }}</td>
                      <td>{{ item.description }}</td>
                      <td>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown"
                                aria-expanded="false" aria-label="Toggle navigation">
                          <span class="navbar-toggler-icon"></span>
                        </button>
                        <button class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                          Reageren
                        </button>
                        <ul class="dropdown-menu dropdown-menu-dark">
                          <li><a class="dropdown-item" href="tel:">Bellen</a></li>
                          <li><a class="dropdown-item" :href="`mailto:${item.email}`">E-mail</a></li>
                          <li><a class="dropdown-item" href="#">Chatten</a></li>
                        </ul>
                      </td>
                      <td>
                        <select :data-route-id="item.route" v-model="item.RequestStatus"
                                class="form-select"
                                aria-label="Default select example">
                          <option selected value="">Status</option>
                          <option value="active">Beschikbaar</option>
                          <option value="In onderhandeling">In onderhandeling</option>
                          <option value="Toegekend">Toekennen</option>
                          <option value="Niet toegekend">Niet toegekend</option>
                        </select>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                  <button @click="changeStatus()" class="btn btn-success float-end">Opslaan</button>
                </div>
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
import api from "@/utils/api";

const a = new api();
export default {
  name: "postRequestCompany",
  data() {
    return {
      approvedRoutes: [],
      success: false,
      data: [],
    }
  },
  created() {
    a.getRouteRequests().then(response => {
      this.data = response.data[0]
      console.log(this.data)
    });

  },
  methods: {
    changeStatus() {
      a.changePostRouteStatus(this.data).then(result => {
        if (result.data[0] === "statusChange_ok") {
          this.success = true;
        }
      }).catch((error) => {
        console.log(error);
      });
    },
  }

}
</script>

<style scoped>

</style>
