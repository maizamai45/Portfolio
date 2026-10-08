import { projects } from "@/data/projects";
import { Reveal } from "@/components/ui/reveal";
import { SectionTitle } from "@/components/ui/section-title";
import { ProjectCard } from "./project-card";

export function WorkSection() {
  return (
    <section id="work" className="scroll-mt-20 overflow-x-clip">
      <SectionTitle>ผลงาน</SectionTitle>
      <div className="relative">
        <span
          aria-hidden
          className="absolute top-0 bottom-0 left-[5px] w-px bg-line lg:left-1/2"
        />
        <ul className="space-y-10 lg:space-y-0">
          {projects.map((project, i) => {
            const side = i % 2 === 0 ? "left" : "right";
            return (
              <li
                key={project.title}
                className={`relative pl-8 lg:w-1/2 lg:pl-0 ${
                  side === "right" ? "lg:ml-auto lg:pl-12" : "lg:pr-12"
                } ${i > 0 ? "lg:-mt-32" : ""}`}
              >
                <TimelineDot side={side} />
                <Reveal from={side}>
                  <ProjectCard project={project} priority={i < 2} />
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function TimelineDot({ side }: { side: "left" | "right" }) {
  return (
    <span
      aria-hidden
      className={`absolute top-10 left-0 size-3 rounded-full border-2 border-accent bg-background ${
        side === "right"
          ? "lg:-translate-x-1/2"
          : "lg:right-0 lg:left-auto lg:translate-x-1/2"
      }`}
    />
  );
}
