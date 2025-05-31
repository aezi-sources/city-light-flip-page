
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  tags: string[];
}

const BlogEditor = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginCode, setLoginCode] = useState('');
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [isCreating, setIsCreating] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    tags: '',
    readTime: ''
  });
  
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const SECRET_CODE = 'admin2024'; // In a real app, this would be more secure

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  // Load posts from localStorage on component mount
  useEffect(() => {
    const savedPosts = localStorage.getItem('blogPosts');
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginCode === SECRET_CODE) {
      setIsAuthenticated(true);
      toast({
        title: "Success",
        description: "Successfully logged in to blog editor",
      });
    } else {
      toast({
        title: "Error",
        description: "Invalid login code",
        variant: "destructive",
      });
    }
  };

  const handleCreateNew = () => {
    setIsCreating(true);
    setEditingPost(null);
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      tags: '',
      readTime: ''
    });
  };

  const handleEdit = (post: BlogPost) => {
    setIsCreating(true);
    setEditingPost(post);
    setFormData({
      title: post.title,
      excerpt: post.excerpt,
      content: post.content,
      tags: post.tags.join(', '),
      readTime: post.readTime
    });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.excerpt || !formData.content) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    const newPost: BlogPost = {
      id: editingPost ? editingPost.id : Date.now(),
      title: formData.title,
      excerpt: formData.excerpt,
      content: formData.content,
      date: editingPost ? editingPost.date : new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      readTime: formData.readTime || '5 min read',
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag !== '')
    };

    let updatedPosts;
    if (editingPost) {
      updatedPosts = posts.map(post => post.id === editingPost.id ? newPost : post);
    } else {
      updatedPosts = [newPost, ...posts];
    }

    setPosts(updatedPosts);
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
    
    setIsCreating(false);
    setEditingPost(null);
    
    toast({
      title: "Success",
      description: editingPost ? "Post updated successfully" : "Post created successfully",
    });
  };

  const handleDelete = (id: number) => {
    const updatedPosts = posts.filter(post => post.id !== id);
    setPosts(updatedPosts);
    localStorage.setItem('blogPosts', JSON.stringify(updatedPosts));
    
    toast({
      title: "Success",
      description: "Post deleted successfully",
    });
  };

  const handleCancel = () => {
    setIsCreating(false);
    setEditingPost(null);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen">
        <Navigation darkMode={darkMode} toggleMode={toggleMode} />
        
        <section className={`pt-20 pb-16 min-h-screen flex items-center justify-center transition-all duration-500 ${
          darkMode ? 'bg-black text-sky-400' : 'bg-sky-400 text-black'
        }`}>
          <div className="max-w-md w-full mx-auto px-4">
            <div className={`p-8 rounded-lg ${
              darkMode ? 'bg-sky-400/10 border border-sky-400/20' : 'bg-black/10 border border-black/20'
            }`}>
              <h1 className="text-2xl font-bold mb-6 text-center">Blog Editor Login</h1>
              
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label htmlFor="loginCode" className="block text-sm font-medium mb-2">
                    Enter Login Code
                  </label>
                  <Input
                    id="loginCode"
                    type="password"
                    value={loginCode}
                    onChange={(e) => setLoginCode(e.target.value)}
                    placeholder="Enter secret code"
                    className={darkMode ? 'bg-black/50 border-sky-400/30' : 'bg-white/50 border-black/30'}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className={`w-full ${
                    darkMode 
                      ? 'bg-sky-400 text-black hover:bg-sky-300' 
                      : 'bg-black text-sky-400 hover:bg-gray-800'
                  }`}
                >
                  Login
                </Button>
              </form>
              
              <div className="mt-6 text-center">
                <Button
                  variant="outline"
                  onClick={() => navigate('/blog')}
                  className={darkMode ? 'border-sky-400 text-sky-400' : 'border-black text-black'}
                >
                  Back to Blog
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        <Footer darkMode={darkMode} />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation darkMode={darkMode} toggleMode={toggleMode} />
      
      {/* Header */}
      <section className={`pt-20 pb-8 transition-all duration-500 ${
        darkMode ? 'bg-black text-sky-400' : 'bg-sky-400 text-black'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl sm:text-4xl font-bold">Blog Editor</h1>
            <div className="flex gap-4">
              <Button
                onClick={handleCreateNew}
                className={`${
                  darkMode 
                    ? 'bg-sky-400 text-black hover:bg-sky-300' 
                    : 'bg-black text-sky-400 hover:bg-gray-800'
                }`}
              >
                <i className="fas fa-plus mr-2"></i>
                New Post
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate('/blog')}
                className={darkMode ? 'border-sky-400 text-sky-400' : 'border-black text-black'}
              >
                View Blog
              </Button>
              <Button
                variant="outline"
                onClick={() => setIsAuthenticated(false)}
                className={darkMode ? 'border-sky-400 text-sky-400' : 'border-black text-black'}
              >
                Logout
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className={`py-8 min-h-screen transition-all duration-500 ${
        darkMode ? 'bg-sky-400 text-black' : 'bg-black text-sky-400'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {isCreating ? (
            /* Post Editor Form */
            <div className={`p-6 rounded-lg ${
              darkMode ? 'bg-black/20' : 'bg-sky-400/20'
            }`}>
              <h2 className="text-2xl font-bold mb-6">
                {editingPost ? 'Edit Post' : 'Create New Post'}
              </h2>
              
              <form onSubmit={handleSave} className="space-y-6">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium mb-2">
                    Title *
                  </label>
                  <Input
                    id="title"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    placeholder="Enter post title"
                    className={darkMode ? 'bg-sky-400/10 border-black/30' : 'bg-black/10 border-sky-400/30'}
                  />
                </div>
                
                <div>
                  <label htmlFor="excerpt" className="block text-sm font-medium mb-2">
                    Excerpt *
                  </label>
                  <Textarea
                    id="excerpt"
                    value={formData.excerpt}
                    onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                    placeholder="Enter post excerpt"
                    rows={3}
                    className={darkMode ? 'bg-sky-400/10 border-black/30' : 'bg-black/10 border-sky-400/30'}
                  />
                </div>
                
                <div>
                  <label htmlFor="content" className="block text-sm font-medium mb-2">
                    Content *
                  </label>
                  <Textarea
                    id="content"
                    value={formData.content}
                    onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    placeholder="Enter post content"
                    rows={10}
                    className={darkMode ? 'bg-sky-400/10 border-black/30' : 'bg-black/10 border-sky-400/30'}
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="tags" className="block text-sm font-medium mb-2">
                      Tags (comma separated)
                    </label>
                    <Input
                      id="tags"
                      value={formData.tags}
                      onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                      placeholder="React, JavaScript, Web Development"
                      className={darkMode ? 'bg-sky-400/10 border-black/30' : 'bg-black/10 border-sky-400/30'}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="readTime" className="block text-sm font-medium mb-2">
                      Read Time
                    </label>
                    <Input
                      id="readTime"
                      value={formData.readTime}
                      onChange={(e) => setFormData({ ...formData, readTime: e.target.value })}
                      placeholder="5 min read"
                      className={darkMode ? 'bg-sky-400/10 border-black/30' : 'bg-black/10 border-sky-400/30'}
                    />
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <Button
                    type="submit"
                    className={`${
                      darkMode 
                        ? 'bg-black text-sky-400 hover:bg-gray-800' 
                        : 'bg-sky-400 text-black hover:bg-sky-300'
                    }`}
                  >
                    <i className="fas fa-save mr-2"></i>
                    {editingPost ? 'Update Post' : 'Create Post'}
                  </Button>
                  
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleCancel}
                    className={darkMode ? 'border-black text-black' : 'border-sky-400 text-sky-400'}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </div>
          ) : (
            /* Posts List */
            <div className="space-y-6">
              {posts.length === 0 ? (
                <div className="text-center py-12">
                  <i className="fas fa-file-alt text-4xl mb-4 opacity-50"></i>
                  <h3 className="text-xl font-semibold mb-2">No posts yet</h3>
                  <p className="opacity-75">Create your first blog post to get started.</p>
                </div>
              ) : (
                posts.map((post) => (
                  <div
                    key={post.id}
                    className={`p-6 rounded-lg transition-all duration-300 ${
                      darkMode 
                        ? 'bg-black/20 hover:bg-black/30' 
                        : 'bg-sky-400/20 hover:bg-sky-400/30'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                        <p className="opacity-90 mb-3">{post.excerpt}</p>
                        <div className="flex items-center gap-4 text-sm opacity-75">
                          <span>{post.date}</span>
                          <span>{post.readTime}</span>
                          <div className="flex gap-2">
                            {post.tags.map((tag) => (
                              <span
                                key={tag}
                                className={`px-2 py-1 rounded text-xs ${
                                  darkMode 
                                    ? 'bg-sky-400 text-black' 
                                    : 'bg-black text-sky-400'
                                }`}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleEdit(post)}
                          className={darkMode ? 'border-sky-400 text-sky-400' : 'border-black text-black'}
                        >
                          <i className="fas fa-edit"></i>
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => handleDelete(post.id)}
                          className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                        >
                          <i className="fas fa-trash"></i>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </section>

      <Footer darkMode={darkMode} />
    </div>
  );
};

export default BlogEditor;
