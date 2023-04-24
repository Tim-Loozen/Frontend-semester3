<script setup>
import menuDashboard from "@/components/dashboard/menu.vue";
import Token from "@/components/authentication/Token.vue";
</script>
<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-2 bg-light">
        <menuDashboard></menuDashboard>
      </div>
      <div class="col-10">
        <form @submit="postData" method="POST">
          <div class="form-row">
            <div class="form-group col-md-6 my-2 mx-2">
              <label for="PostOfficeName">Naam</label>
              <input type="text" v-model="posts.postOfficeName" class="form-control" id="PostOfficeName" placeholder="Name">
            </div>
            <div class="form-group col-md-6 my-2 mx-2">
              <label for="PostOfficeKvk">Kvk</label>
              <input type="text" v-model="posts.postOfficeKVK" class="form-control" id="PostOfficeKvk" placeholder="Kvk">
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
export default {
  name: "new",
  data() {
    return {
      posts: {
        postOfficeKVK: null,
        postOfficeName: null,
      }
    }
  },
  methods: {
    postData(e) {
      e.preventDefault();
      axios.post("http://fontys_semester3_api.test/create_post_office", {
        postOfficeEmail: this.posts.postOfficeEmail,
        postOfficeKVK: this.posts.postOfficeKVK,
        postOfficeName: this.posts.postOfficeName,
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
