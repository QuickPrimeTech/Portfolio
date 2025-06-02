"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ChefHat,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Mail,
  Code,
  Palette,
  BarChart3,
  Users,
  Camera,
  Smartphone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Founder & Lead Developer",
      location: "San Francisco, CA",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Former tech lead at a major food delivery platform with 8+ years of experience building scalable web applications. Passionate about helping restaurants succeed online.",
      skills: ["React", "Node.js", "Restaurant Tech", "UX Design"],
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
        email: "sarah@quickprimetech.com",
      },
      achievements: [
        "50+ Restaurant Websites",
        "Google Certified",
        "AWS Solutions Architect",
      ],
    },
    {
      name: "Marcus Rodriguez",
      role: "Creative Director",
      location: "Austin, TX",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Award-winning designer with a background in hospitality branding. Specializes in creating visual identities that capture the essence of restaurant brands.",
      skills: ["Brand Design", "UI/UX", "Photography", "Adobe Creative Suite"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "marcus@quickprimetech.com",
      },
      achievements: [
        "Design Awards Winner",
        "Brand Strategy Expert",
        "Restaurant Photography",
      ],
    },
    {
      name: "Emily Watson",
      role: "Project Manager",
      location: "Chicago, IL",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Former restaurant operations manager turned tech project manager. Understands both sides of the business and ensures smooth project delivery.",
      skills: [
        "Project Management",
        "Client Relations",
        "Restaurant Operations",
        "Agile",
      ],
      social: {
        linkedin: "#",
        email: "emily@quickprimetech.com",
      },
      achievements: [
        "PMP Certified",
        "Restaurant Industry Expert",
        "100% On-Time Delivery",
      ],
    },
    {
      name: "David Kim",
      role: "Full-Stack Developer",
      location: "Seattle, WA",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Specialist in restaurant technology integrations including POS systems, reservation platforms, and online ordering solutions.",
      skills: ["JavaScript", "Python", "API Integration", "Database Design"],
      social: {
        linkedin: "#",
        github: "#",
        email: "david@quickprimetech.com",
      },
      achievements: [
        "Integration Specialist",
        "Performance Optimization",
        "Security Expert",
      ],
    },
    {
      name: "Lisa Thompson",
      role: "SEO & Marketing Specialist",
      location: "Miami, FL",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Digital marketing expert focused on local SEO and restaurant marketing strategies. Helps restaurants get found online and attract more customers.",
      skills: ["SEO", "Local Marketing", "Google Ads", "Analytics"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "lisa@quickprimetech.com",
      },
      achievements: [
        "Google Ads Certified",
        "Local SEO Expert",
        "Conversion Optimization",
      ],
    },
    {
      name: "James Park",
      role: "QA & Support Lead",
      location: "Portland, OR",
      image: "/placeholder.svg?height=300&width=300",
      bio: "Ensures every website meets our high standards for performance, accessibility, and user experience. Leads our customer support team.",
      skills: [
        "Quality Assurance",
        "Customer Support",
        "Accessibility",
        "Performance Testing",
      ],
      social: {
        linkedin: "#",
        email: "james@quickprimetech.com",
      },
      achievements: [
        "Accessibility Expert",
        "Customer Success",
        "Quality Standards",
      ],
    },
  ];

  const stats = [
    { label: "Team Members", value: "6", icon: Users },
    { label: "Years Experience", value: "40+", icon: BarChart3 },
    { label: "Projects Completed", value: "200+", icon: Code },
    { label: "Client Satisfaction", value: "99%", icon: Smartphone },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-linear-to-br from-red-50 to-red-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet the <span className="text-blue-600">QuickPrimeTech</span> Team
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            We're a passionate team of designers, developers, and restaurant
            industry experts dedicated to helping your restaurant succeed
            online.
          </p>

          {/* Team Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Each team member brings unique expertise to ensure your restaurant
              website exceeds expectations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {teamMembers.map((member) => (
              <Card
                key={member.name}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-square bg-linear-to-br from-red-100 to-red-100 flex items-center justify-center">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {member.name}
                      </h3>
                      <p className="text-blue-600 font-medium mb-2">
                        {member.role}
                      </p>
                      <div className="flex items-center text-gray-500 text-sm">
                        <MapPin className="h-4 w-4 mr-1" />
                        {member.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {member.bio}
                  </p>

                  {/* Skills */}
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="secondary"
                          className="bg-red-50 text-red-700 text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Key Achievements
                    </h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {member.achievements.map((achievement) => (
                        <li key={achievement} className="flex items-center">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Social Links */}
                  <div className="flex space-x-3 pt-4 border-t border-gray-100">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        className="text-gray-400 hover:text-blue-600 transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        className="text-gray-400 hover:text-blue-600 transition-colors"
                      >
                        <Twitter className="h-5 w-5" />
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        className="text-gray-400 hover:text-blue-600 transition-colors"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    <a
                      href={`mailto:${member.social.email}`}
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and how we work with
              our restaurant partners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <ChefHat className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Restaurant-First
              </h3>
              <p className="text-gray-600">
                We only work with restaurants, so we understand your unique
                challenges and opportunities better than anyone.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Partnership
              </h3>
              <p className="text-gray-600">
                We're not just vendors – we're partners in your success. Your
                growth is our success, and we're committed for the long term.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Results-Driven
              </h3>
              <p className="text-gray-600">
                Every decision we make is focused on driving real business
                results – more customers, more bookings, more revenue.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Palette className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Craftsmanship
              </h3>
              <p className="text-gray-600">
                We take pride in our work and attention to detail. Every pixel,
                every line of code, every interaction is carefully crafted.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Smartphone className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Innovation
              </h3>
              <p className="text-gray-600">
                We stay ahead of technology trends and continuously improve our
                processes to deliver better results faster.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Camera className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Transparency
              </h3>
              <p className="text-gray-600">
                Clear communication, honest timelines, and transparent pricing.
                No surprises, no hidden fees, no confusion.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Work with Our Team?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Let's discuss your restaurant's goals and how our team can help you
            achieve them. Book a free consultation today.
          </p>
          <Link href="/book-consultation">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3"
            >
              Book Free Consultation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
