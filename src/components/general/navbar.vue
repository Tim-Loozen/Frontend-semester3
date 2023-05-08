<template>
  <nav class="px-3 navbar navbar-expand-lg navbar-light bg-light">

    <div class="container-fluid">
            <a href="/"><img src="/Logo.png" style="width: auto;" height="75" alt=""></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll"
              aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarScroll">
        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">

      </ul>
        <ul v-if="token === null" class=" d-flex navbar-nav navbar-nav-scroll">
          <li class="nav-item">
            <a class="nav-link" href="/login">Login</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/register">Registreren</a>
          </li>
        </ul>
        <ul v-if="token != null" class=" d-flex navbar-nav navbar-nav-scroll">
          <li class="nav-item">
            <a class="nav-link" href="/" onclick="localStorage.clear()">Uitloggen</a>
          </li>

        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "navbar",
  data()
  {
    return {token: localStorage.getItem('token')}
  }
}


</script>

<style scoped>

</style>
