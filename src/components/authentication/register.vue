<template>
  <navbar></navbar>
  <section class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="text-center">
            <h1>Registreren!</h1>
            <hr>
            <div v-if="success" class="alert alert-success" role="alert">
              Registratie is succesvol
            </div>
          </div>
          <form class="pt-5" @submit="postData" method="post">
            <div class="row ">
              <div class="form-group col-md-6">
                <label for="">Voornaam</label>
                <input type="text" v-model="posts.firstname" name="firstname" class="form-control" id="voornaam"
                       placeholder="">
              </div>
              <div class="form-group col-md-6">
                <label for="">Achternaam</label>
                <input type="text" v-model="posts.lastname" class="form-control" id="Achternaam" placeholder="">
              </div>
            </div>
            <div class="row">
              <div class="form-group col-md-6">
                <label for="">E-mail</label>
                <input v-model="posts.email" type="email" class="form-control" id="inputEmail4" placeholder="">
              </div>
              <div class="form-group col-md-6">
                <label for="">Wachtwoord</label>
                <input v-model="posts.password" type="password" class="form-control" id="inputPassword4" placeholder="">
              </div>
            </div>
            <div class="form-group">
              <label for="inputAddress">Adres</label>
              <input v-model="posts.address" type="text" class="form-control" id="inputAddress" placeholder="">
            </div>
            <div class="row">
              <div class="form-group col-md-6">
                <label for="inputCity">Stad</label>
                <input v-model="posts.city" type="text" class="form-control" id="inputCity">
              </div>
              <div class="form-group col-md-4">
                <label for="inputState">Provincie</label>
                <input v-model="posts.state" type="text" class="form-control" id="inputState">
              </div>
              <div class="form-group col-md-2">
                <label for="inputZip">Postcode</label>
                <input v-model="posts.zipcode" type="text" class="form-control" id="inputZip">
              </div>
            </div>
            <div class="row">
              <div class="form-group col-md-6">
                <label for="inputCompany">Naam bedrijf</label>
                <input v-model="posts.company" type="text" class="form-control" id="inputCompany" placeholder="">
              </div>
              <div class="form-group col-md-6">
                <label for="inputKvk">kvk nummer</label>
                <input v-model="posts.kvk" type="text" class="form-control" id="inputKvk" placeholder="">
              </div>
            </div>


            <button type="submit" class="btn btn-primary my-2">Registreren</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import axios, {Axios} from "axios";
import api from "@/utils/api";
import Navbar from "@/components/general/navbar.vue";
const  a = new api();
export default {
  name: "register",
  components: {Navbar},
  data() {
    return {
      success: false,
      posts: {
        firstname: null,
        lastname: null,
        email: null,
        password: null,
        address: null,
        city: null,
        state: null,
        zipcode: null,
        company: null,
        kvk: null
      }
    }
  },
  methods: {
    postData(e) {
      e.preventDefault();
     a.createUser(this.posts).then((result) => {
       if(result.data[0] === "register_ok")
       {
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
