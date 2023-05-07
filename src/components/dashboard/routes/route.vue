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
          <div class="row ">
            <div class="col-6">
              <h2>Beschrijving</h2>
              <hr>
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
                Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a
                Lorem
                Ipsum passage, and going through the cites of the word in classical literature, discovered the
                undoubtable
                source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The
                Extremes
                of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very
                popular
                during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
                in
                section 1.10.32.</p>
              <h2>Overzicht</h2>
              <hr>
              <ul>
                <li>Werkgever:</li>
                <li>Opbrengst:</li>
                <li>Afstand:</li>
              </ul>
              <hr>
              <button @click="showDialog" type="button" id="myBtn" class="btn btn-primary">Aanmelden voor route</button>
              <dialog id="dialog" style="margin:auto;">
                <h5>Aanmelden voor de route</h5>
                <p>Weet je zeker dat je je wilt aanmelden voor deze route?</p>
                <form action="">
                  <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1"
                           placeholder="name@example.com" :value="u.email" disabled>
                  </div>
                  <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3">
                      Beste,
                      Ik ben geintresseerd in uw route. Ik verneem graag van u.
                    </textarea>
                  </div>
                  <button>Ja</button>
                  <button>Nee</button>
                </form>
              </dialog>
            </div>
            <div class="col-6">
              <h2>Map</h2>
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

var name = "";

import api from "@/utils/api";
const a = new api();

export default {
  name: "route",
  methods: {
    showDialog() {
      document.getElementById('dialog').showModal();
    }
  },

  data() {
    return {
      u: user.getUser(),
      data: []
    }
  },
  created() {

    a.getPostRoute(this.$route.params.id).then(response => {
      this.data = response.data[0]
      console.log(this.data);
    })
  }
}
</script>

<style scoped>

</style>
