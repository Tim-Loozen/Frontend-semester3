<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col-6">
          <div class="card">
            <div class="card-header">
              <h6>MFA Code</h6>
              <div class="card-body">
                <form method="POST" @submit="verifyMfa">
                  <div class="form-group">
                    <label for="">MFA Code</label>
                    <input type="text" v-model="MFAVerify.input" name="code" class="form-control" id="code"
                           placeholder="">
                    <button type="submit" class="btn btn-primary my-2">Versturen</button>
                  </div>
                </form>
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
  name: "MFA",
  data() {
    return {
      MFAVerified: false,
      MFAVerify: {
        input: null,
        key: null
      }
    }
  },
  methods: {
    verifyMfa(e) {
      e.preventDefault();
      a.postMFAVerify(this.MFAVerify).then(response => {
            this.data = response.data
            console.log(this.data);
            if (this.data[1] === "verify_ok") {
              window.location.href = "/dashboard"
            } else {

            }


          }
      )
    }
  }
}
</script>

<style scoped>

</style>
