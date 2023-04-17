<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="offset-3 col-6 my-5">
          <div class="text-center">
            <h1>Login</h1>
            <hr>
          </div>
          <form @submit="postData" method="POST">
            <div class="form-group">
              <label for="exampleInputEmail1">E-mail adres</label>
              <input type="email" v-model="posts.email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="E-mail">
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Wachtwoord</label>
              <input type="password" v-model="posts.password" class="form-control" id="exampleInputPassword1" placeholder="Wachtwoord">
            </div>
            <button type="submit" class="btn btn-primary my-2">Login</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import axios, {Axios} from "axios";
export default {
  name: "login",
  data() {
    return {
      posts: {
        email: null,
        password: null,
      }
    }
  },
  methods: {
    postData(e) {
      e.preventDefault();
      axios.post("http://fontys_semester3_api.test/login", {
        email: this.posts.email,
        password: this.posts.password,
      }).then((result) => {
        console.log(result.data[0]);
        localStorage.setItem("token", result.data[0]);
        if(localStorage.getItem("token") === "User is not logged in")
        {
          window.location.href = '/login'
        }else {
          window.location.href = '/dashboard'
        }
      }).catch((error) => {
        console.log(error);
      })

    }
  }


}
</script>
<style scoped>

</style>
