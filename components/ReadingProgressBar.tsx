"use client";

import { useEffect, useState } from "react";

export default function ReadingProgressBar() {
    const [readingProgress, setReadingProgress] = useState(0);

    const scrollListener = () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPosition = window.scrollY;

        if (totalHeight > 0) {
            setReadingProgress((scrollPosition / totalHeight) * 100);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollListener);
        return () => window.removeEventListener("scroll", scrollListener);
    }, []);

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                height: "3px",
                backgroundColor: "var(--foreground)",
                width: `${readingProgress}%`,
                zIndex: 9999,
                transition: "width 0.1s ease-out",
                boxShadow: "0 0 10px rgba(0,0,0,0.2)"
            }}
        />
    );
}
