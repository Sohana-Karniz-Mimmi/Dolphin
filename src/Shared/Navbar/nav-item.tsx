"use client";

import Link from "next/link";
import { DownArrowIcon } from "@/ui/Icons/DownArrowIcon";

export interface NavItemProps {
  title: string;
  href: string;
  hasDropdown?: boolean;
  dropdownItems?: { title: string; href: string }[];
}

export const NavItem = ({
  title,
  href,
  hasDropdown,
  dropdownItems,
}: NavItemProps) => {
  if (hasDropdown && dropdownItems) {
    return (
      <div className="relative group">
        <button className="flex items-center gap-1 text-white focus:outline-none">
          {title} <DownArrowIcon />
        </button>

        {/* Dropdown that appears on hover */}
        <div className="absolute left-0 mt-[8px] w-[192px] rounded-md bg-white z-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out">
          <div className="py-[4px]" role="menu" aria-orientation="vertical">
            {dropdownItems.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="block px-[16px] py-[8px] text-[14px] text-main hover:bg-gray-100"
                role="menuitem"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <Link href={href} className="text-white">
      {title}
    </Link>
  );
};

export default NavItem;
