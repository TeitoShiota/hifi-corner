import { type NextRequest, NextResponse } from "next/server";
import db from "@/db";
import { updateSession } from "./utils/supabase/middleware";

export async function middleware(request: NextRequest) {
    return updateSession(request);
}

export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
    ],
};