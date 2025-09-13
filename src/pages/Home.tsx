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
import speechBubbles from "@/assets/speech-bubbles-abstract.jpg";
import peopleChatting from "@/assets/people-chatting-abstract.jpg";
import frenchElements from "@/assets/french-decorative-elements.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-accent/10">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute top-20 left-20 w-40 h-40 opacity-30 rounded-full"
            style={{ backgroundImage: `url(${speechBubbles})`, backgroundSize: 'cover' }}
          ></div>
          <div 
            className="absolute bottom-20 right-20 w-32 h-32 opacity-20"
            style={{ backgroundImage: `url(${frenchElements})`, backgroundSize: 'cover' }}
          ></div>
          <div 
            className="absolute top-1/2 right-10 w-20 h-20 opacity-25"
            style={{ backgroundImage: `url(${peopleChatting})`, backgroundSize: 'cover' }}
          ></div>
        </div>

        <div className="relative z-10 text-center text-foreground px-4 max-w-4xl mx-auto">
          <Badge className="mb-6 bg-accent/20 text-accent-foreground border border-accent/30 backdrop-blur-sm">
            <MapPin className="w-4 h-4 mr-1" />
            Dulwich, South East London
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
            Rediscover Your
            <span className="block gradient-accent bg-clip-text text-transparent flex items-center justify-center gap-2">
              <Sparkles className="w-12 h-12 text-accent" />
              French Confidence
              <Heart className="w-12 h-12 text-accent fill-current" />
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Transform your rusty French into fluent conversation with our 6-week intensive blocks. 
            Perfect for returners ready to embrace their French journey again.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all" asChild>
              <Link to="/contact">
                <MessageCircle className="w-5 h-5 mr-2" />
                Book Free 20-min Chat
              </Link>
            </Button>
            <Button size="lg" className="text-lg px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all" asChild>
              <Link to="/lessons">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Why Choose French PLUS?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Designed specifically for adults who want to reconnect with their French skills
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="shadow-soft hover:shadow-elegant transition-all duration-300 hover:scale-105 bg-gradient-to-br from-card to-card/50 border-accent/20">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2 flex items-center justify-center gap-2">
                  <Heart className="w-4 h-4 text-accent fill-current" />
                  Small Groups
                </h3>
                <p className="text-muted-foreground">
                  Maximum 6 students for personalized attention and confident practice
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-elegant transition-all duration-300 hover:scale-105 bg-gradient-to-br from-card to-card/50 border-accent/20">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Clock className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2 flex items-center justify-center gap-2">
                  <Coffee className="w-4 h-4 text-accent" />
                  90-Minute Lessons
                </h3>
                <p className="text-muted-foreground">
                  Immersive sessions that give you time to really get into French flow
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-elegant transition-all duration-300 hover:scale-105 bg-gradient-to-br from-card to-card/50 border-accent/20">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2 flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4 text-accent" />
                  6-Week Blocks
                </h3>
                <p className="text-muted-foreground">
                  Structured progression with clear goals and measurable results
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-elegant transition-all duration-300 hover:scale-105 bg-gradient-to-br from-card to-card/50 border-accent/20">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <MessageCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2 flex items-center justify-center gap-2">
                  <BookOpen className="w-4 h-4 text-accent" />
                  Conversation Focus
                </h3>
                <p className="text-muted-foreground">
                  Build real confidence through practical, engaging conversations
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Meet Your Teacher</Badge>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Passionate About Bringing French Back to Life
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With over 10 years of experience teaching French to adults, I understand the unique 
                challenges of returning to a language you once knew. My approach combines structured 
                learning with the joy of rediscovering French culture and conversation.
              </p>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <span>MA in French Literature & Linguistics</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <span>Certified DELF/DALF examiner</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                  <span>Specializing in adult conversation classes</span>
                </li>
              </ul>
              
              <Button asChild>
                <Link to="/about">
                  Learn More About Me
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-elegant">
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
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-accent fill-current" />
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl font-heading italic mb-6 leading-relaxed">
              "After 20 years since my A-levels, I thought my French was lost forever. 
              The 6-week course brought it all back and gave me the confidence to actually 
              use it. I'm now planning my first trip to France in decades!"
            </blockquote>
            <cite className="text-muted-foreground">
              — Sarah M., Dulwich Village
            </cite>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Rediscover Your French?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Start with a free 20-minute consultation to discuss your goals and assess your current level
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4" asChild>
              <Link to="/contact">
                Book Your Free Chat
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10" asChild>
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