import { getCollection } from 'astro:content';

export async function GET({ site }) {
  const essays = await getCollection('essays', ({ data }) => 
    import.meta.env.PROD ? !data.draft : true
  );
  const projects = await getCollection('projects', ({ data }) => 
    import.meta.env.PROD ? !data.draft : true
  );

  const staticPages = [
    '',
    'about',
    'essays',
    'projects',
    'resume',
    'cats'
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages.map(page => `
  <url>
    <loc>${site}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`).join('')}
  ${essays.map(essay => `
  <url>
    <loc>${site}essays/${essay.id}/</loc>
    <lastmod>${essay.data.date.toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`).join('')}
  ${projects.map(project => `
  <url>
    <loc>${site}projects/${project.id}/</loc>
    <lastmod>${project.data.date.toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`).join('')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}