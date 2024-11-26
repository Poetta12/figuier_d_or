<template>
  <form class="order-form" @submit.prevent="submitOrder">
    <h2 class="form-title">Commande Personnalisée</h2>

    <!-- Nom -->
    <div class="form-group">
      <label for="name">Nom et prénom</label>
      <input
        v-model="orderData.name"
        type="text"
        id="name"
        placeholder="Votre nom et prénom"
        required
      />
    </div>

    <!-- Adresse -->
    <div class="form-group">
      <label for="address">Adresse complète</label>
      <input
        v-model="orderData.address"
        type="text"
        id="address"
        placeholder="Votre adresse complète"
        required
      />
    </div>

    <!-- Ville et Code postal -->
    <div class="form-inline">
      <div class="form-group-inline">
        <label for="city">Ville</label>
        <input
          v-model="orderData.city"
          type="text"
          id="city"
          placeholder="Ville"
          required
        />
      </div>
      <div class="form-group-inline">
        <label for="postalCode">Code postal</label>
        <input
          v-model="orderData.postalCode"
          type="text"
          id="postalCode"
          placeholder="Code postal"
          required
        />
      </div>
    </div>

    <!-- Téléphone -->
    <div class="form-group">
      <label for="phone">Téléphone</label>
      <input
        v-model="orderData.phone"
        type="text"
        id="phone"
        placeholder="Votre numéro de téléphone"
        required
      />
    </div>

    <!-- Type de bougie -->
    <div class="form-group">
      <label for="type">Type de bougie</label>
      <div class="dropdown" @click="toggleDropdown('type')">
        <div class="dropdown-header">
          {{ orderData.type || "Sélectionnez le type de bougie" }}
        </div>
        <ul v-if="isDropdownOpen.type" class="dropdown-list">
          <li
            v-for="option in types"
            :key="option"
            class="dropdown-item"
            @click.stop="handleTypeSelection(option)"
          >
            {{ option }}
          </li>
        </ul>
      </div>
    </div>

    <!-- Parfum -->
    <div class="form-group">
      <label for="fragrance">Parfum</label>
      <div class="dropdown" @click="toggleDropdown('fragrance')">
        <div class="dropdown-header">
          {{ orderData.fragrance || "Choisissez un parfum" }}
        </div>
        <ul v-if="isDropdownOpen.fragrance" class="dropdown-list">
          <li
            v-for="option in fragrances"
            :key="option"
            class="dropdown-item"
            @click.stop="selectOption('fragrance', option)"
          >
            {{ option }}
          </li>
        </ul>
      </div>
    </div>

    <!-- Quantité -->
    <div class="form-group">
      <label for="quantity">Quantité</label>
      <input
        v-model.number="orderData.quantity"
        type="number"
        id="quantity"
        min="1"
        placeholder="Nombre d'articles"
        required
      />
    </div>

    <!-- Couleur -->
    <div class="form-group">
      <label for="color">Couleur</label>
      <input
        v-model="orderData.color"
        type="text"
        id="color"
        placeholder="Couleur désirée"
      />
    </div>

    <!-- Message personnalisé -->
    <div class="form-group">
      <label for="message">Message personnalisé (optionnel)</label>
      <textarea
        v-model="orderData.message"
        id="message"
        placeholder="Votre message"
      ></textarea>
    </div>

    <!-- Bouton -->
    <button type="submit" class="submit-button">Commander</button>

    <!-- Modal pour les bougies non disponibles -->
    <ModalUnavailable
      :isVisible="isModalVisible"
      @close="closeModal"
    />
  </form>
</template>

<script setup>
import { reactive, ref, onMounted } from "vue";
import ModalUnavailable from "@/components/ModalUnavailable.vue";

// Données pour les types de bougies et parfums
const types = [
  "Bougie moulée",
  "Bougie parfumée",
  "Bougie gourmande",
  "Bougie de massage",
  "Fondant",
  "Bougie de méditation",
];

const availableTypes = ["Bougie moulée", "Bougie parfumée"];

const fragrances = [
  "Booster your life (fruité)",
  "Monoï",
  "Iris & Lavande",
  "Christmas très (pin, eucalyptus)",
  "Ylang Ylang",
  "Ambre patchouli",
  "Sauge",
  "Thym",
  "Figue",
  "Lavandin",
];

// État du formulaire
const orderData = reactive({
  name: "",
  address: "",
  city: "",
  postalCode: "",
  phone: "",
  type: "",
  fragrance: "",
  color: "",
  quantity: 1,
  message: "",
});

// Gestion des dropdowns
const isDropdownOpen = reactive({
  type: false,
  fragrance: false,
});

const isModalVisible = ref(false);

const toggleDropdown = (key) => {
  Object.keys(isDropdownOpen).forEach((dropdown) => {
    isDropdownOpen[dropdown] = dropdown === key ? !isDropdownOpen[dropdown] : false;
  });
};

// Sélection d'un type de bougie
const handleTypeSelection = (type) => {
  if (!availableTypes.includes(type)) {
    isModalVisible.value = true;
  } else {
    selectOption("type", type);
  }
};

// Fermer la modale
const closeModal = () => {
  isModalVisible.value = false;
};

// Sélection d'une option dans le dropdown
const selectOption = (key, option) => {
  orderData[key] = option;
  isDropdownOpen[key] = false;
};

// Fermer tous les dropdowns si clic en dehors
const closeAllDropdowns = (event) => {
  if (!event.target.closest(".dropdown")) {
    Object.keys(isDropdownOpen).forEach((key) => (isDropdownOpen[key] = false));
  }
};

onMounted(() => {
  window.addEventListener("click", closeAllDropdowns);
});

// Soumission du formulaire
const submitOrder = () => {
  console.log("Commande envoyée :", orderData);
  alert("Votre commande a été envoyée !");
};
</script>

<style scoped>
/* Styles pour le formulaire */
li{
  list-style: none;
}
.order-form {
  max-width: 600px;
  margin: 2rem auto;
  background: linear-gradient(145deg, #f8f8f8, #e0e0e0);
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.1), -8px -8px 16px rgba(255, 255, 255, 0.7);
}

.form-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: var(--color-bordeaux);
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: var(--color-indigo);
}

input,
textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid var(--color-indigo);
  border-radius: 8px;
  box-shadow: inset 4px 4px 10px rgba(0, 0, 0, 0.1), inset -4px -4px 10px rgba(255, 255, 255, 0.6);
  font-family: 'Agbalumo', sans-serif; /* Utilise la police définie pour le site */
  font-size: 1rem; /* Taille cohérente avec le design */
  color: var(--color-black); /* Couleur du texte */
}

textarea {
  min-height: 100px;
}

input:focus,
textarea:focus {
  border-color: var(--color-lightgold);
  outline: none;
}

.submit-button {
  background: var(--color-indigo);
  color: #fff;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  transition: background 0.3s ease;
}

.submit-button:hover {
  background: var(--color-lightgold);
}

/* Styles pour les dropdowns */
.dropdown {
  position: relative;
  width: 100%;
  border: 1px solid var(--color-indigo);
  border-radius: 8px;
  padding: 0.75rem;
  background: white;
}

.dropdown-header {
  color: var(--color-indigo);
}

.dropdown-list {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid var(--color-indigo);
  border-radius: 8px;
  margin-top: 0.5rem;
  z-index: 10;
}

.dropdown-item {
  padding: 0.75rem;
  color: var(--color-indigo);
}

.dropdown-item:hover {
  background: var(--color-lightgold);
  color: white;
}

.form-inline {
  display: flex;
  gap: 1rem;
}

.form-group-inline {
  flex: 1;
}
</style>
