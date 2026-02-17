import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { Section } from "@/components/ui/Section";

const links = [
  { label: "Twitter", href: "https://twitter.com" },
  { label: "Telegram", href: "https://t.me" },
  { label: "DEX", href: "#" },
  { label: "ENS", href: "https://app.ens.domains" }
];

export function CommunitySection() {
  return (
    <Section id="community" title="Join the Cloud" className="pb-28">
      <FadeIn>
        <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3">
          {links.map((link) => (
            <Button
              key={link.label}
              href={link.href}
              variant="secondary"
              className="min-w-32 hover:-translate-y-0.5"
            >
              {link.label}
            </Button>
          ))}
        </div>
      </FadeIn>
    </Section>
  );
}
