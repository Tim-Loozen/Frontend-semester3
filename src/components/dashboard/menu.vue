<template>
  <h6 class="text-center bg-primary--blue py-2 text-white ">Post bedrijven</h6>
    <ul class="dashboard-menu navbar-nav text-start border-top ">

      <li class="nav-item border-bottom">
        <a class="nav-link" href="/dashboard/routes">Routes Overzicht</a>
      </li>
      <li class="nav-item border-bottom">
        <a class="nav-link" href="/dashboard/routes/create">Routes Aanmaken</a>
      </li>
      <li  class="nav-item border-bottom">
        <a class="nav-link" href="/dashboard/earnings">Opbrengsten</a>
      </li>
      <li  class="nav-item border-bottom">
        <a class="nav-link" href="/dashboard/statistics">Statistieken</a>
      </li>
    </ul>

  <h6 class="text-center bg-primary--blue py-2 text-white ">Zzp</h6>
  <ul class="dashboard-menu navbar-nav text-start border-top ">
    <li class="nav-item border-bottom">
      <a class="nav-link" href="/dashboard/routes">Routes Overzicht</a>
    </li>
    <li  class="nav-item border-bottom">
      <a class="nav-link" href="/dashboard/earnings">Opbrengsten Overzicht</a>
    </li>
  </ul>
  <h6 class="text-center bg-primary--blue py-2 text-white ">beheerders</h6>
  <ul class="dashboard-menu navbar-nav text-start border-top ">

    <li class="nav-item border-bottom">
      <a class="nav-link" href="/dashboard/routes">Routes Overzicht</a>
    </li>
    <li class="nav-item border-bottom">
      <a class="nav-link" href="/dashboard/routes/create">Routes Aanmaken</a>
    </li>
    <li  class="nav-item border-bottom">
      <a class="nav-link" href="/dashboard/post-companies">Post bedrijven Overzicht</a>
    </li>

    <li  class="nav-item border-bottom">
      <a class="nav-link" href="/dashboard/post-companies">Gebruikers Overzicht</a>
    </li>
  </ul>
  <h6 class="text-center bg-primary--blue py-2 text-white ">Statistieken</h6>
  <ul class="dashboard-menu navbar-nav text-start border-top ">

    <li class="nav-item border-bottom">
      <a class="nav-link" href="/dashboard/statistics">Statistieken</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "menu"
}
</script>

<style scoped>

</style>
