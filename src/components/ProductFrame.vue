<template>
  <div class="product-frame">
    <!-- Galerie d'images -->
    <div class="image-container">
      <img
        v-if="Array.isArray(images) && images.length > 0"
        class="product-image"
        :src="images[0]"
        :alt="`${name || 'Image du produit'} (1)`"
      />
      <img
        v-else
        class="product-image"
        :src="images"
        :alt="`${name || 'Image du produit'}`"
      />
    </div>

    <!-- Détails du produit -->
    <div class="product-details">
      <h2 class="product-name">{{ name }}</h2>

      <!-- Meta informations -->
      <div class="product-meta">
        <p><strong>Catégorie :</strong> {{ category }}</p>
        <p><strong>Couleur :</strong> {{ color }}</p>
        <p><strong>Prix :</strong> {{ price.toFixed(2) }} CHF</p>

        <!-- Dropdown pour les fragrances -->
        <div v-if="Array.isArray(fragrances) && fragrances.length > 0" class="fragrances-dropdown">
          <label for="fragrances-dropdown"><strong>Parfums :</strong></label>
          <div id="fragrances-dropdown" class="dropdown">
            <button class="dropdown-button" @click="toggleDropdown">
              {{ selectedFragrance || "Sélectionner un parfum" }}
            </button>
            <ul v-if="isDropdownOpen" class="dropdown-menu">
              <li
                v-for="(fragrance, index) in fragrances"
                :key="index"
                class="dropdown-item"
                @click="selectFragrance(fragrance)"
              >
                {{ fragrance }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Boutons d'actions -->
    <div class="action-buttons">
      <button
        class="product-button hoverable"
        @click="onActionClick"
      >
        {{ buttonText }}
      </button>
      <button
        class="add-to-cart-button hoverable"
        @click="addToCart"
      >
        Ajouter au panier
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from "vue";

// Props pour personnaliser le produit
const props = defineProps({
  images: { type: Array, required: true }, // Liste des images
  name: { type: String, required: true }, // Nom du produit
  description: { type: String, required: true }, // Description
  category: { type: String, required: true }, // Catégorie
  color: { type: String, required: true }, // Couleur
  price: { type: Number, required: true }, // Prix
  fragrances: { type: Array, default: () => [] }, // Parfums
  buttonText: { type: String, default: "Découvrir" } // Texte du bouton
});

// Événements d'action pour les boutons
const emit = defineEmits(["actionClick", "addToCart"]);

// Fonction pour déclencher "Découvrir"
const onActionClick = () => {
  emit("actionClick");
};

// Fonction pour ajouter au panier
const addToCart = () => {
  emit("addToCart", { name: props.name, price: props.price, selectedFragrance: selectedFragrance.value });
};

// État pour le dropdown
const isDropdownOpen = ref(false);
const selectedFragrance = ref(null);

// Fonction pour basculer l'ouverture du dropdown
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

// Fonction pour sélectionner un parfum
const selectFragrance = (fragrance) => {
  selectedFragrance.value = fragrance;
  isDropdownOpen.value = false; // Fermer le menu après sélection
};
</script>

<style scoped>
/* Base styles: mobile-first */

/* Conteneur principal */
.product-frame {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding: 1.5rem;
  border-radius: 12px;
  background: linear-gradient(145deg, #f8f8f8, #e0e0e0);
  box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.1), -8px -8px 16px rgba(255, 255, 255, 0.7);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-frame:hover {
  transform: translateY(-5px);
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.15), -10px -10px 20px rgba(255, 255, 255, 0.8);
}

/* Conteneur de l'image */
.image-container {
  width: 100%;
  max-width: 220px;
  height: 220px;
  overflow: hidden;
  border-radius: 12px;
  margin-bottom: 1rem;
  display: flex;
  gap: 0.5rem;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1), -4px -4px 10px rgba(255, 255, 255, 0.6);
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.image-container:hover .product-image {
  transform: scale(1.05);
}

/* Détails du produit */
.product-details {
  width: 90%;
  padding: 0;
  color: var(--text-color);
  text-align: left;
  padding-bottom: 10px;
}

/* Nom du produit */
.product-name {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--color-bordeaux);
}

/* Informations supplémentaires */
.product-meta p {
  font-size: 0.9rem;
  margin: 0.2rem 0;
  color: #777;
}

.fragrances-dropdown {
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0.5rem 0;
  text-align: left;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-button {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  transition: background-color 0.3s ease;
  width: 100%;
  text-align: left;
}

.dropdown-button:hover {
  background-color: #f8f8f8;
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 0.5rem 0;
  list-style: none;
  z-index: 10;
  min-width: 100%;
}

.dropdown-menu .dropdown-item {
  padding: 0.5rem 1rem;
  transition: background-color 0.3s ease;
}

.dropdown-menu .dropdown-item:hover {
  background-color: #f0f0f0;
}

/* Boutons */
.action-buttons {
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
}

.product-button,
.add-to-cart-button {
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  border: none;
  border-radius: 20px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1), -4px -4px 10px rgba(255, 255, 255, 0.6);
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
}

.product-button {
  background: linear-gradient(145deg, #6b4fa7, #583b8c);
  color: #fff;
}

.product-button:hover {
  background: linear-gradient(145deg, #7d5eb6, #6b4fa7);
  transform: translateY(-2px);
}

.add-to-cart-button {
  background: linear-gradient(145deg, #28a745, #218838);
  color: #fff;
}

.add-to-cart-button:hover {
  background: linear-gradient(145deg, #34ce57, #28a745);
  transform: translateY(-2px);
}
</style>
