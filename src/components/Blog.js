"use client";
// import BlogPopup from "./popup/BlogPopup";
import Link from "next/link";
import { getAllBlogs } from "../lib/blog";
import { useEffect, useState } from "react";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const getBlogs = async () => {
      const data = await getAllBlogs();
      setBlogs(data);
    };
    getBlogs();
  }, []);

  return (
    <>
      {/* <BlogPopup open={open} close={() => setOpen(false)} data={activeData} /> */}
      <div className='orido_tm_section' id='blog'>
        <div className='orido_tm_news'>
          <div className='container'>
            <div className='orido_tm_main_title'>
              <h3>
                <span>
                  From my
                  <br />
                  blog post
                </span>
              </h3>
            </div>
            <div className='news_list'>
              <ul>
                {blogs?.map((blog, i) => (
                  <li key={i}>
                    <div className='list_inner'>
                      <div className='left'>
                        <div className='metabox'>
                          <ul>
                            <li>
                              <span>
                                <a className='c-pointer'>{blog.data.author}</a>
                              </span>
                            </li>
                            <li>
                              <span>{blog.data.date}</span>
                            </li>
                          </ul>
                        </div>
                        <div className='title'>
                          <h3>
                            <a className='c-pointer'>{blog.data.title}</a>
                          </h3>
                        </div>
                        <div className='orido_tm_simple_button'>
                          <Link
                            className='line_effect c-pointer'
                            href={`blogs/${blog.slug}`}
                          >
                            Read More{" "}
                            <img
                              className='svg'
                              src='img/svg/top-arrow.svg'
                              alt=''
                            />
                          </Link>
                        </div>
                      </div>
                      <div className='right'>
                        <img src='img/thumbs/24-20.jpg' alt='' />
                        <div
                          className='main'
                          data-img-url={blog.data.image}
                          style={{ backgroundImage: `url(${blog.data.image})` }}
                        />
                        <a className='orido_tm_full_link c-pointer' />
                      </div>
                      <span className='shape'>
                        <img
                          className='svg'
                          src='img/svg/Intersect.svg'
                          alt=''
                        />
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Blog;
