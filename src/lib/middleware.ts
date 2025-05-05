// lib/middleware.ts
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export function middleware(request: Request) {
  const token = cookies().get("supabase_token")?.value;

  if (!token) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/user/*"], // Hanya proteksi rute API tertentu
};
