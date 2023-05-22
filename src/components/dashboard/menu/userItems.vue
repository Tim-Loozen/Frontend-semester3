<template>
  <ul class="navbar-nav">
    <li class="nav-item">
      <a href="/dashboard" class="nav-link">Overzicht</a>
    </li>
  <li class="nav-item dropdown">
    <ul class="dashboard-menu navbar-nav text-start">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
         aria-expanded="false">
        Routes
      </a>
      <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
        <li><a class="dropdown-item" href="/dashboard/routes">Overzicht</a></li>
        <li><a class="dropdown-item" href="/dashboard/routes/create">Aanmaken</a></li>
        <li><a class="dropdown-item" href="/dashboard/routes/requests">Verzoeken</a></li>
      </ul>
    </ul>
  </li>

  <li class="nav-item ">
    <a class="nav-link" href="/dashboard/earnings">Opbrengsten</a>
  </li>

  <li class="nav-item ">
    <a class="nav-link" href="/dashboard/statistics">Statistieken</a>
  </li>
  </ul>
</template>

<script>
export default {
  name: "userItems"
}
</script>

<style scoped>

</style>
