import { error } from '@sveltejs/kit';
import { projects } from '$lib/data/projects';

export function entries() {
  return projects.map(p => ({ slug: p.slug }));
}

export function load({ params }) {
  const project = projects.find(p => p.slug === params.slug);
  if (!project) throw error(404, 'Project not found');
  return { project };
}
