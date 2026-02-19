import { getContent } from "@/lib/content";
import ContentRenderer from "@/components/ContentRenderer";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    return {
        title: lang === "ko" ? "소개" : "About",
        description: lang === "ko" ? "eonheon.com에 대한 소개입니다." : "About eonheon.com",
    };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const data = await getContent(lang, "about");

    return <ContentRenderer data={data} lang={lang} />;
}
