<template>
  <div class="horizontal-progress-bar">
    <div v-if="props.showLabel" class="mb-1 flex justify-between">
      <span class="text-sm font-medium">{{ props.label }}</span>
      <span class="text-sm font-medium">{{ props.percentage }}%</span>
    </div>
    <div class="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden">
      <div
        class="h-full rounded-full transition-all duration-300 ease-in-out"
        :style="{
          width: `${props.percentage}%`,
          backgroundColor: getColorValue(props.color),
        }"
      ></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    percentage: number
    color?: string
    label?: string
    showLabel?: boolean
  }>(),
  {
    color: 'danger',
    label: '',
    showLabel: true,
  },
)

// Simple color mapping function that doesn't rely on vuestic-ui
function getColorValue(color: string): string {
  const colorMap: Record<string, string> = {
    primary: '#6E85E8',
    success: '#228200',
    danger: '#E42222',
    warning: '#FFD43A',
    info: '#158DE3',
  }

  return colorMap[color] || color
}
</script>
