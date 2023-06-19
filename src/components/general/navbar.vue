<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light py-3 t ">
    <div class="container">
    <ul v-if="token === null" class=" navbar-nav navbar-nav-scroll text-center">
      <li class="nav-item mx-2">
        <a class="nav-link" href="/">Home</a>
      </li>
      <li class="nav-item mx-2">
        <a class="nav-link" href="/login">Login</a>
      </li>
      <li class="nav-item mx-2">
        <a class="nav-link" href="/register">Registreren</a>
      </li>
    </ul>
    <ul v-if="token != null" class=" navbar-nav navbar-nav-scroll">
      <li class="nav-item mx-2">
        <a class="nav-link" href="/dashboard">Dashboard</a>
      </li>
    </ul>
    </div>
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
