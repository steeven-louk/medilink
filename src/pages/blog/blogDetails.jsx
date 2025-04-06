import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import blogData from '../../data/blogData.json';
import ReactMarkdown from 'react-markdown';

const BlogDetails = () => {
  const { slug } = useParams(); 
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const data = blogData.find((item) => item.id === slug);
    setBlog(data);
  }, [slug]);

  if (!blog) {
    return (
      <div className="text-center mt-10">
        <p>Chargement de l'article...</p>
      </div>
    );
  }

  return (
    <main className="container mx-auto px-4 py-10 max-w-3xl">
      <h1 className="text-3xl font-bold text-center mb-6">{blog.title}</h1>
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-auto rounded-md mb-6"
      />
      <article className="prose prose-lg max-w-none">
        <ReactMarkdown>{blog.content}</ReactMarkdown>
      </article>
    </main>
  );
};

export default BlogDetails;
