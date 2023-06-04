<template>
  <ul class="navbar-nav">
    <li class="nav-item mt-1"><h5><b>Overzicht</b></h5></li>
    <hr class="my-1">
    <li class="nav-item ms-1">  <a href="/dashboard" class="nav-link">Home</a></li>
    <li class="nav-item ms-1"> <a class="nav-link" href="/dashboard/statistics">Statistieken</a></li>
    <li class="nav-item mt-1"><h5><b>Routes</b></h5></li>
    <hr class="my-1">
    <li class="nav-item ms-1"><a class="nav-link" href="/dashboard/routes">Overzicht</a></li>
    <li class="nav-item ms-1"><a class="nav-link" href="/dashboard/routes/requests">Verzoeken</a></li>
    <li class="nav-item ms-1"><a class="nav-link" href="/dashboard/routes/history">Historie</a></li>
  </ul>

</template>

<script>
export default {
  name: "userItems"
}
</script>

<style scoped>

</style>
