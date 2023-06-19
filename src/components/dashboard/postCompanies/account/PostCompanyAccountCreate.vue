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
        <div class="card box-shadow mb-5 ">
          <div class="card-header bg-light py-3 px-3">
            <div class="row">
              <div class="col-12">
                <h6>Account voor post bedrijf aanmaken</h6>
              </div>
            </div>
          </div>

          <div class="card-body">
            <div v-if="success" class="alert alert-success" role="alert">
              account voor postbedrijf is aangemaakt
            </div>
            <form class="" @submit="postData" method="post">
              <div class="row ">
                <div class="form-group col-md-6  my-1">
                  <label for=""><h6>Voornaam</h6></label>
                  <input type="text" v-model="data.firstname" name="firstname" class="form-control" id="Firstname"
                         placeholder="">
                </div>
                <div class="form-group col-md-6  my-1">
                  <label for=""><h6>Achternaam</h6></label>
                  <input type="text" v-model="data.lastname" class="form-control" id="Lastname" placeholder="">
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6  my-1">
                  <label for=""><h6>E-mail</h6></label>
                  <input type="email" v-model="data.email" class="form-control" id="inputEmail" placeholder="">
                </div>
                <div class="form-group col-md-6  my-1">
                  <label for=""><h6>Wachtwoord</h6></label>
                  <input v-model="data.password" type="password" class="form-control" id="inputPassword" placeholder="">
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6  my-1">
                  <label for=""><h6>Positie in bedrijf</h6></label>
                  <input v-model="data.position" type="text" class="form-control" id="position" placeholder="">
                </div>
                <div class="form-group col-md-6  my-1">
                  <label for=""><h6>Telefoon nummer</h6></label>
                  <input v-model="data.cellphone" type="text" class="form-control" id="cellphone" placeholder="">
                </div>
              </div>
              <div class="my-4">
              <button type="submit" class="btn btn-primary ">Aanmaken</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  </section>
</template>
<script>
import routes from "@/components/dashboard/routes/routes.vue";
import axios, {Axios} from "axios";
import api from "@/utils/api";

const a = new api();
export default {
  name: "PostCompanyAccountCreate",
  data() {
    console.log(this.$route.params.id);
    return {
      success: false,
      data: {
        firstname: null,
        lastname: null,
        email: null,
        password: null,
        position: null,
        cellphone: null,
        postCompany: this.$route.params.id
      }
    }
  },
  methods: {
    postData(e) {
      e.preventDefault();
      a.createPostCompanyAccount(this.data).then((result) => {
        if (result.data[0] === "postCompanyAccount_ok") {
          this.success = true;
        }
      }).catch((error) => {
        console.log(error);
      });
    }
  }


}
</script>

<style scoped>

</style>
