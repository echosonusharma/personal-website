<script lang="ts">
  import { onMount } from 'svelte';
  import { projects } from '$lib/data/projects';

  let { data }: {
    data: { posts: { slug: string; title: string; date: string; tags: string[]; description?: string; draft?: boolean }[] };
  } = $props();

  const githubSvg = `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`;
  const linkedinSvg = `<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`;

  let displayedName = $state('');
  let emailRevealed = $state(false);
  let displayedEmail = $state('');
  let emailAnimating = $state(false);

  const encodedEmail = ['65','63','68','6f','73','6f','6e','75','73','68','61','72','6d','61','40','67','6d','61','69','6c','2e','63','6f','6d'];

  function decodeEmail(): string {
    return encodedEmail.map(h => String.fromCharCode(parseInt(h, 16))).join('');
  }

  function handleReachOut() {
    if (emailAnimating || emailRevealed) return;
    emailAnimating = true;
    const email = decodeEmail();
    let i = 0;
    const interval = setInterval(() => {
      displayedEmail = email.slice(0, ++i);
      if (i >= email.length) {
        clearInterval(interval);
        emailRevealed = true;
        emailAnimating = false;
      }
    }, 40);
  }

onMount(() => {
    let i = 0;
    const interval = setInterval(() => {
      displayedName = 'Sonu Sharma'.slice(0, ++i);
      if (i >= 'Sonu Sharma'.length) clearInterval(interval);
    }, 60);
    return () => clearInterval(interval);
  });

</script>

<svelte:head>
  <title>Sonu Sharma - Full-Stack AI Engineer</title>
  <meta name="description" content="Full-Stack AI Engineer with 5+ years of experience building LLM-powered products, automation, RAG pipelines, and multi-agent systems. Strong backend expertise in Node.js, Python, and Go, with experience designing and shipping production AI systems." />
  <meta property="og:type" content="website" />
  <meta property="og:title" content="Sonu Sharma - Full-Stack AI Engineer" />
  <meta property="og:description" content="Full-Stack AI Engineer with 5+ years of experience building LLM-powered products, automation, RAG pipelines, and multi-agent systems. Strong backend expertise in Node.js, Python, and Go, with experience designing and shipping production AI systems." />
  <meta property="og:url" content="https://echosonusharma.in" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:title" content="Sonu Sharma - Full-Stack AI Engineer" />
  <meta name="twitter:description" content="Full-Stack AI Engineer with 5+ years of experience building LLM-powered products, automation, RAG pipelines, and multi-agent systems. Strong backend expertise in Node.js, Python, and Go, with experience designing and shipping production AI systems." />
</svelte:head>

<div class="site">
  <header class="hero" id="about">
    <p class="hero-prompt">whoami</p>
    <h1>{displayedName}<span class="cursor"></span></h1>
    <p class="hero-role">Full-Stack AI Engineer</p>
    <p class="hero-bio">Full-Stack AI Engineer with 5+ years of experience building LLM-powered products, automation, RAG pipelines, and multi-agent systems. Strong backend expertise in Node.js, Python, and Go, with experience designing and shipping production AI systems.</p>
    <div class="hero-links">
      <a href="https://github.com/echosonusharma" target="_blank" rel="noopener noreferrer" class="btn btn-primary" aria-label="github">
        {@html githubSvg}
        github
      </a>
      <a href="https://www.linkedin.com/in/sonusharma007" target="_blank" rel="noopener noreferrer" class="btn" aria-label="linkedin">
        {@html linkedinSvg}
        linkedin
      </a>
      {#if !emailRevealed}
        <button class="btn btn-reach" onclick={handleReachOut} disabled={emailAnimating} aria-label="reveal email">
          reach out to me
        </button>
      {:else}
        <a href="mailto:{decodeEmail()}" class="btn btn-email-revealed" aria-label="email">
          <span class="email-text">{displayedEmail}</span>
        </a>
      {/if}
    </div>
  </header>

  <section id="talk">
    <div class="section-label"><h2>LET'S TALK</h2></div>
    <div class="talk-card">
      <h3 class="talk-title">Have something you're building?</h3>
      <p class="talk-desc">Open to conversations about AI products, engineering, consulting, and contract work.</p>
      <p class="talk-desc">If you're building something interesting, improving an existing product, or just want to explore what AI could do for your business, let's talk.</p>
      <ul class="talk-list">
        <li>AI / product brainstorming</li>
        <li>Find opportunities for AI &amp; automation</li>
        <li>RAG, agents &amp; LLM systems</li>
        <li>Architecture &amp; technical reviews</li>
        <li>Contract / freelance engineering</li>
        <li>Backend &amp; AI infrastructure</li>
      </ul>
      <div class="talk-cta">
        <a href="https://calendly.com/echosonusharma/30min" target="_blank" rel="noopener noreferrer" class="btn btn-primary talk-btn" aria-label="Book a 30-min call on Calendly">
          Book a 30-min call →
        </a>
        <span class="talk-meta">30 min · Google Meet · No pitch · Just a conversation</span>
      </div>
    </div>
  </section>

  <section id="projects">
    <div class="section-label"><h2>Projects</h2></div>
    <div class="projects-grid">
      {#each projects as project}
        <a
          class="project-card"
          href="/projects/{project.slug}"
          aria-label={project.name}
        >
          <div class="project-header">
            {#if project.icon}
              <span class="project-icon">
                <img src={project.icon} alt="" loading="lazy" width="18" height="18" />
              </span>
            {/if}
            <span class="project-name">{project.name}</span>
            <span class="project-link" style="margin-left:auto;flex-shrink:0">→</span>
          </div>
          <div class="project-desc">{project.description}</div>
          <div class="project-tags">
            {#each project.tags as tag}
              <span class="project-tag">{tag}</span>
            {/each}
          </div>
        </a>
      {/each}
    </div>
  </section>

  <section id="blog">
    <div class="section-label"><h2>Blog</h2></div>
    <div class="blog-list">
      {#each data.posts as post}
        <a
          class="blog-card"
          href="/blog/{post.slug}"
          aria-label={post.title}
        >
          <span class="blog-date">{post.date}</span>
          <span class="blog-title">{post.title}{#if post.draft} <span class="draft-chip">draft</span>{/if}</span>
          <span class="blog-tags">
            {#each post.tags as tag}
              <span class="blog-tag">{tag}</span>
            {/each}
          </span>
          <span class="blog-arrow">→</span>
        </a>
      {/each}
    </div>
  </section>
</div>
