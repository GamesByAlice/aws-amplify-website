import { parseMarkdown } from '../components/MarkdownParser';

export interface Tutorial {
  id: string;
  title: string;
  date: string;
  content: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
}

// Import markdown files
import rustBasicsArticle from '../articles/rust-basics-hello-world.md?raw';

let rustBasicsParsed;
try {
  rustBasicsParsed = parseMarkdown(rustBasicsArticle);
} catch (error) {
  console.error('Failed to parse Rust basics tutorial:', error);
  rustBasicsParsed = { 
    title: 'Hello World', 
    content: '<p>This tutorial is temporarily unavailable. Please try refreshing the page.</p>' 
  };
}

export const tutorials: Tutorial[] = [
  {
    id: "hello-world",
    title: rustBasicsParsed.title,
    date: "2025-01-20",
    content: rustBasicsParsed.content,
    difficulty: 'Beginner'
  },
];