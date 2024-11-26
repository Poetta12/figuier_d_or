<template>
  <section class="savoir-faire">
    <h2 class="section-title">Notre Savoir-Faire</h2>
    <div class="video-list">
      <transition-group name="video" tag="div" class="video-list">
        <div
          v-for="(video, index) in visibleVideos"
          :key="video"
          class="video-item"
        >
          <div class="video-content">
            <video
              ref="videoRefs"
              class="video-player"
              controls
              :src="video"
              :alt="'Vidéo ' + (index + 1)"
              @play="handlePlay(index)"
            ></video>
          </div>
          <p class="video-title">Vidéo {{ index + 1 }}</p>
        </div>
      </transition-group>
    </div>

    <!-- Bouton Voir plus -->
    <div v-if="hiddenVideosCount > 0" class="see-more">
      <button class="see-more-button" @click="showMore">
        Voir plus ({{ hiddenVideosCount }} vidéos disponibles)
      </button>
    </div>
  </section>
</template>


<script setup>
import { ref, onUnmounted, computed } from "vue";

const videos = [
  "/videos/prep_order.mp4",
  "/videos/prep_order_2.mp4",
  "/videos/snake.mp4",
  "/videos/coeur.mp4",
  "/videos/bougie_1.mp4",
  "/videos/bougie_2.mp4",
];

const videoRefs = ref([]);
const visibleCount = ref(3); // Nombre de vidéos visibles

// Vidéos visibles calculées
const visibleVideos = computed(() => videos.slice(0, visibleCount.value));

// Nombre de vidéos cachées
const hiddenVideosCount = computed(() => videos.length - visibleCount.value);

// Gérer la lecture : arrêter les autres vidéos
const handlePlay = (index) => {
  videoRefs.value.forEach((video, i) => {
    if (i !== index && video) {
      video.pause(); // Arrête toutes les autres vidéos
    }
  });
};

// Voir plus de vidéos
const showMore = () => {
  visibleCount.value = videos.length; // Afficher toutes les vidéos
};

onUnmounted(() => {
  videoRefs.value = [];
});
</script>

<style scoped>
/* Section principale */
.savoir-faire {
  padding: 2rem 1rem;
  background-color: #f9f9f9;
  color: #333;
  text-align: center;
  margin-top: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

/* Titre de section */
.section-title {
  font-size: 2rem;
  font-weight: bold;
  color: #4a4a4a;
  margin-bottom: 1.5rem;
}

/* Liste de vidéos */
.video-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* Éléments vidéo */
.video-item {
  background-color: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 2s ease, box-shadow 0.3s ease;
}

.video-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

/* Conteneur vidéo */
.video-content {
  width: 100%;
  border-bottom: 1px solid #ddd;
}

/* Vidéo */
.video-player {
  width: 100%;
  object-fit: cover;
}

/* Titre de la vidéo */
.video-title {
  font-size: 1rem;
  margin: 0.5rem 0;
  color: #666;
  font-weight: 500;
}

/* Bouton Voir plus */
.see-more {
  margin-top: 1.5rem;
  text-align: center;
}

.see-more-button {
  background-color: #007bff;
  color: #fff;
  font-size: 1rem;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 6px;
  transition: background-color 2s ease, transform 0.3s ease;
}

.see-more-button:hover {
  background-color: #0056b3;
  transform: translateY(-3px);
}

/* Transition des vidéos */
.video-enter-active,
.video-leave-active {
  transition: all 0.3s ease;
}

.video-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}

.video-enter-to {
  opacity: 1;
  transform: translateY(0);
}

.video-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.video-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

/* Responsive : Tablettes */
@media (min-width: 768px) {
  .video-list {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
  }

  .video-item {
    max-width: 300px;
  }

  .section-title {
    font-size: 2.5rem;
  }
}

/* Responsive : Desktop */
@media (min-width: 1024px) {
  .video-list {
    gap: 2.5rem;
  }

  .video-item {
    max-width: 350px;
  }

  .section-title {
    font-size: 3rem;
  }
}
</style>
