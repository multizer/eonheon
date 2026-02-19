import { ContentData } from "@/lib/content";
import ReactMarkdown from 'react-markdown';

export default function ContentRenderer({ data, lang }: { data: ContentData | null, lang: string }) {
    if (!data) {
        return (
            <div style={{ textAlign: 'center', margin: '4rem 0' }}>
                <p style={{ opacity: 0.5 }}>{lang === 'ko' ? '콘텐츠를 찾을 수 없습니다.' : 'Content not found.'}</p>
            </div>
        );
    }

    return (
        <article lang={lang}>
            <header>
                <h1>{data.title}</h1>
                {data.subtitle && (
                    <p className="subtitle">{data.subtitle}</p>
                )}
            </header>

            <section className="markdown-body">
                <ReactMarkdown
                    components={{
                        h2: ({ children, ...props }) => {
                            return <h2 {...props}>{children}</h2>;
                        },
                        blockquote: ({ children }) => {
                            // Expecting structure in MD to handle cite separately if needed, 
                            // but if cite is inside blockquote in MD, we might want to unwrap it.
                            return <blockquote>{children}</blockquote>;
                        },
                        // Handle custom cite if we use a specific pattern in MD
                        em: ({ children }) => {
                            // If it's a standalone line starting with — it might be a cite
                            return <em>{children}</em>
                        }
                    }}
                >
                    {data.content}
                </ReactMarkdown>
            </section>

            {/* Placeholders for future features */}
            <hr />

            <section id="comments" style={{ margin: '4rem 0' }}>
                <h3 style={{ opacity: 0.4, fontSize: '1rem', marginBottom: '1rem' }}>{lang === 'ko' ? '댓글 (준비 중)' : 'Comments (Coming Soon)'}</h3>
                <div style={{ height: '100px', border: '1px dashed #dddddd', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: 0.3 }}>
                    {lang === 'ko' ? '외부 댓글 기능이 여기에 연결됩니다.' : 'External comments will be connected here.'}
                </div>
            </section>

            <section id="contact" style={{ margin: '4rem 0' }}>
                <h3 style={{ opacity: 0.4, fontSize: '1rem', marginBottom: '1rem' }}>{lang === 'ko' ? '문의하기 (준비 중)' : 'Contact (Coming Soon)'}</h3>
                <div style={{ padding: '2rem', border: '1px solid #eeeeee', borderRadius: '4px', opacity: 0.5 }}>
                    <p style={{ fontSize: '0.9rem', marginBottom: 0 }}>{lang === 'ko' ? '이메일 폼이 여기에 연결됩니다.' : 'Email form will be connected here.'}</p>
                </div>
            </section>
        </article>
    );
}
