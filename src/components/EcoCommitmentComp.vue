<template>
  <section class="eco-commitment">
    <h2 class="eco-title">Notre Engagement Écologique</h2>
    <div class="eco-wrapper">
      <p>
        Chez <strong>Figuier d'Or</strong>, nous croyons en la création de produits
        respectueux de l'environnement et de votre bien-être. Nos bougies sont fabriquées
        avec des matériaux naturels et durables, garantissant une empreinte écologique minimale.
      </p>
      <div class="eco-content">
        <div class="eco-text">
          <ul class="eco-group">
            <li>
              <div class="icon-group">
                <i class="fas fa-leaf"></i>
                <p><strong>Cire Naturelle :</strong></p>
              </div>
              <p>Nous utilisons principalement de la cire de soja et de la cire d'abeille, sans additifs chimiques nocifs.</p>
            </li>
            <li>
              <div class="icon-group">
                <i class="fas fa-recycle"></i>
                <p><strong>Emballages Écoresponsables :</strong></p>
              </div>
              <p>Nos emballages sont 100% recyclables et conçus pour réduire les déchets.</p>
            </li>
            <li>
              <div class="icon-group">
                <i class="fas fa-tree"></i>
                <p><strong>Approvisionnement Local :</strong></p>
              </div>
              <p>Nous privilégions des matières premières issues de fournisseurs locaux pour limiter notre impact carbone.</p>
            </li>
          </ul>
        </div>
        <div class="eco-image">
          <img src="/deco_img/eco.webp" alt="Engagement écologique" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
/* Mobile-first styles */

/* Section principale */
.eco-commitment {
  padding: 1.5rem 1rem;
  background: var(--color-bg-transp);
  color: var(--text-color);
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin: 1.5rem auto;
}

/* Titre principal */
.eco-title {
  text-align: center;
  font-size: 2.3rem;
  font-family: 'Tangerine', cursive;
  font-weight: bold;
  color: var(--color-footer-pg-title);
  margin-bottom: 1rem;
}

/* Wrapper de contenu */
.eco-wrapper > p {
  margin-bottom: 1.5rem;
  font-size: 1rem;
  line-height: 1.6;
  text-align: justify;
  color: var(--text-color);
}

.eco-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* Contenu texte */
.eco-text {
  flex: 1;
}

.eco-group {
  margin: 0;
  padding: 0;
  list-style: none;
}

.eco-group li {
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: var(--text-color);
  font-size: 0.9rem;
}

.icon-group {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.icon-group i {
  font-size: 1.2rem;
  color: var(--color-lightgold);
}

/* Image */
.eco-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.eco-image img {
  max-width: 100%;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.eco-image img:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

/* Responsive Styles */

/* Tablettes (min-width: 768px) */
@media (min-width: 768px) {
  .eco-commitment {
    padding: 2rem;
    margin: 2rem auto;
  }

  .eco-title {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  .eco-wrapper > p {
    font-size: 1.1rem;
    line-height: 1.8;
  }

  .eco-content {
    flex-direction: row;
    gap: 2rem;
  }

  .eco-group li {
    font-size: 1rem;
  }

  .icon-group i {
    font-size: 1.5rem;
  }
}

/* Desktop (min-width: 1024px) */
@media (min-width: 1024px) {
  .eco-commitment {
    max-width: 1200px;
  }

  .eco-title {
    font-size: 4rem;
  }

  .eco-wrapper > p {
    font-size: 1.2rem;
  }

  .eco-content {
    gap: 3rem;
  }
}
</style>
