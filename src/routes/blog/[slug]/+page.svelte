<script lang="ts">
  export let data: {
    content: ConstructorOfATypedSvelteComponent;
    metadata: { title: string; date: string; tags: string[]; description?: string; draft?: boolean };
  };
</script>

<svelte:head>
  <title>{data.metadata.title} - Sonu Sharma</title>
  {#if data.metadata.description}
    <meta name="description" content={data.metadata.description} />
  {/if}
</svelte:head>

<div class="site" style="padding-top:48px;padding-bottom:64px">
  <a href="/#blog" class="post-back">← back</a>

  <div class="post-title">{data.metadata.title}</div>
  <div class="post-meta">
    <span>{data.metadata.date}</span>
    {#each data.metadata.tags as tag}
      <span class="blog-tag">{tag}</span>
    {/each}
  </div>

  {#if data.metadata.draft}
    <div class="draft-banner">✏ still writing...</div>
  {:else}
    <div class="post-body">
      <svelte:component this={data.content} />
    </div>
  {/if}
</div>
