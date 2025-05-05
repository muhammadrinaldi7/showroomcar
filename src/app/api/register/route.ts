// src/app/api/register/route.ts
import { NextResponse } from "next/server";
import { supabase } from "@/lib/db";

export async function POST(request: Request) {
  const { email, password, role } = await request.json();

  // Menambahkan pengguna baru dengan email dan password
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }

  // Menambahkan role pengguna ke tabel profile (misal: profile atau custom table)
  const { error: profileError } = await supabase.from("profiles").insert([
    { user_id: data?.user?.id, role: role || "user" }, // Menambahkan role ke profile
  ]);

  if (profileError) {
    return NextResponse.json(
      { message: profileError.message },
      { status: 400 }
    );
  }

  return NextResponse.json({
    message: "User created successfully",
    user: data.user,
  });
}
