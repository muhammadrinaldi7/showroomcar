import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function DashboardPage() {
  const token = cookies().get("token")?.value;

  if (!token) {
    redirect("/login");
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1>Dashboard</h1>
      <p>Selamat datang di dashboard!</p>
    </main>
  );
}
