import { error } from '@sveltejs/kit';

export async function entries() {
  const modules = import.meta.glob('/src/posts/*.md');
  return Object.keys(modules).map(path => ({
    slug: path.split('/').pop()!.replace('.md', '')
  }));
}

export async function load({ params }) {
  try {
    const post = await import(`../../../posts/${params.slug}.md`);
    return {
      content: post.default,
      metadata: post.metadata as { title: string; date: string; tags: string[]; description?: string; draft?: boolean }
    };
  } catch {
    throw error(404, 'Post not found');
  }
}
