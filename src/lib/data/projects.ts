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

import tabaru from '$lib/projects/tabaru';
import cosmog from '$lib/projects/cosmog';

export const projects: Project[] = [cosmog, tabaru];
