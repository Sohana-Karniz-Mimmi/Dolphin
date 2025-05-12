// components/Button.tsx
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline";
  icon?: ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  icon,
  onClick,
  className = "",
}: ButtonProps) {
  const baseStyle =
    "flex items-center justify-center gap-[8px] rounded-[4px] text-[15px] md:text-[18px] cursor-pointers font-medium transition-all";

  const variantStyle =
    variant === "primary"
      ? "bg-gradient-to-r from-[#06242F] to-[#2C6176] text-white"
      : "bg-white border border-[1.67px] border-main text-main";

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variantStyle} ${className}`}
    >
      {icon && <span className="inline-flex">{icon}</span>}
      {children}
    </button>
  );
}
