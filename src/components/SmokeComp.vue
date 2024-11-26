<template>
  <!-- Fumée visible uniquement en mode light -->
  <svg
    class="smoke hoverable"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 200"
  >
    <!-- Chemins originaux -->
    <path
      class="smoke-path layer1"
      d="M50 150 C 30 130, 70 110, 50 90 S 30 50, 50 30"
    />
    <path
      class="smoke-path layer2"
      d="M50 150 C 40 120, 60 100, 50 70 S 40 40, 50 20"
    />
    <path
      class="smoke-path layer3"
      d="M50 150 C 20 140, 80 120, 50 60 S 20 30, 50 10"
    />
    <path
      class="smoke-path layer4"
      d="M50 150 C 20 140, 80 120, 50 60 S 20 30, 50 10"
    />

    <!-- Chemins inversés horizontalement -->
    <g transform="scale(-1, 1) translate(-100, 0)">
      <path
        class="smoke-path layer1"
        d="M50 150 C 30 130, 70 110, 50 90 S 30 50, 50 30"
      />
      <path
        class="smoke-path layer2"
        d="M50 150 C 40 120, 60 100, 50 70 S 40 40, 50 20"
      />
      <path
        class="smoke-path layer3"
        d="M50 150 C 20 140, 80 120, 50 60 S 20 30, 50 10"
      />
      <path
        class="smoke-path layer4"
        d="M50 150 C 20 140, 80 120, 50 60 S 20 30, 50 10"
      />
    </g>

    <!-- Chemins inversés horizontalement avec un décalage supplémentaire -->
    <g transform="scale(-1, 1) translate(-100, 0)">
      <path
        class="smoke-path layer1"
        d="M50 150 C 30 130, 70 110, 50 90 S 30 50, 50 30"
      />

      <path
        class="smoke-path layer3"
        d="M50 150 C 20 140, 80 120, 50 60 S 20 30, 50 10"
      />
      <path
        class="smoke-path layer2"
        d="M50 150 C 40 120, 60 100, 50 70 S 40 40, 50 20"
      />
      <path
        class="smoke-path layer4"
        d="M50 150 C 20 140, 80 120, 50 60 S 20 30, 50 10"
      />
    </g>
  </svg>
</template>

<script setup>
</script>

<style scoped>
/* Styles de la fumée */
.smoke {
  position: absolute;
  top: -155px;
  left: 52%;
  width: 100px;
  height: 200px;
  transform: translateX(-50%);
}

.smoke-path {
  fill: none;
  stroke: rgba(50, 50, 50, 0.5);
  stroke-width: 2;
  stroke-dasharray: 200;
  stroke-dashoffset: 200;
  animation: smokeRise 4s ease-in-out infinite, drift 6s ease-in-out infinite;
}

.layer1 {
  animation-delay: 0s;
}

.layer2 {
  stroke-width: 1.5;
  animation-delay: 1s;
}

.layer3 {
  stroke-width: 1;
  animation-delay: 2s;
}

.layer4 {
  stroke-width: 1;
  animation-delay: 2s;
}

/* Animations */
@keyframes smokeRise {
  0% {
    stroke-dashoffset: 200;
    opacity: 0.5;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    stroke-dashoffset: 0;
    opacity: 0;
  }
}

@keyframes drift {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-5px);
  }
  50% {
    transform: translateX(0);
  }
  75% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
