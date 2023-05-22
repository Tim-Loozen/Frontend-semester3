<script setup>
import menuDashboard from "@/components/dashboard/menu.vue";

</script>
<template>
  <menuDashboard></menuDashboard>
  <div class="container-fluid">
    <div class="row">

      <div class="col-12 px-5 py-5">
        <div class="card bg-light box-shadow ">
          <div class="card-header text-white bg-primary--blue">
            <div class="row">
              <div class="col-10"><p><b>Account aanmaken</b></p></div>

            </div>
          </div>
          <div class="card-body">
            <div v-if="success" class="alert alert-success" role="alert">
              account voor postbedrijf is aangemaakt
            </div>
            <form class="" @submit="postData" method="post">
              <div class="row ">
                <div class="form-group col-md-6">
                  <label for="">Voornaam</label>
                  <input type="text" v-model="data.firstname" name="firstname" class="form-control" id="Firstname"
                         placeholder="">
                </div>
                <div class="form-group col-md-6">
                  <label for="">Achternaam</label>
                  <input type="text" v-model="data.lastname" class="form-control" id="Lastname" placeholder="">
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="">E-mail</label>
                  <input type="email" v-model="data.email" class="form-control" id="inputEmail" placeholder="">
                </div>
                <div class="form-group col-md-6">
                  <label for="">Wachtwoord</label>
                  <input v-model="data.password" type="password" class="form-control" id="inputPassword" placeholder="">
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="">Positie in bedrijf</label>
                  <input v-model="data.position" type="text" class="form-control" id="position" placeholder="">
                </div>
                <div class="form-group col-md-6">
                  <label for="">Telefoon nummer</label>
                  <input v-model="data.cellphone" type="text" class="form-control" id="cellphone" placeholder="">
                </div>
              </div>
              <button type="submit" class="btn btn-primary my-2">Aanmaken</button>
            </form>
          </div>
        </div>

      </div>
    </div>
  </div>
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
