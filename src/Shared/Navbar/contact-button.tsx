import PhoneIcon from "@/ui/Icons/Phone";

interface ContactButtonProps {
  className?: string;
}

export const ContactButton = ({ className = "" }: ContactButtonProps) => {
  return (
    <button
      className={`inline-flex items-center justify-center gap-[8px] rounded-md bg-white px-[20px] py-[14px] text-[15px] md:text-[18px] font-medium text-primary focus:outline-none cursor-pointer ${className}`}
    >
      <PhoneIcon />
      Contact Us
    </button>
  );
};

export default ContactButton;
