import { ReviewStat } from "@/types";

interface HeroSectionProps {
  stats: ReviewStat[];
}

export default function Hero({ stats = [] }: HeroSectionProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-primary">
          What Our <span className="text-secondary">Restaurant Partners</span>{" "}
          Say
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
          Real reviews from real restaurant owners who've transformed their
          online presence with QuickPrimeTech.
        </p>

        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="h-8 w-8 text-secondary" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
