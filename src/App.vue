<template>
  <KHeader />
  <Footer />
  <router-view />
</template>
<script setup>
import KHeader from "./components/KHeader.vue";
import Footer from "./components/FooterSection.vue";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");
body {
  font-family: "Roboto", sans-serif;
}
</style>
