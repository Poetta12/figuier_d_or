<template>
  <div class="pagination">
    <button
      class="page-btn"
      :disabled="currentPage === 1"
      @click="$emit('changePage', currentPage - 1)"
    >
      «
    </button>
    <button
      v-for="page in totalPages"
      :key="page"
      :class="['page-btn', { active: currentPage === page }]"
      @click="$emit('changePage', page)"
    >
      {{ page }}
    </button>
    <button
      class="page-btn"
      :disabled="currentPage === totalPages"
      @click="$emit('changePage', currentPage + 1)"
    >
      »
    </button>
  </div>
</template>

<script setup>
defineProps({
  currentPage: {
    type: Number,
    required: true,
  },
  totalPages: {
    type: Number,
    required: true,
  },
});

defineEmits(['changePage']);
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  margin-top: 2rem;
}

.page-btn {
  background-color: var(--bg-color);
  border: 1px solid var(--text-color);
  color: var(--text-color);
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: background-color 0.3s, color 0.3s;
}

.page-btn:hover:not(:disabled) {
  background-color: var(--text-color);
  color: var(--bg-color);
}

.page-btn:disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

.page-btn.active {
  background-color: var(--text-color);
  color: var(--bg-color);
  font-weight: bold;
}
</style>
