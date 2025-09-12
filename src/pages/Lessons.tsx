import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Users, 
  Clock, 
  Calendar, 
  MessageCircle, 
  CheckCircle,
  ArrowRight,
  BookOpen,
  Coffee,
  Globe,
  Target
} from "lucide-react";
import frenchClass from "@/assets/french-class.jpg";

const Lessons = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4">French Returner Program</Badge>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              6-Week French Confidence Blocks
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Specially designed for adults who studied French at school but want to rebuild their 
              confidence and fluency. Our structured 6-week blocks transform hesitant speakers 
              into confident conversationalists.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-elegant max-w-4xl mx-auto">
            <img 
              src={frenchClass} 
              alt="French conversation class"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Perfect for French Returners
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                You remember some French from school, maybe you can read it fairly well, 
                but speaking? That's where the confidence disappeared. Our program is 
                designed specifically for people just like you.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <span>GCSE or A-level French (however long ago!)</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <span>Can understand basic French but struggle to speak</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <span>Want to rebuild confidence in conversation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <span>Adults who learn best in small, supportive groups</span>
                </div>
              </div>
              
              <Button size="lg" asChild>
                <Link to="/contact">
                  Book Free Assessment
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
            
            <div className="space-y-6">
              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <Users className="w-6 h-6 text-primary mr-3" />
                    <h3 className="font-heading font-semibold text-lg">Small Groups</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Maximum 6 students per class ensures everyone gets plenty of speaking practice 
                    and individual attention.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <Clock className="w-6 h-6 text-primary mr-3" />
                    <h3 className="font-heading font-semibold text-lg">90-Minute Sessions</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Longer sessions allow for deeper immersion and natural conversation flow, 
                    with breaks to keep energy high.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-soft">
                <CardContent className="p-6">
                  <div className="flex items-center mb-3">
                    <Calendar className="w-6 h-6 text-primary mr-3" />
                    <h3 className="font-heading font-semibold text-lg">6-Week Blocks</h3>
                  </div>
                  <p className="text-muted-foreground">
                    Structured progression with clear goals. Each block builds confidence 
                    and prepares you for the next level.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              What You'll Achieve in 6 Weeks
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Each block focuses on practical skills you can use immediately
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="shadow-soft hover:shadow-elegant transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">Confident Speaking</h3>
                <p className="text-muted-foreground">
                  Express yourself naturally in everyday situations without hesitation
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-elegant transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">Grammar Revival</h3>
                <p className="text-muted-foreground">
                  Dust off forgotten grammar rules through practical, conversational use
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-elegant transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">Cultural Fluency</h3>
                <p className="text-muted-foreground">
                  Understand French culture and context for more authentic communication
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-elegant transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">Real-Life Skills</h3>
                <p className="text-muted-foreground">
                  Practice scenarios you'll actually use: travel, work, social situations
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Course Structure */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              How Our 6-Week Blocks Work
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A proven structure that builds confidence week by week
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="shadow-soft">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge>Weeks 1-2</Badge>
                  <Coffee className="w-5 h-5 text-primary" />
                </div>
                <CardTitle className="font-heading text-xl">Foundation & Comfort</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Assess current level and set goals</li>
                  <li>• Revive vocabulary and basic structures</li>
                  <li>• Build confidence in a safe environment</li>
                  <li>• Practice pronunciation and rhythm</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge>Weeks 3-4</Badge>
                  <MessageCircle className="w-5 h-5 text-primary" />
                </div>
                <CardTitle className="font-heading text-xl">Active Communication</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Engage in structured conversations</li>
                  <li>• Learn repair strategies for mistakes</li>
                  <li>• Expand vocabulary through topics of interest</li>
                  <li>• Practice listening and responding naturally</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-soft">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge>Weeks 5-6</Badge>
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <CardTitle className="font-heading text-xl">Fluent Expression</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Express opinions and complex ideas</li>
                  <li>• Debate and discuss current events</li>
                  <li>• Plan your continued French journey</li>
                  <li>• Celebrate progress and set new goals</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Free Consultation */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Start with a Free 20-Minute Chat
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Before you commit to a 6-week block, let's chat! I'll assess your current level, 
              understand your goals, and explain exactly how our program can help you regain 
              your French confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Informal Chat</h3>
              <p className="text-white/80">
                No pressure, just a friendly conversation about your French journey
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Level Assessment</h3>
              <p className="text-white/80">
                Quick, conversational assessment to place you in the right group
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Plan Together</h3>
              <p className="text-white/80">
                Discuss scheduling and find the perfect block for your needs
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4" asChild>
              <Link to="/contact">
                Book Your Free Consultation
              </Link>
            </Button>
            <p className="mt-4 text-white/70">
              No obligation • 20 minutes • Completely free
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lessons;