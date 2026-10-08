import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";

export function AboutSection() {
  return (
    <section
      id="about"
      className="fade-up grid scroll-mt-20 gap-10 pt-14 pb-20 sm:pt-20 sm:pb-24 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:gap-20 lg:pt-28 lg:pb-32"
    >
      <div>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
          {profile.name}
        </h1>
        <p className="mt-2 text-base text-accent lg:text-lg">{profile.role}</p>
        <p className="mt-5 max-w-md leading-relaxed text-muted lg:text-base lg:leading-relaxed">
          {profile.about}
        </p>
        <Stats />
      </div>

      <TechStack />
    </section>
  );
}

function Stats() {
  const stats = [
    { value: profile.experienceTotal, label: "ประสบการณ์ทำงาน" },
    { value: `${projects.length} โปรเจกต์`, label: "งานประจำและ Freelance" },
  ];

  return (
    <dl className="mt-10 grid max-w-md grid-cols-2 gap-6 border-y border-line py-6">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col-reverse gap-0.5">
          <dt className="text-xs text-muted">{stat.label}</dt>
          <dd className="text-lg font-medium">{stat.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function TechStack() {
  return (
    <div className="lg:border-l lg:border-line lg:pl-10">
      <h2 className="mb-5 text-base text-accent lg:text-lg">Tech Stack</h2>
      <dl className="space-y-3 lg:space-y-4">
        {skills.map((skill) => (
          <div key={skill.group} className="flex gap-4">
            <dt className="w-20 shrink-0 pt-0.5 text-xs text-muted">
              {skill.group}
            </dt>
            <dd className="flex flex-wrap gap-1.5">
              {skill.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-line px-2.5 py-0.5 text-xs"
                >
                  {item}
                </span>
              ))}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
