<template>
  <header class="header">
    <div class="container">
      <!-- Bouton Toggle Light/Dark -->
      <BougieComp @toggleTheme="updateTheme" />

      <!-- Logo avec lien vers l'accueil -->
      <router-link to="/" class="logo-link">
        <img
          class="logo hoverable"
          :src="theme === 'dark' ? '/logos/logo_wh_big.png' : '/logos/logo_bk_big.png'"
          alt="Figuier D'Or"
        />
      </router-link>

      <!-- Navigation -->
      <nav class="nav">
        <!-- Menu burger pour mobile -->
        <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle Menu">
          <span :class="{ open: isMenuOpen }"></span>
          <span :class="{ open: isMenuOpen }"></span>
          <span :class="{ open: isMenuOpen }"></span>
        </button>

        <!-- Navigation List -->
        <ul :class="{ 'nav-list': true, open: isMenuOpen }">
          <li>
            <router-link to="/" class="nav-link" exact-active-class="active">Accueil</router-link>
          </li>
          <li>
            <router-link to="/catalogue" class="nav-link" exact-active-class="active">Catalogue</router-link>
          </li>
          <li>
            <router-link to="/form" class="nav-link" exact-active-class="active">Formulaire</router-link>
          </li>
          <li>
            <router-link to="/about" class="nav-link" exact-active-class="active">À propos</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from "vue";
import BougieComp from "@/components/BougieComp.vue";

// Sélection de l'élément <body>
let body;

// Assurez-vous que le body est disponible après le montage du composant
onMounted(() => {
  body = document.body;
});

// État pour le menu mobile
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// État pour le mode light/dark
const theme = ref("light");

// Fonction appelée lors du changement de thème
const updateTheme = (newTheme) => {
  theme.value = newTheme;
  body.setAttribute("data-theme", theme.value);
  console.log("Theme updated to:", theme.value);
};
</script>

<style scoped>
/* Styles globaux */

.header {
  background-color: var(--bg-color);
  color: var(--text-color);
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom: 2px solid var(--color-lightgold);
  box-shadow: 0 4px 6px var(--color-darkgold);
}

.container {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  max-width: 150px;
  transition: opacity 0.3s ease;
}

.menu-toggle {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.menu-toggle span {
  width: 30px;
  height: 3px;
  background-color: var(--color-lightgold);
  border-radius: 2px;
  transition: all 0.3s ease;
}

.menu-toggle span.open:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.menu-toggle span.open:nth-child(2) {
  opacity: 0;
}

.menu-toggle span.open:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

.nav {
  position: relative;
  border: 1px solid var(--color-footer-pg-title);
  border-radius: 10px;
  padding: 15px 0;
}

.nav-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  background-color: var(--bg-color);
  border-radius: 8px;
  position: absolute;
  top: 0;
  right: -10px;
  width: 230%;
  transform: translateY(-250%);
  transition: transform 0.3s ease-in-out;
  border: 1px solid var(--color-lightgold);
}

.nav-list.open {
  transform: translateY(80%);
}

.nav-link {
  font-size: 1rem;
  color: var(--color-footer-pg-title);
  text-decoration: none;
  margin: 0.5rem 0;
  transition: color 0.3s ease;
}

.nav-link.active {
  font-weight: bold;
  text-decoration: underline;
  color: var(--text-color); /* Conservez la couleur du texte */
  text-shadow: 0 0 10px var(--color-lightgold), 0 0 20px var(--color-lightgold);
}


.nav-link:hover {
  color: var(--color-bordeaux);
}

@media (min-width: 768px) {
  .menu-toggle {
    display: none;
  }

  .nav-list {
    position: static;
    flex-direction: row;
    justify-content: flex-end;
    width: auto;
    background: none;
    border: none;
    transform: translateY(0);
  }

  .nav-link {
    font-size: 1.2rem;
  }

  .logo {
    max-width: 200px;
  }
}

@media (min-width: 1024px) {
  header {
    height: 15vh;
  }

  .nav-link {
    font-size: 1.5rem;
  }

  .logo {
    max-width: 250px;
  }
}
</style>
