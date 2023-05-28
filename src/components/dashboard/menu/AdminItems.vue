<template>
  <ul class="navbar-nav">
    <li class="nav-item mt-1"><h5><b>Overzicht</b></h5></li>
    <hr class="my-1">
    <li class="nav-item ms-1">  <a href="/dashboard" class="nav-link">Home</a></li>
    <li class="nav-item ms-1"> <a class="nav-link" href="/dashboard/earnings">Opbrengsten</a> </li>
    <li class="nav-item ms-1"> <a class="nav-link" href="/dashboard/statistics">Statistieken</a></li>
    <li class="nav-item mt-1"><h5><b>Routes</b></h5></li>
    <hr class="my-1">
    <li class="nav-item ms-1"><a class="nav-link" href="/dashboard/routes">Overzicht</a></li>
    <li class="nav-item mt-1"><h5><b>Accounts</b></h5></li>
    <hr class="my-1">
    <li class="nav-item ms-1"><a class="nav-link" href="/dashboard/post-companies/accounts">Overzicht</a></li>
    <li class="nav-item ms-1"><a class="nav-link" href="/dashboard/post-companies/account/create/:id">Aanmaken</a></li>
    <li class="nav-item mt-1"><h5><b>Post bedrijven</b></h5></li>
    <hr class="my-1">
    <li class="nav-item "><a class="nav-link" href="/dashboard/post-companies">Post bedrijven Overzicht</a></li>
    <li class="nav-item "> <a class="nav-link" href="/dashboard/post-companies/create">Post bedrijf aanmaken</a>    </li>
  </ul>
</template>

<script>
export default {
  name: "AdminItems"
}
</script>

<style scoped>

</style>
