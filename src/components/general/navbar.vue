<template>
  <nav class="navbar">
    <ul v-if="token === null" class=" navbar-nav navbar-nav-scroll">
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
  </nav>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {token: localStorage.getItem('token')}
  }
}


</script>

<style scoped>

</style>
