export function Article({ title, body }: { title: string; body: string[] }) {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-2xl font-bold">{title}</h1>
      <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink-soft">
        {body.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
    </div>
  );
}
