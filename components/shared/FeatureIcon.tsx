import {
  Receipt,
  Users,
  Package,
  TrendingUp,
  BarChart3,
  WifiOff,
  ArrowLeftRight,
  MessageCircle,
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
};

export function FeatureIcon({
  name,
  className = "h-5 w-5",
}: {
  name: string;
  className?: string;
}) {
  const Icon = map[name] || Receipt;
  return <Icon className={className} aria-hidden />;
}
