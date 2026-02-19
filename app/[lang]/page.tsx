import { getContent } from "@/lib/content";
import ContentRenderer from "@/components/ContentRenderer";
import Link from "next/link";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const isKo = lang === "ko";
  return {
    title: isKo ? "홈" : "Home",
    description: isKo
      ? "eonheon.com - 언약, 역사, 존재에 관한 에세이와 학술 작업을 위한 공간입니다."
      : "eonheon.com - A digital space for essays and academic work reflecting on covenant, history, and being.",
  };
}

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
