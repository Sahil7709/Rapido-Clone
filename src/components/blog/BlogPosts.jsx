import { Link } from 'react-router-dom';
import { blogPosts } from '../../data/blogs';

const BlogPosts = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {blogPosts.map((post) => (
        <div
          key={post.id}
          className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition duration-300"
        >
          <h3 className="text-lg font-semibold text-gray-800">{post.title}</h3>
          <p className="text-sm text-gray-500 mt-1">{post.date} | {post.author}</p>
          <p className="text-gray-600 mt-2 text-sm">{post.excerpt}</p>
          <Link
            to={`/blog/${post.id}`}
            className="mt-4 inline-block text-orange-500 hover:underline text-sm font-medium"
          >
            Read More →
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogPosts;
