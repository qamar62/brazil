import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname

  // If the pathname is the root or doesn't start with /en or /pt
  if (pathname === '/' || (!pathname.startsWith('/en') && !pathname.startsWith('/pt'))) {
    // Get the preferred language from the Accept-Language header
    const acceptLanguage = request.headers.get('accept-language')
    const preferredLanguage = acceptLanguage?.split(',')[0].split('-')[0] || 'en'
    
    // Redirect to the appropriate locale
    const locale = preferredLanguage === 'pt' ? 'pt' : 'en'
    return NextResponse.redirect(new URL(`/${locale}${pathname === '/' ? '' : pathname}`, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
