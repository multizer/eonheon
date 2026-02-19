"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav({ lang }: { lang: string }) {
    const pathname = usePathname();
    const isKo = lang === "ko";

    const links = [
        { href: isKo ? "/ko" : "/", label: isKo ? "홈" : "Home" },
        { href: isKo ? "/ko/essay" : "/essay", label: isKo ? "에세이" : "Essay" },
        { href: isKo ? "/ko/academic" : "/academic", label: isKo ? "학술" : "Academic" },
        { href: isKo ? "/" : "/ko", label: isKo ? "EN" : "KO" },
    ];

    const isActive = (href: string) => {
        if (href === "/" || href === "/ko") {
            return pathname === href;
        }
        return pathname.startsWith(href);
    };

    return (
        <nav>
            {links.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    className={isActive(link.href) ? "active" : ""}
                >
                    {link.label}
                </Link>
            ))}
        </nav>
    );
}
