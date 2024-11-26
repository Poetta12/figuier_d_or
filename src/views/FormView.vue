<template>
  <div class="form-view">
    <header class="form-header">
      <h1>Contactez-nous ou passez une commande personnalisée</h1>
      <p>
        Sélectionnez une option ci-dessous pour nous contacter ou effectuer une commande sur mesure.
      </p>
    </header>

    <!-- Choix entre Contact et Commande -->
    <div class="form-selection">
      <button
        :class="{ active: selectedForm === 'contact' }"
        @click="selectForm('contact')"
      >
        Contact
      </button>
      <button
        :class="{ active: selectedForm === 'order' }"
        @click="selectForm('order')"
      >
        Commande personnalisée
      </button>
    </div>

    <!-- Formulaire affiché en fonction du choix -->
    <div class="form-container">
      <ContactForm v-if="selectedForm === 'contact'" />
      <CustomOrderForm v-if="selectedForm === 'order'" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Importer les composants des formulaires
import ContactForm from "@/components/ContactForm.vue";
import CustomOrderForm from "@/components/CustomOrderForm.vue";

// État pour le formulaire sélectionné
const selectedForm = ref(null);

// Fonction pour sélectionner un formulaire
const selectForm = (formType) => {
  selectedForm.value = formType;
};
</script>

<style scoped>
/* Conteneur principal */
.form-view {
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem;
  background: var(--bg-color);
  border-radius: 15px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  color: var(--text-color);
  transition: background-color 0.3s ease, color 0.3s ease;
}

/* En-tête */
.form-header {
  text-align: center;
  margin-bottom: 2rem;
}

.form-header h1 {
  font-family: 'Tangerine', cursive;
  font-size: 3rem;
  color: var(--color-bordeaux);
  margin-bottom: 1rem;
}

.form-header p {
  font-family: 'Agbalumo', sans-serif;
  font-size: 1.2rem;
  color: var(--text-color);
}

/* Boutons de sélection */
.form-selection {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

button {
  font-family: 'Agbalumo', sans-serif;
  font-size: 1.2rem;
  padding: 0.7rem 2rem;
  border: 2px solid var(--color-indigo);
  border-radius: 8px;
  background: var(--bg-color);
  color: var(--color-button-DL);
  transition: all 0.3s ease;
}

button.active {
  background: var(--color-indigo);
  color: var(--color-white);
}

button:hover {
  transform: scale(1.05);
  box-shadow: 0 0 10px var(--color-lightgold);
}

/* Conteneur du formulaire */
.form-container {
  margin-top: 2rem;
}
</style>
