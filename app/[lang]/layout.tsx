import type { Metadata } from "next";
import { Noto_Serif_KR, Noto_Sans_KR, Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const notoSerifKR = Noto_Serif_KR({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-noto-serif",
});

const notoSansKR = Noto_Sans_KR({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-noto-sans",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "eonheon.com",
  description: "A digital space for essays and academic work.",
};


import ReadingProgressBar from "@/components/ReadingProgressBar";

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isKo = lang === "ko";

  return (
    <html lang={lang}>
      <body className={`${notoSerifKR.variable} ${notoSansKR.variable} ${inter.variable}`} style={{
        fontFamily: `var(--font-noto-sans), sans-serif`,
        '--font-title': 'var(--font-inter), var(--font-noto-sans), sans-serif'
      } as any}>
        <ReadingProgressBar />
        <nav>
          <Link href={isKo ? "/ko" : "/"}>{isKo ? "홈" : "Home"}</Link>
          <Link href={isKo ? "/ko/essay" : "/essay"}>{isKo ? "에세이" : "Essay"}</Link>
          <Link href={isKo ? "/ko/academic" : "/academic"}>{isKo ? "학술" : "Academic"}</Link>
          <Link href={isKo ? "/" : "/ko"}>{isKo ? "EN" : "KO"}</Link>
        </nav>
        <main>{children}</main>
        <footer style={{ maxWidth: 'var(--max-width)', margin: '0 auto', padding: '40px 24px', fontSize: '0.8rem', opacity: 0.5, borderTop: '1px solid var(--border)' }}>
          © 2026 eonheon.com
        </footer>
      </body>
    </html>
  );
}
