<template>
  <div class="product-details-modal" v-if="isVisible">
    <div class="modal-overlay" @click="closeDetails"></div>
    <div class="modal-content">
      <button class="close-button" @click="closeDetails">&times;</button>
      <div class="modal-body">
        <!-- Section gauche : Image/Galerie -->
        <div class="product-gallery">
          <CarouselComp v-if="hasMultipleImages" :images="product.images" />
          <div class="image-frame" v-else>
            <img
              class="product-image"
              :src="product.images?.[0] || product.image || '/img/default-product.png'"
              :alt="product.name || 'Image du produit'"
            />
          </div>
        </div>

        <!-- Section droite : Détails -->
        <div class="product-details">
          <h2 class="product-name">{{ product.name }}</h2>
          <p class="product-category" v-if="product.category">
            <strong>Catégorie :</strong> {{ product.category }}
          </p>
          <p class="product-description">{{ product.description }}</p>
          <p class="product-price" v-if="product.price">
            Prix : {{ product.price.toFixed(2) }} CHF
          </p>
          <div v-if="product.fragrances?.length">

            <strong>Parfums disponibles :</strong>
            <ul class="product-meta">
              <li v-for="(fragrance, index) in product.fragrances" :key="index">
                {{ fragrance }}
              </li>
            </ul>
            <p v-if="product.color">
              <strong>Couleur :</strong> {{ product.color }}
            </p>
            <p v-if="product.quantity">
              <strong>Quantité disponible :</strong> {{ product.quantity }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, computed } from "vue";
import CarouselComp from "@/components/CarouselComp.vue";

// Props
const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
  isVisible: {
    type: Boolean,
    required: true,
  },
});

// Events
const emit = defineEmits(["close"]);

// Vérifie si le produit a plusieurs images
const hasMultipleImages = computed(() =>
  Array.isArray(props.product.images) && props.product.images.length > 1
);

const closeDetails = () => {
  emit("close");
};
</script>

<style scoped>
/* Modal container */
.product-details-modal {

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
}

/* Modal content */
.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  background: var(--bg-color);
  color: var(--text-color);
  width:90vw;
  max-height: 90vh;
  overflow-y: auto;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  z-index: 2;
  padding: 1rem;
}

/* Close button */
.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--text-color);
}

/* Product gallery */
.product-gallery {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
}

.image-frame {
  width: 100%;
  max-width: 300px;
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--bg-color);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* Product details */
.product-details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.product-name {
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--color-bordeaux);
}

.product-category,
.product-description,
.product-price,
.product-meta li {
  font-size: 1rem;
}

/* Desktop styles */
@media (min-width: 768px) {
  .modal-content {
    flex-direction: row;
    width:1000px;
    max-height: 90vh;
  }

  .modal-body {
    display: flex;
  }

  .product-gallery {
    flex: 1;
    max-width: 40%;
  }

  .image-frame {
    max-width: 400px;
  }

  .product-details {
    flex: 1;
    padding: 1.5rem;
    text-align: left;
  }

  .product-name {
    font-size: 2rem;
  }
}
</style>
