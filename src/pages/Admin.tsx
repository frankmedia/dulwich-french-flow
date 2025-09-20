import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Plus, Edit, Trash2, Eye, LogOut, Save, X } from 'lucide-react';

interface BlogPost {
  slug: string;
  title: string;
  content: string;
  date: string;
  image?: string;
}

const Admin: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();
  const location = window.location.pathname;
  const showDebug = import.meta.env.DEV || import.meta.env.VITE_SHOW_ADMIN_DEBUG === 'true';

  // Check authentication status
  const checkAuth = () => {
    const auth = localStorage.getItem('adminAuth');
    console.log('checkAuth - stored token:', auth); // Debug log
    if (!auth) {
      setIsAuthenticated(false);
      setPosts([]);
      setEditingPost(null);
      setIsCreating(false);
      return false;
    }
    return true;
  };

  // Test authentication token
  const testAuth = async () => {
    const auth = localStorage.getItem('adminAuth');
    if (!auth) return false;
    
    try {
      const response = await fetch('/api/blog/auth', {
        headers: {
          'Authorization': `Basic ${auth}`
        }
      });
      console.log('Auth test response:', response.status, response.statusText);
      return response.ok;
    } catch (err) {
      console.error('Auth test failed:', err);
      return false;
    }
  };

  // Check if already authenticated
  useEffect(() => {
    const auth = localStorage.getItem('adminAuth');
    if (auth) {
      setIsAuthenticated(true);
      fetchPosts();
    }
  }, []);

  // Handle URL-based editing and creating
  useEffect(() => {
    if (isAuthenticated) {
      if (location === '/admin/create') {
        // Handle create new post
        setEditingPost({
          slug: '',
          title: '',
          content: '',
          date: new Date().toISOString(),
          image: ''
        });
        setIsCreating(true);
      } else if (slug) {
        // Handle edit existing post
        const loadPostForEditing = async () => {
          // First try to find in existing posts
          const existingPost = posts.find(post => post.slug === slug);
          if (existingPost && existingPost.content) {
            // If we have the full post data, use it
            setEditingPost({ ...existingPost });
            setIsCreating(false);
          } else {
            // Otherwise, fetch the full post data
            const fullPost = await fetchPost(slug);
            if (fullPost) {
              setEditingPost({ ...fullPost });
              setIsCreating(false);
            } else {
              // Post not found, redirect to admin
              navigate('/admin');
            }
          }
        };
        
        loadPostForEditing();
      }
    }
  }, [slug, isAuthenticated, posts, navigate, location]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/blog/auth', {
        headers: {
          'Authorization': `Basic ${btoa(`${username}:${password}`)}`
        }
      });

      if (response.ok) {
        const token = btoa(`${username}:${password}`);
        console.log('Login successful, storing token:', token);
        console.log('Expected token:', btoa('barbara:52derbyhill'));
        console.log('Tokens match:', token === btoa('barbara:52derbyhill'));
        setIsAuthenticated(true);
        localStorage.setItem('adminAuth', token);
        fetchPosts();
      } else {
        const text = await response.text();
        setError(`Invalid credentials (status ${response.status}): ${text}`);
      }
    } catch (err) {
      setError(`Login failed: ${err}`);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('adminAuth');
    setPosts([]);
    setEditingPost(null);
    setIsCreating(false);
    setError('');
    setSuccess('');
  };

  const forceReauth = () => {
    localStorage.removeItem('adminAuth');
    setIsAuthenticated(false);
    setPosts([]);
    setEditingPost(null);
    setIsCreating(false);
    setError('Please log in again.');
  };

  const fixAuthToken = () => {
    const correctToken = btoa('barbara:52derbyhill');
    console.log('Fixing auth token to:', correctToken);
    localStorage.setItem('adminAuth', correctToken);
    setSuccess('Auth token fixed! Try saving again.');
    setTimeout(() => setSuccess(''), 3000);
  };

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/blog/posts');
      if (response.ok) {
        const data = await response.json();
        setPosts(data);
      }
    } catch (err) {
      console.error('Failed to fetch posts:', err);
    }
  };

  const fetchPost = async (slug: string) => {
    try {
      const response = await fetch(`/api/blog/posts/${slug}`);
      if (response.ok) {
        const data = await response.json();
        return data;
      }
    } catch (err) {
      console.error('Failed to fetch post:', err);
    }
    return null;
  };

  const handleCreatePost = () => {
    navigate('/admin/create');
  };

  const handleEditPost = (post: BlogPost) => {
    navigate(`/admin/edit/${post.slug}`);
  };

  const handleSavePost = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingPost) return;

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      if (!checkAuth()) {
        setError('Authentication expired. Please log in again.');
        setLoading(false);
        return;
      }

      // Test authentication before saving
      const authValid = await testAuth();
      if (!authValid) {
        setError('Authentication token is invalid. Please log in again.');
        setLoading(false);
        return;
      }

      const payload = {
        slug: editingPost.slug,
        title: editingPost.title,
        content: editingPost.content,
        date: editingPost.date
      };

      const auth = localStorage.getItem('adminAuth');
      console.log('Save auth token:', auth); // Debug log
      console.log('Auth token length:', auth ? auth.length : 'null');
      console.log('Expected token:', btoa('barbara:52derbyhill'));
      console.log('Expected token length:', btoa('barbara:52derbyhill').length);
      console.log('Tokens match:', auth === btoa('barbara:52derbyhill'));
      console.log('Token characters:', auth ? auth.split('').map(c => c.charCodeAt(0)) : 'null');
      console.log('Form data:', {
        slug: editingPost.slug,
        title: editingPost.title,
        content: editingPost.content ? editingPost.content.substring(0, 100) + '...' : 'empty',
        date: editingPost.date
      }); // Debug log

      const response = await fetch('/api/blog/posts', {
        method: 'POST',
        headers: {
          'Authorization': `Basic ${auth}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        await fetchPosts();
        setEditingPost(null);
        setIsCreating(false);
        setSuccess('Post saved successfully!');
        setTimeout(() => setSuccess(''), 3000);
        // Navigate back to admin page after successful save
        navigate('/admin');
      } else {
        const errorText = await response.text();
        console.error('Save failed:', response.status, errorText);
        setError(`Failed to save post: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      setError('Save failed');
    } finally {
      setLoading(false);
    }
  };

  const handleDeletePost = async (slug: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return;

    setLoading(true);
    setError('');
    setSuccess('');

    try {
      if (!checkAuth()) {
        setError('Authentication expired. Please log in again.');
        setLoading(false);
        return;
      }

      const auth = localStorage.getItem('adminAuth');
      console.log('Auth token:', auth); // Debug log

      const response = await fetch(`/api/blog/posts/${slug}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Basic ${auth}`
        }
      });

      if (response.ok) {
        await fetchPosts();
        setError(''); // Clear any previous errors
        setSuccess('Post deleted successfully!');
        setTimeout(() => setSuccess(''), 3000); // Clear success message after 3 seconds
      } else {
        const errorText = await response.text();
        console.error('Delete failed:', response.status, errorText);
        setError(`Failed to delete post: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.error('Failed to delete post:', err);
      setError('Network error: Failed to delete post');
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!editingPost) return;
    
    const file = e.target.files?.[0];
    if (file) {
      // Update the form data will be handled in handleSavePost
      setEditingPost({ ...editingPost });
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-french-cream to-french-ivory flex items-center justify-center p-4">
        <div className="bg-white rounded-lg shadow-elegant p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-heading text-french-navy mb-2">Admin Login</h1>
            <p className="text-french-blue/70">French Flow Blog Management</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-french-navy mb-2">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-french-cream rounded-lg focus:ring-2 focus:ring-french-blue focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-french-navy mb-2">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-french-cream rounded-lg focus:ring-2 focus:ring-french-blue focus:border-transparent"
                required
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-french-blue text-white py-3 px-4 rounded-lg hover:bg-french-navy transition-colors disabled:opacity-50"
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-french-cream to-french-ivory" style={{ paddingTop: 'calc(5rem + 30px)' }}>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <div>
                <h1 className="text-4xl font-heading text-french-navy mb-2">Blog Admin</h1>
                <p className="text-french-blue/70">Manage your French Flow blog posts</p>
              </div>
              <div className="flex gap-2">
                {showDebug && (
                  <>
                    <button
                      onClick={async () => {
                        const valid = await testAuth();
                        if (valid) {
                          setSuccess('Authentication is valid!');
                          setTimeout(() => setSuccess(''), 3000);
                        } else {
                          setError('Authentication failed. Please log in again.');
                          setTimeout(() => forceReauth(), 2000);
                        }
                      }}
                      className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      Test Auth
                    </button>
                    <button
                      onClick={async () => {
                        try {
                          const auth = localStorage.getItem('adminAuth');
                          console.log('Test save - auth token:', auth);
                          
                          const payload = {
                            slug: 'test-save-debug',
                            title: 'Test Save Debug',
                            content: 'Test content for debugging',
                            date: new Date().toISOString()
                          };

                          const response = await fetch('/api/blog/posts', {
                            method: 'POST',
                            headers: {
                              'Authorization': `Basic ${auth}`,
                              'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(payload)
                          });

                          console.log('Test save response:', response.status, response.statusText);
                          if (response.ok) {
                            setSuccess('Test save successful!');
                            setTimeout(() => setSuccess(''), 3000);
                          } else {
                            const errorText = await response.text();
                            setError(`Test save failed: ${response.status} ${response.statusText} - ${errorText}`);
                          }
                        } catch (err) {
                          console.error('Test save error:', err);
                          setError('Test save failed: ' + err);
                        }
                      }}
                      className="flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                    >
                      Test Save
                    </button>
                    <button
                      onClick={fixAuthToken}
                      className="flex items-center gap-2 bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors"
                    >
                      Fix Auth Token
                    </button>
                  </>
                )}
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                >
                  <LogOut size={20} />
                  Logout
                </button>
              </div>
            </div>

        {/* Posts List */}
        {!editingPost && (
          <div className="bg-white rounded-lg shadow-elegant p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-heading text-french-navy">Blog Posts</h2>
              <button
                onClick={handleCreatePost}
                className="flex items-center gap-2 bg-french-blue text-white px-4 py-2 rounded-lg hover:bg-french-navy transition-colors"
              >
                <Plus size={20} />
                New Post
              </button>
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
                {error}
              </div>
            )}

            {success && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6">
                {success}
              </div>
            )}

            <div className="space-y-4">
              {posts.map((post) => (
                <div key={post.slug} className="border border-french-cream rounded-lg p-4 hover:shadow-soft transition-shadow">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 
                        className="text-xl font-heading text-french-navy mb-2 cursor-pointer hover:text-french-blue transition-colors"
                        onClick={() => handleEditPost(post)}
                        title="Click to edit this post"
                      >
                        {post.title}
                      </h3>
                      <p className="text-french-blue/70 text-sm mb-2">
                        {new Date(post.date).toLocaleDateString()}
                      </p>
                      <p className="text-french-blue/60 text-sm">
                        Slug: {post.slug}
                      </p>
                      {post.image && (
                        <p className="text-french-blue/60 text-sm">
                          Image: {post.image}
                        </p>
                      )}
                    </div>
                    <div className="flex gap-2">
                      <a
                        href={`/blog/${post.slug}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                        title="View Post"
                      >
                        <Eye size={18} />
                      </a>
                      <button
                        onClick={() => handleEditPost(post)}
                        className="p-2 text-french-blue hover:bg-french-cream rounded-lg transition-colors"
                        title="Edit"
                      >
                        <Edit size={18} />
                      </button>
                      <button
                        onClick={() => handleDeletePost(post.slug)}
                        disabled={loading}
                        className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        title="Delete"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
              {posts.length === 0 && (
                <p className="text-center text-french-blue/60 py-8">No blog posts yet. Create your first post!</p>
              )}
            </div>
          </div>
        )}

        {/* Post Editor */}
        {editingPost && (
          <div className="bg-white rounded-lg shadow-elegant p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-heading text-french-navy">
                {isCreating ? 'Create New Post' : 'Edit Post'}
              </h2>
              <button
                onClick={() => {
                  setEditingPost(null);
                  setIsCreating(false);
                  navigate('/admin');
                }}
                className="p-2 text-french-blue hover:bg-french-cream rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <form onSubmit={handleSavePost} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-french-navy mb-2">
                    Slug (URL-friendly)
                  </label>
                  <input
                    type="text"
                    value={editingPost.slug}
                    onChange={(e) => setEditingPost({ ...editingPost, slug: e.target.value })}
                    className="w-full px-4 py-3 border border-french-cream rounded-lg focus:ring-2 focus:ring-french-blue focus:border-transparent"
                    placeholder="my-french-lesson"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-french-navy mb-2">
                    Date
                  </label>
                  <input
                    type="datetime-local"
                    value={editingPost.date.slice(0, 16)}
                    onChange={(e) => setEditingPost({ ...editingPost, date: new Date(e.target.value).toISOString() })}
                    className="w-full px-4 py-3 border border-french-cream rounded-lg focus:ring-2 focus:ring-french-blue focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-french-navy mb-2">
                  Title
                </label>
                <input
                  type="text"
                  value={editingPost.title}
                  onChange={(e) => setEditingPost({ ...editingPost, title: e.target.value })}
                  className="w-full px-4 py-3 border border-french-cream rounded-lg focus:ring-2 focus:ring-french-blue focus:border-transparent"
                  placeholder="My French Learning Journey"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-french-navy mb-2">
                  Featured Image
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full px-4 py-3 border border-french-cream rounded-lg focus:ring-2 focus:ring-french-blue focus:border-transparent"
                />
                <p className="text-sm text-french-blue/60 mt-1">
                  Upload a featured image for your blog post (JPG, PNG, GIF, WebP - max 5MB)
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-french-navy mb-2">
                  Content (Markdown supported)
                </label>
                <textarea
                  value={editingPost.content}
                  onChange={(e) => setEditingPost({ ...editingPost, content: e.target.value })}
                  className="w-full px-4 py-3 border border-french-cream rounded-lg focus:ring-2 focus:ring-french-blue focus:border-transparent"
                  rows={12}
                  placeholder="Write your blog post content here..."
                  required
                />
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
                  {error}
                </div>
              )}

              {success && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">
                  {success}
                </div>
              )}

              <div className="flex gap-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center gap-2 bg-french-blue text-white px-6 py-3 rounded-lg hover:bg-french-navy transition-colors disabled:opacity-50"
                >
                  <Save size={20} />
                  {loading ? 'Saving...' : 'Save Post'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setEditingPost(null);
                    setIsCreating(false);
                    navigate('/admin');
                  }}
                  className="px-6 py-3 border border-french-cream text-french-blue rounded-lg hover:bg-french-cream transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;