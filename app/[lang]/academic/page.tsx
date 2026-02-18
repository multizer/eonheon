import { getContent } from "@/lib/content";
import ContentRenderer from "@/components/ContentRenderer";

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const data = await getContent(lang, "academic");

    return <ContentRenderer data={data} lang={lang} />;
}
