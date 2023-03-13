<template>
<section class="py-5">
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header bg-primary--blue">
            <p class="text-white"><b>Route toevoegen</b></p>
          </div>
          <div class="card-body">
            <form class="">
              <div class="row ">
                <div class="form-group col-md-6">
                  <label for="">Route afstand</label>
                  <input type="email" class="form-control" id="voornaam" placeholder="">
                </div>
                <div class="form-group col-md-6">
                  <label for="">Selecteer een wijk</label>
                  <select id="inputState" class="form-control">
                    <option selected>Kies...</option>
                    <option>...</option>
                  </select>
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="">Selecteer van welk post bedrijf</label>
                  <select id="inputState" class="form-control">
                    <option selected>Kies...</option>
                    <option>...</option>
                  </select>
                </div>
                <div class="form-group col-md-6">
                  <label for="">Opbrengst</label>
                  <input type="password" class="form-control" id="inputPassword4" placeholder="">
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="">Start punt</label>
                  <input type="password" class="form-control" id="inputPassword4" placeholder="">
                </div>
                <div class="form-group col-md-6">
                  <label for="">Eindpunt</label>
                  <input type="password" class="form-control" id="inputPassword4" placeholder="">
                </div>
                <div class="input-group mb-3">
                  <label for="">Google maps</label>
                      <input type="checkbox" aria-label="Checkbox for following text input">
                </div>

              </div>

              <button type="submit" class="btn btn-primary my-2">Route aanmaken
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: "Route"
}
</script>

<style scoped>

</style>
