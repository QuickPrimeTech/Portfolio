// src/config/navigation.ts

// List of navigation links for the application

type NavLink = {
  id: number;
  link: string;
  href: string;
};
export const links: NavLink[] = [
  {
    id: 1,
    link: "Home",
    href: "/",
  },
  {
    id: 2,
    link: "Projects",
    href: "/projects",
  },
  {
    id: 3,
    link: "Pricing",
    href: "/pricing",
  },
  {
    id: 4,
    link: "Team",
    href: "/team",
  },
  {
    id: 5,
    link: "Reviews",
    href: "/reviews",
  },
];
