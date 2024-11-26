<template>
  <div class="product-frame">
    <!-- Galerie d'images -->
    <div class="image-container">
      <img
        v-for="(img, index) in (Array.isArray(images) ? images : [images])"
        :key="index"
        class="product-image"
        :src="img"
        :alt="`${name || 'Image du produit'} (${index + 1})`"
      />
    </div>

    <!-- Détails du produit -->
    <div class="product-details">
      <h2 class="product-name">{{ name }}</h2>

      <!-- Meta informations -->
      <div class="product-meta">
        <p><strong>Catégorie :</strong> {{ category }}</p>
        <p><strong>Couleur :</strong> {{ color }}</p>
        <p><strong>Prix :</strong> {{ price.toFixed(2) }} €</p>
        <p v-if="Array.isArray(fragrances) && fragrances.length">
          <strong>Parfums :</strong> {{ fragrances.join(", ") }}
        </p>
      </div>
    </div>

    <!-- Bouton d'action -->
    <button class="product-button hoverable" @click="onActionClick">{{ buttonText }}</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

// Props pour personnaliser le produit
defineProps({
  images: { type: Array, required: true }, // Liste des images
  name: { type: String, required: true }, // Nom du produit
  description: { type: String, required: true }, // Description
  category: { type: String, required: true }, // Catégorie
  color: { type: String, required: true }, // Couleur
  price: { type: Number, required: true }, // Prix
  fragrances: { type: Array, default: () => [] }, // Parfums
  buttonText: { type: String, default: "Découvrir" } // Texte du bouton
});

// Événement d'action pour le bouton
const emit = defineEmits(["actionClick"]);

const onActionClick = () => {
  emit("actionClick");
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
  padding: 0 1rem;
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

/* Description */
.product-description {
  font-size: 1rem;
  margin-bottom: 1rem;
  color: #555;
}

/* Informations supplémentaires */
.product-meta p {
  font-size: 0.9rem;
  margin: 0.2rem 0;
  color: #777;
}

/* Bouton */
.product-button {
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  background: linear-gradient(145deg, #6b4fa7, #583b8c);
  color: #fff;
  border: none;
  border-radius: 20px;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.1), -4px -4px 10px rgba(255, 255, 255, 0.6);
  transition: background-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
}

.product-button:hover {
  background: linear-gradient(145deg, #7d5eb6, #6b4fa7);
  transform: translateY(-2px);
  box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.15), -6px -6px 15px rgba(255, 255, 255, 0.8);
}

/* Styles supplémentaires pour tablettes et desktops */

/* Tablettes (min-width: 768px) */
@media (min-width: 768px) {
  .product-frame {
    padding: 2rem;
    border-radius: 16px;
  }

  .image-container {
    max-width: 260px;
    height: 260px;
    margin-bottom: 1.5rem;
  }

  .product-name {
    font-size: 1.8rem;
  }

  .product-description {
    font-size: 1.1rem;
  }

  .product-meta p {
    font-size: 1rem;
  }

  .product-button {
    font-size: 1.1rem;
    padding: 0.8rem 1.5rem;
    border-radius: 25px;
  }
}

/* Desktop (min-width: 1024px) */
@media (min-width: 1024px) {
  .product-frame {
    padding: 1rem;
    border-radius: 20px;
  }

  .image-container {
    max-width: 300px;
    height: 300px;
    margin-bottom: 2rem;
  }

  .product-name {
    font-size: 2rem;
  }

  .product-description {
    font-size: 1.2rem;
  }

  .product-meta p {
    font-size: 1.1rem;
  }

  .product-button {
    font-size: 1.2rem;
    padding: 1rem 2rem;
  }
}
</style>
