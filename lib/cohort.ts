export const AVATAR_COLORS = ["var(--act-brown)", "var(--act-orange)", "var(--act-coral)", "var(--act-purple)", "var(--act-green)"];

export function initials(name: string) {
  const parts = name.trim().split(/\s+/);
  return (parts[0]?.[0] ?? "") + (parts[parts.length - 1]?.[0] ?? "");
}
