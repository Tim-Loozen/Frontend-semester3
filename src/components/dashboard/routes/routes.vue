<template>
  <div class="card">
    <div class="card-header text-white bg-primary--blue">
      <p><b>beschikbare routes</b></p>
    </div>
    <div class="card-body">
      <nav class="navbar navbar-light bg-light">
        <form class="form-inline">
          <input class="form-control " type="search" placeholder="Search" aria-label="Search">
        </form>
      </nav>
      <table class="table table-striped">
        <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Afstand</th>
          <th scope="col">Opbrengst</th>
          <th scope="col">Wijk</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row">1</th>
          <td>2.0km</td>
          <td>50,-</td>
          <td>Strijp</td>
          <td>          <button type="button" class="btn btn-success">Bekijk route</button></td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>2.0km</td>
          <td>50,-</td>
          <td>Strijp</td>
          <td>          <button type="button" class="btn btn-success">Bekijk route</button></td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>2.0km</td>
          <td>50,-</td>
          <td>Strijp</td>
          <td>          <button type="button" class="btn btn-success">Bekijk route</button></td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>2.0km</td>
          <td>50,-</td>
          <td>Strijp</td>
          <td>          <button type="button" class="btn btn-success">Bekijk route</button></td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>2.0km</td>
          <td>50,-</td>
          <td>Strijp</td>
          <td>          <button type="button" class="btn btn-success">Bekijk route</button></td>
        </tr>
        <tr>
          <th scope="row">6</th>
          <td>2.0km</td>
          <td>50,-</td>
          <td>Strijp</td>
          <td>          <button type="button" class="btn btn-success">Bekijk route</button></td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>

</template>

<script>
export default {
  name: "routes"
}
</script>

<style scoped>

</style>
