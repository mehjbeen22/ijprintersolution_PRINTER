import { blogPosts } from "./blogData";
import { useParams } from "react-router-dom"; // Assuming you use React Router for routing

const BlogDetailPage = () => {
  // Using useParams to get the dynamic parameter (blog post id) from the URL
  const { blogID } = useParams();

  // Finding the specific blog post based on postId
  const post = blogPosts.find((post) => post.id === parseInt(blogID));

  // If the post is not found, you can handle it here (e.g., show a 404 page or redirect)
  if (!post) {
    return <div>Post not found</div>; // Example fallback if post is not found
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <img
        src={post.image}
        alt={post.title}
        className="mb-4 rounded-lg shadow-md w-full h-80 object-cover"
      />
      <h2 className="text-3xl font-bold mb-2">{post.title}</h2>
      <p className="text-gray-600 mb-2">{post.date}</p>
      <p className="text-gray-700 mb-4">{post.category}</p>
      <div className="space-y-4">
        {post.content.map((line, idx) => (
          <p key={idx} className="text-gray-700">
            {line}
          </p>
        ))}
      </div>
    </div>
  );
};

export default BlogDetailPage;
