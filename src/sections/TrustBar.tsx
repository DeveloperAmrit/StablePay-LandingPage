import { site } from '@/lib/site'

const orgs = [
  { label: 'Stability Nexus', href: site.stabilityNexus, dot: 'bg-brand-500' },
  { label: 'Djed Alliance', href: site.djedAlliance, dot: 'bg-gold-400' },
  { label: 'Tectonic Protocol', href: site.tectonicApp, dot: 'bg-ember-400' },
]

export const TrustBar = () => (
  <section className="border-y border-line bg-surface-subtle">
    <div className="container">
      <div className="flex flex-col items-center gap-5 py-7 md:flex-row md:justify-between md:gap-8">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-400">
          Built and maintained by
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-x-7 gap-y-3">
          {orgs.map((org) => (
            <li key={org.label}>
              <a
                href={org.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-[0.9375rem] font-medium text-ink-500 transition hover:text-ink-900"
              >
                <span className={`h-2 w-2 rounded-full ${org.dot} opacity-80 transition group-hover:opacity-100`} />
                {org.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
)

export default TrustBar
