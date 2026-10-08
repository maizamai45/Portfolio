import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-line py-6 text-xs text-muted">
      © {new Date().getFullYear()} {profile.name}
    </footer>
  );
}
