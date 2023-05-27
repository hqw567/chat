<template>
  <div class="overflow-y-auto w-full rounded-sm pb-12 px-3" style="overflow: overlay; height: 578px;">
    <div class="max-w-4xl w-full mx-auto message">
      <div class="p-3 rounded-sm">
        <div class="text-xs text-white/50 mb-1">
          User
        </div><div class="prose prose-sm prose-chatgpt break-words max-w-6xl">
          <p>js数组代码示例</p>
        </div>
      </div>
    </div><div class="max-w-4xl w-full mx-auto message">
      <div class="p-3 rounded-sm bg-white/10 shadow">
        <div class="text-xs text-white/50 mb-1">
          AI
        </div><div class="prose prose-sm prose-chatgpt break-words max-w-6xl">
          <p>你好！以下是一些 JavaScript 数组的代码示例：</p>
          <ol>
            <li>创建一个数组：</li>
          </ol>
          <pre class="p-0 relative"><button data-is-copy-button="true" class="absolute right-0 top-0 pt-1 pr-2 font-sans whitespace-normal flex items-center gap-1">
    <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 relative top-px">
        <path d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z" />
    </svg>
    <span class="copy-status">Copy</span>
</button><code class="hljs language-plaintext">let myArray <span class="hljs-operator">=</span> []<span class="hljs-comment">;</span></code></pre><ol start="2">
            <li>在数组中添加元素：</li>
          </ol>
          <pre class="p-0 relative"><button data-is-copy-button="true" class="absolute right-0 top-0 pt-1 pr-2 font-sans whitespace-normal flex items-center gap-1">
    <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 relative top-px">
        <path d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z" />
    </svg>
    <span class="copy-status">Copy</span>
</button><code class="hljs language-plaintext">myArray.<span class="hljs-built_in">push</span>(<span class="hljs-string">'apple'</span>);
myArray.<span class="hljs-built_in">push</span>(<span class="hljs-string">'banana'</span>, <span class="hljs-string">'cherry'</span>);</code></pre><ol start="3">
            <li>访问数组中的元素：</li>
          </ol>
          <pre class="p-0 relative"><button data-is-copy-button="true" class="absolute right-0 top-0 pt-1 pr-2 font-sans whitespace-normal flex items-center gap-1">
    <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 relative top-px">
        <path d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z" />
    </svg>
    <span class="copy-status">Copy</span>
</button><code class="hljs language-plaintext"><span class="hljs-built_in">console</span>.<span class="hljs-built_in">log</span>(myArray[<span class="hljs-number">0</span>]); <span class="hljs-comment">// 输出 "apple"</span>
<span class="hljs-built_in">console</span>.<span class="hljs-built_in">log</span>(myArray[<span class="hljs-number">1</span>]); <span class="hljs-comment">// 输出 "banana"</span>
<span class="hljs-built_in">console</span>.<span class="hljs-built_in">log</span>(myArray[<span class="hljs-number">2</span>]); <span class="hljs-comment">// 输出 "cherry"</span></code></pre><ol start="4">
            <li>删除数组中的元素：</li>
          </ol>
          <pre class="p-0 relative"><button data-is-copy-button="true" class="absolute right-0 top-0 pt-1 pr-2 font-sans whitespace-normal flex items-center gap-1">
    <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 relative top-px">
        <path d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z" />
    </svg>
    <span class="copy-status">Copy</span>
</button><code class="hljs language-plaintext"><span class="hljs-attribute">myArray</span>.splice(<span class="hljs-number">1</span>, <span class="hljs-number">1</span>); // 删除下标为 <span class="hljs-number">1</span> 的元素 <span class="hljs-string">"banana"</span></code></pre><ol start="5">
            <li>查找数组中的元素：</li>
          </ol>
          <pre class="p-0 relative"><button data-is-copy-button="true" class="absolute right-0 top-0 pt-1 pr-2 font-sans whitespace-normal flex items-center gap-1">
    <svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="w-3 h-3 relative top-px">
        <path d="M20 2H10c-1.103 0-2 .897-2 2v4H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2v-4h4c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zM4 20V10h10l.002 10H4zm16-6h-4v-4c0-1.103-.897-2-2-2h-4V4h10v10z" />
    </svg>
    <span class="copy-status">Copy</span>
</button><code class="hljs language-plaintext"><span class="hljs-built_in">console</span>.<span class="hljs-built_in">log</span>(myArray.<span class="hljs-built_in">indexOf</span>(<span class="hljs-string">'cherry'</span>)); <span class="hljs-comment">// 输出 1，因为 "cherry" 的下标是 1</span></code></pre><p>希望这些示例对你有所帮助！如果你有任何问题，请随时问我。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.messages-move, /* apply transition to moving elements */
.messages-enter-active {
  transition: all 0.3s ease;
}
.messages-enter-from {
  opacity: 0;
  transform: translateY(0);
}
/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.messages-leave-active {
  position: absolute;
  opacity: 0;
}

.slide-from-bottom-enter-active,
.slide-from-bottom-leave-active {
  transition: all 0.3s ease;
}
.slide-from-bottom-enter-from,
.slide-from-bottom-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

.message {
  -webkit-transform: matrix(1, 0, 0, 1, 0, 0.01);
}

.prose pre {
  @apply whitespace-pre-wrap;
}

.prose pre code {
  background-color: transparent;
  @apply text-xs;
}

.prose pre code .hljs-comment {
  @apply text-slate-500;
}

.prose p {
  word-break: break-word;
}

/* Getting rid of the main default styling of the range input */
input[type='range'] {
  -webkit-appearance: none;
}

input[type='range']:focus {
  outline: none;
}

/* Styling the track */
input[type='range']::-webkit-slider-runnable-track {
  @apply h-1 bg-white/10 rounded w-full;
}
input[type='range']::-moz-range-track {
  @apply h-1 bg-white/10 rounded w-full;
}

/* Styling the thumb */
input[type='range']::-webkit-slider-thumb {
  -webkit-appearance: none;
  @apply w-4 h-4 bg-slate-300 rounded-full -m-[0.5em];
}

input[type='range']::-moz-range-thumb {
  @apply w-4 h-4 bg-slate-300 rounded-full;
}
</style>
