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
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Bonjour!</Badge>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                I'm Claire, Your French Language Guide
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                With a passion for the French language and culture that spans over a decade, 
                I've dedicated my career to helping adults rediscover the joy of speaking French. 
                Based in the heart of Dulwich, I understand the unique journey of returning to 
                a language you once knew.
              </p>
              
              <div className="flex items-center space-x-4 mb-8">
                <div className="flex items-center text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Dulwich, London</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Users className="w-4 h-4 mr-2" />
                  <span>10+ Years Experience</span>
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
                  alt="Claire, French teacher"
                  className="w-full h-[500px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Education & Qualifications
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Combining academic excellence with practical teaching experience
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="shadow-soft hover:shadow-elegant transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">MA French Literature</h3>
                <p className="text-muted-foreground mb-4">
                  University of Cambridge, specializing in 20th century French literature and linguistics
                </p>
                <Badge variant="secondary">2010</Badge>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-elegant transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">DELF/DALF Examiner</h3>
                <p className="text-muted-foreground mb-4">
                  Certified examiner for official French proficiency tests
                </p>
                <Badge variant="secondary">Certified 2015</Badge>
              </CardContent>
            </Card>

            <Card className="shadow-soft hover:shadow-elegant transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">PGCE Modern Languages</h3>
                <p className="text-muted-foreground mb-4">
                  Postgraduate Certificate in Education, specializing in adult education
                </p>
                <Badge variant="secondary">2012</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* My Approach */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
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
                My Teaching Philosophy
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Heart className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">
                      Confidence Over Perfection
                    </h3>
                    <p className="text-muted-foreground">
                      I believe that confidence comes before perfection. My classes focus on 
                      getting you comfortable speaking French, making mistakes, and learning 
                      from them in a supportive environment.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Globe className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">
                      Cultural Immersion
                    </h3>
                    <p className="text-muted-foreground">
                      Language is inseparable from culture. We explore French customs, 
                      current events, and cultural nuances to give you authentic 
                      communication skills.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Coffee className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">
                      Relaxed Yet Structured
                    </h3>
                    <p className="text-muted-foreground">
                      While our lessons follow a clear structure, the atmosphere is 
                      relaxed and conversational - like chatting with friends in a 
                      Parisian café.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Touch */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Beyond the Classroom
              </h2>
              <p className="text-xl text-muted-foreground">
                A little more about what drives my passion for French
              </p>
            </div>

            <Card className="shadow-elegant">
              <CardContent className="p-8 md:p-12">
                <div className="prose prose-lg max-w-none">
                  <p className="text-lg leading-relaxed mb-6">
                    My love affair with French began during a summer in Provence when I was 18. 
                    What started as a language exchange became a lifelong passion that has taken 
                    me from the boulevards of Paris to the vineyards of Bordeaux.
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    I've lived in France for three years, teaching English while perfecting my 
                    own French through daily conversations with locals. This experience taught 
                    me the difference between academic French and the living, breathing language 
                    that connects people.
                  </p>
                  
                  <p className="text-lg leading-relaxed mb-6">
                    When I'm not teaching, you'll find me exploring London's French patisseries, 
                    organizing French film nights for my students, or planning cultural trips to 
                    France. I believe learning French should be as enjoyable as a leisurely 
                    afternoon in a French café.
                  </p>
                  
                  <blockquote className="border-l-4 border-primary pl-6 italic text-xl text-muted-foreground">
                    "Teaching French isn't just my profession - it's sharing a culture 
                    and language that has enriched my life immeasurably."
                  </blockquote>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Ready to Begin Your French Journey?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Let's start with a friendly 20-minute chat about your French goals
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