import { marked } from 'marked';
import DOMPurify from 'dompurify';

export interface ParsedMarkdown {
  title: string;
  content: string;
}

export interface MarkdownParserProps {
  markdown: string;
  className?: string;
  style?: React.CSSProperties;
}

export function parseMarkdown(markdown: string): ParsedMarkdown {
  try {
    if (!markdown || typeof markdown !== 'string') {
      return { title: 'Untitled', content: '' };
    }
    const lines = markdown.split('\n');
    const title = lines[0]?.replace('# ', '') || 'Untitled';
    const rawContent = marked(markdown) as string;
    const content = DOMPurify.sanitize(rawContent);
    return { title, content };
  } catch (error) {
    console.error('Error parsing markdown:', error);
    return { title: 'Error', content: 'Failed to parse markdown content' };
  }
}

function MarkdownParser({ markdown, className, style }: MarkdownParserProps) {
  try {
    const { content } = parseMarkdown(markdown);
    
    return (
      <div 
        className={className}
        style={style}
        dangerouslySetInnerHTML={{ __html: content }} 
      />
    );
  } catch (error) {
    console.error('Error rendering markdown:', error);
    return <div className={className} style={style}>Error loading content</div>;
  }
}

export default MarkdownParser;