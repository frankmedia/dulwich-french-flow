import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Calendar, Clock, BookOpen, Target, Award, MessageCircle, ArrowRight, CheckCircle, MapPin } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const Classes = () => {
  const location = useLocation();

  useEffect(() => {
    // Handle anchor scrolling when component mounts or hash changes
    const hash = location.hash;
    if (hash) {
      // Small delay to ensure the page has rendered
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-french-cream to-french-ivory" style={{ paddingTop: 'calc(5rem + 20px)' }}>
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center max-w-6xl">
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-french-blue to-french-navy rounded-full flex items-center justify-center group hover:scale-110 transition-transform duration-300">
              <BookOpen className="w-10 h-10 text-white group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-french-navy">
              French Classes in South East London
            </h1>
            <p className="text-xl text-french-blue/80 mb-8 max-w-4xl mx-auto leading-relaxed">
              I offer group and 1:1 French lessons in South East London, covering the areas of Forest Hill (SE23), Honor Oak (SE23), Dulwich (SE21), Sydenham (SE26), Crystal Palace (SE19), and Penge (SE20).<br/><br/>
              If you're based outside South East London, we can chat about options — I also offer online classes.
            </p>
            
            <div className="mt-8">
              <Button size="lg" asChild className="bg-french-blue hover:bg-french-navy transition-colors group shadow-lg hover:shadow-xl">
                <Link to="/contact" className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 group-hover:animate-pulse" />
                  Get in touch to find out more!
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Adult Classes Section */}
      <section id="adults" className="py-20 px-4 bg-white/50" style={{ scrollMarginTop: '100px' }}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-french-navy">
              Adult Classes
            </h2>
            <p className="text-xl text-french-blue/80 max-w-3xl mx-auto">
              Rediscover your love for French in a warm, supportive environment designed for adult learners.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Group Classes */}
            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 shadow-elegant bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-heading font-bold text-french-navy mb-4 text-center">
                  Group Classes
                </CardTitle>
                <CardDescription className="text-french-blue/80 text-lg leading-relaxed text-center">
                  Join our warm and friendly small groups (max 8 students) for conversation practice and structured learning in a supportive environment.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-french-blue/80">Small groups (max 8 students)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-french-blue/80">Conversation-focused learning</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-french-blue/80">6-week structured blocks</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-french-blue/80">All levels welcome</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 1:1 Sessions */}
            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 shadow-elegant bg-gradient-to-br from-purple-50 to-pink-50">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-heading font-bold text-french-navy mb-4 text-center">
                  1:1 Sessions
                </CardTitle>
                <CardDescription className="text-french-blue/80 text-lg leading-relaxed text-center">
                  Personalized lessons tailored to your specific goals, schedule, and learning pace. Perfect for focused improvement or specific needs.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-french-blue/80">Completely personalized</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-french-blue/80">Flexible scheduling</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-french-blue/80">Focus on your specific goals</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-french-blue/80">Intensive progress</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700 transition-colors group shadow-lg hover:shadow-xl">
              <Link to="/contact" className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 group-hover:animate-pulse" />
                Book Your Free Assessment
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Group Class Locations */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50/50 to-indigo-50/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-french-navy">
              Group Class Locations
            </h3>
            <p className="text-lg text-french-blue/80 max-w-2xl mx-auto">
              Convenient locations across South East London for easy access to your French learning journey.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Locations List */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg text-french-navy mb-2">Dulwich Village</h4>
                    <p className="text-french-blue/80 mb-2">Dulwich Library Community Room</p>
                    <p className="text-sm text-gray-600">SE21 7BQ • 5 min walk from East Dulwich station</p>
                    <p className="text-sm text-blue-600 font-medium mt-2">Tuesdays 7:00-8:30 PM</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg text-french-navy mb-2">Forest Hill</h4>
                    <p className="text-french-blue/80 mb-2">Forest Hill Community Centre</p>
                    <p className="text-sm text-gray-600">SE23 3HX • 3 min walk from Forest Hill station</p>
                    <p className="text-sm text-emerald-600 font-medium mt-2">Thursdays 7:00-8:30 PM</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-lg text-french-navy mb-2">Crystal Palace</h4>
                    <p className="text-french-blue/80 mb-2">Crystal Palace Community Centre</p>
                    <p className="text-sm text-gray-600">SE19 2BA • 5 min walk from Crystal Palace station</p>
                    <p className="text-sm text-purple-600 font-medium mt-2">Saturdays 10:00-11:30 AM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-8 shadow-lg border border-gray-200">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-heading font-bold text-lg text-gray-900 mb-2">Interactive Map</h4>
                  <p className="text-gray-600 mb-4">View all our group class locations across South East London</p>
                  <div className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="w-full h-48 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg flex items-center justify-center border-2 border-dashed border-gray-300">
                      <div className="text-center">
                        <MapPin className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-500">Map integration coming soon</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-3">
                    Exact addresses provided upon booking
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exam Preparation Section */}
      <section id="exam-prep" className="py-20 px-4 bg-gradient-to-br from-french-blue/5 to-french-navy/5" style={{ scrollMarginTop: '100px' }}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-french-navy">
              Exam Preparation
            </h2>
            <p className="text-xl text-french-blue/80 max-w-3xl mx-auto">
              Expert preparation for GCSE and A-Level French exams with proven techniques and personalized support.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* GCSE French */}
            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 shadow-elegant bg-gradient-to-br from-emerald-50 to-teal-50">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-heading font-bold text-french-navy mb-4 text-center">
                  GCSE French
                </CardTitle>
                <CardDescription className="text-french-blue/80 text-lg leading-relaxed text-center">
                  Comprehensive preparation covering all exam components - speaking, listening, reading, and writing. Build confidence and achieve your target grade.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-french-blue/80">All four skills covered</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-french-blue/80">Exam technique training</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-french-blue/80">Past paper practice</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-french-blue/80">Confidence building</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* A-Level French */}
            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 shadow-elegant bg-gradient-to-br from-orange-50 to-red-50">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-heading font-bold text-french-navy mb-4 text-center">
                  A-Level French
                </CardTitle>
                <CardDescription className="text-french-blue/80 text-lg leading-relaxed text-center">
                  Advanced preparation for A-Level exams with focus on literature, culture, and complex language structures. Expert guidance for top results.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-french-blue/80">Literature analysis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-french-blue/80">Cultural context</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-french-blue/80">Advanced grammar</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-french-blue/80">Essay writing skills</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button size="lg" asChild className="bg-emerald-600 hover:bg-emerald-700 transition-colors group shadow-lg hover:shadow-xl">
              <Link to="/contact" className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 group-hover:animate-pulse" />
                Book Your Free Assessment
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-french-blue/10 to-french-navy/10">
        <div className="container mx-auto text-center max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-french-navy">
            Ready to Start Your French Journey?
          </h2>
          <p className="text-lg text-french-blue/80 mb-10 max-w-2xl mx-auto">
            Book your free 30-minute assessment to discuss your goals and find the perfect class for you.
          </p>
          <Button size="lg" asChild className="bg-french-blue hover:bg-french-navy transition-colors group shadow-lg hover:shadow-xl">
            <Link to="/contact" className="flex items-center gap-2">
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              Book Free Consultation
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Classes;
