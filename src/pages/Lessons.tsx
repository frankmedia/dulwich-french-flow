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
import groupClasses from "@/assets/group-classes.png";

const Lessons = () => {
  return (
    <div className="min-h-screen pt-20" style={{ paddingTop: 'calc(5rem + 10px)' }}>
      {/* Hero Section */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Left: Copy */}
            <div className="text-center lg:text-left">
              <Badge className="mb-6 bg-accent/10 text-accent-foreground border border-accent/20 inline-flex items-center">
                <span className="mr-2">🇫🇷</span>
                6-Week French Course in Dulwich
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-heading font-bold mb-6 leading-tight text-foreground">
                6-Week French Confidence Course
              </h1>
              
              <p className="text-xl md:text-2xl mb-10 text-muted-foreground max-w-2xl lg:max-w-none mx-auto lg:mx-0 leading-relaxed">
                Structured 6-week French conversation blocks designed for adults who want to rebuild their confidence. 
                Small groups of maximum 8 students in Dulwich, South East London.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="text-lg px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 hover:shadow-lg transition-all duration-300 group" asChild>
                  <Link to="/contact">
                    <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                    Book Free 30-minute Assessment
                  </Link>
                </Button>

              </div>
            </div>

            {/* Right: Imagery */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                <img 
                  src={groupClasses}
                  alt="6-week French course group classes in Dulwich"
                  className="w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-32 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-foreground">
              Perfect for French Returners
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              You remember some French from school, maybe you can read it fairly well, 
              but speaking? That's where the confidence disappeared. Our 6-week course is 
              designed specifically for people just like you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-500 bg-card border border-border/50 group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-blue-500/25 group-hover:rotate-12 transition-all duration-500">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-4 text-foreground group-hover:text-blue-600 transition-colors duration-300">
                  Small Groups
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Maximum 8 students for personalized attention and confident practice
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-500 bg-card border border-border/50 group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-green-500/25 group-hover:rotate-12 transition-all duration-500">
                  <Clock className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-4 text-foreground group-hover:text-green-600 transition-colors duration-300">
                  90-Minute Lessons
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Immersive sessions that give you time to really get into French flow
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-500 bg-card border border-border/50 group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-yellow-500/25 group-hover:rotate-12 transition-all duration-500">
                  <Calendar className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-4 text-foreground group-hover:text-yellow-600 transition-colors duration-300">
                  6-Week Blocks
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Structured progression with clear goals and measurable results
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-500 bg-card border border-border/50 group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-purple-500/25 group-hover:rotate-12 transition-all duration-500">
                  <MessageCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-4 text-foreground group-hover:text-purple-600 transition-colors duration-300">
                  Conversation Focus
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Build real confidence through practical, engaging conversations
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-foreground">
              What You'll Achieve in 6 Weeks
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Each 6-week block focuses on practical skills you can use immediately in real-life situations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <Card className="shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-500 bg-card border border-border/50 group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-emerald-500/25 group-hover:rotate-12 transition-all duration-500">
                  <MessageCircle className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-4 text-foreground group-hover:text-emerald-600 transition-colors duration-300">
                  Confident Speaking
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Express yourself naturally in everyday situations without hesitation
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-500 bg-card border border-border/50 group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-indigo-500/25 group-hover:rotate-12 transition-all duration-500">
                  <BookOpen className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-4 text-foreground group-hover:text-indigo-600 transition-colors duration-300">
                  Grammar Revival
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Dust off forgotten grammar rules through practical, conversational use
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-500 bg-card border border-border/50 group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-rose-500/25 group-hover:rotate-12 transition-all duration-500">
                  <Globe className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-4 text-foreground group-hover:text-rose-600 transition-colors duration-300">
                  Cultural Fluency
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Understand French culture and context for more authentic communication
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm hover:shadow-lg hover:scale-105 transition-all duration-500 bg-card border border-border/50 group">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-amber-500/25 group-hover:rotate-12 transition-all duration-500">
                  <Target className="w-10 h-10 text-white" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-4 text-foreground group-hover:text-amber-600 transition-colors duration-300">
                  Real-Life Skills
                </h3>
                <p className="text-muted-foreground leading-relaxed">
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
              Start with a Free 30-Minute Consultation
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
              No obligation • 30 minutes • Completely free
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Lessons;