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
  name: "enableMFA",
  data() {
    return {
      MfaEnabled: false,
      succes: false,
      data: [],
      MFAVerify: {
        input: null,
        key: null
      }
    }
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
