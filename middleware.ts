import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  return NextResponse.next()
}
 
export const config = {
  runtime: 'edge',
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
