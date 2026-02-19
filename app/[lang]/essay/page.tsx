import { getContent } from "@/lib/content";
import ContentRenderer from "@/components/ContentRenderer";
import Link from "next/link";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const data = await getContent(lang, "essay");
    return {
        title: data?.title || "Essay",
        description: data?.subtitle || "A theological essay on covenant, history, and being.",
    };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const data = await getContent(lang, "essay");
    const isKo = lang === "ko";

    return (
        <>
            <ContentRenderer data={data} lang={lang} />

            {/* Floating CTA Button */}
            <Link href={`/${lang}/academic`} className="floating-cta">
                {isKo ? "학술 보강 읽기" : "Read the Academic"}
                <span className="arrow">→</span>
            </Link>

            <div className="next-page-transition">
                <hr />
                <div className="transition-content">
                    <p className="teaser">
                        {isKo
                            ? "더 깊은 학술적 논의는 보강 섹션에서 확인하실 수 있습니다."
                            : "Explore deeper scholarly insights in the academic section."}
                    </p>
                    <Link href={`/${lang}/academic`} className="cta-button">
                        {isKo ? "학술 보강 읽기" : "Read the Academic"}
                        <span className="arrow">→</span>
                    </Link>
                </div>
            </div>
        </>
    );
}
