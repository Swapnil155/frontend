import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AllBlog from '../components/pages/allBlogs/AllBlog'
import BlogDetails from '../components/pages/blogDetails/BlogDetails'

const BlogRouter = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<AllBlog />} />
            <Route path="/Blog-Details" element={<BlogDetails />} />
        </Routes>
    </div>
  )
}

export default BlogRouter 
