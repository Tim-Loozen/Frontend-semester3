<template>
  <div id="token"></div>
</template>

<script>
import axios from "axios";

function parseJwt (token) {
  var base64Url = token.split('.')[1];
  var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(''));

  return JSON.parse(jsonPayload);
}
export default {
  name: "auth.vue",
  mounted() {
    if (localStorage.getItem('token') != null) {
      let DecodedUser = parseJwt(localStorage.getItem("token"));
      let token = localStorage.getItem("token");
      axios.post("http://fontys_semester3_api.test/verifyToken", {
        email: DecodedUser.email, token: token
      }).then((result) => {
        console.log(result.data[0]);
      }).catch((error) => {
        console.log(error);
      })
    }else{
      window.location.href= "/login";
    }
  }
}
</script>

<style scoped>

</style>
