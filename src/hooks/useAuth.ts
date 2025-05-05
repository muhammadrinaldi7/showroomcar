"use client";

import { useAuthStore } from "@/stores/authStore";
import { loginUser } from "@/services/authService";
import { destroyCookie, setCookie } from "nookies";

export function useAuth() {
  const setToken = useAuthStore((state) => state.setToken);

  async function login(email: string, password: string) {
    const token = await loginUser(email, password);

    // Simpan token ke cookies (browser)
    setCookie(null, "token", token, {
      maxAge: 7 * 24 * 60 * 60, // 7 hari
      path: "/",
    });

    setToken(token);
  }
  function logout() {
    destroyCookie(null, "token");
    setToken("");
  }

  return { login, logout };
}
