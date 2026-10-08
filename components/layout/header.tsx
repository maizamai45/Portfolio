import { navItems } from "@/data/navigation";
import { profile } from "@/data/profile";
import { Nav } from "./nav";

export function Header() {
  return (
    <header className="sticky top-0 z-10 -mx-6 flex items-center justify-between bg-background/85 px-6 py-5 text-[15px] backdrop-blur sm:text-base lg:-mx-10 lg:px-10">
      <a href="#" className="flex items-center gap-2.5 font-medium">
        <span className="size-2 rounded-full bg-accent" />
        {profile.name}
      </a>
      <Nav items={navItems} />
    </header>
  );
}
