<script setup>
import menuDashboard from "@/components/dashboard/menu.vue";

</script>
<template>

  <section class="">
    <div class="container-fluid">
      <div class="row">
        <div class="col-2 bg-light">
          <menuDashboard></menuDashboard>
        </div>
        <div class="col-10 px-5 py-5">
          <div class="row " id="app" v-for="item in getData">
            <div class="col-6">
              <h2>Beschrijving</h2>
              <hr>
              <p>{{item.description}}</p>
              <h2>Overzicht</h2>
              <hr>
              <ul>
                <li>Werkgever:{{item.postOffice}}</li>
                <li>Opbrengst:{{item.earnings}}</li>
                <li>Afstand:{{item.distance}}</li>
              </ul>
              <hr>
              <button @click="showDialog" type="button" id="myBtn" class="btn btn-primary">Aanmelden voor route</button>
              <dialog id="dialog" style="margin:auto;">
                <div v-if="success" class="alert alert-success" role="alert">
                  Verzoek is verzonden
                </div>
                <h5>Aanmelden voor de route</h5>
                <p>Weet je zeker dat je je wilt aanmelden voor deze route?</p>
                <form @submit="postData" method="post">
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1"
                           placeholder="name@example.com" :value="u.email" disabled>
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                    <textarea v-model="postRequestData.description" class="form-control" id="exampleFormControlTextarea1" rows="3">
                      Beste,
                      Ik ben geintresseerd in uw route. Ik verneem graag van u.
                    </textarea>
                  </div>
                  <button type="submit">Ja</button>
                  <button>Nee</button>
                </form>
              </dialog>
            </div>
            <div class="col-6">
              <h2>Kaart</h2>
              <hr>
              <div class="py-2">
                <img src="/mapsStock.png" width="100%" height="100%" alt="">
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>


<script>
import user from "@/utils/user";
import api from "@/utils/api";
const a = new api();

export default {
  name: "route",
  data() {
    return {
      success: false,
      u: user.getUser(),
      getData: [],
      data: [],
      postRequestData:{
        postRouteId:  this.$route.params.id,
        description: null
      }
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
        if(result.data[0] === "request_ok")
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
