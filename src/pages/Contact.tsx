import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useState } from "react";
import emailjs from '@emailjs/browser';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Calendar,
  Gift,
  ArrowRight,
  CheckCircle,
  Loader2,
  HelpCircle
} from "lucide-react";
import frenchBooks from "@/assets/french-books.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    frenchLevel: '',
    goals: '',
    availability: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // For testing - log the form data to console
      console.log('Form submitted with data:', formData);
      console.log('EmailJS Public Key:', import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
      console.log('EmailJS Service ID:', import.meta.env.VITE_EMAILJS_SERVICE_ID);
      console.log('EmailJS Template ID:', import.meta.env.VITE_EMAILJS_TEMPLATE_ID);
      console.log('Send Email To:', import.meta.env.VITE_SEND_EMAIL_FORM);

      // Initialize EmailJS with your public key
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

      const templateParams = {
        to_name: 'Frank',
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        message: `New French Flow Contact Form Submission:

Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}

French Level: ${formData.frenchLevel || 'Not specified'}

Goals:
${formData.goals || 'Not specified'}

Availability:
${formData.availability || 'Not specified'}

---
This message was sent from the French Flow website contact form.`
      };

      console.log('Template params:', templateParams);

      // Send email using EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_wh77q2v',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_670vc3a',
        templateParams
      );

      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        frenchLevel: '',
        goals: '',
        availability: ''
      });

    } catch (error) {
      console.error('Form submission error:', error);
      console.error('Error details:', {
        status: error.status,
        text: error.text,
        message: error.message
      });
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20" style={{ paddingTop: 'calc(5rem + 10px)' }}>
      {/* Hero Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <div className="text-center lg:text-left order-2 lg:order-1">
              <Badge className="mb-4">Get In Touch</Badge>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Start Your French Journey Today
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Ready to rediscover your French confidence? Start with a <span className="font-semibold">free 30-minute assessment</span>
                to establish your current level and discuss your goals.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <img src={frenchBooks} alt="French books and flag" className="w-full h-64 object-contain mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Free Consultation Highlight */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto shadow-elegant border-blue-600" style={{ backgroundImage: 'linear-gradient(135deg, rgb(26, 57, 102), rgb(45, 82, 134))' }}>
            <CardHeader className="text-center pb-6">
              <Badge className="mx-auto mb-4 bg-yellow-400 text-black">
                <Gift className="w-4 h-4 mr-1" />
                Completely Free
              </Badge>
              <CardTitle className="text-3xl font-heading font-bold mb-2 text-white">
                30-Minute French Assessment
              </CardTitle>
              <p className="text-white/90 text-lg max-w-2xl mx-auto">
                Before you commit to anything, we'll have a relaxed assessment to understand your level 
                and confirm if our 6-week blocks are right for you.
              </p>
            </CardHeader>
            
            <CardContent className="pb-8">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-heading font-semibold mb-2 text-white">Friendly Assessment</h3>
                  <p className="text-white/80 text-sm">
                    No pressure — we'll establish your level and talk through your goals
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-heading font-semibold mb-2 text-white">Level Assessment</h3>
                  <p className="text-white/80 text-sm">
                    Quick evaluation to understand your current French skills
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-heading font-semibold mb-2 text-white">Perfect Fit</h3>
                  <p className="text-white/80 text-sm">
                    Find the right group and schedule for your needs
                  </p>
                </div>
              </div>

              <div className="text-center">
                <Button size="lg" className="text-lg px-8 py-4 mb-4 bg-red-600 hover:bg-red-700 text-white border-red-600">
                  <Phone className="w-5 h-5 mr-2" />
                  Book Your Free Assessment
                </Button>
                <p className="text-sm text-white/70">
                  Available Monday-Friday, 10am-6pm
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="text-2xl font-heading">Send Me a Message</CardTitle>
                <p className="text-muted-foreground">
                  Prefer to message first? I'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                        First Name *
                      </label>
                      <Input 
                        id="firstName" 
                        placeholder="John" 
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                        Last Name *
                      </label>
                      <Input 
                        id="lastName" 
                        placeholder="Smith" 
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="07xxx xxx xxx" 
                      value={formData.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="frenchLevel" className="block text-sm font-medium mb-2">
                      Your French Level
                    </label>
                    <Input 
                      id="frenchLevel" 
                      placeholder="e.g. GCSE 10 years ago, A-level, basic conversation..."
                      value={formData.frenchLevel}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="goals" className="block text-sm font-medium mb-2">
                      Your French Goals
                    </label>
                    <Textarea 
                      id="goals" 
                      placeholder="What would you like to achieve with your French? Travel, work, personal interest..."
                      className="min-h-[120px]"
                      value={formData.goals}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="availability" className="block text-sm font-medium mb-2">
                      Preferred Days/Times
                    </label>
                    <Textarea 
                      id="availability" 
                      placeholder="When are you generally available for lessons? e.g. weekday evenings, Saturday mornings..."
                      className="min-h-[80px]"
                      value={formData.availability}
                      onChange={handleInputChange}
                    />
                  </div>

                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                      <div className="flex items-center">
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Message sent successfully! I'll get back to you within 24 hours.
                      </div>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                      <div className="flex items-center">
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Sorry, there was an error sending your message. Please try again or email me directly.
                      </div>
                    </div>
                  )}
                  
                  <Button 
                    type="submit" 
                    className="w-full" 
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-xl font-heading flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-primary" />
                    Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Lessons are held in the heart of Dulwich, South East London. 
                    Easily accessible by public transport.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="font-medium w-20">Address:</span>
                      <span className="text-muted-foreground">Dulwich Village, London SE21</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium w-20">Transport:</span>
                      <span className="text-muted-foreground">North Dulwich Station (5 min walk)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium w-20">Parking:</span>
                      <span className="text-muted-foreground">Free street parking available</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-xl font-heading flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-primary" />
                    Availability
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="font-medium">Monday - Thursday</span>
                      <span className="text-muted-foreground">10:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="font-medium">Friday</span>
                      <span className="text-muted-foreground">10:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border">
                      <span className="font-medium">Saturday</span>
                      <span className="text-muted-foreground">9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-medium">Sunday</span>
                      <span className="text-muted-foreground">Closed</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Consultation calls available outside these hours by arrangement.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardHeader>
                  <CardTitle className="text-xl font-heading flex items-center">
                    <Mail className="w-5 h-5 mr-2 text-primary" />
                    Quick Contact
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="font-medium mb-1">Email</div>
                      <p className="text-muted-foreground">barbara@frenchflow.co.uk</p>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Phone</div>
                      <p className="text-muted-foreground">07812 345 678</p>
                    </div>
                    <div>
                      <div className="font-medium mb-1">Response Time</div>
                      <p className="text-muted-foreground">Within 24 hours (usually much sooner!)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/20">
        <div className="container mx-auto px-4 max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                <HelpCircle className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="flex items-center justify-center mb-4">
              <span className="text-4xl mr-3">🇫🇷</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold">
                Common Questions
              </h2>
              <span className="text-4xl ml-3">🇫🇷</span>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quick answers to help you take the next step
            </p>
          </div>

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
                        What if I can't commit to all 6 weeks?
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6">
                    <div className="pl-12">
                      <p className="text-muted-foreground leading-relaxed">
                        While the 6-week structure works best, we can discuss alternatives 
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
                        What happens after the 6-week block?
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
  );
};

export default Contact;