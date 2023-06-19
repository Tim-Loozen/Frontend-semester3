<script setup>
import menuDashboard from "@/components/dashboard/menu.vue";

</script>
<template>
  <section class="bg-dashboard ">
    <div class="container ">
      <div class="row">
        <div class="col-2">
          <menuDashboard></menuDashboard>
        </div>
        <div class="col-10 px-5 py-5">

          <div class="row">
            <div class="col-6">
              <div v-if="success" class="alert alert-success t" role="alert">
                Verzoek is verzonden
              </div>
              <div class="card">
                <div class="card-header ">
                  <h6>Instellingen</h6>
                </div>
                <div class="card-body" id="app" v-for="item in userData">
                  <form  @submit="" action="" METHOD="post">
                    <h5 class="py-1">Algemeen</h5>
                    <hr>
                    <div class="row">
                      <div class="form-group col-md-6">
                        <label for="">Voornaam</label>
                        <input type="text" class="form-control" id="voornaam" v-model="item.firstname" :placeholder="item.firstname">
                      </div>
                      <div class="form-group col-md-6">
                        <label for="">Achternaam</label>
                        <input type="text" class="form-control" v-model="item.lastname" :placeholder="item.lastname">
                      </div>
                      <div class="form-group col-md-6">
                        <label for="">E-mail</label>
                        <input type="email" class="form-control" v-model="item.email" :placeholder="item.email">
                      </div>
                      <div class="form-group col-md-6">
                        <label for="">Wachtwoord</label>
                        <input type="email" class="form-control" id="voornaam" placeholder="">
                      </div>
                    </div>
                    <h5 class="py-1">Adres</h5>
                    <hr>
                    <div class="row">
                      <div class="form-group col-md-6">
                        <label for="">Adres</label>
                        <input type="email" class="form-control" id="voornaam" placeholder="">
                      </div>
                      <div class="form-group col-md-6">
                        <label for="">Stad</label>
                        <input type="email" class="form-control" id="voornaam" placeholder="">
                      </div>

                    </div>
                    <div class="row">
                      <div class="form-group col-md-6">
                        <label for="">Provincie</label>
                        <input type="email" class="form-control" id="voornaam" placeholder="">
                      </div>
                      <div class="form-group col-md-6">
                        <label for="">Postcode</label>
                        <input type="email" class="form-control" id="voornaam" placeholder="">
                      </div>

                      <div class="row">
                        <h5 class="py-1">Bedrijf</h5>
                        <hr>
                        <div class="form-group col-md-12">
                          <label for="">Bedrijfsnaam</label>
                          <input type="email" class="form-control" id="voornaam" placeholder="">
                        </div>
                        <div class="form-group col-md-12">
                          <label for="">Kvk</label>
                          <input type="email" class="form-control" id="voornaam" placeholder="">
                        </div>
                      </div>
                      <div class="py-2">
                        <button type="submit" class="btn btn-success">Opslaan</button>
                      </div>
                    </div>
                  </form>
                </div>

              </div>
            </div>
            <div class="col-6">
              <div class="card">
                <div class="card-header ">
                  <h6>Profiel foto</h6>
                </div>
                <div class="card-body">
                  <div class="text-center">
                    <img src="/public/istockphoto-1337144146-612x612.jpg" width="50%" height="50%" alt="">
                  </div>
                  <button type="button" class="btn btn-success">Nieuwe foto</button>
                </div>
              </div>
            </div>
          </div>
          <div class="row my-4">
            <div class="col-12">
              <div class="card">
                <div class="card-header">
                  <h6>2 Factor auth</h6>
                </div>
                <div class="card-body">
                  <button class="btn btn-primary" @click="enableMFa()">2fa aanzetten</button>
                  <div class="" v-if="MfaEnabled">
                    <div class="row my-5">
                      <div class="col-6"><img :src="`${data[2]}`" alt="" style="height: 300px; width: 300px;"></div>
                      <div class="col-6">
                        <form @submit="verifyMfa" action="post">
                          <label class="form-group" for="">Code
                            <input v-model="MFAVerify.input" type="text" class="form-control">
                          </label>
                          <button type="submit" class="btn btn-primary my-2">Versturen</button>
                        </form>

                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import api from "@/utils/api";

const a = new api();
export default {
  name: "settings",
  data() {
    return {
      MfaEnabled: false,
      succes: false,
      data: [],
      id: this.$route.params.id,
      userData:[],
      MFAVerify: {
        input: null,
        key: null
      }
    }
  },
  created() {
    a.getUserinformation(this.id).then(response => {
      this.userData = response.data
      console.log(this.userData)
    });
  },
  methods:
      {
        enableMFa() {
          a.GetMFaCreate().then(response => {
            this.data = response.data
            console.log(this.data);

            if (response.data[0] === "MFa_enabled") {
              this.MfaEnabled = true;
              this.MFAVerify.key = response.data[1];
            }

          })
        },
        verifyMfa(e) {
          e.preventDefault();
          a.postMFAVerify(this.MFAVerify).then(response => {
            this.data = response.data
            console.log(data);
          })
        }
      }
}
</script>

<style scoped>

</style>
