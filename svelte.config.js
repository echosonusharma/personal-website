import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex, escapeSvelte } from 'mdsvex';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import { createHighlighter } from 'shiki';

// shiki highlighter - build-time only, zero runtime cost
const highlighter = await createHighlighter({
  themes: ['github-dark'],
  langs: ['javascript', 'js', 'typescript', 'ts', 'python', 'bash', 'shell', 'svelte', 'json', 'plaintext', 'text']
});

/** @type {import('@sveltejs/kit').Config} */
const config = {
  extensions: ['.svelte', '.md'],
  preprocess: [
    vitePreprocess(),
    mdsvex({
      extensions: ['.md'],
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeSlug],
      highlight: {
        highlighter: async (code, lang = 'text') => {
          const validLang = highlighter.getLoadedLanguages().includes(lang) ? lang : 'text';
          const html = escapeSvelte(
            highlighter.codeToHtml(code, {
              lang: validLang,
              theme: 'github-dark'
            })
          );
          return `{@html \`${html}\` }`;
        }
      }
    })
  ],
  kit: {
    adapter: adapter({ fallback: '404.html' })
  }
};

export default config;
