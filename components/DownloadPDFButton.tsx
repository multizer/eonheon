"use client";

import React from "react";

interface DownloadPDFButtonProps {
    lang: string;
}

const DownloadPDFButton: React.FC<DownloadPDFButtonProps> = ({ lang }) => {
    const isKo = lang === "ko";

    const handleDownload = () => {
        window.print();
    };

    return (
        <div className="download-container no-print">
            <button onClick={handleDownload} className="download-pdf-button">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="download-icon"
                >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                {isKo ? "PDF로 다운로드" : "Download as PDF"}
            </button>

            <style jsx>{`
        .download-container {
          display: flex;
          justify-content: flex-end;
          margin-bottom: 2rem;
        }

        .download-pdf-button {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.6rem 1.2rem;
          background: transparent;
          color: var(--muted);
          border: 1px solid var(--border);
          border-radius: 4px;
          cursor: pointer;
          font-family: var(--font-title);
          font-size: 0.9rem;
          font-weight: 500;
          transition: all 0.2s ease;
        }

        .download-pdf-button:hover {
          background: var(--foreground);
          color: white;
          border-color: var(--foreground);
          transform: translateY(-1px);
        }

        .download-icon {
          flex-shrink: 0;
        }

        @media screen and (max-width: 600px) {
          .download-container {
            justify-content: center;
          }
        }
      `}</style>
        </div>
    );
};

export default DownloadPDFButton;
