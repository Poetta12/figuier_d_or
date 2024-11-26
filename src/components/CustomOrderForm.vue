<template>
  <form class="order-form" @submit.prevent="submitOrder" action="https://formspree.io/f/mvgowznd" method="POST">
    <h2 class="form-title">Commande Personnalisée</h2>

    <!-- Nom -->
    <div class="form-group">
      <label for="name">Nom et prénom</label>
      <input
        name="name"
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
        name="address"
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
          name="city"
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
          name="postalCode"
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
        name="phone"
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
      <input type="hidden" name="type" :value="orderData.type" />
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
      <input type="hidden" name="fragrance" :value="orderData.fragrance" />
    </div>

    <!-- Quantité -->
    <div class="form-group">
      <label for="quantity">Quantité</label>
      <input
        name="quantity"
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
        name="color"
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
        name="message"
        v-model="orderData.message"
        id="message"
        placeholder="Votre message"
      ></textarea>
    </div>

    <!-- Sujet du mail dynamique -->
    <input type="hidden" name="_subject" :value="`Nouvelle commande de ${orderData.name || 'un client'} sur figuierdor.ch`" />


    <!-- Bouton -->
    <button type="submit" class="submit-button">Commander</button>

    <!-- Message de confirmation -->
    <p v-if="orderStatus" :class="{'success-message': isSuccess, 'error-message': !isSuccess}">
      {{ orderStatus }}
    </p>

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
const orderStatus = ref("");
const isSuccess = ref(false);

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
const submitOrder = async () => {
  try {
    const response = await fetch("https://formspree.io/f/mvgowznd", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: orderData.name,
        address: orderData.address,
        city: orderData.city,
        postalCode: orderData.postalCode,
        phone: orderData.phone,
        type: orderData.type,
        fragrance: orderData.fragrance,
        color: orderData.color,
        quantity: orderData.quantity,
        message: orderData.message,
        _subject: `Nouvelle commande de ${orderData.name || "un client"} sur figuierdor.ch`,
      }),
    });

    if (response.ok) {
      orderStatus.value = "Votre commande a été envoyée avec succès !";
      isSuccess.value = true;
      Object.keys(orderData).forEach((key) => (orderData[key] = key === "quantity" ? 1 : ""));
    } else {
      throw new Error("Une erreur est survenue lors de l'envoi de votre commande.");
    }
  } catch (error) {
    orderStatus.value = error.message || "Une erreur inconnue est survenue.";
    isSuccess.value = false;
  }
};
</script>

<style scoped>
/* Styles de base du formulaire */
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
  color: #7a0027; /* Couleur bordeaux */
}

/* Styles pour les champs de formulaire */
.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #3b3f88; /* Couleur indigo */
}

input,
textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #3b3f88; /* Indigo */
  border-radius: 8px;
  font-family: 'Arial', sans-serif;
  font-size: 1rem;
  color: #000; /* Noir */
  box-shadow: inset 4px 4px 10px rgba(0, 0, 0, 0.1), inset -4px -4px 10px rgba(255, 255, 255, 0.6);
}

textarea {
  min-height: 100px;
}

input:focus,
textarea:focus {
  border-color: #f1b24a; /* Light Gold */
  outline: none;
}

/* Bouton de soumission */
.submit-button {
  background: #3b3f88; /* Indigo */
  color: #fff;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-family: 'Arial', sans-serif;
  font-size: 1rem;
  transition: background 0.3s ease;
  cursor: pointer;
}

.submit-button:hover {
  background: #f1b24a; /* Light Gold */
}

/* Dropdowns */
.dropdown {
  position: relative;
  width: 100%;
  border: 1px solid #3b3f88; /* Indigo */
  border-radius: 8px;
  padding: 0.75rem;
  background: white;
  cursor: pointer;
}

.dropdown-header {
  color: #3b3f88; /* Indigo */
}

.dropdown-list {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: white;
  border: 1px solid #3b3f88;
  border-radius: 8px;
  margin-top: 0.5rem;
  z-index: 10;
}

.dropdown-item {
  padding: 0.75rem;
  color: #3b3f88;
  cursor: pointer;
}

.dropdown-item:hover {
  background: #f1b24a; /* Light Gold */
  color: white;
}

/* Inline form layout */
.form-inline {
  display: flex;
  gap: 1rem;
}

.form-group-inline {
  flex: 1;
}

/* Messages de confirmation ou d'erreur */
.success-message {
  color: green;
  text-align: center;
  margin-top: 1rem;
}

.error-message {
  color: red;
  text-align: center;
  margin-top: 1rem;
}

/* Liste sans puce */
li {
  list-style: none;
}
</style>
