import fs from 'fs';
import path from 'path';

interface BlogPost {
  title: string;
  description: string;
  slug: string;
  date: string;
  readTime: string;
  author: string;
}

export function getSortedPosts(): BlogPost[] {
  const posts: BlogPost[] = [];

  // Try reading via process.cwd()
  const blogsDir = path.join(process.cwd(), 'src/pages/blogs');
  
  if (fs.existsSync(blogsDir)) {
    const files = fs.readdirSync(blogsDir).filter(f => f.endsWith('.astro') && f !== 'index.astro');
    for (const file of files) {
      const filePath = path.join(blogsDir, file);
      const content = fs.readFileSync(filePath, 'utf8');
      
      const titleMatch = content.match(/const title = ["']([^"']+)["']/);
      const descMatch = content.match(/const description = ["']([^"']+)["']/);
      const dateMatch = content.match(/Last updated: ([^|]+)/);
      const readTimeMatch = content.match(/(\d+) min read/);
      const authorMatch = content.match(/const author = ["']([^"']+)["']/);
      
      if (titleMatch && descMatch) {
        posts.push({
          title: titleMatch[1],
          description: descMatch[1],
          slug: `/blogs/${file.replace(/\.astro$/, '')}`,
          date: dateMatch ? dateMatch[1].trim() : '2026-07-24',
          readTime: readTimeMatch ? `${readTimeMatch[1]} min read` : '10 min read',
          author: authorMatch ? authorMatch[1] : 'Finsiva Team'
        });
      }
    }
  }

  return posts.sort((a, b) => a.title.localeCompare(b.title));
}
