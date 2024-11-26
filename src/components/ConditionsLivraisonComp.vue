<template>
  <section class="delivery-conditions">
    <h2 class="section-title">Conditions de Livraison</h2>
    <div>
      <p>
        Chez <strong>Figuier d'Or</strong>, nous mettons tout en œuvre pour que votre commande
        arrive en parfait état et dans les délais prévus. Voici tout ce que vous devez savoir
        sur nos conditions de livraison :
      </p>
      <div class="delivery-wrapper">
        <div class="delivery-text">
          <ul class="delivery-list">
            <li>
              <div>
                <i class="fas fa-clock"></i>
                <strong>Délais de livraison :</strong>
              </div>
              <p>Les commandes sont livrées sous <span>3 à 5 jours ouvrés</span> en France métropolitaine. Pour les commandes personnalisées, un délai supplémentaire peut être requis.</p>
            </li>
            <li>
              <div>
                <i class="fas fa-shipping-fast"></i>
                <strong>Modes de livraison :</strong>
              </div>
              <p>Nous proposons plusieurs options de livraison, y compris standard, express et point relais.</p>
            </li>
            <li>
              <div>
                <i class="fas fa-box"></i>
                <strong>Emballage sécurisé :</strong>
              </div>
              <p>Toutes nos bougies sont soigneusement emballées pour éviter tout dommage pendant le transport.</p>
            </li>
            <li>
              <div>
                <i class="fas fa-map-marker-alt"></i>
                <strong>Zones de livraison :</strong>
              </div>
              <p>Nous livrons en Suisse et France, dans les DOM-TOM et à l'international. Des frais supplémentaires peuvent s'appliquer pour certaines zones.</p>
            </li>
            <li>
              <div>
                <i class="fas fa-sync-alt"></i>
                <strong>Suivi de commande :</strong>
              </div>
              <p>Un numéro de suivi vous sera communiqué dès l'expédition pour suivre votre commande en temps réel.</p>
            </li>
          </ul>
        </div>
        <div class="delivery-image">
          <img src="/deco_img/Delivery.webp" alt="Conditions de livraison" />
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
.delivery-conditions {
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

/* Titre de la section */
.section-title {
  text-align: center;
  font-size: 2rem;
  font-family: 'Tangerine', cursive;
  font-weight: bold;
  color: var(--color-footer-pg-title);
  margin-bottom: 1.2rem;
}

/* Wrapper principal */
.delivery-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

/* Texte */
.delivery-text {
  flex: 1;
  font-size: 0.9rem;
  line-height: 1.6;
}

.delivery-list {
  margin-top: 1rem;
  padding: 0;
  list-style: none;
}

.delivery-list li {
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: var(--text-color);
}

.delivery-list li i {
  font-size: 1.2rem;
  color: var(--color-lightgold);
  margin-right: 0.5rem;
}

/* Image */
.delivery-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.delivery-image img {
  max-width: 100%;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.delivery-image img:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

/* Responsive styles */

/* Tablettes (min-width: 768px) */
@media (min-width: 768px) {
  .delivery-conditions {
    padding: 2rem;
    margin: 2rem auto;
  }

  .section-title {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
  }

  .delivery-wrapper {
    flex-direction: row;
    gap: 2rem;
  }

  .delivery-text {
    font-size: 1rem;
    line-height: 1.8;
  }

  .delivery-list li {
    font-size: 1rem;
  }

  .delivery-list li i {
    font-size: 1.5rem;
  }
}

/* Desktop (min-width: 1024px) */
@media (min-width: 1024px) {
  .delivery-conditions {
    max-width: 1200px;
  }

  .section-title {
    font-size: 4rem;
  }

  .delivery-wrapper {
    gap: 3rem;
  }

  .delivery-text {
    flex: 2;
  }

  .delivery-image {
    flex: 1;
  }
}
</style>
