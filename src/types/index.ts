export interface Project {
  id: number;
  title: string;
  year: string;
  description: string;
  tools: string[];
  status: 'completed' | 'ongoing';
  links: {
    live?: string;
    behance?: string;
    github?: string;
  };
  gradient: string;
  icon: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  icon: string;
  color: string;
  skills: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  institution: string;
  description: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
}

export interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}
