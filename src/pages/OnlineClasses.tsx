import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Bell, Calendar, Video, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import FrenchFlag from "@/components/FrenchFlag";

const OnlineClasses = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-french-cream to-french-ivory" style={{ paddingTop: 'calc(5rem + 20px)' }}>
      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center max-w-6xl">
          <div className="mb-8">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center group hover:scale-110 transition-transform duration-300">
              <Video className="w-10 h-10 text-white group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <h1 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-french-navy">
              French Classes in South East London
            </h1>
            <p className="text-xl text-french-blue/80 mb-8 max-w-3xl mx-auto">
              Dreaming of dusting off your French and enjoying it again in a warm and friendly local group?<br/><br/>
              Want your child to feel confident, motivated, and shine in their GCSE or A-level?<br/><br/>
              I offer group or individual classes tailored to your needs.<br/><br/>
              Book a free 30-minute chat and assessment!
            </p>
          </div>
          
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full border border-yellow-300 mb-12 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <Bell className="w-5 h-5 text-white animate-pulse" />
            <span className="font-medium text-white">Available Now</span>
          </div>
        </div>
      </section>

      {/* Class Types Section */}
      <section className="py-16 px-4 bg-white/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Adult Classes Box */}
            <Card className="text-center group hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 shadow-elegant bg-gradient-to-br from-blue-50 to-indigo-50 cursor-pointer" asChild>
              <Link to="/classes">
                <CardHeader className="pb-6">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-heading font-bold text-french-navy mb-4">
                    Adult Classes
                  </CardTitle>
                  <CardDescription className="text-french-blue/80 text-lg leading-relaxed">
                    <strong>Group Classes:</strong> Join our warm and friendly small groups for conversation practice and structured learning in a supportive environment.<br/><br/>
                    <strong>1:1 Sessions:</strong> Personalized lessons tailored to your specific goals, schedule, and learning pace. Perfect for focused improvement or specific needs.
                  </CardDescription>
                </CardHeader>
              </Link>
            </Card>

            {/* Exam Prep Box */}
            <Card className="text-center group hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 shadow-elegant bg-gradient-to-br from-emerald-50 to-teal-50 cursor-pointer" asChild>
              <Link to="/classes">
                <CardHeader className="pb-6">
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <Calendar className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-heading font-bold text-french-navy mb-4">
                    Exam Preparation
                  </CardTitle>
                  <CardDescription className="text-french-blue/80 text-lg leading-relaxed">
                    <strong>GCSE French:</strong> Comprehensive preparation covering all exam components - speaking, listening, reading, and writing. Build confidence and achieve your target grade.<br/><br/>
                    <strong>A-Level French:</strong> Advanced preparation for A-Level exams with focus on literature, culture, and complex language structures. Expert guidance for top results.
                  </CardDescription>
                </CardHeader>
              </Link>
            </Card>
          </div>
        </div>
      </section>

      {/* Why French Flow Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-french-blue/5 to-french-navy/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-french-navy">
              Why French Flow?
            </h2>
            <p className="text-xl text-french-blue/80 max-w-3xl mx-auto">
              Your local French teacher in South East London, bringing authentic French culture and expert teaching to your doorstep.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Local Teacher */}
            <Card className="text-center group hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 shadow-elegant bg-white/80">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-french-blue to-french-navy rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-heading font-bold text-french-navy mb-4">
                  Local French Teacher
                </CardTitle>
                <CardDescription className="text-french-blue/80 leading-relaxed">
                  I'm your neighbor in South East London! No corporate chains or distant online platforms - just a dedicated local teacher who understands your community and learning needs.
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Authentic Experience */}
            <Card className="text-center group hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 shadow-elegant bg-white/80">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-heading font-bold text-french-navy mb-4">
                  Authentic French Experience
                </CardTitle>
                <CardDescription className="text-french-blue/80 leading-relaxed">
                  Learn from a native French speaker who brings real French culture, idioms, and contemporary language to every lesson. Experience France without leaving London!
                </CardDescription>
              </CardHeader>
            </Card>

            {/* Personal Touch */}
            <Card className="text-center group hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 shadow-elegant bg-white/80">
              <CardHeader className="pb-6">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-heading font-bold text-french-navy mb-4">
                  Personal & Flexible
                </CardTitle>
                <CardDescription className="text-french-blue/80 leading-relaxed">
                  Small groups mean personal attention. Flexible scheduling that works around your life. Direct communication with your teacher - no call centers or automated systems.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-french-navy">
                About Me
              </h2>
              <div className="space-y-6 text-french-blue/80 text-lg leading-relaxed">
                <p>
                  <strong>Bonjour!</strong> I'm your local French teacher here in South East London. 
                  As a native French speaker, I bring authentic language and culture to every lesson.
                </p>
                <p>
                  With years of experience teaching both adults and students preparing for GCSE and A-Level exams, 
                  I understand the unique challenges of learning French in the UK context.
                </p>
                <p>
                  What sets me apart is my commitment to creating a warm, supportive learning environment 
                  where you can build confidence and actually enjoy speaking French again. No intimidating 
                  classrooms or one-size-fits-all approaches - just personalised, effective teaching.
                </p>
                <p>
                  When I'm not teaching, you'll find me exploring the local cafes and markets, 
                  bringing a little bit of French joie de vivre to our wonderful South East London community.
                </p>
              </div>
              
              <div className="mt-8">
                <Button size="lg" asChild className="bg-french-blue hover:bg-french-navy transition-colors group shadow-lg hover:shadow-xl">
                  <Link to="/contact" className="flex items-center gap-2">
                    <Mail className="w-5 h-5 group-hover:animate-pulse" />
                    Let's Chat About Your French Goals
                  </Link>
                </Button>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-french-blue/10 to-french-navy/10 rounded-2xl flex items-center justify-center relative overflow-hidden">
                {/* Decorative French Elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <FrenchFlag className="text-8xl opacity-20 w-32 h-auto" />
                </div>
                
                {/* Content Card */}
                <div className="relative z-10 bg-white/90 backdrop-blur-sm rounded-xl p-8 shadow-lg max-w-sm mx-4">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-french-blue to-french-navy rounded-full flex items-center justify-center">
                      <Users className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-french-navy mb-2">
                      Your Local Teacher
                    </h3>
                    <p className="text-french-blue/70 text-sm">
                      Native French speaker<br/>
                      South East London based<br/>
                      Experienced with all levels
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-french-blue/5 to-french-navy/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-french-navy">
              What My Students Say
            </h2>
            <p className="text-xl text-french-blue/80 max-w-3xl mx-auto">
              Real feedback from students who've transformed their French with local, personalised teaching.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 shadow-elegant bg-white/90">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-5 h-5 text-yellow-400 fill-current">
                      <svg viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    </div>
                  ))}
                </div>
                <CardDescription className="text-french-blue/80 leading-relaxed italic">
                  "Barbara made French fun again! After years of struggling with GCSE French, my daughter went from a grade 4 to an 8. The small group setting was perfect for building confidence."
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">SM</span>
                  </div>
                  <div>
                    <p className="font-semibold text-french-navy">Sarah M.</p>
                    <p className="text-sm text-french-blue/60">Parent, GCSE Student</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 2 */}
            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 shadow-elegant bg-white/90">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-5 h-5 text-yellow-400 fill-current">
                      <svg viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    </div>
                  ))}
                </div>
                <CardDescription className="text-french-blue/80 leading-relaxed italic">
                  "I was terrified of speaking French after years of school classes. Barbara's warm approach and small groups helped me find my voice. Now I can actually have conversations!"
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">JD</span>
                  </div>
                  <div>
                    <p className="font-semibold text-french-navy">James D.</p>
                    <p className="text-sm text-french-blue/60">Adult Learner</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial 3 */}
            <Card className="group hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 shadow-elegant bg-white/90">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-5 h-5 text-yellow-400 fill-current">
                      <svg viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                      </svg>
                    </div>
                  ))}
                </div>
                <CardDescription className="text-french-blue/80 leading-relaxed italic">
                  "The 1:1 sessions were exactly what I needed for my A-Level preparation. Barbara's expertise in exam techniques and her patience made all the difference. Highly recommend!"
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold text-sm">EL</span>
                  </div>
                  <div>
                    <p className="font-semibold text-french-navy">Emma L.</p>
                    <p className="text-sm text-french-blue/60">A-Level Student</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-lg text-french-blue/80 mb-6">
              Ready to join these successful students?
            </p>
            <Button size="lg" asChild className="bg-french-blue hover:bg-french-navy transition-colors group shadow-lg hover:shadow-xl">
              <Link to="/contact" className="flex items-center gap-2">
                <Mail className="w-5 h-5 group-hover:animate-pulse" />
                Book Your Free 30-Minute Assessment
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-16 text-french-navy">
            What to Expect
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center group hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 shadow-elegant">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-french-navy">Small Group Sessions</CardTitle>
                <CardDescription className="text-french-blue/70">
                  Interactive small-group classes for personalised attention
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 shadow-elegant">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-french-navy">Flexible Scheduling</CardTitle>
                <CardDescription className="text-french-blue/70">
                  Evening and weekend slots to fit your busy lifestyle
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center group hover:shadow-lg transition-all duration-300 hover:scale-105 border-0 shadow-elegant">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl text-french-navy">10-Week Blocks</CardTitle>
                <CardDescription className="text-french-blue/70">
                  Same proven structure as our in-person classes, delivered online
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-french-blue/10 to-french-navy/10">
        <div className="container mx-auto text-center max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-french-navy">
            Ready to Start Now?
          </h2>
          <p className="text-lg text-french-blue/80 mb-10 max-w-2xl mx-auto">
            Ready to start your French journey? Book your free consultation for 
            our classes in Dulwich.
          </p>
          <Button size="lg" asChild className="bg-french-blue hover:bg-french-navy transition-colors group shadow-lg hover:shadow-xl">
            <Link to="/contact" className="flex items-center gap-2">
              <Mail className="w-5 h-5 group-hover:animate-pulse" />
              Book Free Consultation
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default OnlineClasses;