<template>
  <div class="carousel" @mouseover="stopSlideShow" @mouseleave="startSlideShow">
    <!-- Track contenant les images -->
    <div
      class="carousel-track"
      :style="{ transform: `translateX(-${currentSlide * 100}%)`, width: `${images.length * 50}%` }"
    >
      <div
        v-for="(image, index) in images"
        :key="index"
        class="carousel-item"
      >
        <img
          class="carousel-image"
          :src="image"
          :alt="'Image ' + (index + 1)"
        />
      </div>
    </div>

    <!-- Boutons de navigation -->
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
import { ref, onMounted, onBeforeUnmount, watch } from "vue";

// Props pour les images
const props = defineProps({
  images: {
    type: Array,
    required: true,
    validator: (value) => Array.isArray(value) && value.length > 0,
  },
});

// État réactif pour la diapositive active
const currentSlide = ref(0);
let slideInterval = null;

// Méthodes de navigation
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % props.images.length;
};

const prevSlide = () => {
  currentSlide.value = (currentSlide.value - 1 + props.images.length) % props.images.length;
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

// Réinitialise à la première diapositive si les images changent
watch(() => props.images, () => {
  currentSlide.value = 0;
  stopSlideShow();
  startSlideShow();
});
</script>

<style scoped>
/* Container principal du carousel */
.carousel {
  position: relative;
  width: 100%;
  max-width: 300px; /* Taille du cadre */
  aspect-ratio: 1 / 1; /* Carré par défaut */
  overflow: hidden;
  margin: 1rem auto;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  background-color: var(--bg-color);
}

/* Track contenant les diapositives */
.carousel-track {
  display: flex;
  justify-content: flex-start;
  align-content: center;
  transition: transform 0.5s ease-in-out;
}

/* Éléments du carousel */
.carousel-item {
  width: 100%;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Image */
.carousel-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Assure que l'image s'adapte sans dépasser */
  border-radius: 10px;
}

/* Boutons de navigation */
.carousel-button {
  width: 4rem;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: var(--color-darkgold);
  border: none;
  color: var(--color-lightgold);
  padding: 0.5rem;
  font-size: 1.5rem;
  z-index: 2;
  border-radius: 50%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.carousel-button:hover {
  background-color: var(--color-lightgold);
  color: var(--bg-color);
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
  transition: all 0.3s ease-in-out;
}

.indicator.active {
  background-color: var(--color-lightgold);
  transform: scale(1.2);
}

/* Responsive design */

/* Desktop */
@media (min-width: 768px) {
  .carousel {
    max-width: 400px; /* Augmente la taille du cadre sur desktop */
  }

  .carousel-button {
    padding: 0.75rem;
    font-size: 2rem;
  }

  .indicator {
    width: 15px;
    height: 15px;
  }
}
</style>
