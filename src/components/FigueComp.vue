<template>
  <div class="figue-container">
    <div class="figue">
      <!-- Ombre sous la figue -->
      <div class="shadow"></div>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
/* Conteneur principal */
.figue-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f9f9f9;
}

/* Figue réaliste - taille réduite */
.figue {
  position: relative;
  width: 25px; /* Taille ajustée pour correspondre au curseur */
  height: 40px; /* Taille ajustée pour correspondre au curseur */
  background: url('/src/assets/figue.png') no-repeat center center;
  background-size: cover;
  border-radius: 50% 50% 40% 40% / 55% 55% 45% 45%;
}

/* Ombre douce sous la figue */
.shadow {
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 20px;
  height: 5px;
  background: radial-gradient(circle, rgba(0, 0, 0, 0.2), transparent);
  border-radius: 50%;
  z-index: -1;
}
</style>
