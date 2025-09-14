import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Users, 
  Clock, 
  Award, 
  MessageCircle, 
  MapPin, 
  Star,
  CheckCircle,
  ArrowRight,
  Coffee,
  BookOpen,
  Heart,
  Sparkles
} from "lucide-react";
import teacherPortrait from "@/assets/teacher-portrait.jpg";
import heroIllustration from "@/assets/hero-illustration.png";
import frenchClass from "@/assets/french-class.jpg";

const Home = () => {
  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="py-20 gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            {/* Left: Copy */}
            <div className="text-center lg:text-left">
              <Badge className="mb-6 bg-accent/10 text-accent-foreground border border-accent/20 inline-flex items-center">
                <span className="mr-2">🇫🇷</span>
                Dulwich, South East London
              </Badge>
              
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-heading font-bold mb-6 leading-tight text-foreground">
                Love French again with classes in Dulwich
              </h1>
              
              <p className="text-xl md:text-2xl mb-10 text-muted-foreground max-w-2xl lg:max-w-none mx-auto lg:mx-0 leading-relaxed">
                Friendly, small-group French lessons in Dulwich. Our 6-week conversation blocks help you
                rebuild confidence and speak naturally in real-life situations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="text-lg px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 hover:shadow-lg transition-all duration-300 group" asChild>
                  <Link to="/contact">
                    <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                    Book Free 30-minute Assessment
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 hover:scale-105 hover:shadow-lg transition-all duration-300 group" asChild>
                  <Link to="/lessons">
                    Learn More
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right: Imagery */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                <img 
                  src={heroIllustration}
                  alt="Learning French illustration"
                  className="w-full h-[460px] object-cover"
                />
              </div>
              {/* Removed overlay image */}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-foreground">
              Why Choose French Flow?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Designed specifically for adults who want to reconnect with their French skills
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                  <Award className="w-10 h-10 text-white" />
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

      {/* About Preview */}
      <section className="py-32 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <div className="space-y-8">
              <div>
                <Badge className="mb-6 bg-accent/10 text-accent-foreground border border-accent/20">Meet Your Teacher</Badge>
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-foreground leading-tight">
                  Passionate About Bringing French Back to Life
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With over 10 years of experience teaching French to adults, I understand the unique 
                  challenges of returning to a language you once knew. My approach combines structured 
                  learning with the joy of rediscovering French culture and conversation.
                </p>
              </div>
              
              <ul className="space-y-4">
                <li className="flex items-center group">
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-md group-hover:shadow-emerald-500/25 group-hover:scale-110 transition-all duration-300">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-foreground group-hover:text-emerald-600 transition-colors duration-300">MA in French Literature & Linguistics</span>
                </li>
                <li className="flex items-center group">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-md group-hover:shadow-blue-500/25 group-hover:scale-110 transition-all duration-300">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-foreground group-hover:text-blue-600 transition-colors duration-300">Certified DELF/DALF examiner</span>
                </li>
                <li className="flex items-center group">
                  <div className="w-8 h-8 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center mr-4 flex-shrink-0 shadow-md group-hover:shadow-rose-500/25 group-hover:scale-110 transition-all duration-300">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-foreground group-hover:text-rose-600 transition-colors duration-300">Specializing in adult conversation classes</span>
                </li>
              </ul>
              
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <Link to="/about">
                  Learn More About Me
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="relative rounded-lg overflow-hidden shadow-lg">
                <img 
                  src={teacherPortrait} 
                  alt="French teacher in classroom"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-32 bg-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className="w-6 h-6 text-yellow-400 fill-current hover:scale-125 transition-transform duration-300 hover:drop-shadow-lg" 
                  style={{ 
                    animationDelay: `${i * 0.1}s`,
                    animation: 'pulse 2s ease-in-out infinite'
                  }}
                />
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl font-heading italic mb-8 leading-relaxed text-foreground">
              "After 20 years since my A-levels, I thought my French was lost forever. 
              The 6-week course brought it all back and gave me the confidence to actually 
              use it. I'm now planning my first trip to France in decades!"
            </blockquote>
            <cite className="text-lg text-muted-foreground">
              — Sarah M., Dulwich Village
            </cite>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 bg-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-primary-foreground">
            Ready to Rediscover Your French?
          </h2>
          <p className="text-xl mb-10 text-primary-foreground/90 max-w-2xl mx-auto leading-relaxed">
            Start with a free 30-minute assessment to establish your current level and discuss your goals
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4" asChild>
              <Link to="/contact">
                Book Your Free Assessment
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4" asChild>
              <Link to="/pricing">
                View Pricing
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;