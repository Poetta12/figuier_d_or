<template>
  <form
    class="contact-form"
    action="https://formspree.io/f/xnnqgjba"
    method="POST"
    @submit.prevent="submitForm"
  >
    <h2 class="form-title">Contactez-nous</h2>

    <!-- Champ Nom -->
    <div class="form-group">
      <label for="name">Nom</label>
      <input name="name" v-model="formData.name" type="text" id="name" placeholder="Votre nom" required />
    </div>

    <!-- Champ Email -->
    <div class="form-group">
      <label for="email">Email</label>
      <input name="email" v-model="formData.email" type="email" id="email" placeholder="Votre email" required />
    </div>

    <!-- Champ Message -->
    <div class="form-group">
      <label for="message">Message</label>
      <textarea name="message" v-model="formData.message" id="message" placeholder="Votre message" required></textarea>
    </div>

    <!-- Bouton Soumettre -->
    <button type="submit" class="submit-button">Envoyer</button>

    <!-- Message de confirmation -->
    <p v-if="formStatus" class="form-status">{{ formStatus }}</p>
  </form>
</template>

<script setup>
import {ref} from "vue";

const formData = ref({
  name: "",
  email: "",
  message: "",
});

const formStatus = ref("");

const submitForm = async () => {
  try {
    const response = await fetch("https://formspree.io/f/xnnqgjba", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.value.name,
        email: formData.value.email,
        message: formData.value.message,
      }),
    });

    if (response.ok) {
      formStatus.value = "Votre message a été envoyé avec succès !";
      formData.value = {name: "", email: "", message: ""}; // Réinitialise le formulaire
    } else {
      throw new Error("Une erreur est survenue. Veuillez réessayer.");
    }
  } catch (error) {
    formStatus.value = error.message;
  }
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
  font-family: 'Agbalumo', sans-serif;
  font-size: 1rem;
  color: var(--color-black);
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
  font-family: 'Agbalumo', sans-serif;
  transition: background 0.3s ease;
}

.submit-button:hover {
  background: var(--color-lightgold);
}

.form-status {
  margin-top: 1rem;
  font-size: 1rem;
  color: var(--color-indigo);
  text-align: center;
}
</style>
