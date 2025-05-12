"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import NavItem from "./nav-item";
import MobileMenu from "./mobile-menu";
import ContactButton from "./contact-button";
import { navItems } from "@/app/mock/nav-data";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);

    if (!mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <header className="fixed top-0 z-50 w-full">
      <div className="w-full max-w-[1280] mx-auto px-[16px] sm:px-[20] xl:px-0">
        <div className="flex h-[80px] items-center justify-between px-[8px] md:px-[16px] xl:px-0">
          <div className="flex xl:gap-[76px] md:gap-[36px]">
            <Link href={"/"}>
              <Image
                src="/images/logo.svg"
                width={96}
                height={50}
                alt="Dolphin Logo"
                className="w-24 h-[50px] md:w-[96px] md:h-[50px]"
                priority
              />
            </Link>
            {/* Desktop Navigation */}
            <div className="hidden lg:flex lg:items-center">
              <nav className="flex items-center gap-[30px]">
                {navItems.map((item) => (
                  <NavItem
                    key={item.title}
                    title={item.title}
                    href={item.href}
                    hasDropdown={item.hasDropdown}
                    dropdownItems={item.dropdownItems}
                  />
                ))}
              </nav>
            </div>
          </div>

          {/* Contact Us Button - Desktop */}
          <div className="hidden lg:block">
            <ContactButton />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md text-white focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <Menu className="h-[24px] w-[24px]" />
            </button>
          </div>
        </div>
      </div>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={closeMobileMenu}
        navItems={navItems}
      />
    </header>
  );
}
