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
            >
              <div v-if="!collection.available" class="ribbon">
                Bientôt disponible
              </div>
            </div>
            <div class="collection-content">
              <h3 class="collection-title">{{ collection.name }}</h3>
              <p class="collection-description">{{ collection.description }}</p>
            </div>
            <button
              class="explore-button hoverable"
              :class="{ 'disabled-button': !collection.available }"
              :disabled="!collection.available"
            >
              {{ collection.available ? "Explorer la boutique" : "Merci de votre patience" }}
            </button>
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
  gap: 1rem;
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
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

.collection-item {
  background-color: var(--color-indigo);
  border-radius: 15px;
  overflow: hidden;
  width: 100%;
  max-width: 375px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  box-shadow: 0 4px 6px var(--color-darkgold);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  position: relative;
}

.collection-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 10px var(--color-lightgold);
}

/* Écharpe "Bientôt disponible" */
.ribbon {
  position: absolute;
  top: 85px;
  left: -158px;
  background-color: rgba(255, 69, 0, 0.9); /* Rouge avec transparence */
  color: white;
  font-size: 2rem;
  font-weight: bold;
  padding: 5px 10px;
  transform: rotate(-45deg);
  width: 150%;
  text-align: center;
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.collection-image {
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
  border-radius: 15px 15px 0 0;
  position: relative;
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

/* Bouton */
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

/* Bouton désactivé */
.disabled-button {
  background-color: #d3d3d3;
  color: #a9a9a9;

  cursor: not-allowed;
}

.disabled-button:hover {
  background-color: #d3d3d3;
  color: var(--color-bordeaux);
  transform: none;
}

/* Responsive : Tablettes */
@media (min-width: 768px) {
  .collection-list {
    max-width: 1400px;
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
    gap: 1rem;
  }

  .collection-item {
    padding: 10px;
    width: calc(45% - 3rem);
  }
}
</style>
