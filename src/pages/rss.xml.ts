import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  const essays = await getCollection('essays', ({ data }) => !data.draft);

  return rss({
    title: 'KMO — Kevin Ong',
    description: 'Writing on ML, classical music, philosophy, and life.',
    site: context.site!,
    items: essays
      .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())
      .map((essay) => ({
        title: essay.data.title,
        description: essay.data.description,
        pubDate: essay.data.date,
        link: `/essays/${essay.id}/`,
        categories: [essay.data.category, ...essay.data.tags],
      })),
  });
}
