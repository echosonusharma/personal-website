export interface Project {
  slug: string;
  name: string;
  icon?: string;
  description: string;
  tags: string[];
  url?: string;
  websiteUrl?: string;
  installUrl?: string;
  videoUrl?: string;
  longDescription?: string;
}

export const projects: Project[] = [
  {
    slug: 'tabaru',
    name: 'Tabaru',
    icon: 'https://raw.githubusercontent.com/echosonusharma/tabaru/main/app/images/icon-128.png',
    websiteUrl: 'https://tabaru.echosonusharma.in/',
    installUrl: 'https://chromewebstore.google.com/detail/tabaru/ameinjfiidfphkdbmdhlebibjgafdokc',
    description: 'Keyboard-first tab manager for Chrome. Fuzzy search across all tabs, session snapshots, auto-grouping, and a custom new tab — no mouse needed.',
    tags: ['TypeScript', 'Chrome Extension', 'Rust', 'WebExtension'],
    url: 'https://github.com/echosonusharma/tabaru',
    longDescription: `
<p>I use <a href="https://en.wikipedia.org/wiki/Window_manager" target="_blank" rel="noopener noreferrer">window managers</a> on all my machines. If you haven't tried one — they let you manage and navigate your entire OS purely from the keyboard: move windows, switch workspaces, resize, close, all without touching the mouse. Once it clicks, going back feels painful.</p>

<p>The browser was the one place I couldn't replicate that. No matter what you do for a living, the browser is where most of your day happens. I had 40+ tabs spread across windows, and the only way to deal with them was clicking around. I wanted the same keyboard-centric control I had everywhere else — search, switch, close, reorder, all from a single overlay.</p>

<p>That's Tabaru. Hit <code>Alt+Q</code>, type a few characters, land on the right tab. It fuzzy-searches across all open tabs and recently closed ones with sub-millisecond scoring. From the same overlay you can close duplicates, bulk-close by query, snapshot your session, and restore it later in a new window.</p>

<p>It also ships with a new tab page — custom clock, weather, quick-access links, and wallpaper options. Four themes. Zero telemetry. Everything runs locally. Works on Chrome, Firefox, Edge, and Opera.</p>
    `.trim()
  },
  {
    slug: 'cosmog',
    name: 'Cosmog',
    icon: 'https://raw.githubusercontent.com/echosonusharma/cosmog/master/src-tauri/icons/128x128.png',
    installUrl: 'https://github.com/echosonusharma/cosmog/releases',
    description: 'Desktop S3 browser built with Tauri and Rust. Manage buckets across AWS S3, Backblaze B2, Cloudflare R2, and any S3-compatible provider.',
    tags: ['Rust', 'TypeScript', 'Tauri', 'S3'],
    url: 'https://github.com/echosonusharma/cosmog',
    longDescription: `
<p>At work I needed a decent way to browse and manage S3 buckets. The usual suspects don't run on Linux — Cyberduck has no native GUI for Linux (CLI only), and S3 Browser is Windows-only. I was stuck using the AWS console, which is fine until it isn't.</p>

<p>Around the same time I started using Backblaze B2 for personal backups. B2 has an S3-compatible API, and so does Cloudflare R2, DigitalOcean Spaces, Wasabi, MinIO — most modern object storage providers do. So I figured: build one app that talks to all of them, with a UI that doesn't feel like it was designed in 2009.</p>

<p>Cosmog is a native desktop app (Tauri + Rust backend) that lets you manage multiple provider accounts simultaneously. Browse buckets, upload and download with a background transfer queue, preview images and text files, edit text in-app, generate presigned links, manage versioning, search within buckets — the full workflow without leaving the app. Credentials are stored in the OS keychain, never on disk.</p>

<p>Available for macOS, Windows, and Linux.</p>
    `.trim()
  }
];
