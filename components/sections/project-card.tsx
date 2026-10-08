import Image from "next/image";
import type { Project } from "@/data/projects";

export function ProjectCard({
  project,
  priority,
}: {
  project: Project;
  priority: boolean;
}) {
  const Card = project.href ? "a" : "div";
  const meta = [project.role, project.duration].filter(Boolean).join(" · ");
  const externalHost = project.href?.startsWith("http")
    ? new URL(project.href).hostname
    : undefined;

  return (
    <Card
      href={project.href}
      {...(externalHost && { target: "_blank", rel: "noopener noreferrer" })}
      className="group flex flex-col rounded-2xl border border-line bg-surface p-2 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-black/5"
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-line">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(min-width: 1152px) 488px, (min-width: 1024px) 45vw, 100vw"
          className="object-cover transition duration-700 ease-out group-hover:scale-[1.04] dark:opacity-85 dark:group-hover:opacity-100"
          priority={priority}
        />
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        {(project.type || meta) && (
          <div className="flex flex-wrap items-center gap-2 text-xs">
            {project.type && (
              <span className="rounded-full bg-accent/10 px-2.5 py-0.5 font-medium text-accent">
                {project.type}
              </span>
            )}
            {meta && <span className="text-muted">{meta}</span>}
          </div>
        )}

        <h3 className="mt-3 text-lg font-medium first:mt-0">
          {project.title}
        </h3>
        {externalHost && (
          <span className="mt-0.5 inline-flex items-center gap-1 self-start text-xs text-accent">
            {externalHost}
            <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </span>
        )}
        <p className="mt-1 leading-relaxed text-muted">{project.description}</p>

        {project.modules && (
          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-xs text-muted">
            {project.modules.map((module) => (
              <li key={module} className="flex items-center gap-1.5">
                <span className="size-1 rounded-full bg-accent" />
                {module}
              </li>
            ))}
          </ul>
        )}

        <ul className="mt-auto flex flex-wrap gap-1.5 pt-5">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-line px-2 py-0.5 font-mono text-[11px] text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </Card>
  );
}
