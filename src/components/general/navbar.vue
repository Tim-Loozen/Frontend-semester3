<template>
  <nav class="px-3 navbar navbar-expand-lg navbar-light bg-light">
    <img src="/Logo.png" style="width: auto;" height="75" alt="">
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link active" href="/">Home <span class="sr-only"></span></a>
        <a class="nav-item nav-link" href="/register">Register</a>
        <a class="nav-item nav-link" href="/login">Login</a>
        <a class="nav-item nav-link" href="/dashboard">Dashboard</a>
        <a class="nav-item nav-link" href="/dashboard/admin">Admin</a>
        <div class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Routes
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/dashboard/routes">Bekijk routes</a></li>
            <li><a class="dropdown-item" href="/dashboard/add-route">route aanmaken</a></li>
          </ul>
        </div>
        <div class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Wijken
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Bekijk Wijken</a></li>
            <li><a class="dropdown-item" href="#">Wijk aanmaken</a></li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar"
}
</script>

<style scoped>

</style>
