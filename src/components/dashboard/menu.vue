<template>
  <Token></Token>
  <div class="" v-if="user.postCompany != null || user.is_admin">
    <h6 class="text-center bg-primary--blue py-2 text-white ">Post bedrijven</h6>
    <ul class="dashboard-menu navbar-nav text-start border-top ">

      <li class="nav-item border-bottom">
        <a class="nav-link" href="/dashboard/routes">Routes Overzicht</a>
      </li>
      <li class="nav-item border-bottom">
        <a class="nav-link" href="/dashboard/routes/requests">Verzoeken</a>
      </li>
      <li class="nav-item border-bottom">
        <a class="nav-link" href="/dashboard/routes/create">Routes Aanmaken</a>
      </li>
      <li class="nav-item border-bottom">
        <a class="nav-link" href="/dashboard/earnings">Opbrengsten</a>
      </li>
      <li class="nav-item border-bottom">
        <a class="nav-link" href="/dashboard/statistics">Statistieken</a>
      </li>
    </ul>
  </div>
  <div class="" v-if="user.postCompany == null">
  <h6 class="text-center bg-primary--blue py-2 text-white ">Zzp</h6>
  <ul class="dashboard-menu navbar-nav text-start border-top ">
    <li class="nav-item border-bottom">
      <a class="nav-link" href="/dashboard/routes">Routes Overzicht</a>
    </li>
    <li class="nav-item border-bottom">
      <a class="nav-link" href="/dashboard/routes/requests">Mijn verzoeken</a>
    </li>
    <li class="nav-item border-bottom">
      <a class="nav-link" href="/dashboard/earnings">Opbrengsten Overzicht</a>
    </li>
  </ul>
  </div>
  <div class="" v-if="user.is_admin">
  <h6 class="text-center bg-primary--blue py-2 text-white ">beheerders</h6>
  <ul class="dashboard-menu navbar-nav text-start border-top ">

    <li class="nav-item border-bottom">
      <a class="nav-link" href="/dashboard/routes">Routes Overzicht</a>
    </li>
    <li class="nav-item border-bottom">
      <a class="nav-link" href="/dashboard/routes/create">Routes Aanmaken</a>
    </li>
    <li class="nav-item border-bottom">
      <a class="nav-link" href="/dashboard/post-companies">Post bedrijven Overzicht</a>
    </li>
    <li class="nav-item border-bottom">
      <a class="nav-link" href="/dashboard/post-companies/create">Post bedrijf aanmaken</a>
    </li>
    <li class="nav-item border-bottom">
      <a class="nav-link" href="/dashboard/">Gebruikers Overzicht</a>
    </li>
  </ul>
  </div>
  <h6 class="text-center bg-primary--blue py-2 text-white ">Statistieken</h6>
  <ul class="dashboard-menu navbar-nav text-start border-top ">

    <li class="nav-item border-bottom">
      <a class="nav-link" href="/dashboard/statistics">Statistieken</a>
    </li>
  </ul>

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
    return {user: user}
  },

}


</script>

<style scoped>

</style>
