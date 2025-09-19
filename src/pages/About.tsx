import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  GraduationCap, 
  Globe, 
  Heart, 
  Users, 
  BookOpen,
  Award,
  Coffee,
  MapPin,
  ArrowRight
} from "lucide-react";
import teacherPortrait from "@/assets/teacher-portrait.jpg";
import frenchClass from "@/assets/french-class.jpg";

const About = () => {
  return (
    <div className="min-h-screen pt-20" style={{ paddingTop: 'calc(5rem + 10px)' }}>
      {/* Hero Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Bonjour!</Badge>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                About Me
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                My name is Barbara. I am a native French speaker, and I grew up in the gorgeous French region of Savoie, where I enjoyed peaceful lake swims in summer and exhilarating skiing in winter.
              </p>
              
              <div className="flex items-center space-x-4 mb-8">
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>SE London</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Users className="w-4 h-4 mr-2" />
                  <span>20+ Years in London</span>
                </div>
              </div>
              
              <Button size="lg" asChild>
                <Link to="/contact">
                  Book Your Free Consultation
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                <img 
                  src={teacherPortrait} 
                  alt="Barbara, French teacher from Savoie"
                  className="w-full h-[500px] object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Experience */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              My Experience
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Fully qualified French teacher with extensive experience across all levels
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-soft hover:shadow-elegant transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">QTS & PGCE</h3>
                <p className="text-muted-foreground mb-4">
                  Qualified Teacher Status from Tes Institute and PGCE from University of East London
                </p>
                <Badge variant="secondary">Fully Qualified</Badge>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-elegant transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">DAEFLE Diploma</h3>
                <p className="text-muted-foreground mb-4">
                  Diploma in Teaching French as a Foreign Language from Alliance Française de Paris
                </p>
                <Badge variant="secondary">Specialized</Badge>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-elegant transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">BA Business & Languages</h3>
                <p className="text-muted-foreground mb-4">
                  Completed in London, combining business knowledge with language expertise
                </p>
                <Badge variant="secondary">London Graduate</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* My Approach */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                <img 
                  src={frenchClass} 
                  alt="French conversation class in progress"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Why I Love Languages
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  There's nothing more rewarding than the moment a language starts to make sense: when you can have your first real conversation, understand a song, or watch a film in its original version and pick up on the humour and cultural nuances.
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Learning languages keeps your brain young and curious, which means it's never too early or too late to start. With the right support and encouragement, a new language rapidly starts to flow and feel natural!
                </p>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Languages have brought me so much joy over the years. They've taken me to some incredible places, and have allowed me to not just meet, but truly connect with people from different cultures. Languages will widen your horizons, and let you experience cultures from the inside. That's the gift I want to share.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                My Mission
              </h2>
              <p className="text-xl text-muted-foreground">
                As Emma Bridgewater says, "Spend your life doing something that you really approve of."
              </p>
            </div>

            <Card className="shadow-elegant">
              <CardContent className="p-8 md:p-12">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed mb-6">
                    For me, that's teaching not just languages, but the beauty of languages. I see it as both a joy and a privilege to help others discover the confidence, opportunities, and connections that learning French can bring.
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    Languages are the best communication tool we've ever invented, and they open so many doors - come and discover what adventures await on the other side!
                  </p>
                  
                  <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
                    <h3 className="font-heading font-semibold text-lg mb-4">My Teaching Experience</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      I've taught French in Secondary Schools (KS3 to KS5), in Further Education (College and University) and as the founder and leader of a French after-school club. I also work 1:1 with children (from age 4), GCSE and A-level students, and adults who want to refresh or build their French.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4 max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Begin Your French Journey?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let's start with a friendly 30-minute chat about your French goals
          </p>
          
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4" asChild>
            <Link to="/contact">
              Book Your Free Consultation
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;