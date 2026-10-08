import { profile } from "./profile";

export type Contact = {
  icon: "mail" | "github";
  label: string;
  value: string;
  href: string;
};

export const contacts: Contact[] = [
  {
    icon: "mail",
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: "github",
    label: "GitHub",
    value: "github.com/maizamai45",
    href: "https://github.com/maizamai45",
  },
];
