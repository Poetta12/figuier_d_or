<template>
  <section class="collections">
    <h2 class="section-title">Découvrez nos collections</h2>
    <div class="collection-groups">
      <div class="collection-block" v-for="(group, groupIndex) in groupedCollections" :key="groupIndex">
        <div class="collection-list">
          <div class="collection-item" v-for="collection in group" :key="collection.id">
            <div
              class="collection-image"
              :style="{ backgroundImage: `url(${collection.image})` }"
            ></div>
            <div class="collection-content">
              <h3 class="collection-title">{{ collection.name }}</h3>
              <p class="collection-description">{{ collection.description }}</p>
            </div>
            <button class="explore-button hoverable">Explorer la boutique</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";

// Référence pour stocker les collections
const collections = ref([]);

// Charger les données depuis le fichier JSON
const loadCollections = async () => {
  try {
    const response = await import("/database/collections.json");
    collections.value = response.collections;
  } catch (error) {
    console.error("Erreur lors du chargement des collections :", error);
  }
};

// Regrouper les collections par blocs de 3
const groupedCollections = computed(() => {
  const groups = [];
  for (let i = 0; i < collections.value.length; i += 3) {
    groups.push(collections.value.slice(i, i + 3));
  }
  return groups;
});

// Charger les données lors du montage
onMounted(loadCollections);
</script>

<style scoped>
/* Section principale */
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

.collection-groups {
  display: flex;
  flex-direction: column;
  gap:1rem;
}

.collection-block {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.collection-list {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem; /* Ajout d'espacement supplémentaire */
  width: 100%; /* Assure que la liste prend toute la largeur disponible */
  max-width: 1200px; /* Limite maximale pour une apparence large mais structurée */
  margin: 0 auto; /* Centre la liste */
}

.collection-item {
  background-color: var(--color-indigo);
  border-radius: 15px;
  overflow: hidden;
  width: 100%; /* Trois éléments par ligne avec espacement */
  max-width: 375px;
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

/* Responsive : Tablettes */
@media (min-width: 768px) {
  .collection-list {
    max-width: 1400px; /* Rend la liste plus large sur tablettes */
  }
}

@media (min-width: 1024px) {
  .collections {
    margin-top: 2rem;
    background-color: var(--color-bg-transp);
    border-radius: 20px 5px 20px 5px;
    padding: 2rem 0;
  }

  .collection-list {
    justify-content: center;
    gap: 1rem; /* Espacement plus grand entre les éléments */
  }

  .collection-item {
    padding: 10px;
    width: calc(45% - 3rem); /* Quatre éléments par ligne sur desktop */
  }
}
</style>
