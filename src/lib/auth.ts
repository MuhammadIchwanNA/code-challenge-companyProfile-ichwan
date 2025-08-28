import type BackendlessType from "@/utils/backendless";

type Role = "user" | "admin";
export type AuthUser = { email: string; role: Role };

const KEY = "pg_auth"; // localStorage key

// ---- utils ----
const canUseStorage = () => typeof window !== "undefined";
const read = (): AuthUser | null => {
  if (!canUseStorage()) return null;
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as AuthUser) : null;
  } catch {
    return null;
  }
};
const write = (u: AuthUser | null) => {
  if (!canUseStorage()) return;
  if (!u) window.localStorage.removeItem(KEY);
  else window.localStorage.setItem(KEY, JSON.stringify(u));
};

// Minimal pub/sub so UI can react to auth changes
type Sub = (u: AuthUser | null) => void;
const subs = new Set<Sub>();
const notify = () => {
  const u = read();
  subs.forEach((fn) => fn(u));
};
export const subscribe = (fn: Sub) => {
  subs.add(fn);
  return () => subs.delete(fn);
};
// React to cross-tab changes
if (canUseStorage()) {
  window.addEventListener("storage", (e) => {
    if (e.key === KEY) notify();
  });
}

// ---- public API ----
export function login(email: string, role: Role) {
  write({ email, role });
  notify();
}

export async function logout(Backendless?: typeof BackendlessType) {
  write(null);
  notify();

  try {
    if (Backendless) await Backendless.UserService.logout();
  } catch {}
}

export function getUser(): AuthUser | null {
  return read();
}
export function getRole(): Role | null {
  return read()?.role ?? null;
}
export function isAuthed(): boolean {
  return !!read();
}

export async function syncFromBackendless(Backendless: typeof BackendlessType) {
  try {
    const current = await Backendless.UserService.getCurrentUser();
    if (!current) {
      if (isAuthed()) logout(); // clear local if it was set
      return null;
    }
    const email = (current as any)?.email ?? "";
    const role: Role =
      ((current as any)?.role || (current as any)?.userRole || "user") as Role;

    login(email, role);
    return { email, role } as AuthUser;
  } catch {
    return null;
  }
}
