import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const locales = ['en', 'ko'];
const defaultLocale = 'en';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if there is any supported locale in the pathname
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // If the user visits the root /
  if (pathname === '/') {
    // English is the default and stays at /
    return NextResponse.rewrite(new URL(`/en`, request.url));
  }

  // Redirect if there is no locale
  // We exclude api routes and static files
  const isPlainPath = !pathname.includes('.') && !pathname.startsWith('/api/');
  
  if (isPlainPath) {
    // For non-locale paths like /essay, rewrite to /en/essay
    return NextResponse.rewrite(new URL(`/en${pathname}`, request.url));
  }
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|content|favicon.ico).*)',
  ],
};
