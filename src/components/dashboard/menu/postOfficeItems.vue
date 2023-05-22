<template>
  <ul class="navbar-nav ">
    <li class="nav-item">
      <a href="/dashboard" class="nav-link">Overzicht</a>
    </li>
  <li class="nav-item dropdown mx-2">
    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
       aria-expanded="false">
      Routes
    </a>
    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
      <li><a class="dropdown-item" href="/dashboard/routes">Overzicht</a></li>
      <li><a class="dropdown-item" href="/dashboard/routes/create">Aanmaken</a></li>
      <li><a class="dropdown-item" href="/dashboard/post-companies/routes/requests">Verzoeken</a></li>
    </ul>
  </li>

  <li class="nav-item dropdown mx-2">
    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
       aria-expanded="false">
      Accounts
    </a>
    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
      <li><a class="dropdown-item" href="/dashboard/post-companies/accounts">Overzicht</a></li>
      <li><a class="dropdown-item" href="/dashboard/post-companies/account/create/:id">Aanmaken</a></li>
    </ul>
  </li>

  <li class="nav-item mx-2 ">
    <a class="nav-link" href="/dashboard/earnings">Opbrengsten</a>
  </li>

  <li class="nav-item mx-2 ">
    <a class="nav-link" href="/dashboard/statistics">Statistieken</a>
  </li>
  </ul>
</template>

<script>
export default {
  name: "postOfficeItems"
}
</script>

<style scoped>

</style>
