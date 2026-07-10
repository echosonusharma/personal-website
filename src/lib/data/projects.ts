export interface Project {
  slug: string;
  name: string;
  icon?: string;
  description: string;
  tags: string[];
  url?: string;
  videoUrl?: string;
  longDescription?: string;
}

export const projects: Project[] = [
  {
    slug:        'project-name',
    name:        'Project Name',
    icon:        'https://raw.githubusercontent.com/github/explore/main/topics/go/go.png',
    description: 'Short description of what this does and why it matters.',
    tags:        ['Go', 'PostgreSQL', 'Docker'],
    url:         'https://github.com',
    videoUrl:    'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
  },
  {
    slug:        'another-project',
    name:        'Another Project',
    icon:        'https://raw.githubusercontent.com/github/explore/main/topics/react/react.png',
    description: 'Short description of what this does and why it matters.',
    tags:        ['React', 'TypeScript', 'Node.js'],
    url:         'https://github.com'
  }
];
