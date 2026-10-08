export function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-8 flex items-center gap-4">
      <h2 className="text-base text-accent lg:text-lg">{children}</h2>
      <span className="h-px flex-1 bg-line" />
    </div>
  );
}
