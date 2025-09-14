import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { 
  Calendar, 
  Clock, 
  ArrowRight
} from "lucide-react";
import blogHeader from "@/assets/blog-header.jpg";

interface BlogPost {
  slug: string;
  title: string;
  content: string;
  date: string;
  image?: string;
}

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      const response = await fetch('/api/blog/posts', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (response.ok) {
        const posts = await response.json();
        setBlogPosts(posts);
      } else {
        setError(`Failed to load blog posts: ${response.status}`);
      }
    } catch (err) {
      setError(`Failed to load blog posts: ${err instanceof Error ? err.message : 'Unknown error'}`);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    });
  };

  const getExcerpt = (content: string, maxLength: number = 150) => {
    if (!content) return 'No content available';
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength).trim() + '...';
  };

  const getReadTime = (content: string) => {
    if (!content) return '1 min read';
    const wordsPerMinute = 200;
    const wordCount = content.split(' ').length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} min read`;
  };


  return (
    <div className="min-h-screen pt-20" style={{ paddingTop: 'calc(5rem + 10px)' }}>
      {/* Hero Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-6xl mx-auto">
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


      {/* Featured Post - Show the most recent post */}
      {blogPosts.length > 0 && blogPosts[0] && (
        <section className="py-20">
          <div className="container mx-auto px-4 max-w-6xl mx-auto">
            <div className="max-w-6xl mx-auto">
              <Badge className="mb-4 bg-primary text-primary-foreground">Latest Article</Badge>
              <Card className="shadow-elegant border-primary/20 hover:shadow-soft transition-shadow duration-300">
                <CardHeader className="pb-4">
                  <div className="flex flex-wrap items-center gap-4 mb-4 text-muted-foreground text-sm">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {formatDate(blogPosts[0].date || new Date().toISOString())}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {getReadTime(blogPosts[0].content || '')}
                    </div>
                  </div>
                  <CardTitle className="text-2xl md:text-3xl font-heading font-bold leading-tight">
                    {blogPosts[0].title || 'Untitled Post'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {blogPosts[0].image && (
                    <div className="mb-6">
                      <img 
                        src={blogPosts[0].image} 
                        alt={blogPosts[0].title || 'Blog post image'}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                    </div>
                  )}
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {getExcerpt(blogPosts[0].content || '', 200)}
                  </p>
                  <Button asChild>
                    <Link to={`/blog/${blogPosts[0].slug || 'untitled'}`}>
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* All Blog Posts */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              All Articles
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Practical advice and insights from your French teacher
            </p>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Loading blog posts...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <p className="text-red-500">{error}</p>
            </div>
          ) : blogPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No blog posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {blogPosts.slice(1).map((post) => (
                <Card key={post.slug || 'untitled'} className="shadow-soft hover:shadow-elegant transition-shadow duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-muted-foreground text-sm">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {formatDate(post.date || new Date().toISOString())}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {getReadTime(post.content || '')}
                      </div>
                    </div>
                    <CardTitle className="text-xl font-heading font-bold leading-tight hover:text-primary transition-colors">
                      <Link to={`/blog/${post.slug || 'untitled'}`}>
                        {post.title || 'Untitled Post'}
                      </Link>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {post.image && (
                      <div className="mb-4">
                        <img 
                          src={post.image} 
                          alt={post.title || 'Blog post image'}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                    )}
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {getExcerpt(post.content || '')}
                    </p>
                    <Button variant="ghost" size="sm" asChild>
                      <Link to={`/blog/${post.slug || 'untitled'}`}>
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero text-white">
        <div className="container mx-auto px-4 max-w-6xl mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ready to Start Your French Journey?
            </h2>
            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Join our friendly French classes in Dulwich and rediscover your love for the language.
            </p>
            
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4" asChild>
              <Link to="/contact">
                Book Your Free Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;