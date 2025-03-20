<template>
  <div>
    <h1 class="page-title font-bold">Number Pool</h1>
    <section class="flex flex-col gap-4">
      <div>
        <NumberDistribution class="w-full" />
      </div>
    </section>
  </div>
</template>

<script lang="ts" setup>
import NumberDistribution from '../admin/dashboard/cards/NumberDistribution.vue'
</script>
