import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Bell, Calendar, Video, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const OnlineClasses = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="mb-8">
            <Video className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Online French Classes
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Learn French from the comfort of your home with our interactive online classes. 
              Coming soon to French PLUS!
            </p>
          </div>
          
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-accent/20 rounded-full border border-accent/30 mb-12">
            <Bell className="w-5 h-5 text-accent" />
            <span className="font-medium text-accent">Launching Early 2025</span>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">
            What to Expect
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 mx-auto mb-4 text-primary" />
                <CardTitle>Small Group Sessions</CardTitle>
                <CardDescription>
                  Interactive classes with maximum 6 students for personalized attention
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Clock className="w-12 h-12 mx-auto mb-4 text-primary" />
                <CardTitle>Flexible Scheduling</CardTitle>
                <CardDescription>
                  Evening and weekend slots to fit your busy lifestyle
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Calendar className="w-12 h-12 mx-auto mb-4 text-primary" />
                <CardTitle>6-Week Blocks</CardTitle>
                <CardDescription>
                  Same proven structure as our in-person classes, delivered online
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Notify Me Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl mb-4">Be the First to Know</CardTitle>
              <CardDescription className="text-lg">
                Join our waitlist to get notified when online classes launch and receive 
                early bird pricing.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                />
                <Button className="bg-primary hover:bg-primary/90">
                  <Mail className="w-4 h-4 mr-2" />
                  Notify Me
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground">
                We'll never spam you. Unsubscribe at any time.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">
            Ready to Start Now?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            While you wait for online classes, book your free consultation for 
            our in-person lessons in Dulwich.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">Book Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default OnlineClasses;