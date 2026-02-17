import { Button } from "@/components/ui/Button";
import { CosmicCard } from "@/components/ui/CosmicCard";
import { FadeIn } from "@/components/ui/FadeIn";

const links = [
  { label: "Twitter", href: "https://twitter.com" },
  { label: "Telegram", href: "https://t.me" },
  { label: "DEX", href: "#" },
  { label: "ENS", href: "https://app.ens.domains" }
];

export function CommunitySection() {
  return (
    <section id="community">
      <FadeIn>
        <CosmicCard className="p-6 sm:p-7">
          <h3 className="text-center font-[var(--font-space-grotesk)] text-5xl font-semibold text-white">
            Join the Cloud
          </h3>

          <div className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {links.map((link) => (
              <Button key={link.label} href={link.href} variant="social" className="w-full text-lg">
                {link.label}
              </Button>
            ))}
          </div>
        </CosmicCard>
      </FadeIn>
    </section>
  );
}
