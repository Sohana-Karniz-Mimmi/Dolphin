import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-[500px] lg:h-[731px] overflow-hidden">
      {/* Background Image*/}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/home/hero-overlay-background.png"
          alt="Background"
          width={1440}
          height={731}
          quality={100}
          priority
          className="object-cover w-full h-full"
        />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-[280px] md:max-w-[617.016px] mx-auto md:ml-0 md:pl-[83.7px] relative z-10 md:text-start text-center">
          <h1 className="text-white text-[30px] md:text-[36px] lg:text-[60px] xl:text-[72px] font-bold leading-tight">
            Fast. Reliable.{" "}
            <span className="bg-gradient-to-r from-[#FFD76C] to-[#F0A212] bg-clip-text text-transparent">
              Secure
            </span>{" "}
            Home Internet
          </h1>
        </div>
      </div>

      {/* Foreground Image */}
      <div className="absolute right-0 top-0 h-full">
        <Image
          src="/images/home/hero.png"
          alt="hero-illustration"
          width={1440}
          height={731}
          quality={100}
          priority
          className="object-cover h-full w-full"
        />
      </div>
    </section>
  );
}
