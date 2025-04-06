import React from 'react'

const BlogCard = ({blog}) => {
  return (
    <>
      <div  className="bg-white shadow-md rounded-md overflow-hidden hover:shadow-lg transition duration-300">
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{blog.title}</h2>
              <p className="text-gray-600 text-sm">{blog.excerpt}</p>
              <button className="mt-4 inline-block bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300">
                <a href={`/blog/${blog.id}`}>Lire plus</a>
              </button>
            </div>
          </div>
    </>
  )
}

export default BlogCard