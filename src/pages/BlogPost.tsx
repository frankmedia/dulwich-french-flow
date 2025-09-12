import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, User, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
import blogHeaderImage from "@/assets/blog-header.jpg";

const BlogPost = () => {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="py-8 px-4 border-b border-border">
        <div className="container mx-auto">
          <Button variant="ghost" asChild className="mb-6">
            <Link to="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>

      {/* Article */}
      <article className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          {/* Article Header */}
          <header className="mb-12">
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="secondary">French Learning</Badge>
              <Badge variant="secondary">Conversation</Badge>
              <Badge variant="secondary">Tips</Badge>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              5 Simple Ways to Build Confidence in French Conversation
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>Sophie Martin</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>March 15, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>5 min read</span>
              </div>
            </div>

            <img 
              src={blogHeaderImage} 
              alt="French conversation class in progress"
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-soft mb-8"
            />
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="lead text-xl text-muted-foreground mb-8">
              Many French learners feel confident reading and writing but freeze up during conversations. 
              If this sounds familiar, you're not alone! Here are five practical strategies to boost your 
              speaking confidence.
            </p>

            <h2 className="text-2xl font-heading font-semibold mt-12 mb-6">
              1. Start with Familiar Topics
            </h2>
            <p>
              Begin conversations with subjects you know well - your work, hobbies, or daily routine. 
              When you're comfortable with the content, you can focus entirely on expressing yourself 
              in French rather than thinking about what to say.
            </p>
            <p>
              <strong>Try this:</strong> Prepare a 2-minute description of your typical day in French. 
              Practice it until it flows naturally, then use it as a conversation starter.
            </p>

            <h2 className="text-2xl font-heading font-semibold mt-12 mb-6">
              2. Embrace Imperfection
            </h2>
            <p>
              The biggest barrier to French conversation is perfectionism. Native speakers make mistakes too! 
              Your goal should be communication, not perfection. French people will appreciate your effort 
              and understand you even with grammatical errors.
            </p>
            
            <blockquote className="border-l-4 border-primary pl-6 my-8 italic text-lg">
              "The best way to learn a language is to speak it badly before you speak it well."
            </blockquote>

            <h2 className="text-2xl font-heading font-semibold mt-12 mb-6">
              3. Learn Key Filler Phrases
            </h2>
            <p>
              Native speakers use filler phrases to give themselves thinking time. Learn these essential 
              French fillers:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Alors...</strong> (So...)</li>
              <li><strong>En fait...</strong> (Actually...)</li>
              <li><strong>Comment dire...</strong> (How to say...)</li>
              <li><strong>Eh bien...</strong> (Well...)</li>
              <li><strong>Vous voyez...</strong> (You see...)</li>
            </ul>

            <h2 className="text-2xl font-heading font-semibold mt-12 mb-6">
              4. Practice Active Listening
            </h2>
            <p>
              Good conversation isn't just about speaking - it's about listening and responding. 
              Focus on understanding the main idea rather than every word. Use phrases like 
              "Si je comprends bien..." (If I understand correctly...) to check your understanding.
            </p>

            <h2 className="text-2xl font-heading font-semibold mt-12 mb-6">
              5. Find Your Speaking Rhythm
            </h2>
            <p>
              Every learner has their optimal speaking pace. Some need time to construct sentences, 
              others benefit from speaking quickly to avoid overthinking. Experiment to find what 
              works for you, and don't be afraid to ask your conversation partner to slow down.
            </p>

            <div className="bg-accent/10 border border-accent/20 rounded-lg p-6 my-12">
              <h3 className="text-xl font-heading font-semibold mb-4 flex items-center">
                💡 Pro Tip from French PLUS
              </h3>
              <p className="mb-0">
                In our 6-week conversation blocks, we create a supportive environment where "French returners" 
                can practice these techniques with peers at similar levels. The small group setting builds 
                confidence naturally through regular, structured practice.
              </p>
            </div>

            <h2 className="text-2xl font-heading font-semibold mt-12 mb-6">
              Ready to Put These Tips into Practice?
            </h2>
            <p>
              Building conversation confidence takes practice, but with the right approach and supportive 
              environment, you'll be amazed at your progress. Remember, every French speaker was once 
              where you are now!
            </p>
          </div>

          {/* Article Footer */}
          <footer className="mt-16 pt-8 border-t border-border">
            <div className="flex items-center justify-between">
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share Article
              </Button>
              
              <div className="flex gap-2">
                <Badge variant="outline">Helpful?</Badge>
                <Badge variant="outline">👍 Yes</Badge>
              </div>
            </div>
          </footer>
        </div>
      </article>

      {/* Related/CTA Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-heading font-bold mb-4">
                Ready to Practice Your French?
              </h3>
              <p className="text-muted-foreground mb-6">
                Join our supportive conversation classes designed specifically for French returners 
                in the Dulwich area.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link to="/contact">Book Free Consultation</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/lessons">Learn More</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;