import React from 'react';
import BlogCard from '../../components/blog-card';
import blogData from "../../data/blogData.json"
const BlogPage = () => {
  const blogs = blogData;

  return (
    <main className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-10 capitalize">nos articles de blog</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </main>
  );
};

export default BlogPage;
