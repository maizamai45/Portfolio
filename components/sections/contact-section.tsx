import { contacts, type Contact } from "@/data/contacts";
import { GithubIcon, MailIcon } from "@/components/ui/icons";
import { SectionTitle } from "@/components/ui/section-title";

const icons = { mail: MailIcon, github: GithubIcon };

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 pt-28 pb-24">
      <SectionTitle>ติดต่อ</SectionTitle>
      <p className="text-lg font-medium">สนใจร่วมงาน ทักมาคุยกันได้เลยครับ</p>
      <dl className="mt-6 space-y-3">
        {contacts.map((contact) => (
          <ContactRow key={contact.label} contact={contact} />
        ))}
      </dl>
    </section>
  );
}

function ContactRow({ contact }: { contact: Contact }) {
  const Icon = icons[contact.icon];
  const external = contact.href.startsWith("http");

  return (
    <div className="flex items-center gap-4">
      <dt className="flex shrink-0 items-center gap-2.5 text-xs text-muted sm:w-28">
        <span className="flex size-8 items-center justify-center rounded-lg border border-line text-accent">
          <Icon className="size-4" />
        </span>
        <span className="sr-only sm:not-sr-only">{contact.label}</span>
      </dt>
      <dd>
        <a
          href={contact.href}
          {...(external && { target: "_blank", rel: "noopener noreferrer" })}
          className="group inline-flex items-center gap-1.5 text-base transition-colors hover:text-accent"
        >
          {contact.value}
          <span className="text-muted transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent">
            ↗
          </span>
        </a>
      </dd>
    </div>
  );
}
