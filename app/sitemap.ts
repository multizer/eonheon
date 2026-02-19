import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://eonheon.com';
    const langs = ['ko', 'en'];
    const routes = ['', '/essay', '/academic', '/about'];

    const sitemapEntries: MetadataRoute.Sitemap = [];

    langs.forEach((lang) => {
        routes.forEach((route) => {
            sitemapEntries.push({
                url: `${baseUrl}/${lang}${route}`,
                lastModified: new Date(),
                changeFrequency: route === '' ? 'weekly' : 'monthly',
                priority: route === '' ? 1 : 0.8,
            });
        });
    });

    return sitemapEntries;
}
