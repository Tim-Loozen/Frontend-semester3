<script setup>
import menuDashboard from "@/components/dashboard/menu.vue";
import Token from "@/components/authentication/Token.vue";

</script>

<template>
  <Token></Token>
<section class="">
  <div class="container-fluid">
    <div class="row">
      <div class="col-2 bg-light">
        <menuDashboard></menuDashboard>
      </div>
      <div class="col-10 px-5 py-5">
        <div class="card">
          <div class="card-header bg-primary--blue">
            <p class="text-white"><b>Route toevoegen</b></p>
          </div>
          <div class="card-body">
            <form class="" @submit="postData" method="POST">
              <div class="row ">
                <div class="form-group col-md-6">
                  <label for="">Route afstand</label>
                  <input v-model="data.distance" type="text" class="form-control" id="distance" placeholder="">
                </div>
                <div class="form-group col-md-6">
                  <label for="">Tijdsduur</label>
                  <input v-model="data.time" type="text" class="form-control" id="time" placeholder="">
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="">Start punt</label>
                  <input v-model="data.startpoint" type="text" class="form-control" id="start" placeholder="">
                </div>
                <div class="form-group col-md-6">
                  <label for="">Eindpunt</label>
                  <input v-model="data.endpoint" type="text" class="form-control" id="end" placeholder="">
                </div>
              </div>
                <div class="input-group mb-3">
                  <label class="d-block w-100 text-start" for="">Google maps</label>
                      <input class="" type="checkbox" aria-label="Checkbox for following text input">
                </div>
                <div class="form-group">
                  <label for="">Obrengst</label>
                  <input v-model="data.earnings" type="text" class="form-control" id="compensation" placeholder="">
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
import axios from "axios";

export default {
  name: "Route",
  data() {
    return {
      data: {
        distance: null,
        earnings: null,
        startpoint: null,
        endpoint: null,
        time: null,
      }
    }
  },
  methods: {
    postData(e) {
      e.preventDefault();
      axios.post("http://fontys_semester3_api.test:81/create-route", {
      distance: this.data.distance,
      earnings: this.data.earnings,
      startpoint: this.data.startpoint,
      endpoint: this.data.endpoint,
      time: this.data.time,

      }).then((result) => {
        console.log(result.data);

      }).catch((error) => {
        console.log(error);
      })

    }
  }
}
</script>

<style scoped>

</style>
