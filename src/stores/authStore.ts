import { create } from "zustand";
import { cookies } from "next/headers";

interface AuthState {
  token: string | null;
  setToken: (token: string | null) => void;
}

const initialToken =
  typeof window === "undefined" ? cookies().get("token")?.value || null : null;

export const useAuthStore = create<AuthState>((set) => ({
  token: initialToken,
  setToken: (token) => set({ token }),
}));
