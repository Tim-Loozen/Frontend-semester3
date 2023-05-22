<template>
  <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    <li class="nav-item">
      <a href="/dashboard" class="nav-link">Overzicht</a>
    </li>
  <li class="nav-item ">
    <a class="nav-link" href="/dashboard/routes">Routes Overzicht</a>
  </li>
  <li class="nav-item ">
    <a class="nav-link" href="/dashboard/routes/create">Routes Aanmaken</a>
  </li>
  <li class="nav-item ">
    <a class="nav-link" href="/dashboard/post-companies">Post bedrijven Overzicht</a>
  </li>
  <li class="nav-item ">
    <a class="nav-link" href="/dashboard/post-companies/create">Post bedrijf aanmaken</a>
  </li>
  <li class="nav-item ">
    <a class="nav-link" href="/dashboard/">Gebruikers Overzicht</a>
  </li>
  <h6 class="text-center bg-primary--blue py-2 text-white ">Statistieken</h6>
  <li class="nav-item ">
    <a class="nav-link" href="/dashboard/statistics">Statistieken</a>
  </li>
  </ul>

</template>

<script>
export default {
  name: "AdminItems"
}
</script>

<style scoped>

</style>
