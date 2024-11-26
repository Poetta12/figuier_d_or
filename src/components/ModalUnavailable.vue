<template>
  <div v-if="isVisible" class="modal">
    <div class="modal-overlay" @click="close"></div>
    <div class="modal-content">
      <h2 class="modal-title">Bientôt disponible</h2>
      <p class="modal-message">
        Ce produit sera bientôt disponible. Merci de votre patience !
      </p>
      <button class="close-button" @click="close">Fermer</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

// Props
defineProps({
  isVisible: {
    type: Boolean,
    required: true, // Contrôle si la modale est affichée
  },
});

// Événements émis
const emit = defineEmits(["close"]);

// Fonction pour fermer la modale
const close = () => {
  emit("close");
};
</script>

<style scoped>
/* Styles de la modale */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
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
  background: rgba(0, 0, 0, 0.5);
}

.modal-content {
  position: relative;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  z-index: 1001;
  max-width: 400px;
  width: 90%;
}

.modal-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--color-bordeaux);
}

.modal-message {
  font-size: 1rem;
  margin-bottom: 1.5rem;
  color: var(--color-indigo);
}

.close-button {
  background: var(--color-indigo);
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.close-button:hover {
  background: var(--color-lightgold);
  transform: scale(1.05);
}
</style>
