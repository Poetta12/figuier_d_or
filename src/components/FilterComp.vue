<template>
  <div class="filter-container">
    <!-- Barre de recherche -->
    <input
      type="text"
      v-model="filters.search"
      placeholder="Rechercher..."
      @input="emitFilters"
    />

    <div class="select-group">
      <!-- Catégories -->
      <div>
        <h4>Catégorie</h4>
        <select v-model="filters.category" @change="emitFilters">
          <option value="">Toutes les catégories</option>
          <option v-for="category in categories" :key="category" :value="category">
            {{ category }}
          </option>
        </select>
      </div>

      <!-- Couleurs -->
      <div>
        <h4>Couleur</h4>
        <select v-model="filters.color" @change="emitFilters">
          <option value="">Toutes les couleurs</option>
          <option v-for="color in colors" :key="color" :value="color">
            {{ color }}
          </option>
        </select>
      </div>
    </div>

    <!-- Plage de prix -->
    <div class="hoverable">
      <h4>Prix</h4>
      <input
        type="range"
        v-model="filters.priceRange"
        :min="0"
        :max="50"
        @input="emitFilters"
      />
      <span>{{ filters.priceRange }} €</span>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits } from "vue";

// Définir l'événement "filter-change"
const emit = defineEmits(["filter-change"]);

const categories = ["Bougies moulées", "Bougies parfumées"];
const colors = ["Blanc", "Rouge", "Vert", "Bleu", "Noir"];

const filters = ref({
  search: "",
  category: "",
  color: "",
  priceRange: 50,
});

const emitFilters = () => {
  emit("filter-change", { ...filters.value });
};
</script>


<style scoped>
h4{
  font-size: 2rem;
}
.filter-container {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1.5rem;
  margin-bottom: 20px;
  background: var(--bg-color);
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 -4px 8px rgba(255, 255, 255, 0.6);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
  border: 1px solid var(--text-color);
}

.filter-container:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15), 0 -6px 12px rgba(255, 255, 255, 0.7);
}

/* Style pour l'input de recherche */
input[type="text"] {
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background: #f9f9f9;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

input[type="text"]:focus {
  border-color: #6b4fa7;
  box-shadow: 0 0 8px rgba(107, 79, 167, 0.4);
  outline: none;
}

.select-group {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

.select-group div {
  flex: 1;
}

select {
  width: 100%;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background: #f9f9f9;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
}

select:focus {
  border-color: #6b4fa7;
  box-shadow: 0 0 8px rgba(107, 79, 167, 0.4);
  outline: none;
}

input[type="range"] {
  width: 100%;
  -webkit-appearance: none;
  appearance: none;
  height: 8px;
  border-radius: 5px;
  background: #e0e0e0;
  outline: none;
  transition: background 0.3s ease;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  background: #6b4fa7;
  border-radius: 50%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

input[type="range"]::-webkit-slider-thumb:hover {
  transform: scale(1.1);
  box-shadow: 0 0 10px rgba(107, 79, 167, 0.4);
}
</style>

