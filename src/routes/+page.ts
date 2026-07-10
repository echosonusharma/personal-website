export async function load() {
  const postModules = import.meta.glob('/src/posts/*.md', { eager: true });
  const posts = Object.entries(postModules)
    .map(([path, mod]) => {
      const m = mod as { metadata: { title: string; date: string; tags: string[]; description?: string; draft?: boolean } };
      return { slug: path.split('/').pop()!.replace('.md', ''), ...m.metadata };
    })
;
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return { posts };
}
