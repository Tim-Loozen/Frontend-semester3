<script setup>
import menuDashboard from "@/components/dashboard/menu.vue";

</script>
<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-2 bg-light">
        <menuDashboard></menuDashboard>
      </div>
      <div class="col-10">
        <div v-if="success" class="alert alert-success" role="alert">
           postbedrijf is aangemaakt
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

</template>

<script>
import axios, {Axios} from "axios";
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
        if(result.data[0] === "postOffice_ok")
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
