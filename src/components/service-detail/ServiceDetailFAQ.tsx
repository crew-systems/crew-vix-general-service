import React from "react";
import { HelpCircle } from "lucide-react";
import { ServiceItem } from "../../data/servicesData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

interface ServiceDetailFAQProps {
  service: ServiceItem;
}

export const ServiceDetailFAQ: React.FC<ServiceDetailFAQProps> = ({ service }) => {
  return (
    <section className="section-pad bg-[#F5F6F8]">
      <div className="container mx-auto gutter-x">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-md bg-[#C99A55]/10 text-[#1A2B44] font-bold text-xs uppercase tracking-wider mb-4 border border-[#C99A55]/20">
            <HelpCircle className="w-3.5 h-3.5 text-[#C99A55]" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-extrabold text-[#1A2B44] mb-4 tracking-tight">
            FREQUENTLY ASKED QUESTIONS ABOUT {service.shortName.toUpperCase()}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Get clear, straightforward answers about our {service.name.toLowerCase()}, pricing, warranties, and South Florida code requirements.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl p-6 sm:p-8 border border-[#1A2B44]/10 shadow-crisp">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {service.faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="border border-[#1A2B44]/10 rounded-lg px-5 data-[state=open]:border-[#C99A55]/50 data-[state=open]:bg-[#F5EDE0]/20 transition-colors"
              >
                <AccordionTrigger className="text-left font-heading font-bold text-base sm:text-lg text-[#1A2B44] hover:no-underline hover:text-[#C99A55] py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base text-muted-foreground leading-relaxed pt-2 pb-5 border-t border-[#1A2B44]/5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
