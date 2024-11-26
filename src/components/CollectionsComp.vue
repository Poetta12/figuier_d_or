<template>
  <section class="collections">
    <h2 class="section-title">Découvrez nos collections</h2>
    <div class="collection-list">
      <div class="collection-item" v-for="collection in collections" :key="collection.id">
        <div
          class="collection-image"
          :style="{ backgroundImage: `url(${collection.image})` }"
        ></div>
        <div class="collection-content">
          <h3 class="collection-title">{{ collection.title }}</h3>
          <p class="collection-description">{{ collection.description }}</p>
        </div>
        <button class="explore-button hoverable">Explorer la boutique</button>

      </div>
    </div>
  </section>
</template>

<script setup>
const collections = [
  {
    id: 1,
    title: "Bougies Sculptées",
    description: "De véritables œuvres d'art faites à la main.",
    image: "/img/moule-bougie-originale.webp",
  },
  {
    id: 2,
    title: "Bougies Aromathérapie",
    description: "Des fragrances apaisantes pour votre bien-être.",
    image: "/img/bougie-parfumée.png",
  },
  {
    id: 3,
    title: "Bougies Fondantes",
    description: "Des parfums pour chaque humeur.",
    image: "/img/bougie-fondant.webp",
  },
  {
    id: 4,
    title: "Bougies de Massage",
    description: "Relaxez-vous avec style.",
    image: "/img/Massage-bougie.jpeg",
  },
  {
    id: 5,
    title: "Bougies LED",
    description: "Éclat durable sans flamme pour une sécurité optimale.",
    image: "/img/Bougie-led.webp",
  },
  {
    id: 6,
    title: "Bougies pour Enfants",
    description: "Des designs amusants et colorés pour les plus jeunes.",
    image: "/img/enfant.webp",
  },
  {
    id: 7,
    title: "Bougies Festives",
    description: "Ajoutez une touche spéciale à vos célébrations.",
    image: "/img/bougies-noel.jpg",
  },
  {
    id: 8,
    title: "Bougies de Méditation",
    description: "Créez une ambiance propice à la relaxation.",
    image: "/img/bougiedemeditation.webp",
  },
];
</script>

<style scoped>
/* Styles inchangés */
.collections {
  padding: 2rem 1rem;
  background-color: var(--bg-color);
  color: var(--text-color);
  text-align: center;
  box-shadow: 0 4px 6px var(--color-darkgold);
}

.section-title {
  font-size: 6rem;
  color: var(--color-bordeaux);
  margin-bottom: 1.5rem;
}

.collection-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  justify-items: center;
}

.collection-item {
  background-color: var(--color-indigo);
  border-radius: 15px;
  overflow: hidden;
  width: 90%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  box-shadow: 0 4px 6px var(--color-darkgold);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.collection-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 10px var(--color-lightgold);
}

.collection-image {
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
  border-radius: 15px 15px 0 0;
}

.collection-content {
  display: flex;
  flex-direction: column;
  background-color: var(--color-indigo);
  color: var(--text-color);
}

.collection-title {
  font-size: 3rem;
  margin: 0.5rem 0;
  color: var(--color-lightgold);
  text-shadow: 0 2px 4px var(--color-darkgold);
}

.collection-description {
  font-size: 1rem;
  margin-bottom: 1rem;
}

.explore-button {
  background-color: var(--color-lightgold);
  color: var(--color-bordeaux);
  border: none;
  border-radius: 5px;
  padding: 0.7rem 1rem;
  font-size: 1rem;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.3s ease;
}

.explore-button:hover {
  background-color: var(--color-bordeaux);
  color: var(--color-lightgold);
  transform: scale(1.1);
}

@media (min-width: 768px) {
  .collection-list {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}

@media (min-width: 1024px) {
  .collections {
    margin-top: 2rem;
    background-color: var(--color-bg-transp);
    border-radius: 20px 5px 20px 5px;
  }

  .collection-list {
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;
  }

  .collection-item {
    width: 100%;
  }
  .collection-content {
    padding: 0 10px;
  }
}
</style>
