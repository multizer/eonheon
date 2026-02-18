import { getContent } from "@/lib/content";
import ContentRenderer from "@/components/ContentRenderer";
import Link from "next/link";

export default async function HomePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const content = await getContent(lang, "home");
  const isKo = lang === "ko";

  return (
    <>
      <ContentRenderer data={content} lang={lang} />

      {/* Floating CTA Button */}
      <Link href={`/${lang}/essay`} className="floating-cta">
        {isKo ? "에세이 읽기" : "Read the Essay"}
        <span className="arrow">→</span>
      </Link>

      <div className="next-page-transition">
        <hr />
        <div className="transition-content">
          <p className="teaser">
            {isKo
              ? "본격적인 논의는 에세이에서 이어집니다."
              : "The full discussion continues in the essay."}
          </p>
          <Link href={`/${lang}/essay`} className="cta-button">
            {isKo ? "에세이 읽기" : "Read the Essay"}
            <span className="arrow">→</span>
          </Link>
        </div>
      </div>
    </>
  );
}
