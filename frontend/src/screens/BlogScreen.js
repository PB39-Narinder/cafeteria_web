/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import BlogCard from '../components/BlogCard';
import { createClient } from 'contentful';

const CONTENTFUL_SPACE_ID = 'fypy5qogy93n';
const CONTENTFUL_ACCESS_TOKEN = 'BdRsoOCQ5JVl8mm8Q4jo8Etu8W6_-VU1E6YNOzxNDk0';

const BlogScreen = () => {
  const [blogs, setBlogs] = useState([]);

  const client = createClient({
    space: CONTENTFUL_SPACE_ID,
    accessToken: CONTENTFUL_ACCESS_TOKEN,
  });

  const fetchBlogs = async () => {
    try {
      const entries = await client.getEntries();
      const allBlogs = entries.items;
      setBlogs(allBlogs);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  return (
    <section>
      <div className="section-header">
        <h1>CaféDelight Blog</h1>
      </div>

      <div className="section blogs-center section-center">
        {blogs?.map((blog) => {
          return <BlogCard key={blog.sys.id} blog={blog.fields} />;
        })}
      </div>
    </section>
  );
};

export default BlogScreen;
