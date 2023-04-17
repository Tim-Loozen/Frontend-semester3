<script setup>
import menuDashboard from "@/components/dashboard/menu.vue";
import Token from "@/components/authentication/Token.vue";
</script>
<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-2 bg-light">
        <menuDashboard></menuDashboard>
      </div>
      <div class="col-10">
        <form class="pt-5" @submit="postData" method="post">
          <div class="row ">
            <div class="form-group col-md-6">
              <label for="">Voornaam</label>
              <input type="text" v-model="data.firstname" name="firstname" class="form-control" id="Firstname"
                     placeholder="">
            </div>
            <div class="form-group col-md-6">
              <label for="">Achternaam</label>
              <input type="text"   v-model="data.lastname" class="form-control" id="Lastname" placeholder="">
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-6">
              <label for="">E-mail</label>
              <input type="email"  v-model="data.email" class="form-control" id="inputEmail" placeholder="">
            </div>
            <div class="form-group col-md-6">
              <label for="">Wachtwoord</label>
              <input  v-model="data.password" type="password" class="form-control" id="inputPassword" placeholder="">
            </div>
          </div>
          <div class="row">
            <div class="form-group col-md-6">
              <label for="">Positie in bedrijf</label>
              <input  v-model="data.position" type="text" class="form-control" id="position" placeholder="">
            </div>
            <div class="form-group col-md-6">
              <label for="">Telefoon nummer</label>
              <input  v-model="data.cellphone"  type="text" class="form-control" id="cellphone" placeholder="">
            </div>
          </div>
          <button type="submit" class="btn btn-primary my-2">Aanmaken</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import axios, {Axios} from "axios";
export default {
  name: "PostCompanyAccountCreate",
  data() {
    return {
      data: {
        firstname: null,
        lastname: null,
        email: null,
        password: null,
        position: null,
        cellphone: null,
      }
    }
  },
  methods: {
    postData(e) {
      e.preventDefault();
      axios.post("http://fontys_semester3_api.test/create_post_office_account", {
        firstname: this.data.firstname,
        lastname: this.data.lastname,
        email: this.data.email,
        position: this.data.position,
        cellphone: this.data.cellphone,
        password: this.data.password
      }).then((result) => {
        console.log(result.data);

      }).catch((error) => {
        console.log(error);
      })

    }
  }


}
</script>

<style scoped>

</style>
