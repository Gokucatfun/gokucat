import { CosmicCard } from "@/components/ui/CosmicCard";
import { Section } from "@/components/ui/Section";

const tokenCards = [
  { label: "Liquidity", value: "35%" },
  { label: "Community", value: "25%" },
  { label: "Ecosystem", value: "15%" },
  { label: "Treasury", value: "15%" },
  { label: "Team", value: "10% (Vested)" }
];

export function TokenomicsSection() {
  return (
    <Section id="tokenomics" title="Tokenomics">
      <CosmicCard className="rounded-2xl p-6 sm:p-8">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <div className="relative h-56 w-56 rounded-full border border-violet-200/30 bg-[conic-gradient(from_20deg,_rgba(250,204,21,0.8)_0_35%,_rgba(192,132,252,0.8)_35%_60%,_rgba(125,211,252,0.8)_60%_75%,_rgba(129,140,248,0.8)_75%_90%,_rgba(236,72,153,0.8)_90%_100%)] shadow-[0_0_35px_rgba(168,85,247,0.2)]">
            <div className="absolute inset-8 rounded-full border border-violet-100/20 bg-[#0b1025]/90" />
          </div>

          <p className="mt-5 text-slate-300">Total Supply</p>
          <p className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">1,000,000,000 $CLOUD</p>
        </div>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {tokenCards.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-violet-200/25 bg-slate-900/45 p-4 transition-all duration-200 hover:border-violet-200/55 hover:shadow-[0_0_26px_rgba(168,85,247,0.22)]"
            >
              <p className="text-sm text-slate-300">{item.label}</p>
              <p className="mt-2 text-xl font-bold text-white">{item.value}</p>
            </div>
          ))}
        </div>
      </CosmicCard>
    </Section>
  );
}
