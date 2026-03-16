import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { usePageMetadata } from '../hooks/usePageMetadata';
import { useNavigate, useParams } from 'react-router-dom';
import LazyImage from '../components/LazyImage';
import Footer from '../components/Footer';

function BlogPost({ post, onContactClick }) {
  const { t } = useLanguage();
  
  // Create BlogPosting schema for the individual blog post
  const blogPostSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.content.split('\n\n')[0].substring(0, 160) + '...',
    "image": {
      "@type": "ImageObject",
      "url": post.image,
      "description": post.imageAlt
    },
    "author": {
      "@type": "Person",
      "name": post.author,
      "url": "https://kibrueder.de"
    },
    "publisher": {
      "@type": "Organization",
      "name": "KI Brueder",
      "url": "https://kibrueder.de",
      "@id": "https://kibrueder.de/#organization"
    },
    "datePublished": new Date(post.date).toISOString(),
    "dateModified": new Date(post.date).toISOString(),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://kibrueder.de/blog/${post.id}`
    },
    "url": `https://kibrueder.de/blog/${post.id}`,
    "wordCount": post.content.split(' ').length,
    "articleBody": post.content,
    "keywords": ["AI automation", "business growth", "lead generation", "productivity"],
    "inLanguage": post.id === 'do-less' || post.id === 'beat-any-ad' ? "en" : "de",
    "about": {
      "@type": "Thing",
      "name": "AI Business Automation"
    }
  };

  // Set dynamic metadata for individual blog posts
  usePageMetadata({
    title: `${post.title} | ${t('seo.blog.title')}`,
    description: post.content.split('\n\n')[0].substring(0, 160) + '...',
    schema: blogPostSchema
  });
  
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-32">
      {/* Cover Image */}
      <LazyImage
        src={post.image}
        alt={post.imageAlt}
        className="w-full h-[400px] object-cover rounded-2xl mb-8"
        placeholder="Loading image..."
      />

      {/* Blog Header */}
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {post.title}
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 mb-4">
          <span>{post.author}</span>
          <span>•</span>
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>
      </div>

      {/* Blog Content */}
      <div className="prose dark:prose-invert max-w-none">
        {post.content.split('\n\n').map((paragraph, index) => (
          <p key={index} className="mb-6 text-lg leading-relaxed">
            {paragraph}
          </p>
        ))}

        {/* Contact Button - Only show for "Do Less" blog */}
        {post.id === 'do-less' && (
          <div className="mt-12 mb-8">
            <button
              onClick={onContactClick}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all w-full sm:w-auto text-lg"
            >
              {t('blog.contactButton')}
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

function BlogList({ posts, onReadMore }) {
  const { t } = useLanguage();
  
  // Set metadata for blog list page
  usePageMetadata({
    title: t('seo.blog.title'),
    description: t('seo.blog.description')
  });
  
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-32">
      <h1 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        {t('blog.title')}
      </h1>
      <div className="grid md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <div 
            key={post.id} 
            onClick={() => onReadMore(post.id)}
            className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-yellow-500/50 dark:hover:border-yellow-500/50 transition-all duration-300 cursor-pointer hover:shadow-[0_0_30px_rgba(234,179,8,0.2)] dark:hover:shadow-[0_0_30px_rgba(234,179,8,0.1)] relative"
          >
            {/* Hover gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/[0.05] to-orange-500/[0.05] dark:from-yellow-500/[0.02] dark:to-orange-500/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <LazyImage
              src={post.image}
              alt={post.imageAlt}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              placeholder="Loading..."
            />
            <div className="p-6 relative">
              <h2 className="text-2xl font-bold mb-2 group-hover:text-yellow-500 dark:group-hover:text-yellow-400 transition-colors duration-300">{post.title}</h2>
              <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 text-sm mb-4">
                <span>{post.author}</span>
                <span>•</span>
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
              <p className="text-gray-600 dark:text-gray-400 mb-6 group-hover:text-gray-900 dark:group-hover:text-gray-200 transition-colors duration-300">
                {post.content.split('\n\n')[0]}
              </p>
              <div className="text-yellow-600 dark:text-yellow-400 hover:text-yellow-700 dark:hover:text-yellow-300 font-semibold inline-flex items-center gap-2 transition-all group-hover:gap-3">
                {t('blog.readMore')} →
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

function BlogPage() {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { postId } = useParams();
  const posts = t('blog.posts');

  const handleContactClick = () => {
    navigate('/contact');
  };

  const handleReadMore = (id: string) => {
    navigate(`/blog/${id}`);
  };

  if (postId) {
    const post = posts.find(p => p.id === postId);
    if (!post) {
      navigate('/blog');
      return null;
    }
    return <BlogPost post={post} onContactClick={handleContactClick} />;
  }

  return <BlogList posts={posts} onReadMore={handleReadMore} />;
}

export default BlogPage;