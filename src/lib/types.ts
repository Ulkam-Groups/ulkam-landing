export interface Product {
  id: string;
  name: string;
  grade: string;
  description: string;
  flavorNotes: string[];
  image: string;
  tag?: 'bestseller' | 'new' | 'premium';
  origin: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  coverImage?: string;
  readTime?: number;
  tags?: string[];
}

export interface BlogPostWithContent extends BlogPost {
  content: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image?: string;
  bio?: string;
}

export interface CommentFormData {
  name: string;
  email: string;
  comment: string;
  postSlug: string;
}

export interface ContactFormData {
  fullName: string;
  company?: string;
  email: string;
  phone?: string;
  region: string;
  message: string;
}
