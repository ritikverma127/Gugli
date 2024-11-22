import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "How do you handle project changes or scope adjustments?",
    answer:
      "We follow a change management process to assess the impact of any scope changes. We then provide you with a new project plan and budget estimates before proceeding with any changes.",
    value: "item-1",
  },
  {
    question: "How do you stay updated with new technologies?",
    answer:
      "Our team regularly attends industry conferences, participates in training, and explores the latest technological advancements to ensure we provide the best solutions.",
    value: "item-2",
  },
  {
    question:
      "Do you provide Artificial Intelligence (AI) or Machine Learning (ML) solutions?",
    answer:
      "Yes, we offer AI and ML solutions to help businesses automate tasks, improve decision-making, and gain insights from data.",
    value: "item-3",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion type="single" collapsible className="w-full AccordionRoot">
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
