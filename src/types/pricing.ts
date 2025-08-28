type PlanKey = "starter" | "pro" | "premium";
interface FeatureItem {
  name: string;
  starter: boolean;
  pro: boolean;
  premium: boolean;
}

export interface FeatureCategory {
  category: string;
  items: FeatureItem[];
}

export interface Plan {
  name: string;
  key: PlanKey;
  badge?: string;
  highlight?: boolean;
}
