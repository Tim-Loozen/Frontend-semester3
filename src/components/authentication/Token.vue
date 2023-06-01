<template>
  <div id="token"></div>
</template>

<script>
import axios from "axios";
import api from "@/utils/api";
const a = new api();
export default {
  name: "auth.vue",
  created() {
    console.log("test");
    if (localStorage.getItem('token') != null) {
      a.verifyToken().then((result) => {
        console.log(result);
      }).catch((error) => {
        console.log(error);
      });
    }else {
      window.location.href = "/login";
    }
  }
}
</script>

<style scoped>

</style>
