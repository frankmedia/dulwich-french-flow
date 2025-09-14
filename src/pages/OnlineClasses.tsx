import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Bell, Calendar, Video, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const OnlineClasses = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-french-cream to-french-ivory" style={{ paddingTop: 'calc(5rem + 20px)' }}>
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center max-w-6xl">
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center group hover:scale-110 transition-transform duration-300">
              <Video className="w-10 h-10 text-white group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-french-navy">
              Online French Classes
            </h1>
            <p className="text-xl text-french-blue/80 mb-8 max-w-3xl mx-auto">
              Learn French from the comfort of your home with our interactive online classes. 
              Coming soon to French Flow!
            </p>
          </div>
          
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full border border-yellow-300 mb-12 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Bell className="w-5 h-5 text-white animate-pulse" />
            <span className="font-medium text-white">Launching in October 2025</span>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16 text-french-navy">
            What to Expect
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center group hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 shadow-elegant">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-french-navy">Small Group Sessions</CardTitle>
                <CardDescription className="text-french-blue/70">
                  Interactive classes with maximum 8 students for personalized attention
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 shadow-elegant">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-french-navy">Flexible Scheduling</CardTitle>
                <CardDescription className="text-french-blue/70">
                  Evening and weekend slots to fit your busy lifestyle
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 shadow-elegant">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-french-navy">6-Week Blocks</CardTitle>
                <CardDescription className="text-french-blue/70">
                  Same proven structure as our in-person classes, delivered online
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-french-blue/10 to-french-navy/10">
        <div className="container mx-auto text-center max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-french-navy">
            Ready to Start Now?
          </h2>
          <p className="text-lg text-french-blue/80 mb-10 max-w-2xl mx-auto">
            While you wait for online classes, book your free consultation for 
            our in-person lessons in Dulwich.
          </p>
          <Button size="lg" asChild className="bg-french-blue hover:bg-french-navy transition-colors group shadow-lg hover:shadow-xl">
            <Link to="/contact" className="flex items-center gap-2">
              <Mail className="w-5 h-5 group-hover:animate-pulse" />
              Book Free Consultation
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default OnlineClasses;