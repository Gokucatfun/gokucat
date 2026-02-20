import { Button } from "@/components/ui/Button";
import { CosmicCard } from "@/components/ui/CosmicCard";
import { Section } from "@/components/ui/Section";

const links = [
  { label: "Twitter", href: "https://twitter.com" },
  { label: "Telegram", href: "https://t.me" },
  { label: "DEX", href: "#" },
  { label: "ENS", href: "https://app.ens.domains" }
];

export function CommunitySection() {
  return (
    <Section id="community" title="Join the Cloud">
      <CosmicCard className="rounded-2xl p-6 sm:p-8">
        <div className="mx-auto grid max-w-2xl gap-3 sm:grid-cols-2">
          {links.map((item) => (
            <Button key={item.label} href={item.href} variant="social" className="w-full">
              {item.label}
            </Button>
          ))}
        </div>
      </CosmicCard>
    </Section>
  );
}
