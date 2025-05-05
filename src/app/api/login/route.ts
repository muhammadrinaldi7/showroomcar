// src/app/api/login/route.ts
import { NextResponse } from "next/server";
import { supabase } from "@/lib/db";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  // Cek kredensial user
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return NextResponse.json({ message: error.message }, { status: 401 });
  }

  // Jika login berhasil, kembalikan data user dan session
  return NextResponse.json({ message: "Login sukses", user: data.user });
}
