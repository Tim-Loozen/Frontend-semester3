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
    <li class="nav-item ms-1"><a class="nav-link" href="/dashboard/routes/create">Aanmaken</a></li>
    <li class="nav-item ms-1"><a class="nav-link" href="/dashboard/post-companies/routes/requests">Verzoeken</a></li>
    <li class="nav-item ms-1"><a class="nav-link" href="/dashboard/routes/requests">Historie</a></li>
    <li class="nav-item mt-1"><h5><b>Accounts</b></h5></li>
    <hr class="my-1">
    <li class="nav-item ms-1"><a class="nav-link" href="/dashboard/post-companies/accounts">Overzicht</a></li>
    <li class="nav-item ms-1"><a class="nav-link" href="/dashboard/post-companies/account/create/:id">Aanmaken</a></li>
  </ul>
</template>

<script>
export default {
  name: "postOfficeItems"
}
</script>

<style scoped>

</style>
