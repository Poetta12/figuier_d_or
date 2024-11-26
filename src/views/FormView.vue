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
/* Styles de la vue principale */
.form-view {
  max-width: 900px;
  margin: 2rem auto;
  padding: 1rem;
  background: var(--color-bg-transp);
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: var(--text-color);
}

.form-header {
  text-align: center;
  margin-bottom: 2rem;
}

.form-header h1 {
  font-size: 2.5rem;
  color: var(--color-bordeaux);
  margin-bottom: 1rem;
}

.form-header p {
  font-size: 1.2rem;
  color: var(--text-color);
}

.form-selection {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

button {
  padding: 0.7rem 1.5rem;
  font-size: 1.2rem;
  border: 2px solid var(--color-indigo);
  border-radius: 5px;
  background: var(--bg-color);
  color: var(--color-indigo);
  cursor: pointer;
  transition: all 0.3s ease;
}

button.active {
  background: var(--color-indigo);
  color: var(--color-white);
}

button:hover {
  transform: scale(1.05);
}

.form-container {
  margin-top: 2rem;
}
</style>
