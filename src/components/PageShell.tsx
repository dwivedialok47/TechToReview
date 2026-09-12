export function PageShell({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <main className="mx-auto max-w-[1280px] px-4 py-8 font-sans sm:px-6">
      {eyebrow ? (
        <p className="text-xs font-extrabold uppercase tracking-wider text-brand">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="mt-1 text-3xl font-black tracking-tight text-zinc-950">
        {title}
      </h1>
      <div className="mt-6">{children}</div>
    </main>
  );
}
