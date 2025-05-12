"use client";

import { X } from "lucide-react";
import Link from "next/link";
import type { NavItemProps } from "./nav-item";
import MobileNavItem from "./mobile-nav-item";
import ContactButton from "./contact-button";
import { DolphinLogo } from "@/ui/Icons/logo";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItemProps[];
}

export const MobileMenu = ({ isOpen, onClose, navItems }: MobileMenuProps) => {
  return (
    <div className={`lg:hidden ${isOpen ? "block" : "hidden"}`}>
      <div
        className={`fixed inset-0 z-40 bg-black transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-25" : "opacity-0"
        }`}
        onClick={onClose}
      ></div>

      <div
        className={`fixed inset-y-0 right-0 z-50 w-[300px] bg-white shadow-xl overflow-y-auto transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-[16px] border-b border-gray-200">
          <Link href="/" onClick={onClose}>
            <DolphinLogo />
          </Link>
          <button
            type="button"
            className="rounded-md p-[8px] text-primary hover:bg-gray-100 focus:outline-none"
            onClick={onClose}
          >
            <X className="h-[24px] w-[24px]" />
          </button>
        </div>
        <div className="px-[16px] py-[8px]">
          <nav className="flex flex-col space-y-[4px] mt-[16px]">
            {navItems.map((item) => (
              <MobileNavItem
                key={item.title}
                title={item.title}
                href={item.href}
                hasDropdown={item.hasDropdown}
                dropdownItems={item.dropdownItems}
              />
            ))}
          </nav>
          <div className="mt-[16px] pt-[16px] border-t border-gray-200">
            <ContactButton className="w-full border border-primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
