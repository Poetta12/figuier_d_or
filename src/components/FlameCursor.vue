<template>
  <div>
    <!-- Curseur flamme -->
    <div
      class="holder"
      :class="{ 'is-hovering': isHovering }"
      :style="{ top: cursorY + 'px', left: cursorX + 'px' }"
    >
      <!-- La figue remplace la bougie -->
      <div class="figue">
        <div class="blinking-glow"></div>
        <div class="thread"></div>
        <div
          class="flame"
          :style="{
            transform: `translateX(-50%) rotate(${flameTilt}deg) skew(${flameCurve}deg, ${flameCurve}deg)`
          }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

// Variables pour la position du curseur et état de hover
const cursorX = ref(0);
const cursorY = ref(0);
const flameTilt = ref(0); // Inclinaison de la flamme
const flameCurve = ref(0); // Courbure de la flamme
const previousX = ref(null); // Stocke la position X précédente
const isHovering = ref(false);

// Remettre la flamme à la position neutre après un délai
let idleTimeout = null;

const resetFlame = () => {
  flameTilt.value = 0;
  flameCurve.value = 0;
};

// Mise à jour de la position du curseur et calcul de l'inclinaison
const updateCursor = (event) => {
  const currentX = event.clientX;

  cursorX.value = currentX;
  cursorY.value = event.clientY + 50;

  // Effacer tout timeout précédent
  if (idleTimeout) clearTimeout(idleTimeout);

  // Calculer l'inclinaison et la courbure
  if (previousX.value !== null) {
    const deltaX = currentX - previousX.value;

    // Ajuster l'inclinaison et la courbure en fonction du déplacement
    if (deltaX > 0) {
      flameTilt.value = -35; // Penché vers la gauche
      flameCurve.value = -8; // Courbé vers la gauche
    } else if (deltaX < 0) {
      flameTilt.value = 35; // Penché vers la droite
      flameCurve.value = 8; // Courbé vers la droite
    } else {
      flameTilt.value = 0; // Pas de mouvement
      flameCurve.value = 0; // Pas de courbure
    }
  }

  // Remettre à neutre après un délai d'inactivité
  idleTimeout = setTimeout(resetFlame, 50);

  // Mettre à jour la position précédente
  previousX.value = currentX;
};

// Activer/désactiver l'état de hover
const handleHover = () => {
  isHovering.value = true;
  //console.log("Hovering on:", event.target);
};

const handleHoverOut = () => {
  isHovering.value = false;
  //console.log("Hover out");
};

// Ajouter les écouteurs pour suivre les interactions
onMounted(() => {
  window.addEventListener("mousemove", updateCursor);

  // Ajouter les écouteurs de manière dynamique via le délégateur d'événements
  document.body.addEventListener("mouseover", (event) => {
    if (
      event.target.matches("button") ||
      event.target.matches("a") ||
      event.target.matches(".hoverable")
    ) {
      handleHover(event);
    }
  });

  document.body.addEventListener("mouseover", (event) => {
    if (
      event.target.matches("button") ||
      event.target.matches("a") ||
      event.target.matches(".hoverable") ||
      event.target.matches("option") || // Ajout des options
      event.target.matches("select")
    ) {
      handleHover(event);
    }
  });

  document.body.addEventListener("mouseout", (event) => {
    if (
      event.target.matches("button") ||
      event.target.matches("a") ||
      event.target.matches(".hoverable") ||
      event.target.matches("option") || // Ajout des options
      event.target.matches("select")
    ) {
      handleHoverOut(event);
    }
  });


});

onBeforeUnmount(() => {
  window.removeEventListener("mousemove", updateCursor);

  // Retirer les écouteurs d'événements globaux
  document.body.removeEventListener("mouseover", handleHover);
  document.body.removeEventListener("mouseout", handleHoverOut);
});
</script>


<style scoped>
@media (min-width: 1024px) {
  /* Conteneur principal */
  .holder {
    position: fixed;
    width: 25px;
    height: 80px;
    transform: translate(-50%, -50%);
    pointer-events: none;
    z-index: 9999999999999;
  }

  select:hover + .holder,
  option:hover + .holder {
    pointer-events: auto; /* Autorise les interactions pour certains éléments */
  }

  /* Corps de la figue */
  .figue {
    position: relative;
    width: 40px;
    height: 50px;
    background: url('../assets/figue.png') no-repeat center center;
    background-size: cover;
  }

  /* Mèche normale */
  .thread {
    position: absolute;
    width: 1px;
    height: 8px;
    top: -5px;
    left: 50%;
    z-index: 1;
    border-radius: 40% 40% 0 0;
    transform: translateX(-50%);
    background: linear-gradient(#d6994a, #4b232c, #121212, black, #e8bb31 90%);
    transition: all 0.3s ease; /* Transition fluide */
  }

  /* Accentuation de la mèche en hover */
  .is-hovering .thread {
    width: 4px;
    height: 15px;
    background: linear-gradient(#ffd700, #ff4500, #8b0000, black, #ff8c00 90%);
    box-shadow: 0 0 6px rgba(255, 215, 0, 0.8), 0 -1px 3px rgba(255, 69, 0, 0.7);
    transform: translateX(-50%) scaleY(1.2); /* Agrandissement vertical */
  }

  /* Flamme avec inclinaison et courbure */
  .flame {
    position: absolute;
    width: 8px;
    height: 25px;
    left: 50%;
    transform-origin: 50% 100%;
    bottom: 100%;
    border-radius: 50% 50% 20% 20%;
    background: linear-gradient(white 80%, transparent);
    animation: enlargeFlame 2s linear infinite;
    transition: all 0.3s ease; /* Transition fluide */
  }

  .flame:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50% 50% 20% 20%;
    box-shadow: 0 0 5px 0 rgba(247, 93, 0, 0.4),
    0 -2px 1px 0 rgba(247, 128, 0, 0.7);
    transition: box-shadow 0.3s ease; /* Transition fluide pour l'effet lumineux */
  }

  /* Flamme agrandie en hover */
  .is-hovering .flame {
    height: 30px;
    width: 10px;
    background: linear-gradient(orange 50%, red); /* Dégradé orange/rouge */
  }

  .is-hovering .flame:before {
    box-shadow: 0 0 10px 0 rgba(255, 69, 0, 0.7), /* Rouge lumineux */
    0 -3px 2px 0 rgba(255, 140, 0, 0.9); /* Orange lumineux */
  }

  /* Animations */
  /* Lueur autour de la flamme */
  .blinking-glow {
    position: absolute;
    width: 25px;
    height: 50px;
    left: 50%;
    top: -50%;
    transform: translateX(-50%);
    border-radius: 50%;
    background: #ff6000;
    filter: blur(12px); /* Réduction du flou */
    animation: blinkIt 0.1s infinite;
    transition: background 0.3s ease, filter 0.3s ease; /* Transition pour la lueur */
  }

  .is-hovering .blinking-glow {
    background: #ff4500; /* Lueur orange/rouge */
    filter: blur(8px); /* Flou réduit pour effet net */
  }
}

@keyframes blinkIt {
  50% {
    opacity: 0.8;
  }
}
</style>

