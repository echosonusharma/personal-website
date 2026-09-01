import type { Project } from '$lib/data/projects';

const tabaru: Project = {
  slug: 'tabaru',
  name: 'Tabaru',
  icon: 'https://raw.githubusercontent.com/echosonusharma/tabaru/main/app/images/icon-128.png',
  websiteUrl: 'https://tabaru.echosonusharma.in/',
  installUrl: 'https://chromewebstore.google.com/detail/tabaru/ameinjfiidfphkdbmdhlebibjgafdokc',
  url: 'https://github.com/echosonusharma/tabaru',
  description: 'Keyboard-first tab manager extension. One click navigation & fuzzy search across all tabs, command based actions, session snapshots, auto-grouping, and a custom new tab, no mouse needed.',
  tags: ['Browser Extension', 'Rust', 'TypeScript', 'WASM'],
  longDescription: `
<img src="/tabaru-overlay.png" alt="Tabaru fuzzy search overlay" style="width:100%;border-radius:6px;margin-bottom:24px" />

<p>I use <a href="https://en.wikipedia.org/wiki/Window_manager" target="_blank" rel="noopener noreferrer">window managers</a> on all my machines. If you haven't tried one, the idea is simple: you manage your entire OS from the keyboard. Move windows, switch workspaces, resize, close, launch apps, all without touching the mouse. Once it clicks, going back to anything else feels like a step backwards.</p>

<p>The browser was the one place I couldn't replicate that feeling. No matter what you do for a living, the browser is probably where you spend a lot of your hours. I sometimes had 40+ tabs spread across multiple windows, and the only way to deal with them was clicking around. I wanted the same keyboard-centric flow I had everywhere else. One shortcut, a few keystrokes, and I'm exactly where I want to be.</p>

<p>Since I already worked on browser extensions professionally, the idea felt natural: why not build something that gives the browser the same workflow?</p>

<p>I started by looking at what Chrome already offered. There's <code>Ctrl+Tab</code> and <code>Ctrl+Shift+Tab</code> for cycling through tabs, but I didn't like those shortcuts and Chrome doesn't let you remap them. More importantly, cycling sequentially through dozens of tabs isn't really useful. So I went back to square one and started building my own thing.</p>

<p>Around the same time, I was learning <a href="https://en.wikipedia.org/wiki/Levenshtein_distance" target="_blank" rel="noopener noreferrer">Levenshtein distance</a> in Rust, purely for fun. It's the algorithm behind autocomplete and spell checkers, a way to measure how similar two strings are. I was also curious about WebAssembly and the Rust to WASM compilation story. Those two threads eventually came together and became the core of <strong>Tabaru</strong>.</p>

<p>The fuzzy search engine is written in Rust, compiled to WebAssembly, and runs entirely inside the browser. It uses Levenshtein distance as one of its scoring mechanisms to find the tab you're looking for. Everything else, the browser integration, keyboard handling, ranking logic, and UI, is written in TypeScript.</p>

<p>At work, tabs piled up fast. Jira issues, support tickets, GitHub repos, CI/CD pages, docs, dashboards. I used Chrome's tab groups to keep things organized, but managing them manually got tedious.</p>

<p>That's when another idea came up: what if Tabaru grouped them automatically?</p>

<p>I had already built a rule-based URL matching system for a different extension at work, so I adapted that here. You configure rules based on domains or URL patterns, and Tabaru handles the grouping. Open a Jira issue and it lands in the Jira group. Open GitHub and it goes into the GitHub group. It removes a surprising amount of repetitive work throughout the day.</p>

<p>After wrapping up the tab management side, I wondered whether Tabaru could also replace the default new tab page. I've always liked what <a href="https://github.com/joelshepherd/tabliss" target="_blank" rel="noopener noreferrer">Tabliss</a> does with its customizable new tabs, so I built something similar directly into Tabaru rather than requiring a separate extension. It ended up with customizable wallpapers, multiple themes, a clock, weather widgets, quick links, and animated WebGL effects.</p>

<p>That's <strong>Tabaru</strong>. Hit <code>Alt+Q</code>, type a few characters, and you're on the right tab. It searches across all open tabs and recently closed ones with sub-millisecond scoring. From the same overlay you can close duplicates, bulk-close by query, snapshot your session, restore it later, and manage your entire browser without reaching for the mouse.</p>

<p>Zero telemetry. Everything runs locally. Available on Firefox and any Chromium-based browser.</p>
  `.trim(),
};

export default tabaru;
