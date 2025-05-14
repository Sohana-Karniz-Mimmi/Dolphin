import Link from "next/link";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "@/ui/Icons/SocialIcons";

const FooterLinkSection = ({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) => (
  <div className="w-full md:w-[225px]">
    <h3 className="text-[15px] md:text-[22px] font-semibold mb-[12px] text-white leading-normal">
      {title}
    </h3>
    <ul className="space-y-[12px]">
      {links.map((link, index) => (
        <li key={index}>
          <Link href={link.href} className="inline-flex items-center gap-[8px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M7.5 15L12.5 10L7.5 5"
                stroke="#F2A413"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-[16px] text-white fort-normal tracking-normal">
              {link.label}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink = ({ href, icon, label }: SocialLinkProps) => (
  <li>
    <Link href={href} className="flex items-center gap-[8px]">
      {icon}
      <span className="text-[16px] text-white">{label}</span>
    </Link>
  </li>
);

const Footer = () => {
  const quickLinks = [
    { label: "mydolphin Home app", href: "/" },
    { label: "Dolphin Home Spot", href: "/" },
    { label: "Microsoft Exchange Online", href: "/microsoft-exchange-online" },
    { label: "FibroniX on the Go", href: "/fibroniX" },
  ];

  const aboutLinks = [
    { label: "About us", href: "/about" },
    { label: "Legal", href: "/legal" },
    { label: "CSR", href: "/csr" },
    { label: "Locations", href: "/locations" },
  ];

  const helpLinks = [
    { label: "mydolphin Home", href: "/" },
    { label: "Knowledge Base", href: "/knowledge" },
    { label: "Payments & Top ups", href: "/payments" },
    { label: "Contact Us", href: "/contact" },
  ];

  const socialLinks = [
    { label: "Facebook", href: "https://facebook.com", icon: <FacebookIcon /> },
    {
      label: "Instagram",
      href: "https://instagram.com",
      icon: <InstagramIcon />,
    },
    { label: "LinkedIn", href: "https://linkedin.com", icon: <LinkedinIcon /> },
    { label: "Twitter", href: "https://twitter.com", icon: <TwitterIcon /> },
  ];

  return (
    <footer className="layout_container bg-primary py-[40px] md:py-[50px]">
      <div className="max-w-[1240px] mx-auto">
        <div className="flex flex-col md:flex-row md:flex-wrap md:justify-between">
          <FooterLinkSection title="Quick Links" links={quickLinks} />
          <FooterLinkSection title="About Dolphin" links={aboutLinks} />
          <FooterLinkSection title="Help & Support" links={helpLinks} />

          {/* Social links */}
          <div className="w-full md:w-[225px]">
            <h3 className="text-[15px] md:text-[22px] font-semibold mb-[12px] text-white leading-normal">
              Help & Support
            </h3>
            <ul className="space-y-[12px]">
              {socialLinks.map((social, index) => (
                <SocialLink
                  key={index}
                  href={social.href}
                  icon={social.icon}
                  label={social.label}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
