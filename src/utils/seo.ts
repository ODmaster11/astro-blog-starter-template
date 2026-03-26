/**
 * SEO Utility Functions
 */

/**
 * Generate slug from title
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

/**
 * Truncate text to a specific length
 */
export function truncateText(text: string, length: number = 160): string {
  if (text.length <= length) return text;
  return text.substring(0, length).trim() + '...';
}

/**
 * Extract headings from HTML content
 */
export function extractHeadings(
  content: string
): Array<{ level: number; text: string; id: string }> {
  const headingRegex = /<h([2-3])[^>]*id="([^"]*)"[^>]*>([^<]+)<\/h\1>/g;
  const headings: Array<{ level: number; text: string; id: string }> = [];

  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    headings.push({
      level: parseInt(match[1]),
      id: match[2],
      text: match[3],
    });
  }

  return headings;
}

/**
 * Generate heading IDs from text
 */
export function generateHeadingId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
}

/**
 * Calculate reading time in minutes
 */
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

/**
 * Generate meta description from content
 */
export function generateMetaDescription(
  content: string,
  maxLength: number = 160
): string {
  // Remove HTML tags
  const plainText = content.replace(/<[^>]*>/g, '');
  // Remove extra whitespace
  const cleanText = plainText.replace(/\s+/g, ' ').trim();
  // Truncate to max length
  return truncateText(cleanText, maxLength);
}

/**
 * Generate keywords from title and content
 */
export function generateKeywords(
  title: string,
  content: string,
  customKeywords: string[] = []
): string[] {
  const titleWords = title
    .toLowerCase()
    .split(/\s+/)
    .filter((word) => word.length > 3);

  const contentWords = content
    .toLowerCase()
    .replace(/<[^>]*>/g, '')
    .split(/\s+/)
    .filter((word) => word.length > 4)
    .slice(0, 20);

  const allKeywords = [...new Set([...titleWords, ...contentWords, ...customKeywords])];
  return allKeywords.slice(0, 10);
}

/**
 * Generate breadcrumb items
 */
export function generateBreadcrumbs(
  pathname: string,
  labels?: Record<string, string>
): Array<{ name: string; url: string }> {
  const parts = pathname.split('/').filter(Boolean);
  const breadcrumbs: Array<{ name: string; url: string }> = [
    { name: 'หน้าแรก', url: '/' },
  ];

  let currentPath = '';
  parts.forEach((part, index) => {
    currentPath += `/${part}`;
    const label = labels?.[part] || part.charAt(0).toUpperCase() + part.slice(1);
    if (index < parts.length - 1) {
      breadcrumbs.push({ name: label, url: currentPath });
    } else {
      breadcrumbs.push({ name: label, url: currentPath });
    }
  });

  return breadcrumbs;
}

/**
 * Format date for display
 */
export function formatDate(date: Date, locale: string = 'th-TH'): string {
  return date.toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Generate canonical URL
 */
export function generateCanonicalUrl(pathname: string, siteUrl: string): string {
  return new URL(pathname, siteUrl).toString();
}

/**
 * Check if keyword is present in text (case-insensitive)
 */
export function isKeywordPresent(text: string, keyword: string): boolean {
  return text.toLowerCase().includes(keyword.toLowerCase());
}

/**
 * Calculate keyword density
 */
export function calculateKeywordDensity(text: string, keyword: string): number {
  const cleanText = text.toLowerCase().replace(/<[^>]*>/g, '');
  const words = cleanText.split(/\s+/);
  const keywordCount = words.filter((word) => word === keyword.toLowerCase()).length;
  return (keywordCount / words.length) * 100;
}
