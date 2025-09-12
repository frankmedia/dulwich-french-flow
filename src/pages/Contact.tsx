import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Calendar,
  Gift,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4">Get In Touch</Badge>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Start Your French Journey Today
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to rediscover your French confidence? Let's begin with a friendly, 
            no-pressure chat about your goals and how French PLUS can help you achieve them.
          </p>
        </div>
      </section>

      {/* Free Consultation Highlight */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto shadow-elegant border-primary/20">
            <CardHeader className="text-center pb-6">
              <Badge className="mx-auto mb-4 bg-accent text-accent-foreground">
                <Gift className="w-4 h-4 mr-1" />
                Completely Free
              </Badge>
              <CardTitle className="text-3xl font-heading font-bold mb-2">
                20-Minute French Consultation
              </CardTitle>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Before you commit to anything, let's have a relaxed conversation about your 
                French journey and see if our 6-week blocks are right for you.
              </p>
            </CardHeader>
            
            <CardContent className="pb-8">
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <MessageCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">Friendly Chat</h3>
                  <p className="text-muted-foreground text-sm">
                    No pressure, just a conversation about your French goals
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">Level Assessment</h3>
                  <p className="text-muted-foreground text-sm">
                    Quick evaluation to understand your current French skills
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-semibold mb-2">Perfect Fit</h3>
                  <p className="text-muted-foreground text-sm">
                    Find the right group and schedule for your needs
                  </p>
                </div>
              </div>

              <div className="text-center">
                <Button size="lg" className="text-lg px-8 py-4 mb-4">
                  <Phone className="w-5 h-5 mr-2" />
                  Book Your Free Consultation
                </Button>
                <p className="text-sm text-muted-foreground">
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
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                      First Name *
                    </label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                      Last Name *
                    </label>
                    <Input id="lastName" placeholder="Smith" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <Input id="phone" type="tel" placeholder="07xxx xxx xxx" />
                </div>
                
                <div>
                  <label htmlFor="frenchLevel" className="block text-sm font-medium mb-2">
                    Your French Level
                  </label>
                  <Input 
                    id="frenchLevel" 
                    placeholder="e.g. GCSE 10 years ago, A-level, basic conversation..."
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
                  />
                </div>
                
                <Button className="w-full" size="lg">
                  Send Message
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
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
                      <p className="text-muted-foreground">hello@frenchplus-dulwich.co.uk</p>
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
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Common Questions
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Quick answers to help you take the next step
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-lg mb-3">
                  How do I know if I'm the right level?
                </h3>
                <p className="text-muted-foreground">
                  That's exactly what our free consultation is for! In 20 minutes, 
                  I can assess your current level and recommend the perfect starting point.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-lg mb-3">
                  What if I can't commit to all 6 weeks?
                </h3>
                <p className="text-muted-foreground">
                  While the 6-week structure works best, we can discuss alternatives 
                  during your consultation. I'm flexible and want to find what works for you.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-lg mb-3">
                  Do you offer private lessons?
                </h3>
                <p className="text-muted-foreground">
                  Yes! While group classes are my specialty, I do offer private lessons 
                  for specific needs. Let's discuss what would work best during your consultation.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-heading font-semibold text-lg mb-3">
                  What happens after the 6-week block?
                </h3>
                <p className="text-muted-foreground">
                  Most students continue with the next level block! We'll assess your 
                  progress and plan your continued French journey together.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Your French Adventure Starts Here
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Take the first step with a friendly, no-obligation conversation about your French goals
          </p>
          
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
            <Phone className="w-5 h-5 mr-2" />
            Book Your Free Chat Now
          </Button>
          <p className="mt-4 text-white/70">
            20 minutes • Free • No pressure
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;