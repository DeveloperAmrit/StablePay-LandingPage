import { ArrowLeftRight, Code2, Gauge, Network, ServerOff, ShieldCheck } from 'lucide-react'
import Reveal from '@/components/Reveal'
import SectionHeading from '@/components/SectionHeading'

const features = [
  {
    icon: ServerOff,
    title: 'No intermediary servers',
    body: 'The widget calls smart contracts directly from the browser. There is nothing between you and your customer to rate-limit you, go offline, or change its terms.',
  },
  {
    icon: ShieldCheck,
    title: 'Non-custodial by construction',
    body: 'StablePay has no balance and no account. Funds move from your customer’s wallet to your address in the settling transaction — there is no step where anyone else holds them.',
  },
  {
    icon: ArrowLeftRight,
    title: 'Conversion on payment',
    body: 'Customers paying in the native coin do not have to swap first. Tectonic mints stablecoins to your address in the same transaction, so you are never left holding a volatile asset.',
  },
  {
    icon: Gauge,
    title: 'Quotes that favour the merchant',
    body: 'Prices come from the on-chain oracle and are refreshed right before signing. The cost is rounded up, so you are credited at least the amount you invoiced — never less.',
  },
  {
    icon: Code2,
    title: 'A drop-in React component',
    body: 'Two imports and one config object. Ships as ESM and UMD builds, styles included, and hands you the receipt through a completion callback you can wire to fulfilment.',
  },
  {
    icon: Network,
    title: 'Multi-chain from config',
    body: 'Supporting another chain is a config entry. The widget prompts the customer to switch networks — or add the chain outright — without you writing wallet plumbing.',
  },
]

const tiles = [
  'bg-brand-50 text-brand-600',
  'bg-gold-50 text-gold-700',
  'bg-ember-50 text-ember-500',
] as const

export const Features = () => (
  <section id="features" className="scroll-mt-24 border-y border-line bg-surface-subtle py-20 md:py-28">
    <div className="container">
      <SectionHeading
        eyebrow="Why StablePay"
        title="Everything a payment processor does, minus the payment processor."
        description="Decentralised is not the selling point on its own. What matters is what falls away when there is no intermediary in the path."
      />

      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, i) => (
          <Reveal key={feature.title} delay={(i % 3) * 0.07}>
            <div className="card-lift h-full bg-white p-6">
              <span
                className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${tiles[i % tiles.length]}`}
              >
                <feature.icon className="h-[22px] w-[22px]" />
              </span>
              <h3 className="mt-5 text-[1.0625rem] font-semibold">{feature.title}</h3>
              <p className="mt-2 text-[0.9375rem] leading-relaxed text-ink-500">{feature.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
)

export default Features
