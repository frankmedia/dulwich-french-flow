import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  Clock, 
  ArrowRight,
  BookOpen,
  Coffee,
  Globe,
  Users,
  MessageCircle,
  Lightbulb
} from "lucide-react";
import blogHeader from "@/assets/blog-header.jpg";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "5 Signs You're Ready to Return to French",
      excerpt: "Wondering if now is the right time to dust off your French skills? Here are the telltale signs that you're ready to embark on your French comeback journey.",
      category: "Getting Started",
      readTime: "4 min read",
      date: "15 Nov 2024",
      featured: true
    },
    {
      id: 2,
      title: "Why Your School French Feels 'Rusty' (And How to Fix It)",
      excerpt: "That familiar frustration when you understand French but can't speak it? There's a reason for it, and more importantly, there's a solution.",
      category: "Language Learning",
      readTime: "6 min read",
      date: "10 Nov 2024",
      featured: false
    },
    {
      id: 3,
      title: "French Culture Shock: What They Don't Teach in School",
      excerpt: "Beyond grammar and vocabulary lies the real French culture. Discover the cultural nuances that will make your French sound authentically native.",
      category: "Culture",
      readTime: "5 min read",
      date: "5 Nov 2024",
      featured: false
    },
    {
      id: 4,
      title: "The Magic of 90-Minute French Lessons",
      excerpt: "Why longer lessons lead to better results, and how we structure our sessions to keep you engaged and learning effectively.",
      category: "Teaching Method",
      readTime: "3 min read",
      date: "1 Nov 2024",
      featured: false
    },
    {
      id: 5,
      title: "Conquering the Fear of Speaking French",
      excerpt: "That voice in your head saying your French isn't good enough? Let's silence it once and for all with proven confidence-building techniques.",
      category: "Confidence",
      readTime: "7 min read",
      date: "28 Oct 2024",
      featured: false
    },
    {
      id: 6,
      title: "French Pronunciation: The Sounds That Matter Most",
      excerpt: "Focus your energy on these key pronunciation elements that will have the biggest impact on how French you sound.",
      category: "Pronunciation",
      readTime: "5 min read",
      date: "23 Oct 2024",
      featured: false
    }
  ];

  const categories = [
    { name: "All Posts", count: 6, icon: BookOpen },
    { name: "Getting Started", count: 1, icon: Lightbulb },
    { name: "Language Learning", count: 1, icon: Globe },
    { name: "Culture", count: 1, icon: Coffee },
    { name: "Teaching Method", count: 1, icon: Users },
    { name: "Confidence", count: 1, icon: MessageCircle },
    { name: "Pronunciation", count: 1, icon: Globe }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">French PLUS Blog</Badge>
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Your French Learning Journey
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Tips, insights, and inspiration to help you reconnect with French. 
                From overcoming speaking anxiety to understanding French culture, 
                find everything you need for your French comeback.
              </p>
              
              <Button size="lg" asChild>
                <Link to="/contact">
                  Join Our Community
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
            
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-elegant">
                <img 
                  src={blogHeader} 
                  alt="French learning materials and coffee"
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <Button
                  key={category.name}
                  variant={category.name === "All Posts" ? "default" : "outline"}
                  className="flex items-center space-x-2"
                >
                  <IconComponent className="w-4 h-4" />
                  <span>{category.name}</span>
                  <Badge variant="secondary" className="ml-1">
                    {category.count}
                  </Badge>
                </Button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {blogPosts.filter(post => post.featured).map((post) => (
        <section key={post.id} className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Badge className="mb-4 bg-primary text-primary-foreground">Featured Article</Badge>
              <Card className="shadow-elegant border-primary/20 hover:shadow-soft transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-muted-foreground text-sm">
                    <Badge variant="outline">{post.category}</Badge>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-2xl md:text-3xl font-heading font-bold leading-tight">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Button asChild>
                    <Link to={`/blog/${post.id}`}>
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      ))}

      {/* All Blog Posts */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Latest Articles
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Practical advice and insights from your French teacher
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {blogPosts.filter(post => !post.featured).map((post) => (
              <Card key={post.id} className="shadow-soft hover:shadow-elegant transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-muted-foreground text-sm">
                    <Badge variant="outline">{post.category}</Badge>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {post.date}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl font-heading font-bold leading-tight hover:text-primary transition-colors">
                    <Link to={`/blog/${post.id}`}>
                      {post.title}
                    </Link>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Button variant="ghost" size="sm" asChild>
                    <Link to={`/blog/${post.id}`}>
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Get the latest French learning tips and insights delivered to your inbox. 
              Plus, exclusive content for our community members.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border-0 text-foreground placeholder:text-muted-foreground"
              />
              <Button variant="secondary" size="lg" className="px-8">
                Subscribe
              </Button>
            </div>
            
            <p className="text-white/70 text-sm">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;