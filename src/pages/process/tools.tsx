import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
const tools = [
  {
    name: "Figma",
    category: "Design",
    description: "UI/UX design and prototyping",
  },
  {
    name: "React",
    category: "Development",
    description: "Modern frontend framework",
  },
  {
    name: "Next.js",
    category: "Development",
    description: "Full-stack React framework",
  },
  {
    name: "Tailwind CSS",
    category: "Development",
    description: "Utility-first CSS framework",
  },
  {
    name: "Vercel",
    category: "Hosting",
    description: "Fast, reliable hosting platform",
  },
  {
    name: "Google Analytics",
    category: "Analytics",
    description: "Website performance tracking",
  },
  {
    name: "Lighthouse",
    category: "Testing",
    description: "Performance and SEO auditing",
  },
  {
    name: "Notion",
    category: "Project Management",
    description: "Collaboration and documentation",
  },
];

const Tools = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tools & Technology
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We use industry-leading tools and modern technology to build fast,
            secure, and scalable websites.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {tools.map((tool, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <Badge className="mb-4 bg-red-100 text-red-800">
                  {tool.category}
                </Badge>
                <h3 className="text-lg font-bold mb-2">{tool.name}</h3>
                <p className="text-gray-600 text-sm">{tool.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tools;
