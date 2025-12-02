import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  CheckCircle, 
  Calendar,
  MessageCircle,
  ArrowRight,
  HelpCircle
} from "lucide-react";
import SEO from "@/components/SEO";
import FrenchFlag from "@/components/FrenchFlag";

const FAQ = () => {
  return (
    <>
      <SEO
        title="Frequently Asked Questions - French Flow"
        description="Common questions about French Flow classes, levels, and commitments."
        keywords="French classes FAQ, French learning questions, French Flow help"
        url="/faq"
      />
      <div className="min-h-screen pt-20" style={{ paddingTop: 'calc(5rem + 10px)' }}>
        {/* Hero Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4 text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                <HelpCircle className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="flex items-center justify-center mb-4">
              <FrenchFlag className="text-4xl mr-3" />
              <h1 className="text-4xl md:text-5xl font-heading font-bold">
                Common Questions
              </h1>
              <FrenchFlag className="text-4xl ml-3" />
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quick answers to help you take the next step
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-4xl mx-auto">
            <Card className="shadow-elegant border-border/50">
              <CardContent className="p-8">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1" className="border-b border-border/50">
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-heading font-semibold text-lg text-foreground">
                          How do I know if I'm the right level?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                      <div className="pl-12">
                        <p className="text-muted-foreground leading-relaxed">
                          That's exactly what our free consultation is for! In 30 minutes, 
                          I can assess your current level and recommend the perfect starting point.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-2" className="border-b border-border/50">
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <Calendar className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-heading font-semibold text-lg text-foreground">
                          What if I can't commit to all 10 weeks?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                      <div className="pl-12">
                        <p className="text-muted-foreground leading-relaxed">
                          While the 10-week structure works best, we can discuss alternatives 
                          during your consultation. I'm flexible and want to find what works for you.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-3" className="border-b border-border/50">
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <MessageCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-heading font-semibold text-lg text-foreground">
                          Do you offer private lessons?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                      <div className="pl-12">
                        <p className="text-muted-foreground leading-relaxed">
                          Yes! While group classes are my specialty, I do offer private lessons 
                          for specific needs. Let's discuss what would work best during your consultation.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="item-4">
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                          <ArrowRight className="w-4 h-4 text-white" />
                        </div>
                        <span className="font-heading font-semibold text-lg text-foreground">
                          What happens after the 10-week block?
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                      <div className="pl-12">
                        <p className="text-muted-foreground leading-relaxed">
                          Most students continue with the next level block! We'll assess your 
                          progress and plan your continued French journey together.
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
};

export default FAQ;

