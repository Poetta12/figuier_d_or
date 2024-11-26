<template>
  <form class="contact-form" @submit.prevent="submitForm">
    <h2 class="form-title">Contactez-nous</h2>
    <div class="form-group">
      <label for="name">Nom</label>
      <input v-model="formData.name" type="text" id="name" placeholder="Votre nom" required />
    </div>
    <div class="form-group">
      <label for="email">Email</label>
      <input v-model="formData.email" type="email" id="email" placeholder="Votre email" required />
    </div>
    <div class="form-group">
      <label for="message">Message</label>
      <textarea v-model="formData.message" id="message" placeholder="Votre message" required></textarea>
    </div>
    <button type="submit" class="submit-button">Envoyer</button>
  </form>
</template>

<script setup>
import { ref } from "vue";

const formData = ref({
  name: "",
  email: "",
  message: "",
});

const submitForm = () => {
  console.log("Formulaire envoyé avec : ", formData.value);
  alert("Votre message a été envoyé avec succès !");
};
</script>

<style scoped>
.contact-form {
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
  font-family: 'Agbalumo', sans-serif; /* Utilise la police définie pour le site */
  font-size: 1rem; /* Taille cohérente avec le design */
  color: var(--color-black); /* Couleur du texte */
  box-shadow: inset 4px 4px 10px rgba(0, 0, 0, 0.1), inset -4px -4px 10px rgba(255, 255, 255, 0.6);
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
  font-family: 'Agbalumo', sans-serif; /* Police du site pour le bouton */
  transition: background 0.3s ease;
}

.submit-button:hover {
  background: var(--color-lightgold);
}
</style>
