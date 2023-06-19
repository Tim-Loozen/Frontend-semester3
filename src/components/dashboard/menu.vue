<script setup>
import Token from "@/components/authentication/Token.vue";
import UserItems from "@/components/dashboard/menu/userItems.vue";
import PostOfficeItems from "@/components/dashboard/menu/postOfficeItems.vue";
import adminItems from "@/components/dashboard/menu/AdminItems.vue";
</script>
<template>
<Token></Token>

  <div v-if="user != null" class=" col-2 t  py-2 ">
<!--    <h6>{{user.firstname}}{{user.lastname}}</h6>-->
    <nav class="navbar  ">

            <div class="" v-if="user.postCompany === null && user.is_admin === false">
        <user-items></user-items>
      </div>
      <div class="" v-if="user.postCompany != null">
        <post-office-items></post-office-items>
        <ul v-if="token === null" class=" d-flex navbar-nav navbar-nav-scroll">
          <li class="nav-item mx-2">
            <a class="nav-link" href="/login">Login</a>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link" href="/register">Registreren</a>
          </li>
        </ul>
      </div>

      <div class="" v-if="user.is_admin === true">
        <adminItems></adminItems>
        <ul v-if="token === null" class=" d-flex navbar-nav navbar-nav-scroll">
          <li class="nav-item mx-2">
            <a class="nav-link" href="/login">Login</a>
          </li>
          <li class="nav-item mx-2">
            <a class="nav-link" href="/register">Registreren</a>
          </li>
        </ul>
      </div>


    </nav>
  </div>
</template>

<script>


export default {
  name: "menu",
  components: {Token},
  methods: {
    parseJwt(token) {
      if (token != null) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
          return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
      } else {
        return null;
      }
    }
  },

  data() {
    const user = this.parseJwt(localStorage.getItem('token'));
    return {user: user, token: localStorage.getItem('token')}
  },

}


</script>

<style scoped>

</style>
