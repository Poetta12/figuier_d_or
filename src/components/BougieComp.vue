<template>
  <div class="holder button" @click="toggleTheme">
      <div class="figue hoverable">

        <!-- Glow et flamme visibles uniquement en mode dark -->
        <div v-if="theme === 'dark'" class="blinking-glow"></div>
        <div class="thread"></div>
        <div v-if="theme === 'dark'" class="glow" :class="{ 'fade-in': isTransitioning }"></div>
        <div
          v-if="theme === 'dark'"
          class="flame"
          :class="{ 'grow-flame': isTransitioning }"
        ></div>

        <!-- Fumée visible uniquement en mode light -->
        <SmokeComp v-if="theme === 'light'"/>
      </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import SmokeComp from "@/components/SmokeComp.vue";

// Déclarer les événements émis par le composant
const emit = defineEmits(["toggleTheme"]);

// Gestion du thème
const theme = ref("light"); // Thème par défaut
const isTransitioning = ref(false);

// Basculer le thème avec une animation et notifier le parent
const toggleTheme = () => {
  isTransitioning.value = true;

  // Ajout d'une transition pour la flamme ou la fumée
  setTimeout(() => {
    theme.value = theme.value === "dark" ? "light" : "dark";
    isTransitioning.value = false;

    // Notifier le parent du changement
    emit("toggleTheme", theme.value);

    // Appliquer le thème sur le body
    document.body.setAttribute("data-theme", theme.value);
  }, 100); // Durée de l'animation
};
</script>

<style scoped>
/* Base pour la bougie */
.holder * {
  position: absolute;
  content: "";
}

.holder {
  width: 65px;
  height: 20px;
  position: relative;
  display: flex;
  justify-content: center;
}

.figue {
  position: relative;
  width: 40px;
  height: 50px;
  background: url('../assets/figue.png') no-repeat center center;
  background-size: cover;
}

.thread {
  width: 3px;
  height: 18px;
  top: -9px;
  left: 50%;
  border-radius: 40% 40% 0 0;
  transform: translateX(-50%);
  background: linear-gradient(#d6994a, #4b232c, #121212, black, #e8bb31 90%);
}

/* Flamme */
.flame {
  width: 7px;
  height: 40px;
  left: 50%;
  transform-origin: 50% 100%;
  transform: translateX(-50%);
  bottom: 100%;
  border-radius: 50% 50% 20% 20%;
  background: linear-gradient(white 80%, transparent);
  animation: enlargeFlame 2s linear infinite;
  transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
}

.grow-flame {
  animation: growFlame 0.8s ease-in-out;
}

@keyframes growFlame {
  0% {
    height: 0;
    opacity: 0;
  }
  100% {
    height: 45px;
    opacity: 1;
  }
}

</style>
