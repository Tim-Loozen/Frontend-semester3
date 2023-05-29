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
            <div class="card-header bg-light py-3 px-3">
              <h6>Gebruikers</h6>
            </div>
            <div class="card-body">
              <div class="responsiveTable">
                <table class="table table-striped bg-white">
                  <thead>
                  <tr>
                    <th scope="col"><h6>Id</h6></th>
                    <th scope="col"><h6>Naam</h6></th>
                    <th scope="col"><h6>E-mail</h6></th>
                    <th scope="col"><h6>Acties</h6></th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr id="app" v-for="item in data">
                    <td>{{ item.id }}</td>
                    <td>{{ item.Firstname }}{{ item.Lastname }}</td>
                    <td>{{ item.email }}</td>
                    <td>
                      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                              data-bs-target="#navbarNavDarkDropdown" aria-controls="navbarNavDarkDropdown"
                              aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                      </button>
                      <button class="btn btn-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        Acties
                      </button>
                      <ul class="dropdown-menu dropdown-menu-dark">
                        <li><a class="dropdown-item" href="tel:">Bewerken</a></li>
                        <li><a class="dropdown-item" href="tel:">Verwijderen</a></li>
                      </ul>
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
import api from "@/utils/api";

const a = new api();

export default {
  name: "users",
  data() {
    return {
      data: []
    }
  },

  created() {
    a.getUsers().then(response => {
      this.data = response.data[0]
      console.log(this.data)
    });
  }
}
</script>

<style scoped>

</style>
