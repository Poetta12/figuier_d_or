<template>
  <div class="home">

    <BannerComp />
    <div class="wrapper">
      <CollectionsComp />
      <SavoirFaireComp />
    </div>
    <footer class="footer">
    </footer>
  </div>
</template>

<script setup>
import CollectionsComp from "@/components/CollectionsComp.vue";
import BannerComp from "@/components/BannerComp.vue";
import SavoirFaireComp from "@/components/SavoirFaireComp.vue";
</script>

<style scoped>
.footer {
  text-align: center;
  margin-top: 2rem;
  color: var(--color-indigo);
  font-size: 0.9rem;
}
</style>
