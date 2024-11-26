<template>
  <div class="catalogue-page">
    <h1 class="catalogue-title">Catalogue des Bougies Artisanales</h1>

    <!-- Composant de filtre -->
    <FilterComp @filter-change="updateFilters" />


    <!-- Grille des produits -->
    <div class="products-grid">
      <ProductFrame
        v-for="product in paginatedProducts"
        :key="product.name"
        :images="product.images"
        :name="product.name"
        :description="product.description"
        :category="product.category || 'Bougies Artisanales'"
        :color="product.color"
        :price="product.price"
        :buttonText="'Découvrir'"
        @actionClick="showDetails(product)"
      />
    </div>

    <!-- Pagination -->
    <PaginationComp
      :currentPage="currentPage"
      :totalPages="totalPages"
      @changePage="goToPage"
    />

    <!-- Composant ProductDetails -->
    <ProductDetails
      v-if="selectedProduct"
      :product="selectedProduct"
      :isVisible="isModalVisible"
      @close="closeModal"
      @addToCart="addToCart"
    />
  </div>
</template>

<script setup>
import ProductFrame from "@/components/ProductFrame.vue";
import ProductDetails from "@/components/ProductDetails.vue";
import PaginationComp from "@/components/PaginationComp.vue";
import FilterComp from "@/components/FilterComp.vue";
import productsData from "../../database/bougies.json";
import { ref, computed } from "vue";

// Liste des produits
const products = ref(productsData);

// Gestion de la fenêtre modale
const selectedProduct = ref(null);
const isModalVisible = ref(false);

// Pagination variables
const currentPage = ref(1);
const itemsPerPage = 9; // Nombre d'éléments par page

const normalizedProducts = computed(() => {
  return products.value.map((product) => {
    return {
      ...product,
      images: Array.isArray(product.images)
        ? product.images
        : product.images
          ? [product.images]
          : [] // Si images est undefined, utiliser un tableau vide
    };
  });
});

// Filtres actifs
const activeFilters = ref({
  search: "",
  category: "",
  color: "",
  priceRange: 100,
});

// Produits filtrés
const filteredProducts = computed(() => {
  return products.value.filter((product) => {
    const matchesSearch = activeFilters.value.search === "" || product.name.toLowerCase().includes(activeFilters.value.search.toLowerCase());
    const matchesCategory = activeFilters.value.category === "" || product.category === activeFilters.value.category;
    const matchesColor = activeFilters.value.color === "" || product.color === activeFilters.value.color;
    const matchesPrice = product.price <= activeFilters.value.priceRange;

    return matchesSearch && matchesCategory && matchesColor && matchesPrice;
  });
});

// Pagination calculée
const totalPages = computed(() => Math.ceil(filteredProducts.value.length / itemsPerPage));
const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  return filteredProducts.value.slice(start, start + itemsPerPage);
});

// Mise à jour des filtres
const updateFilters = (filters) => {
  activeFilters.value = { ...filters };
  currentPage.value = 1; // Réinitialiser à la première page lors de l'application de nouveaux filtres
};

// Actions pour la pagination
const goToPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
};

// Affichage des détails
const showDetails = (product) => {
  selectedProduct.value = product;
  isModalVisible.value = true;
};

// Fermeture de la modale
const closeModal = () => {
  isModalVisible.value = false;
  selectedProduct.value = null;
};

// Ajout au panier
const addToCart = (product) => {
  console.log("Ajouté au panier :", product);
  closeModal();
};
</script>




<style scoped>
/* Base styles for mobile-first design */

.catalogue-page {
  max-width: 1200px;
  margin: auto;
  padding: 1rem;
  background-color: var(--bg-color);
  color: var(--text-color);
}

.catalogue-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

/* Responsive styles for tablets */
@media (min-width: 768px) {
  .catalogue-page {
    padding: 2rem;
  }

  .catalogue-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .products-grid {
    gap: 1.5rem;
  }
}

/* Responsive styles for desktops */
@media (min-width: 1024px) {
  .catalogue-title {
    font-size: 4rem;
  }

  .products-grid {
    gap: 2rem;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
}
</style>
