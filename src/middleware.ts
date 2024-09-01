import { NextRequest, NextResponse } from "next/server";
import db from "@/db";

export async function middleware(request: NextRequest) {
    // We print the request method and URL in the logs to see what's happening
    console.log(`[middleware] ${request.method} ${request.url}`);
    
    const isLoggedIn = await db.isAuthenticated(request.cookies as any);

    //FIXME - this is a temporary fix to get the app to run
    // const isLoggedIn = false;


    if (request.nextUrl.pathname && request.nextUrl.pathname.startsWith("/auth")) {
        // If already logged in and the request is to go to the login page,
        // Skip it and redirect to the home page.
        if (isLoggedIn) {

            //TODO - redirect to the Profile page instead; once it's created
            return NextResponse.redirect(new URL("/profile", request.url));
        }
        return;
    }


    // Anything after this is for protected routes, in our case,
    // Only the routes that start with /auth are not protected.
    // If you have other pages that are not protected you can
    // Handle them before the isLoggedIn check below.


    if (!isLoggedIn) {
        // If not logged in, redirect them to the login page.
        return NextResponse.redirect(new URL("/auth/login", request.url));
    }

    // Continue without any request changes.
    return NextResponse.next();
}

export const config = {
    matcher: [
        '/profile/:path*',
        '/auth/:path*',
    ],
};
