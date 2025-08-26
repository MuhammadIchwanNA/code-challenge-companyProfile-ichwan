"use client";

export const AUTH_KEY = "pg_auth_user";
export const ROLE_KEY = "pg_auth_role";

export type Role = "admin" | "user";

export function login(email: string, role: Role = "user") {
  localStorage.setItem(AUTH_KEY, email);
  localStorage.setItem(ROLE_KEY, role);
}

export function logout() {
  localStorage.removeItem(AUTH_KEY);
  localStorage.removeItem(ROLE_KEY);
}

export function getUser(): { email: string; role: Role } | null {
  const email = localStorage.getItem(AUTH_KEY);
  const role = (localStorage.getItem(ROLE_KEY) as Role) || "user";
  return email ? { email, role } : null;
}

export function isAuthed() {
  return !!localStorage.getItem(AUTH_KEY);
}

export function isAdmin() {
  return localStorage.getItem(ROLE_KEY) === "admin";
}
