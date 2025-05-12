"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { NavItemProps } from "./nav-item"

export const MobileNavItem = ({ title, href, hasDropdown, dropdownItems }: NavItemProps) => {
  const [isOpen, setIsOpen] = useState(false)

  if (hasDropdown && dropdownItems) {
    return (
      <div className="py-2">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full text-left text-main"
        >
          {title}
          <ChevronDown className={`h-[16px] w-[16px] transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </button>
        {isOpen && (
          <div className="mt-[8px] pl-[16px] space-y-[8px] border-l border-gray-200">
            {dropdownItems.map((item) => (
              <Link key={item.title} href={item.href} className="block py-[4px] text-main hover:text-primary">
                {item.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <Link href={href} className="block py-[8px] text-main">
      {title}
    </Link>
  )
}

export default MobileNavItem
