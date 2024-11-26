<template>
  <div class="banner">
    <div class="banner-content">
      <h1 class="banner-title">Bienvenue dans notre boutique de bougies</h1>
      <p class="banner-subtitle">Des créations uniques pour illuminer vos moments.</p>
      <button class="banner-button">Explorer</button>
    </div>
  </div>
</template>

<script setup>
// Données ou props si nécessaire
</script>

<style scoped>
/* Mobile-first styles */
.banner {
  padding: 2rem;
  color: var(--text-color);
  background: url("@/assets/img/B3.jpg") no-repeat center;
  background-size: cover;
  height: auto; /* S'ajuste au contenu sur mobile */

}

.banner-content {
  max-width: 90%; /* Prend toute la largeur sur mobile */
  background: var(--color-bg-white-tranp);
  width: fit-content;
  padding: 10px;
  border-radius: 20px 5px 20px 5px;
}

.banner-title {
  font-size: 1.8rem; /* Taille adaptée aux petits écrans */
  margin-bottom: 1rem;
}

.banner-subtitle {
  font-size: 1rem;
  margin-bottom: 1.5rem;
}

.banner-button {
  padding: 0.7rem 1.5rem;
  font-size: 1rem;
  color: var(--text-color);
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.banner-button:hover {
  background-color: var(--color-lightgold);
  transform: scale(1.05);
}

/* Desktop styles */
@media (min-width: 768px) {

  .banner {
    width: 100vw;
    height: 85vh;
  }

  .banner-content {
    max-width: 800px;
  }

  .banner-title {
    font-size: 4rem;
  }

  .banner-subtitle {
    font-size: 1.2rem;
  }

  .banner-button {
    font-size: 1.2rem;
    padding: 0.8rem 2rem;
  }
}

@media (min-width: 1024px) {
  .banner-content {
    max-width: 1400px; /* Prend toute la largeur sur mobile */
    padding: 50px;
  }

  .banner-title {
    font-size: 7rem; /* Taille adaptée aux grands écrans */
  }

  .banner-subtitle {
    font-size: 2rem;
  }
}
</style>
