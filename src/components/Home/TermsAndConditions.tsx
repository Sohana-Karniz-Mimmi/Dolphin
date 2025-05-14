import Subtitle from "@/ui/Subtitle"
import Title from "@/ui/Title"
import TermsAccordionItem from "./TermsAccordionItem"

// Terms and conditions data
const termsData = [
  {
    question: "Cancellation Policy",
    answer:
      "DSL service availability is subject to location and technical line capability. Installation may require a technician visit, and service activation typically takes 5-10 business days from order confirmation. Customer must ensure premises access for installation if required.",
  },
  {
    question: "ADSL Line",
    answer:
      "DSL services are provided on a 12 or 24-month contract basis as specified at sign-up. Early termination will result in a fee calculated as the remaining monthly payments of your contract. A 30-day written notice is required for service cancellation.",
  },
  {
    question: "Copper Stolen",
    answer:
      "Dolphin provides a DSL modem/router for the duration of service. This equipment remains property of Dolphin and must be returned in good working condition within 14 days of service termination to avoid equipment replacement fees. Technical support is available 24/7 via phone, email, or online chat.",
  },
  {
    question: "Installation",
    answer:
      "Dolphin provides a DSL modem/router for the duration of service. This equipment remains property of Dolphin and must be returned in good working condition within 14 days of service termination to avoid equipment replacement fees. Technical support is available 24/7 via phone, email, or online chat.",
  },
 
]

const TermsAndConditions = () => {
  return (
    <section className="w-full max-w-[1040px] mx-auto py-[40px] md:py-[80px]">
      <Title>Special Terms and Conditions</Title>
      <Subtitle className="w-full max-w-[804px] mx-auto">The following conditions apply to all DSL products</Subtitle>

      {/* Terms And Conditions Question and answer */}
      <div className="mt-[40px] md:mt-[62px]">
        {termsData.map((item, index) => (
          <TermsAccordionItem key={index} question={item.question} answer={item.answer} isFirst={index === 0} isLast={index === termsData.length - 1}/>
        ))}
      </div>
    </section>
  )
}

export default TermsAndConditions