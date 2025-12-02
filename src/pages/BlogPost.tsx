import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Clock, ArrowRight } from "lucide-react";
import SEO from "@/components/SEO";

interface BlogPost {
  slug: string;
  title: string;
  content: string;
  date: string;
  image?: string;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (slug) {
      fetchBlogPost(slug);
    }
  }, [slug]);

  useEffect(() => {
    try {
      const auth = localStorage.getItem('adminAuth');
      setIsAdmin(!!auth);
    } catch (_) {
      setIsAdmin(false);
    }
  }, []);

  const fetchBlogPost = async (postSlug: string) => {
    try {
      const response = await fetch(`/api/blog/posts/${postSlug}`);
      if (response.ok) {
        const contentType = response.headers.get('content-type') || '';
        if (!contentType.includes('application/json')) {
          throw new Error('Non-JSON response from API');
        }
        const postData = await response.json();
        setPost(postData);
      } else {
        await fetchFromStatic(postSlug);
      }
    } catch (err) {
      try {
        await fetchFromStatic(postSlug);
      } catch (_fallbackErr) {
        setError('Failed to load blog post');
      }
    } finally {
      setLoading(false);
    }
  };

  const fetchFromStatic = async (postSlug: string) => {
    const res = await fetch(`/content/blog/posts/${postSlug}.json`, { headers: { 'Content-Type': 'application/json' } });
    if (!res.ok) throw new Error('Static post not found');
    const data: BlogPost = await res.json();
    setPost(data);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
  };

  const getReadTime = (content: string) => {
    const wordsPerMinute = 200;
    const wordCount = content.split(' ').length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} min read`;
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-20">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <p className="text-muted-foreground">Loading blog post...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen pt-20">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-2xl font-heading font-bold mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">{error || 'The blog post you are looking for does not exist.'}</p>
            <Button asChild>
              <Link to="/blog">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEO
        title={post?.title || "French Learning Article"}
        description={post?.content ? post.content.substring(0, 160) + "..." : "Read this French learning article from French Flow, your local French teacher in South East London."}
        keywords="French learning, French language, French culture, French tips, French teacher, South East London, French lessons"
        url={`/blog/${slug}`}
        type="article"
        image={post?.image || "https://hxzxyrlkaczsmhgf.public.blob.vercel-storage.com/blog/1761586133241-584001331-La_Vieille_Ville_d_Annecy-Gilles_Piel-10272-ukvpHVift8lobe12TxPGFAX1EWSf5Z.jpg"}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: post?.title || "French Learning Article",
          image: post?.image ? [post.image] : ["https://hxzxyrlkaczsmhgf.public.blob.vercel-storage.com/blog/1761586133241-584001331-La_Vieille_Ville_d_Annecy-Gilles_Piel-10272-ukvpHVift8lobe12TxPGFAX1EWSf5Z.jpg"],
          datePublished: post?.date || new Date().toISOString(),
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://frenchflow.co.uk/blog/${slug}`
          },
          author: {
            "@type": "Person",
            name: "Barbara"
          },
          publisher: {
            "@type": "Organization",
            name: "French Flow",
            logo: {
              "@type": "ImageObject",
              url: "https://frenchflow.co.uk/french-flow-logo.png"
            }
          },
          description: post?.content ? post.content.substring(0, 160) + "..." : ""
        }}
      />
      <div className="min-h-screen pt-20" style={{ paddingTop: 'calc(5rem + 10px)' }}>
      {/* Back Navigation */}
      <div className="container mx-auto px-4 py-8 flex items-center gap-3">
        <Button variant="ghost" asChild>
          <Link to="/blog">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Link>
        </Button>
        {isAdmin && (
          <Button variant="outline" asChild>
            <Link to="/admin">Back to Admin</Link>
          </Button>
        )}
      </div>

      {/* Blog Post Content */}
      <article className="container mx-auto px-4 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Post Header */}
          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-4 mb-6 text-muted-foreground text-sm">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {formatDate(post.date)}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {getReadTime(post.content)}
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6 leading-tight">
              {post.title}
            </h1>
          </header>

          {/* Featured Image directly under title */}
          {post.image && (
            <div className="mb-12 mx-auto" style={{ maxWidth: 800 }}>
              <div className="w-full h-[500px] max-h-[500px] overflow-hidden rounded-lg shadow-elegant">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          )}

          {/* Post Content */}
          <Card className="shadow-soft">
            <CardContent className="p-8 md:p-12">
              <div 
                className="prose prose-lg max-w-none"
                style={{
                  fontFamily: 'Nunito, Inter, system-ui, sans-serif',
                  lineHeight: '1.7',
                  color: 'hsl(var(--foreground))'
                }}
              >
                {post.content.split('\n').map((paragraph, index) => (
                  <p key={index} className="mb-6 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-8">
                <h2 className="text-2xl font-heading font-bold mb-4">
                  Ready to Start Your French Journey?
                </h2>
                <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
                  Join our friendly French classes in Dulwich and rediscover your love for the language.
                </p>
                <Button size="lg" variant="secondary" className="text-lg px-8 py-4" asChild>
                  <Link to="/contact">
                    Book Your Free Assessment
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </article>
      </div>
    </>
  );
};

export default BlogPost;