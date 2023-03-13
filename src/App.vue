<script setup>
import Global_Navbar from "@/components/general/navbar.vue";
import Global_footer from "@/components/general/footer.vue";
</script>

<template>
  <Global_Navbar></Global_Navbar>
 <router-view></router-view>
  <global_footer></global_footer>
</template>



