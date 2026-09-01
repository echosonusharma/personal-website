<script lang="ts">
  import type { Project } from '$lib/data/projects';

  let { data }: { data: { project: Project } } = $props();
  const project = $derived(data.project);


  function youtubeEmbedUrl(url: string): string {
    const match = url.match(/(?:v=|youtu\.be\/)([A-Za-z0-9_-]{11})/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : url;
  }
</script>

<svelte:head>
  <title>{project.name} - Sonu Sharma</title>
  <meta name="description" content={project.description} />
</svelte:head>

<div class="site" style="padding-top:48px;padding-bottom:64px">
  <a href="/#projects" class="post-back">← back</a>

  <div class="proj-header">
    {#if project.icon}
      <img class="proj-icon" src={project.icon} alt="" width="32" height="32" />
    {/if}
    <h1 class="proj-title">{project.name}</h1>
  </div>

  <div class="proj-links">
    {#if project.installUrl}
      <a class="btn btn-primary" href={project.installUrl} target="_blank" rel="noopener noreferrer">↓ install</a>
    {/if}
    {#if project.websiteUrl}
      <a class="btn" href={project.websiteUrl} target="_blank" rel="noopener noreferrer">↗ website</a>
    {/if}
    {#if project.url}
      <a class="btn" href={project.url} target="_blank" rel="noopener noreferrer">↗ code</a>
    {/if}
    {#if project.videoUrl}
      <a class="btn" href={project.videoUrl} target="_blank" rel="noopener noreferrer">▶ youtube</a>
    {/if}
  </div>

  <div class="proj-tags">
    {#each project.tags as tag}
      <span class="project-tag">{tag}</span>
    {/each}
  </div>

  {#if project.videoUrl}
    <div class="proj-video">
      <iframe
        src={youtubeEmbedUrl(project.videoUrl)}
        title="{project.name} demo"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  {/if}

  {#if project.longDescription}
    <div class="proj-desc">{@html project.longDescription}</div>
  {:else}
    <p class="proj-desc">{project.description}</p>
  {/if}
</div>
