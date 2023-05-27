<script setup lang="ts">
const props = defineProps<{
  isMenuOpen: Boolean
}>()

const emit = defineEmits<{
  (e: 'changeIsMenuOpen'): void
}>()

function changeIsMenuOpen() {
  emit('changeIsMenuOpen')
}

console.log(props.isMenuOpen)
</script>

<template>
  <header class="px-3 py-6 text-center bg-purple-500/[15%] shadow relative">
    <!-- Menu icon -->
    <button
      class="absolute top-0 left-0 p-3 ml-3 mt-3
          text-white/70 hover:text-white/90 z-10
          focus:outline-none transition duration-300
          ease-in-out lg:hidden"
    >
      <i-mingcute-menu-fill class="w-8 h-8" @click="changeIsMenuOpen" />
    </button>
    <!-- Show/Hide sidebar button (lg) -->
    <button
      class="absolute top-0 left-0 p-3 ml-3 mt-3 text-white/70
           hover:text-white/90 z-10 focus:outline-none
           transition duration-300 ease-in-out hidden lg:block"
    >
      <i-charm-chevron-left v-show="props.isMenuOpen" class="w-8 h-8" @click="changeIsMenuOpen" />
      <i-charm-chevron-right v-show="!props.isMenuOpen" class="w-8 h-8" @click="changeIsMenuOpen" />
    </button>
    <!-- Title -->
    <h1 class="text-2xl font-bold text-white/80 drop-shadow-md">
      H
      <span class="font-light">AI</span>
    </h1>
  </header>
</template>
