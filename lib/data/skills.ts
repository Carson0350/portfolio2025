import { LucideIcon } from 'lucide-react';
import {
  Code2,
  Braces,
  FileCode,
  Layers,
  Palette,
  Wind,
  Database,
  Server,
  Globe,
  Cloud,
  Container as ContainerIcon,
  GitBranch,
  Workflow,
  Box,
  Code,
  Boxes,
} from 'lucide-react';

export interface Skill {
  name: string;
  icon: LucideIcon;
  featured?: boolean;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export const skillsData: SkillCategory[] = [
  {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: Code2, featured: true },
      { name: 'TypeScript', icon: Braces, featured: true },
      { name: 'JavaScript', icon: FileCode, featured: true },
      { name: 'Next.js', icon: Layers, featured: true },
      { name: 'Tailwind CSS', icon: Wind, featured: true },
      { name: 'HTML', icon: Palette },
      { name: 'CSS', icon: Palette },
      { name: 'jQuery', icon: Code },
      { name: 'Angular', icon: Box },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'C#', icon: Braces, featured: true },
      { name: '.NET', icon: Server, featured: true },
      { name: 'Azure', icon: Cloud, featured: true },
      { name: 'Azure Functions', icon: Cloud },
      { name: 'CosmosDB', icon: Database },
      { name: 'SQL Server', icon: Database, featured: true },
      { name: 'PHP', icon: FileCode },
      { name: 'WordPress', icon: Globe },
    ],
  },
  {
    title: 'Tools & DevOps',
    skills: [
      { name: 'Git', icon: GitBranch, featured: true },
      { name: 'Azure DevOps', icon: Workflow, featured: true },
      { name: 'Docker', icon: ContainerIcon, featured: true },
      { name: 'Visual Studio', icon: Code },
      { name: 'Windsurf', icon: Code },
      { name: 'Cursor', icon: Code },
      { name: 'Atlassian', icon: Boxes },
      { name: 'CI/CD', icon: Workflow },
    ],
  },
];
