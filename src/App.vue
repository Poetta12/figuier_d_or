<template>
  <div id="app">
    <FlameCursor />
    <header-comp/>
    <div class="container">
      <router-view />
    </div>
    <FooterComp/>
  </div>
</template>

<script setup>
/* Pas de logique pour l'instant */
import HeaderComp from "@/components/headerComp.vue";
import FlameCursor from "@/components/FlameCursor.vue";
import FooterComp from "@/components/FooterComp.vue";
</script>

<style scoped>
</style>
