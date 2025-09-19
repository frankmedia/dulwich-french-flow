import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
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
  Calendar,
  Heart,
  Sparkles,
  Target,
  Trophy,
  Flag
} from "lucide-react";
import teacherPortrait from "@/assets/teacher-portrait.jpg";
import heroIllustration from "@/assets/hero-illustration.jpg";
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
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-heading font-bold mb-6 leading-tight text-foreground">
                Love learning French in South East London
              </h1>
              
              <p className="text-lg md:text-xl mb-10 text-muted-foreground max-w-2xl lg:max-w-none mx-auto lg:mx-0 leading-tight">
                Dreaming of dusting off your French and enjoying it again in a warm and friendly local group?<br/>
                Want your child to feel confident, motivated, and shine in their GCSE or A-level?<br/>
                I offer group or individual classes tailored to your needs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="text-lg px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 hover:shadow-lg transition-all duration-300 group" asChild>
                  <Link to="/contact">
                    <MessageCircle className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                    Book Free 30-minute Assessment
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 hover:scale-105 hover:shadow-lg transition-all duration-300 group" asChild>
                  <Link to="/classes">
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
                  className="w-full h-[370px] object-cover"
                />
              </div>
              {/* Removed overlay image */}
            </div>
          </div>
        </div>
      </section>

      {/* Class Types Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-gray-900">
              Choose Your French Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Whether you're an adult looking to reconnect with French or a student preparing for exams, we have the perfect path for you.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Adult Classes Box */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-300">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                    Adult Classes
                  </h3>
                  
                  <div className="space-y-4 mb-8 text-left">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">Group Classes</h4>
                        <p className="text-gray-600 text-sm">Join our warm and friendly small groups (max 8 students) for conversation practice and structured learning.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">1:1 Sessions</h4>
                        <p className="text-gray-600 text-sm">Personalized lessons tailored to your specific goals, schedule, and learning pace.</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button asChild className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                      <Link to="/classes#adults" className="flex items-center justify-center gap-2">
                        <Users className="w-4 h-4" />
                        Explore Adult Classes
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                    
                    <Button variant="outline" asChild className="w-full border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300 transition-all duration-300">
                      <Link to="/contact" className="flex items-center justify-center gap-2">
                        <MessageCircle className="w-4 h-4" />
                        Book Free Assessment
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Exam Prep Box */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-300">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                    <Award className="w-12 h-12 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                    Exam Preparation
                  </h3>
                  
                  <div className="space-y-4 mb-8 text-left">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">GCSE French</h4>
                        <p className="text-gray-600 text-sm">Comprehensive preparation covering all exam components - speaking, listening, reading, and writing.</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-teal-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">A-Level French</h4>
                        <p className="text-gray-600 text-sm">Advanced preparation with focus on literature, culture, and complex language structures.</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button asChild className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105">
                      <Link to="/classes#exam-prep" className="flex items-center justify-center gap-2">
                        <Award className="w-4 h-4" />
                        Explore Exam Prep
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </Button>
                    
                    <Button variant="outline" asChild className="w-full border-emerald-200 text-emerald-700 hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-300">
                      <Link to="/contact" className="flex items-center justify-center gap-2">
                        <MessageCircle className="w-4 h-4" />
                        Book Free Assessment
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose French Flow Section */}
      <section className="py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-gray-900">
              Why Choose French Flow
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {/* 1. Build Real Confidence */}
            <div className="group relative flex">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-300 flex flex-col w-full">
                <div className="text-center flex flex-col h-full">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                    <Trophy className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                    1. Build Real Confidence
                  </h3>
                  
                  <div className="space-y-4 text-left flex-grow">
                    <p className="text-gray-700 leading-relaxed">
                      We build confidence to use French in travel, work, or social settings from day one.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Concepts are explained simply, and mistakes are welcomed as stepping stones.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      GCSE and A-level students build and practise exam-smart strategies for success.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Small Groups, Personalised Attention */}
            <div className="group relative flex">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-300 flex flex-col w-full">
                <div className="text-center flex flex-col h-full">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                    2. Small Groups, Personalised Attention
                  </h3>
                  
                  <div className="space-y-4 text-left flex-grow">
                    <p className="text-gray-700 leading-relaxed">
                      Classes are small (max 8), ensuring every learner gets individual support.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Tailored marking and feedback, with clear, actionable next steps.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Encourages participation and rapid progress, and reduces anxiety about speaking.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Culture Meets Language */}
            <div className="group relative flex">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-300 flex flex-col w-full">
                <div className="text-center flex flex-col h-full">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                    <Flag className="w-10 h-10 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-heading font-bold text-gray-900 mb-6">
                    3. Culture Meets Language
                  </h3>
                  
                  <div className="space-y-4 text-left flex-grow">
                    <p className="text-gray-700 leading-relaxed">
                      Lessons connect French language learning with culture, music, film, and real-life contexts.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Makes learning more relatable, memorable and enjoyable, not just grammar drills.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Students leave with both language skills and cultural insight.
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
                  Passionate About Bringing French to Life
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
                  <span className="text-foreground group-hover:text-rose-600 transition-colors duration-300">Specialising in adult conversation classes</span>
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