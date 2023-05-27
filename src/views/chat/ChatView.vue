<script setup lang="ts">
import { storeToRefs } from 'pinia'
import ChatSidebar from './components/ChatSidebar.vue'
import ChatFooter from './components/ChatFooter.vue'
import ChatHerader from './components/ChatHerader.vue'
import ChatMain from './components/main/ChatMain.vue'

// import 'fork-corner/dist/fork-corner.css'
import { useAppStore } from '@/stores/modules/app'

const appStore = useAppStore()
const { isMenuOpen, isMenuOpening } = storeToRefs(appStore)

console.log(isMenuOpen, isMenuOpening, 'isMenuOpen, isMenuOpening')

function changeIsMenuOpen() {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<template>
  <div class="flex flex-row min-h-screen text-slate-300">
    <ChatSidebar :is-menu-open="isMenuOpen" :is-menu-opening="isMenuOpening" />
    <Transition name="fade">
      <div
        v-if="isMenuOpen"
        class="fixed inset-0 bg-black/30 z-10 lg:hidden" aria-hidden="true"
        @click="isMenuOpen = false"
      />
    </Transition>
    <div
      class="flex flex-col flex-1 w-full"
      :class="{
        'lg:ml-[20rem] transition-all ease-in-out': isMenuOpening,
        'lg:ml-0': !isMenuOpening,
      }"
    >
      <ChatHerader :is-menu-open="isMenuOpen" @change-is-menu-open="changeIsMenuOpen" />

      <main class="flex flex-grow py-2">
        <ChatMain />
      </main>
      <ChatFooter />
    </div>
  </div>
</template>

<style>
/* :root {
  --background: hsl(240, 80%, 10%);
}

body {
  background: radial-gradient(60vmax 60vmax at 0% 0%,
      hsla(240, 100%, 2%, 0.9) 0%,
      hsla(240, 100%, 2%, 0) 95%),
    radial-gradient(80vmax 50vmax at 110% -10%,
      hsla(175, 100%, 60%, 0.9) 0%,
      hsla(200, 100%, 50%, 0.5) 50%,
      hsla(240, 100%, 50%, 0) 95%),
    radial-gradient(90vmax 50vmax at 50vmax 50vmax,
      hsla(260, 100%, 60%, 0.9) 0%,
      hsla(240, 100%, 60%, 0) 95%) var(--background);
} */

:root {
  --background: #fd684c;
}

body {
  background: radial-gradient(
      60vmax 60vmax at 0% 0%,
      hsla(200, 70%, 60%, 0.2) 0%,
      hsla(240, 100%, 2%, 0) 95%
    ),
    radial-gradient(
      80vmax 50vmax at 110% -10%,
      hsla(280, 80%, 70%, 0.7) 0%,
      hsla(199, 54%, 79%, 0.5) 50%,
      hsla(240, 100%, 50%, 0) 95%
    ),
    radial-gradient(
      90vmax 50vmax at 50vmax 50vmax,
      hsla(30, 50%, 70%, 0.6) 0%,
      hsla(240, 100%, 60%, 0) 95%
    ) var(--background);
}

footer a {
  @apply opacity-75 hover:opacity-100 transition duration-300 ease-in-out;
  background: linear-gradient(to right, #37feff 0%, #bd7bff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

#fork-corner {
  z-index: 41;
  top: 5px !important;
  right: 5px !important;
}

.fork-corner.fc-theme-github+div {
  top: -88px !important;
  right: -88px !important;
  @apply shadow bg-black/50 z-40;
}

.fork-corner.fc-theme-github>i {
  @apply text-white/80;
  font-size: 35px !important;
}

::-webkit-scrollbar {
  width: 9px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(155, 155, 155, 0.5);
  border-radius: 20px;
  border: transparent;
}
</style>
