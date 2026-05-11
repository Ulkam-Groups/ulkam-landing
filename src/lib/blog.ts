import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { BlogPost, BlogPostWithContent } from './types';

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');

export function getAllSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''));
}

export function getAllPosts(): BlogPost[] {
  const slugs = getAllSlugs();
  const posts = slugs.map((slug) => {
    const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
    const raw = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(raw);
    return {
      slug,
      title: data.title ?? slug,
      excerpt: data.excerpt ?? '',
      date: data.date ?? '',
      author: data.author ?? 'Ulkam Editorial',
      coverImage: data.coverImage,
      readTime: data.readTime,
      tags: data.tags ?? [],
    } as BlogPost;
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostBySlug(slug: string): BlogPostWithContent {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title ?? slug,
    excerpt: data.excerpt ?? '',
    date: data.date ?? '',
    author: data.author ?? 'Ulkam Editorial',
    coverImage: data.coverImage,
    readTime: data.readTime,
    tags: data.tags ?? [],
    content,
  };
}
