import Connection from "@/components/Home/Connection";
import ConnectivityProducts from "@/components/Home/ConnectivityProducts";
import FibreBusiness from "@/components/Home/FibreBusiness";
import Hero from "@/components/Home/Hero";
import Solution from "@/components/Home/Solution";
import TermsAndConditions from "@/components/Home/TermsAndConditions";

export default function Home() {
  return (
    <main className="layout_container">
      <Hero />
      <Solution />
      <ConnectivityProducts />
      <FibreBusiness />
      <Connection />
      <TermsAndConditions />
    </main>
  );
}
