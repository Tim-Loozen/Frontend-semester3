<script setup>
import {defineComponent} from "vue";
import UserItems from "@/components/dashboard/menu/userItems.vue";
import PostOfficeItems from "@/components/dashboard/menu/postOfficeItems.vue";
</script>
<template>
  <Token></Token>
  <div class=" col-2  py-2 ">
    <nav class="navbar  ">
            <div class="" v-if="user.postCompany == null">
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
        <ul v-if="token != null" class=" navbar-nav navbar-nav-scroll">
          <li class="nav-item mx-2">
            <a class="nav-link" href="/" onclick="localStorage.clear()">Uitloggen</a>
          </li>

        </ul>
      </div>


    </nav>
  </div>
</template>

<script>
import Token from "@/components/authentication/Token.vue";

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
