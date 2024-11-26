<template>
  <div class="carousel" @mouseover="stopSlideShow" @mouseleave="startSlideShow">
    <div class="carousel-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
      <img v-for="(image, index) in images" :key="index" :src="image" :alt="'Produit ' + (index + 1)" />
    </div>

    <!-- Navigation par boutons -->
    <button class="carousel-button prev" @click="prevSlide" aria-label="Slide précédent">
      &#10094;
    </button>
    <button class="carousel-button next" @click="nextSlide" aria-label="Slide suivant">
      &#10095;
    </button>

    <!-- Indicateurs -->
    <div class="carousel-indicators">
      <span
        v-for="(image, index) in images"
        :key="index"
        class="indicator"
        :class="{ active: index === currentSlide }"
        @click="goToSlide(index)"
      ></span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

// Liste des images pour le carrousel
const images = [
  "/img/candle1.jpeg",
  "/img/candle2.jpeg",
  "/img/candle3.jpeg",
];

// État réactif pour gérer la slide active
const currentSlide = ref(0);
let slideInterval = null;

// Méthodes de navigation
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % images.length;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + images.length) % images.length;
};

const goToSlide = (index) => {
  currentSlide.value = index;
};

// Gestion du défilement automatique
const startSlideShow = () => {
  slideInterval = setInterval(() => {
    nextSlide();
  }, 5000); // Transition toutes les 5 secondes
};

const stopSlideShow = () => {
  clearInterval(slideInterval);
};

// Lifecycle hooks
onMounted(() => {
  startSlideShow();
});

onBeforeUnmount(() => {
  stopSlideShow();
});
</script>

<style scoped>
/* Carrousel général */
<<<<<<< HEAD
button:hover, a:hover {
  cursor: none;
}

=======
>>>>>>> a035d82bd60eec956ffa02b9261713ff7d8be08f
.carousel {
  position: relative;
  width: 100%;
  max-height: 400px;
  overflow: hidden;
  margin: 1rem 0;
  border-radius: 15px;
  box-shadow: 0 8px 15px var(--color-darkgold);
  background-color: var(--color-black);
}

/* Track du carrousel */
.carousel-track {
  display: flex;
  transition: transform 0.5s cubic-bezier(0.4, 0.0, 0.2, 1);
}

.carousel-track img {
  width: 100%;
  height: auto;
  object-fit: cover;
  flex-shrink: 0;
}

/* Boutons de navigation */
.carousel-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
<<<<<<< HEAD
  background-color: var(--color-light-gold); /* Light gold */
  border: none;
  color: var(--color-indigo);
=======
  background-color: var(--color-darkgold);
  border: 2px solid var(--color-lightgold);
  color: var(--color-lightgold);
>>>>>>> a035d82bd60eec956ffa02b9261713ff7d8be08f
  padding: 0.5rem 1rem;
  cursor: pointer;
  z-index: 2;
  font-size: 1.5rem;
  border-radius: 50%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
}

.carousel-button:hover {
<<<<<<< HEAD
  background-color: var(--color-dark-gold); /* Dark gold on hover */
  color: var(--color-indigo);
=======
  background-color: var(--color-lightgold);
  color: var(--text-color);
>>>>>>> a035d82bd60eec956ffa02b9261713ff7d8be08f
}

.carousel-button.prev {
  left: 1rem;
}

.carousel-button.next {
  right: 1rem;
}

/* Indicateurs */
.carousel-indicators {
  position: absolute;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}

.indicator.active {
<<<<<<< HEAD
  background-color: var(--color-light-gold); /* Active state with light gold */
  transform: scale(1.2);
}

=======
  background-color: var(--color-lightgold);
  transform: scale(1.2);
}

/* Responsive (Mobile-First) */

>>>>>>> a035d82bd60eec956ffa02b9261713ff7d8be08f
/* Desktop */
@media (min-width: 768px) {
  .carousel {
    max-height: 500px;
  }

  .carousel-button {
    font-size: 2rem;
  }

  .indicator {
    width: 15px;
    height: 15px;
  }
}
</style>
