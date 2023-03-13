<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="offset-3 col-6 my-5">
          <div class="text-center">
            <h1>Login</h1>
            <hr>
          </div>
          <form>
            <div class="form-group">
              <label for="exampleInputEmail1">E-mail adres</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="E-mail">
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Wachtwoord</label>
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Wachtwoord">
            </div>
            <button type="submit" class="btn btn-primary my-2">Login</button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "login"
}
</script>

<style scoped>

</style>
