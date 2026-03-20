export function calculateReadingTime(content) {
  // Average reading speed is 200-250 words per minute
  // We'll use 220 WPM as a reasonable middle ground
  const wordsPerMinute = 220;
  
  // Remove markdown and HTML tags for accurate word count
  const plainText = content
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/`[^`]*`/g, '') // Remove inline code
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // Convert links to just text
    .replace(/[#*_~`]/g, '') // Remove basic markdown formatting
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim();
  
  const wordCount = plainText.split(/\s+/).length;
  const readingTimeMinutes = Math.ceil(wordCount / wordsPerMinute);
  
  return {
    minutes: readingTimeMinutes,
    words: wordCount,
    text: `${readingTimeMinutes} min read`
  };
}