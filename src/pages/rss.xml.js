import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const essays = await getCollection('essays', ({ data }) => {
    return import.meta.env.PROD ? !data.draft : true;
  });
  
  const sortedEssays = essays.sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );

  return rss({
    title: 'Kevin M. Ong — Essays',
    description: 'Writing on agentic collaboration, learning systems, philosophy, and the intersection of human and artificial intelligence.',
    site: context.site,
    items: sortedEssays.map((essay) => ({
      title: essay.data.title,
      pubDate: essay.data.date,
      description: essay.data.description,
      link: `/essays/${essay.id}/`,
      content: essay.body,
      categories: [essay.data.category, ...essay.data.tags],
    })),
    customData: `<language>en-us</language>`,
  });
}