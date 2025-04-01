import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../../data/blogs';

const BlogPostDetail = () => {
  const { id } = useParams();
  const postId = parseInt(id);
  const post = blogPosts.find((p) => p.id === postId);

  if (!post) {
    return (
      <div className="max-w-7xl mx-auto p-4 text-center">
        <h2 className="text-2xl font-bold text-gray-700 mb-4">Post Not Found</h2>
        <p className="text-gray-500 mb-4">
          Sorry, we couldn’t find the blog post you're looking for.
        </p>
        <Link to="/blog" className="text-orange-500 hover:underline">
          ← Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Header */}
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{post.title}</h1>
        <p className="text-sm text-gray-500">{post.date} | By {post.author}</p>
      </header>

      {/* Content */}
      <section className="bg-white shadow-md rounded-xl p-6 leading-relaxed text-gray-700">
        <p>{post.content || `${post.excerpt} (Full content coming soon.)`}</p>
      </section>

      {/* Back Link */}
      <div className="mt-8 text-center">
        <Link
          to="/blog"
          className="inline-block text-orange-500 hover:underline text-sm font-medium"
        >
          ← Back to Blog
        </Link>
      </div>
    </div>
  );
};

export default BlogPostDetail;
