<template>
  <div class="mx-auto w-full max-w-4xl px-3 xl:px-0 flex flex-row absolute left-0 right-0 mb-7 sm:mb-0 z-10 bottom-0">
    <div class="relative flex flex-row w-full justify-center items-stretch rounded shadow">
      <div class="flex gap-2 mb-3 items-stretch justify-center absolute bottom-full">
        <button
          v-if="true"
          class="flex-1 py-2 px-5 bg-white/10 text-slate-300 text-sm shadow rounded transition duration-300 ease-in-out hover:bg-white/20"
        >
          Stop
        </button>
      </div>
      <button class="flex items-center w-10 h-10 my-auto ml-2 justify-center absolute left-0 top-0 bottom-0 z-10">
        <i-ri-openai-fill class="w-10 h-10 p-2 block transition duration-300 ease-in-out rounded-lg hover:bg-black/30 cursor-pointer hover:shadow" />
      </button>
      <textarea rows="1" placeholder="Type your message here..." class="py-4 pl-14 pr-14 rounded-l-sm text-slate-100 w-full bg-white/5 placeholder-white/40 focus:outline-none resize-none placeholder:truncate" />
      <button title="Refresh" class="flex items-center flex-1 px-4 text-slate-300 bg-white/5 transition duration-300 ease-in-out hover:bg-white/10">
        <i-pepicons-pop-refresh class="w-5 h-5" />
      </button>
      <button title="Send" class="flex items-center flex-1 px-4 text-slate-300 bg-white/5 transition duration-300 ease-in-out hover:bg-white/10">
        <i-carbon-send-filled class="w-5 h-5" />
      </button>
    </div>
  </div>
</template>
