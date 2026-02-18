import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface ContentData {
    title: string;
    subtitle?: string;
    content: string;
}

export async function getContent(lang: string, slug: string): Promise<ContentData | null> {
    const fileName = lang === 'ko' ? `ko-${slug}.md` : `${slug}.md`;
    const filePath = path.join(process.cwd(), 'content', fileName);

    try {
        if (!fs.existsSync(filePath)) {
            console.warn(`File not found: ${filePath}`);
            return null;
        }

        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const { data, content } = matter(fileContent);

        return {
            title: data.title || 'Untitled',
            subtitle: data.subtitle,
            content: content
        };
    } catch (error) {
        console.error(`Error reading content: ${error}`);
        return null;
    }
}
