import Section from "./Section";
import { stackGroups } from "@/lib/data";

export default function Stack() {
  return (
    <Section id="stack" number="05" title="Stack">
      <h3 className="mb-14 max-w-3xl text-3xl font-medium leading-tight tracking-tight md:text-5xl">
        Tools I reach for.
      </h3>
      <div className="mb-14 space-y-6 text-lg leading-relaxed text-fg/85 md:text-xl">
        <p>
          React and Node most days. PostgreSQL for anything that has to remember. Prisma when I want an ORM; raw SQL when I don&rsquo;t.
        </p>
        <p>
          n8n and the Claude API for anything that has to think. Notion as the backing store, Whisper for anything that starts as audio.
        </p>
        <p>
          TypeScript when the domain has enough surface to make it worth the ceremony; plain JavaScript when it doesn&rsquo;t. Figma for design, Docker where I need to run something the same way twice, Vercel and Railway for deploy.
        </p>
      </div>

      <dl className="space-y-3">
        {stackGroups.map(({ label, tools }) => (
          <div
            key={label}
            className="grid gap-1.5 border-t border-line pt-3 md:grid-cols-[160px,1fr] md:gap-8"
          >
            <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-fg-dim">
              {label}
            </dt>
            <dd className="font-mono text-sm text-fg/85">
              {tools.join(" · ")}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
