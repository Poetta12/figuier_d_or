<template>
  <section class="savoir-faire">
    <h2 class="section-title">Notre Savoir-Faire</h2>
    <div class="video-list">
      <div
        v-for="(video, index) in videos"
        :key="index"
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
    </div>
  </section>
</template>


<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const videos = [
  "/videos/prep_order.mp4",
  "/videos/prep_order_2.mp4",
  "/videos/snake.mp4",
  "/videos/coeur.mp4",
  "/videos/bougie_1.mp4",
  "/videos/bougie_2.mp4",
];

const videoRefs = ref([]);

const handlePlay = (index) => {
  videoRefs.value.forEach((video, i) => {
    if (i !== index && video) {
      video.pause(); // Arrête toutes les autres vidéos
    }
  });
};

onUnmounted(() => {
  videoRefs.value = [];
});
</script>


<style scoped>
/* Section principale */
.savoir-faire {
  padding: 2rem 1rem;
  background-color: var(--color-bg-transp);
  color: var(--text-color);
  text-align: center;
  margin-top: 2rem;
  border-radius: 20px 5px 20px 5px;
  box-shadow: 0 4px 6px var(--color-darkgold);
}

/* Titre de section */
.section-title {
  font-size: 6rem;
  color: var(--color-bordeaux);
  margin-bottom: 1.5rem;
}

/* Liste de vidéos */
.video-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  justify-items: center;
}

/* Éléments vidéo */
.video-item {
  background-color: var(--color-indigo);
  border-radius: 15px;
  overflow: hidden;
  width: 90%;
  max-width: 300px;
  text-align: center;
  box-shadow: 0 4px 6px var(--color-darkgold);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.video-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 10px var(--color-lightgold);
}

/* Conteneur vidéo */
.video-content {
  width: 100%;
  background-size: cover;
  background-position: center;
  border-radius: 15px 15px 0 0;
}

/* Vidéo */
.video-player {
  width: 100%;
  height: 100%;
  border-radius: 15px 15px 0 0;
  object-fit: cover;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.video-player:hover {
  transform: scale(1.05);
}

/* Titre de la vidéo */
.video-title {
  font-size: 1.2rem;
  margin: 0.5rem 0 1rem;
  color: var(--color-lightgold);
  text-shadow: 0 2px 4px var(--color-darkgold);
}

/* Responsive : Tablettes */
@media (min-width: 768px) {
  .video-list {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}

/* Responsive : Desktop */
@media (min-width: 1024px) {
  .video-list {
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }

  .savoir-faire {
    padding: 2rem;
  }
}
</style>
