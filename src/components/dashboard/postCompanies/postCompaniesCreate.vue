<script setup>
import menuDashboard from "@/components/dashboard/menu.vue";
import Search from "@/components/dashboard/search.vue";

</script>
<template>
  <section class="bg-dashboard t">
    <div class="container">
      <div class="row">
        <menuDashboard></menuDashboard>
        <div class="col-10 px-5 py-2">
          <search></search>
          <div class="row mb-4">
            <div class="col-12">
              <div class="card box-shadow">
                <div v-if="success" class="alert alert-success" role="alert">
                  postbedrijf is aangemaakt
                </div>
                <div class="card-header">
                  <h6>Post bedrijf accounts</h6>
                </div>
                <form @submit="postData" method="POST">
                  <div class="form-row">
                    <div class="form-group col-md-6 my-2 mx-2">
                      <label for="PostOfficeName">Naam</label>
                      <input type="text" v-model="posts.postOfficeName" class="form-control" id="PostOfficeName"
                             placeholder="Name">
                    </div>
                    <div class="form-group col-md-6 my-2 mx-2">
                      <label for="PostOfficeKvk">Kvk</label>
                      <input type="text" v-model="posts.postOfficeKVK" class="form-control" id="PostOfficeKvk"
                             placeholder="Kvk">
                    </div>
                  </div>
                  <button type="submit" class="my-2 mx-2 btn btn-primary">Aanmaken</button>
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
  name: "new",
  data() {
    return {
      success: false,
      posts: {
        postOfficeKVK: null,
        postOfficeName: null,
      }
    }
  },
  methods: {
    postData(e) {
      e.preventDefault();
      a.createPostCompany(this.posts).then((result) => {
        if (result.data[0] === "postOffice_ok") {
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
