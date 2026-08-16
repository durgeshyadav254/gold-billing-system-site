import {
  Receipt,
  Users,
  Package,
  TrendingUp,
  BarChart3,
  WifiOff,
  ArrowLeftRight,
  MessageCircle,
  Cloud,
  Calculator,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  receipt: Receipt,
  users: Users,
  package: Package,
  trending: TrendingUp,
  chart: BarChart3,
  wifi: WifiOff,
  exchange: ArrowLeftRight,
  message: MessageCircle,
  cloud: Cloud,
  calculator: Calculator,
};

export function FeatureIcon({
  name,
  className = "h-5 w-5",
  variant = "default",
}: {
  name: string;
  className?: string;
  variant?: "default" | "gold" | "outlined";
}) {
  const Icon = map[name] || Receipt;

  if (variant === "gold") {
    return (
      <span className="relative inline-flex">
        <Icon
          className={`${className} text-gold drop-shadow-[0_2px_4px_rgba(184,149,74,0.35)]`}
          aria-hidden
        />
      </span>
    );
  }

  if (variant === "outlined") {
    return (
      <Icon
        className={`${className} text-gold-deep stroke-[1.6]`}
        aria-hidden
      />
    );
  }

  return <Icon className={className} aria-hidden />;
}
