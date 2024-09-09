// src/app/api/auth/login/route.ts
import db from "@/db";
import { cookies } from 'next/headers';
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();
        const result = await db.authenticate( email, password );
        const { session } = result;
        const token = session?.access_token;
        cookies().set('sb_auth', token);

        return NextResponse.json(token);
    } catch (err: any) {
        return new Response(
            JSON.stringify({ error: err.message || err.toString() }),
            {
                status: 500,
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
    }
}
