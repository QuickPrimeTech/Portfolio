import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Section, Header, Title, SubTitle } from "@/components/typography";

const teamMembers = [
  {
    name: "Derick Kibiwott",
    role: "Designer and Front-end Developer",
    image:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1749222987/20240524_141146_ivt1e1.jpg",
    bio: "I'm a Designer and Front-end Developer who helps businesses grow with clean, modern websites. I focus on designs that look great, work well, and turn visitors into loyal customers. ",
    skills: ["Customer Service", "Restaurant Tech", "UX Design"],
  },
  {
    name: "Meshack Kipkemoi",
    role: "Front-end & Back-end Developer",
    image:
      "https://res.cloudinary.com/dhlyei79o/image/upload/v1749244431/cropped-face_2_iiznfp.jpg",
    bio: "Ensures every website meets our high standards for performance, accessibility, and user experience. Leads our customer support team.",
    skills: [
      "React Js",
      "Customer Support",
      "Accessibility",
      "Performance Testing",
    ],
  },
];

const Team = () => {
  return (
    <Section className="bg-white" aria-labelledby="team-heading">
      <Header>
        <Title id="team-heading">
          Our <span className="text-secondary">Expert</span> Team
        </Title>
        <SubTitle>
          Each team member brings unique expertise to ensure your restaurant
          website exceeds expectations.
        </SubTitle>
      </Header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-8 max-w-7xl mx-auto">
        {teamMembers.map((member) => (
          <Card
            key={member.name}
            className="overflow-hidden hover:shadow-lg transition-shadow w-full py-0"
          >
            <Image
              src={member.image}
              alt={`Photo of ${member.name}`}
              width={300}
              height={300}
              className="object-cover aspect-square w-full"
            />
            <CardContent className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-secondary font-medium mb-2">{member.role}</p>
              </div>
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                {member.bio}
              </p>
              {/* Skills */}
              <div
                className="mb-4 flex flex-wrap gap-2"
                aria-label={`${member.name}'s skills`}
              >
                {member.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-secondary text-secondary-foreground text-xs"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
};

export default Team;
