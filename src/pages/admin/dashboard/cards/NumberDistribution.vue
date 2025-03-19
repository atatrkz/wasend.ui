<template>
  <VaCard>
    <VaCardTitle>Number Distribution</VaCardTitle>
    <VaCardContent>
      <div v-if="isLoading" class="flex justify-center items-center h-32">
        <div class="spinner"></div>
      </div>
      <div v-else class="flex flex-col gap-4">
        <div class="flex flex-col gap-2">
          <HorizontalProgressBar :percentage="bannedPercentage" color="danger" label="Banned Numbers" />
          <HorizontalProgressBar :percentage="activePercentage" color="success" label="Active Numbers" />
          <HorizontalProgressBar :percentage="pendingPercentage" color="warning" label="Pending Numbers" />
        </div>

        <div class="mt-2 grid grid-cols-3 gap-2 text-center">
          <div class="p-2 rounded bg-gray-100">
            <div class="text-xl font-bold">{{ totalNumbers }}</div>
            <div class="text-xs text-secondary">Total</div>
          </div>
          <div class="p-2 rounded bg-gray-100">
            <div class="text-xl font-bold text-success">{{ activeNumbers }}</div>
            <div class="text-xs text-secondary">Active</div>
          </div>
          <div class="p-2 rounded bg-gray-100">
            <div class="text-xl font-bold text-danger">{{ bannedNumbers }}</div>
            <div class="text-xs text-secondary">Banned</div>
          </div>
        </div>
      </div>
    </VaCardContent>
  </VaCard>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { VaCard, VaCardTitle, VaCardContent } from 'vuestic-ui'
import HorizontalProgressBar from '../../../../components/va-charts/chart-types/HorizontalProgressBar.vue'

// State
const isLoading = ref(true)
const bannedNumbers = ref(53)
const activeNumbers = ref(42)
const pendingNumbers = ref(5)

// Computed values
const totalNumbers = computed(() => bannedNumbers.value + activeNumbers.value + pendingNumbers.value)
const bannedPercentage = computed(() => Math.round((bannedNumbers.value / totalNumbers.value) * 100))
const activePercentage = computed(() => Math.round((activeNumbers.value / totalNumbers.value) * 100))
const pendingPercentage = computed(() => Math.round((pendingNumbers.value / totalNumbers.value) * 100))

// Set loading to false after a short delay (simulating API call)
setTimeout(() => {
  isLoading.value = false
}, 500)
</script>

<style scoped>
.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  border-top-color: #6e85e8;
  animation: spin 1s ease-in-out infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
