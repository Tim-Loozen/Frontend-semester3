<template>
  <section class="py-5">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="text-center">
            <h1>Registreren</h1>
            <hr>
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
                <select v-model="posts.state" id="inputState" class="form-control">
                  <option selected>Kies...</option>
                  <option>...</option>
                </select>
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
                <input v-model="posts.number" type="text" class="form-control" id="inputKvk" placeholder="">
              </div>
            </div>

            <div class="form-group">
              <label for="inputCompanyType">Zzp / Post bedrijf</label>
              <select id="inputCompanyType" class="form-control">
                <option selected>Kies...</option>
                <option>Limburg</option>
                <option>Noord-brabant</option>
              </select>
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

export default {
  name: "register",
  data() {
    return {
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
        number: null
      }
    }
  },
  methods: {
    postData(e) {
      // const token = localStorage.getItem("token");

      axios.post("http://fontys_semester3_api.test/register", {
        firstname: this.posts.firstname,
        lastname: this.posts.lastname,
        email: this.posts.email,
        password: this.pots.password,
        address: this.posts.address,
        city: this.posts.city,
        state: this.posts.state,
        zipcode: this.posts.zipcode,
        company: this.posts.company,
        number: this.post.number
      }, {
        Authorization: 'Bearer ' + token,
        'x-access-token': token
      })
          .then((result) => {
            console.log(token);
            console.log(result);
          })
          .catch((error) => {
            console.log(token);
            console.log(error);
          })
      e.preventDefault();
    }
  }
}

</script>

<style scoped>

</style>
