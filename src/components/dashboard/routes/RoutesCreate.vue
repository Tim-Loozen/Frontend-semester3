<script setup>
import menuDashboard from "@/components/dashboard/menu.vue";
import Search from "@/components/dashboard/search.vue";


</script>

<template>

  <section class="bg-dashboard">
    <div class="container t">
      <div class="row">
        <menuDashboard></menuDashboard>
        <div class="col-10 px-5 py-2">
          <search></search>
          <div class="card box-shadow mb-5">
            <div class="card-header bg-light  py-3 px-3">
              <div class="row">
                <div class="col-12">
                  <h6>Route toevoegen</h6>
                </div>
              </div>
            </div>
            <div class="card-body">
              <div v-if="success" class="alert alert-success" role="alert">
                route is aangemaakt
              </div>
              <form class="" @submit="postData" method="POST">
                <div class="row ">
                  <div class="form-group col-md-6 my-1">
                    <label for=""><h6>Route afstand</h6></label>
                    <input v-model="data.distance" type="text" class="form-control" id="distance" placeholder="">
                  </div>
                  <div class="form-group col-md-6 my-1">
                    <label for=""><h6>Tijdsduur</h6></label>
                    <input v-model="data.time" type="text" class="form-control" id="time" placeholder="">
                  </div>
                </div>
                <div class="row">
                  <div class="form-group col-md-6 my-1">
                    <label for=""><h6>Start punt</h6></label>
                    <input v-model="data.startpoint" type="text" class="form-control" id="start" placeholder="">
                  </div>
                  <div class="form-group col-md-6 my-1">
                    <label for=""><h6>Eindpunt</h6></label>
                    <input v-model="data.endpoint" type="text" class="form-control" id="end" placeholder="">
                  </div>
                </div>
                <div class="form-group my-1">
                  <label for=""><h6>Obrengst</h6></label>
                  <input v-model="data.earnings" type="text" class="form-control" id="compensation" placeholder="">
                </div>
                <div class="form-group my-1">
                  <label for=""><h6>Description</h6></label>
                  <textarea v-model="data.description" type="text" class="form-control" id="description" placeholder="some information about this route...."></textarea>
                </div>
              <div class="my-4">
                <button type="submit" class="btn btn-primary ">Route aanmaken
                </button>
              </div>
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
import api from "@/utils/api";
const a = new api();

export default {
  name: "Route",
  data() {
    return {
      success: false,
      data: {
        distance: null,
        earnings: null,
        startpoint: null,
        description: null,
        endpoint: null,
        time: null,
      }
    }
  },
  methods: {
    postData(e) {
      e.preventDefault();
      a.createRoute(this.data).then((result) => {
        if(result.data[0] === "route_ok")
        {
          this.success = true;
        }
      }).catch((error) => {
        console.log(error);
      });

    }
  }
}
</script>

<style scoped>

</style>
