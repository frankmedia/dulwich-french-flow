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
import frenchClass from "@/assets/french-class.jpg";

const Home = () => {
  return (
    <div className="min-h-screen pt-32">
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <Badge className="mb-6 bg-accent/10 text-accent-foreground border border-accent/20">
            <MapPin className="w-4 h-4 mr-1" />
            Dulwich, South East London
          </Badge>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight text-foreground">
            Rediscover Your
            <span className="block text-primary mt-2">
              French Confidence
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-10 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transform your rusty French into fluent conversation with our 6-week intensive blocks. 
            Perfect for returners ready to embrace their French journey again.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90" asChild>
              <Link to="/contact">
                <MessageCircle className="w-5 h-5 mr-2" />
                Book Free 20-min Chat
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4" asChild>
              <Link to="/lessons">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
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
            <Card className="shadow-sm hover:shadow-md transition-all duration-300 bg-card border border-border/50">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-4 text-foreground">
                  Small Groups
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Maximum 6 students for personalized attention and confident practice
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm hover:shadow-md transition-all duration-300 bg-card border border-border/50">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-4 text-foreground">
                  90-Minute Lessons
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Immersive sessions that give you time to really get into French flow
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm hover:shadow-md transition-all duration-300 bg-card border border-border/50">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-4 text-foreground">
                  6-Week Blocks
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Structured progression with clear goals and measurable results
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-sm hover:shadow-md transition-all duration-300 bg-card border border-border/50">
              <CardContent className="p-8 text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-xl mb-4 text-foreground">
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
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-4 flex-shrink-0" />
                  <span className="text-foreground">MA in French Literature & Linguistics</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-4 flex-shrink-0" />
                  <span className="text-foreground">Certified DELF/DALF examiner</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-4 flex-shrink-0" />
                  <span className="text-foreground">Specializing in adult conversation classes</span>
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
                <Star key={i} className="w-6 h-6 text-accent fill-current" />
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
            Start with a free 20-minute consultation to discuss your goals and assess your current level
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4" asChild>
              <Link to="/contact">
                Book Your Free Chat
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
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