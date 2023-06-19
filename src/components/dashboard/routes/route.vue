<script setup>
import menuDashboard from "@/components/dashboard/menu.vue";
import Search from "@/components/dashboard/search.vue";
</script>
<template>

  <section class="bg-dashboard t">
    <div class="container " id="app" v-for="item in getData">
      <div class="row">
        <menuDashboard></menuDashboard>
        <div class="col-10 px-5 py-2">
          <search></search>
          <div class="row mb-4 ">
            <div class="col-6">
              <div class="card">
                <div class="card-header">
                  <h6>Beschrijving</h6>
                </div>
                <div class="card-body">
                  <p>{{ item.description }}</p>
                </div>
              </div>
              <div class="card my-4">
                <div class="card-header">
                  <h6>Overzicht</h6>
                </div>
                <div class="card-body">
                  <ul>
                    <li>Werkgever:{{ item.postOffice }}</li>
                    <li>Opbrengst:{{ item.earnings }}</li>
                    <li>Afstand:{{ item.distance }}</li>
                  </ul>
                </div>
              </div>
              <button @click="showDialog" type="button" id="myBtn" class="btn btn-primary my-4">Aanmelden voor route
              </button>
            </div>
            <div class="col-6">
              <div class="card">
                <div class="card-header">
                  <h6>Kaart</h6>
                </div>
                <div class="card-body">
                  <div style="height:600px; width:100%">
                    <l-map :use-global-leaflet="false" ref="map" v-model:zoom="zoom" :center="[47.41322, -1.219482]">
                      <l-tile-layer
                          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                          layer-type="base"
                          name="OpenStreetMap"
                      ></l-tile-layer>
                    </l-map>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <dialog id="dialog" style="margin:auto;">
                <div v-if="success" class="alert alert-success" role="alert">
                  Verzoek is verzonden
                </div>
                <h6>Aanmelden voor de route</h6>
                <p>Weet je zeker dat je je wilt aanmelden voor deze route?</p>
                <form @submit="postData" method="post">
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1"
                           placeholder="name@example.com" :value="u.email" disabled>
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                    <textarea v-model="postRequestData.description" class="form-control"
                              id="exampleFormControlTextarea1"
                              rows="3">
                      Beste,
                      Ik ben geintresseerd in uw route. Ik verneem graag van u.
                    </textarea>
                  </div>
                  <button type="submit">Ja</button>
                </form>
            <button type="">Nee</button>
          </dialog>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import "leaflet/dist/leaflet.css"
import user from "@/utils/user";
import api from "@/utils/api";
import {LMap, LTileLayer} from "@vue-leaflet/vue-leaflet";

const a = new api();

export default {
  name: "route",
  components: {
    LMap,
    LTileLayer,
  },
  data() {
    return {
      zoom: 10,
      success: false,
      u: user.getUser(),
      getData: [],
      data: [],
      postRequestData: {
        postRouteId: this.$route.params.id,
        description: null
      },
    }
  },
  created() {
    a.getPostRoute(this.$route.params.id).then(response => {
      this.getData = response.data
      console.log(this.getData);
    })
  },
  methods: {
    showDialog() {
      document.getElementById('dialog').showModal();
    },
    postData(e) {
      e.preventDefault();
      a.createPostRequest(this.postRequestData).then((result) => {
        if (result.data[0] === "request_ok") {
          this.success = true;
        }
      }).catch((error) => {
        console.log(error);
      });
    },

  }
}
</script>

<style scoped>

</style>
