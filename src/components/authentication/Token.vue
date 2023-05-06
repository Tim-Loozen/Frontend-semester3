<template>
  <div id="token"></div>
</template>

<script>
import axios from "axios";
import api from "@/api";
const a = new api();
export default {
  name: "auth.vue",
  mounted() {
    if (localStorage.getItem('token') != null) {
      a.verifyToken().then((result) => {
        console.log(result.data[0]);
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
