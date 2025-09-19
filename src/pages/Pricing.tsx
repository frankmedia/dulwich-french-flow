import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  CheckCircle, 
  Clock, 
  Users, 
  Calendar,
  Phone,
  Gift,
  CreditCard,
  ArrowRight,
  Award,
  Target,
  BookOpen,
  MessageCircle
} from "lucide-react";

const Pricing = () => {
  return (
    <div className="min-h-screen pt-20" style={{ paddingTop: 'calc(5rem + 10px)' }}>
      {/* Hero Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-4">Transparent Pricing</Badge>
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Invest in Your French Future
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Quality French tuition at fair prices. Our 6-week blocks offer excellent value 
            for structured, intensive learning with guaranteed progress.
          </p>
        </div>
      </section>

      {/* Main Pricing */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-elegant border-primary/20">
              <CardHeader className="text-center pb-8">
                <Badge className="mx-auto mb-4 bg-primary text-primary-foreground">
                  Most Popular
                </Badge>
                <CardTitle className="text-3xl font-heading font-bold mb-2">
                  6-Week French Confidence Block
                </CardTitle>
                <p className="text-muted-foreground text-lg">
                  Complete course with everything you need to regain your French confidence
                </p>
              </CardHeader>
              
              <CardContent className="pb-8">
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-5xl font-heading font-bold text-primary">£150</span>
                    <div className="ml-3 text-left">
                      <div className="text-muted-foreground">total cost</div>
                      <div className="text-sm text-muted-foreground">£25 per lesson</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    6 lessons × 90 minutes each = 9 hours of quality French tuition
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="space-y-4">
                    <h3 className="font-heading font-semibold text-lg mb-4">What's Included:</h3>
                    <div className="flex items-center group">
                      <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-md group-hover:shadow-emerald-500/25 group-hover:scale-110 transition-all duration-300">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <span className="group-hover:text-emerald-600 transition-colors duration-300">6 × 90-minute group lessons</span>
                    </div>
                    <div className="flex items-center group">
                      <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-md group-hover:shadow-blue-500/25 group-hover:scale-110 transition-all duration-300">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <span className="group-hover:text-blue-600 transition-colors duration-300">Small groups (max 8 students)</span>
                    </div>
                    <div className="flex items-center group">
                      <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-md group-hover:shadow-purple-500/25 group-hover:scale-110 transition-all duration-300">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <span className="group-hover:text-purple-600 transition-colors duration-300">All course materials provided</span>
                    </div>
                    <div className="flex items-center group">
                      <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-md group-hover:shadow-orange-500/25 group-hover:scale-110 transition-all duration-300">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <span className="group-hover:text-orange-600 transition-colors duration-300">Progress tracking & feedback</span>
                    </div>
                    <div className="flex items-center group">
                      <div className="w-6 h-6 bg-gradient-to-br from-yellow-500 to-amber-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-md group-hover:shadow-yellow-500/25 group-hover:scale-110 transition-all duration-300">
                        <CheckCircle className="w-3 h-3 text-white" />
                      </div>
                      <span className="group-hover:text-yellow-600 transition-colors duration-300">Certificate of completion</span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-heading font-semibold text-lg mb-4">Free Bonuses:</h3>
                    <div className="flex items-center group">
                      <div className="w-6 h-6 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-md group-hover:shadow-rose-500/25 group-hover:scale-110 transition-all duration-300">
                        <Gift className="w-3 h-3 text-white" />
                      </div>
                      <span className="group-hover:text-rose-600 transition-colors duration-300">30-minute pre-course consultation</span>
                    </div>
                    <div className="flex items-center group">
                      <div className="w-6 h-6 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-md group-hover:shadow-teal-500/25 group-hover:scale-110 transition-all duration-300">
                        <Gift className="w-3 h-3 text-white" />
                      </div>
                      <span className="group-hover:text-teal-600 transition-colors duration-300">WhatsApp support group</span>
                    </div>
                    <div className="flex items-center group">
                      <div className="w-6 h-6 bg-gradient-to-br from-violet-500 to-purple-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-md group-hover:shadow-violet-500/25 group-hover:scale-110 transition-all duration-300">
                        <Gift className="w-3 h-3 text-white" />
                      </div>
                      <span className="group-hover:text-violet-600 transition-colors duration-300">Weekly vocabulary lists</span>
                    </div>
                    <div className="flex items-center group">
                      <div className="w-6 h-6 bg-gradient-to-br from-lime-500 to-green-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-md group-hover:shadow-lime-500/25 group-hover:scale-110 transition-all duration-300">
                        <Gift className="w-3 h-3 text-white" />
                      </div>
                      <span className="group-hover:text-lime-600 transition-colors duration-300">Recommended resources guide</span>
                    </div>
                    <div className="flex items-center group">
                      <div className="w-6 h-6 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-full flex items-center justify-center mr-3 flex-shrink-0 shadow-md group-hover:shadow-amber-500/25 group-hover:scale-110 transition-all duration-300">
                        <Gift className="w-3 h-3 text-white" />
                      </div>
                      <span className="group-hover:text-amber-600 transition-colors duration-300">Next steps consultation</span>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <Button size="lg" className="text-lg px-8 py-4 mb-4 hover:scale-105 hover:shadow-lg transition-all duration-300 group" asChild>
                    <Link to="/contact">
                      Start with Free Consultation
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </Button>
                  <p className="text-sm text-muted-foreground">
                    Book now, pay later • No pressure • Satisfaction guaranteed
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Payment Information */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Simple, Flexible Payment
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We make it easy to invest in your French education
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="shadow-soft hover:shadow-lg hover:scale-105 transition-all duration-500 group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-emerald-500/25 group-hover:rotate-12 transition-all duration-500">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-emerald-600 transition-colors duration-300">1. Free Consultation</h3>
                <p className="text-muted-foreground">
                  Start with our 30-minute chat to assess your level and discuss your goals
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-lg hover:scale-105 transition-all duration-500 group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-blue-500/25 group-hover:rotate-12 transition-all duration-500">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-blue-600 transition-colors duration-300">2. Reserve Your Spot</h3>
                <p className="text-muted-foreground">
                  Secure your place in the next available 6-week block
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-lg hover:scale-105 transition-all duration-500 group">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-purple-500/25 group-hover:rotate-12 transition-all duration-500">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-purple-600 transition-colors duration-300">3. Pay Before Start</h3>
                <p className="text-muted-foreground">
                  Payment due before your first lesson. Bank transfer or cash accepted
                </p>
              </CardContent>
            </Card>
          </div>

        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Why Our Pricing Makes Sense
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Compare the value of focused, intensive learning
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-heading font-semibold text-lg">Private Lessons</h3>
                    <Badge variant="secondary">£40-60/hour</Badge>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    One-on-one lessons with qualified teachers in London typically cost £40-60 per hour.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    9 hours = £360-540
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-heading font-semibold text-lg">Language Schools</h3>
                    <Badge variant="secondary">£15-25/hour</Badge>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    Group classes at language schools, often with 12+ students and less personal attention.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Similar cost but larger groups
                  </p>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="shadow-elegant border-blue-600" style={{ backgroundImage: 'linear-gradient(135deg, rgb(26, 57, 102), rgb(45, 82, 134))' }}>
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-center text-white">
                    French Flow Advantage
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="text-center mb-8">
                    <div className="text-4xl font-heading font-bold text-white mb-2">£25</div>
                    <div className="text-blue-100">per 90-minute lesson</div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white">Small groups (max 8 students)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Award className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white">Qualified, experienced teacher</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Target className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white">Focused on French returners</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Clock className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white">Longer sessions for better flow</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <BookOpen className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white">All materials included</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <MessageCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-white">Ongoing support between lessons</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Invest in Your French?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Start with our free consultation - a friendly 30-minute call about your French goals
          </p>
          
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4" asChild>
            <Link to="/contact">
              Book Free 30-Minute Consultation
            </Link>
          </Button>
          <p className="mt-4 text-white/70">
            Worth £25 • Completely free • No strings attached
          </p>
        </div>
      </section>
    </div>
  );
};

export default Pricing;