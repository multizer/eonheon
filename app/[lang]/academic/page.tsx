import { getContent } from "@/lib/content";
import ContentRenderer from "@/components/ContentRenderer";
import Link from "next/link";
import DownloadPDFButton from "@/components/DownloadPDFButton";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const data = await getContent(lang, "academic");
    return {
        title: data?.title || "Academic Supplement",
        description: data?.subtitle || "Scholarly supplement on covenant continuity and historical inflection.",
    };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const data = await getContent(lang, "academic");
    const isKo = lang === "ko";

    return (
        <>
            <DownloadPDFButton lang={lang} />
            <ContentRenderer data={data} lang={lang} />

            {/* Floating CTA Button */}
            <Link href={`/${lang}`} className="floating-cta">
                {isKo ? "홈으로 돌아가기" : "Return Home"}
                <span className="arrow">→</span>
            </Link>

            <div className="next-page-transition">
                <hr />
                <div className="transition-content">
                    <p className="teaser">
                        {isKo
                            ? "홈페이지에서 다른 에세이들도 살펴보세요."
                            : "Explore more essays on the home page."}
                    </p>
                    <Link href={`/${lang}`} className="cta-button">
                        {isKo ? "홈으로 돌아가기" : "Return Home"}
                        <span className="arrow">→</span>
                    </Link>
                </div>
            </div>
        </>
    );
}
