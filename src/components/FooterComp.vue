<template>
  <footer class="footer">
    <div class="footer-container">
      <!-- Logo et slogan -->
      <div class="footer-brand">
        <img src="/logos/logo_wh_big.png" alt="Figuier d'Or" class="footer-logo" />
        <p class="footer-slogan">"La lumière qui illumine vos moments précieux"</p>
      </div>

      <!-- Wrapper des sections -->
      <div class="footer-wrapper">
        <!-- Navigation principale -->
        <div class="footer-section">
          <h3 class="footer-title">Navigation</h3>
          <ul class="footer-links">
            <li><router-link to="/" class="nav-link" exact-active-class="active">Accueil</router-link></li>
            <li><router-link to="/catalogue" class="nav-link" exact-active-class="active">Catalogue</router-link></li>
            <li><router-link to="/form" class="nav-link" exact-active-class="active">Formulaire</router-link></li>
            <li><router-link to="/about" class="nav-link" exact-active-class="active">À propos</router-link></li>
          </ul>
        </div>

        <!-- Support client -->
        <div class="footer-section">
          <h3 class="footer-title">Support Client</h3>
          <ul class="footer-links">
            <li><router-link to="/faq" class="nav-link">FAQ</router-link></li> <!-- Utilisation de router-link -->
            <li><router-link to="/eco-commitment" class="nav-link" exact-active-class="active">Engagement écologique</router-link></li>
            <li><router-link to="/conditions-livraison" class="nav-link">Conditions de livraison</router-link></li>
            <li><a href="/track-order">Suivi de commande</a></li>
          </ul>
        </div>

        <!-- Bloc Contact -->
        <div class="footer-section">
          <h3 class="footer-title">Contactez-nous</h3>
          <ul class="footer-links">
            <li>
              <i class="fas fa-phone"></i>
              <a href="tel:+41 79 624 77 53" class="contact-link">+41 79 624 77 53</a>
            </li>
            <li>
              <i class="fas fa-envelope"></i>
              <a href="mailto:contact@figuierdor.ch" class="contact-link">contact@figuierdor.com</a>
            </li>
            <li>
              <i class="fas fa-map-marker-alt"></i>
              <a>Genève, Suisse</a>
            </li>
          </ul>
        </div>

        <!-- Réseaux sociaux -->
        <div class="footer-section">
          <h3 class="footer-title">Suivez-nous</h3>
          <ul class="footer-links social-icons">
            <li><a href="https://www.instagram.com/figuierdor/" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Bas de page -->
    <div class="footer-bottom">
      <p>&copy; 2024 Figuier d'Or. Tous droits réservés.</p>
      <ul class="footer-legal">
        <li><a href="/terms">Conditions générales</a></li>
        <li><a href="/privacy">Politique de confidentialité</a></li>
        <li><a href="/cookies">Politique de cookies</a></li>
      </ul>
    </div>
  </footer>
</template>

<style scoped>
  /* Base styles */
.footer {
  background: linear-gradient(145deg, #2d2d48, #202032);
  color: var(--color-white);
  padding: 2rem 1rem;
  font-size: 0.9rem;
}

.footer-container {
  margin: 0 auto;
}

/* Logo et slogan */
.footer-brand {
  text-align: center;
  margin-bottom: 2rem;
}

.footer-logo {
  max-width: 100px;
  margin-bottom: 1rem;
}

.footer-slogan {
  font-style: italic;
  color: #d4a017;
  font-size: 1rem;
}

/* Wrapper des sections */
.footer-wrapper {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.footer-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
}

.footer-title {
  position: relative;
  font-size: 3rem;
  margin-bottom: 1rem;
  text-transform: lowercase;
  color: #d4a017;
  display: inline-block;
}

.footer-title:before {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 50%;
  transform: translateX(-50%);
  width: 150%;
  height: 2px;
  background-color: #a88729;
}

.footer-links {
  list-style: none;
  padding: 0;
}

.footer-links li {
  margin-bottom: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}

.footer-links a {
  text-decoration: none;
  color: var(--color-white);
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #d4a017;
}

/* Icônes des réseaux sociaux */
.social-icons {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: fit-content;
}

.social-icons a {
  color: var(--color-white);
  font-size: 1.5rem;
  transition: transform 0.3s ease, color 0.3s ease;
}

.social-icons a:hover {
  color: #d4a017;
  transform: scale(1.1);
}

/* Bas de page */
.footer-bottom {
  border-top: 1px solid #a88729;
  margin-top: 2rem;
  padding-top: 1rem;
  text-align: center;
}

.footer-legal {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.footer-legal a {
  text-decoration: none;
  color: var(--color-white);
  transition: color 0.3s ease;
}

.footer-legal a:hover {
  color: #d4a017;
}

/* Desktop styles */
@media (min-width: 1024px) {
  .footer-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 2rem;
  }

  .footer-section {
    text-align: left;
    flex: 1;
    min-width: 200px;
  }

  .footer-brand {
    display:flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    flex: 1 1 100%;
  }

  .footer-logo {
    max-width: 120px;
  }

  .footer-slogan {
    font-size: 1.2rem;
  }

  .footer-links{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .footer-links a {
    font-size: 1.5rem;
    padding: 0 2rem 0 .5rem;
  }

  .social-icons {
    justify-content: flex-start;
  }
}
</style>
<script setup lang="ts">
</script>
