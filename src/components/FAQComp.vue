<template>
  <section class="faq">
    <h2 class="faq-title">Questions Fréquemment Posées</h2>
    <div class="faq-list">
      <div v-for="(item, index) in faqItems" :key="index" class="faq-item">
        <button class="faq-question" @click="toggleAnswer(index)">
          {{ item.question }}
          <span class="faq-icon">{{ openedIndex === index ? "-" : "+" }}</span>
        </button>
        <div v-if="openedIndex === index" class="faq-answer">
          <p>{{ item.answer }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const faqItems = ref([
  {
    question: "Quels matériaux utilisez-vous pour fabriquer vos bougies ?",
    answer:
      "Nos bougies sont fabriquées à partir de cire 100% naturelle, principalement de la cire de soja, et des mèches en coton sans plomb pour garantir une combustion propre.",
  },
  {
    question: "Proposez-vous des bougies personnalisées ?",
    answer:
      "Oui, nous proposons des bougies personnalisées pour des événements spéciaux comme les mariages, anniversaires ou fêtes d'entreprise. Contactez-nous pour plus de détails.",
  },
  {
    question: "Quels parfums sont disponibles dans votre boutique ?",
    answer:
      "Nous avons une large gamme de parfums, allant des classiques comme la vanille et la lavande aux exclusifs comme figue dorée et bois de oud.",
  },
  {
    question: "Comment dois-je entretenir mes bougies ?",
    answer:
      "Coupez la mèche à 5 mm avant chaque utilisation pour une combustion uniforme. Évitez de laisser une bougie allumée plus de 4 heures d'affilée.",
  },
  {
    question: "Quels sont vos délais de livraison ?",
    answer:
      "Nous livrons en 3 à 5 jours ouvrés en France métropolitaine. Pour les commandes personnalisées, un délai supplémentaire peut être nécessaire.",
  },
  {
    question: "Vos bougies sont-elles écologiques ?",
    answer:
      "Oui, nous utilisons des matériaux respectueux de l'environnement, des emballages recyclables et nous privilégions les fournisseurs locaux.",
  },
  {
    question: "Puis-je retourner ou échanger un article ?",
    answer:
      "Les articles non personnalisés peuvent être retournés ou échangés sous 14 jours après réception, à condition qu'ils soient non utilisés.",
  },
]);

const openedIndex = ref(null);

const toggleAnswer = (index) => {
  openedIndex.value = openedIndex.value === index ? null : index;
};
</script>

<style scoped>
/* Conteneur principal FAQ */
.faq {
  padding: 1.5rem 1rem;
  background: var(--bg-color);
  color: var(--text-color);
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  max-width: 100%;
  margin: auto;
}

/* Titre */
.faq-title {
  text-align: center;
  font-size: 2.3rem;
  font-weight: 600;
  margin-bottom: 1.2rem;
  color: var(--color-footer-pg-title);
}

/* Liste des items */
.faq-list {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

/* Chaque question */
.faq-item {
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.faq-item:hover {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
  transform: translateY(-2px);
}

/* Bouton question */
.faq-question {
  width: 100%;
  text-align: left;
  padding: 0.8rem 1rem;
  background: var(--color-indigo);
  color: var(--color-lightgold);
  font-size: 0.95rem;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.faq-question:hover {
  background: var(--color-darkgold);
}

/* Icône (+/-) */
.faq-icon {
  font-size: 1.2rem;
}

/* Réponse */
.faq-answer {
  padding: 0.8rem 1rem;
  background: var(--bg-color);
  color: var(--text-color);
  font-size: 0.85rem;
  line-height: 1.5;
}

/* Responsive styles */

/* Tablettes (min-width: 768px) */
@media (min-width: 768px) {
  .faq {
    padding: 2rem;
    max-width: 90%;
  }

  .faq-title {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  .faq-question {
    font-size: 1rem;
  }

  .faq-answer {
    font-size: 0.9rem;
  }
}

/* Desktop (min-width: 1024px) */
@media (min-width: 1024px) {
  .faq {
    max-width: 800px;
  }

  .faq-title {
    font-size: 4rem;
    margin-bottom: 2rem;
  }

  .faq-question {
    font-size: 1.1rem;
  }

  .faq-answer {
    font-size: 1rem;
  }
}
</style>

