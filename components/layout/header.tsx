import { navItems } from "@/data/navigation";
import { profile } from "@/data/profile";
import { Nav } from "./nav";

export function Header() {
  return (
    <header className="sticky top-0 z-10 -mx-6 flex items-center justify-between gap-4 bg-background/85 px-6 py-5 text-[15px] backdrop-blur sm:text-base lg:-mx-10 lg:px-10">
      <a href="#" className="flex min-w-0 items-center gap-2.5 font-medium">
        <span className="size-2 shrink-0 rounded-full bg-accent" />
        <span className="truncate">{profile.name}</span>
      </a>
      <Nav items={navItems} />
    </header>
  );
}
