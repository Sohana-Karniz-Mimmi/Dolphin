import { NavItemProps } from "@/Shared/Navbar/nav-item";

export const navItems: NavItemProps[] = [
  {
    title: "Fiber & Wireless",
    href: "/fiber-wireless",
    hasDropdown: true,
    dropdownItems: [
      { title: "Fiber Internet", href: "/fiber-internet" },
      { title: "Wireless Solutions", href: "/wireless-solutions" },
      { title: "Enterprise Connectivity", href: "/enterprise-connectivity" },
    ],
  },
  {
    title: "Managed IT Support",
    href: "/managed-it",
    hasDropdown: true,
    dropdownItems: [
      { title: "Network Management", href: "/network-management" },
      { title: "Cloud Services", href: "/cloud-services" },
      { title: "Cybersecurity", href: "/cybersecurity" },
    ],
  },
  {
    title: "About Us",
    href: "/about",
    hasDropdown: false,
  },
  {
    title: "Property Managers",
    href: "/property-managers",
    hasDropdown: false,
  },
];
