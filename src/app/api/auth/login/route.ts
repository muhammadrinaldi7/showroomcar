import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { email, password } = await request.json();

  if (email === "test@example.com" && password === "password") {
    return NextResponse.json({ token: "mock-token" });
  }

  return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
}
