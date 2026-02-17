import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "hero" | "wallet" | "social";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
  target?: string;
  rel?: string;
};

const variantStyles: Record<ButtonVariant, string> = {
  hero:
    "border-indigo-200/70 bg-gradient-to-r from-indigo-500/40 via-violet-500/38 to-fuchsia-500/36 text-white shadow-[0_0_28px_rgba(147,51,234,0.32)] hover:border-cosmic-gold/70 hover:shadow-glow-soft",
  wallet:
    "border-indigo-100/65 bg-black/35 text-white shadow-[0_0_16px_rgba(104,90,255,0.28)] hover:border-cosmic-gold/70 hover:text-cosmic-gold",
  social:
    "border-violet-100/65 bg-gradient-to-r from-indigo-500/26 to-fuchsia-500/26 text-white shadow-[0_0_22px_rgba(139,92,246,0.26)] hover:border-cosmic-gold/65 hover:shadow-glow-soft"
};

const baseStyles =
  "inline-flex items-center justify-center rounded-full border px-7 py-3 text-base font-semibold tracking-wide transition-all duration-300";

export function Button({
  children,
  href,
  variant = "hero",
  className,
  target,
  rel
}: ButtonProps) {
  const classes = cn(baseStyles, variantStyles[variant], className);

  if (href) {
    const external = href.startsWith("http");
    if (external) {
      return (
        <a href={href} target={target ?? "_blank"} rel={rel ?? "noreferrer"} className={classes}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}
