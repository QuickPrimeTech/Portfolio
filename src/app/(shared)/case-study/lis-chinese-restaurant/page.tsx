"use client";
import { AboutSection } from "@/sections/case-study/lis-chinese-restaurant/about";
import { ChallengeSection } from "@/sections/case-study/lis-chinese-restaurant/challenge";
import { Deliverables } from "@/sections/case-study/lis-chinese-restaurant/deliverables";
import { HeroSection } from "@/sections/case-study/lis-chinese-restaurant/hero";
import { Stats } from "@/sections/case-study/lis-chinese-restaurant/stats";
import Testimonials from "@/sections/home/testimonial";

export default function LisChineseRestaurant() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ChallengeSection />
      <Stats />
      <Deliverables />
      <Testimonials />
    </>
  );
}
