import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Link from 'next/link';

import { getRecentPosts, getSimilarPosts } from '../services';
import Image from 'next/image';

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([]);

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) =>
        setRelatedPosts(result)
      );
    } else {
      getRecentPosts().then((result) => setRelatedPosts(result));
    }
  }, [slug]);

  // console.log(relatedPosts);
  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4">
        {slug ? 'Related Posts' : 'Recent Posts'}
      </h3>
      {relatedPosts.map((post, index) => (
        <div key={index} className="flex items-center w-full mb-4">
          <div className="w-35 flex-none ">
            <Link href={`/post/${post.slug}`}>
              <Image
                unoptimized
                alt={post.title}
                height="100px"
                width="100px"
                className="align-middle rounded-md object-cover cursor-pointer"
                src={post.featuredimage.url}
              />
            </Link>
          </div>
          <div className="flex-grow ml-4">
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-xs text-[12px] font-semibold text-cyan-500 cursor-pointer">
              {post.categories.map((category) => (
                <Link key={index} href={`/category/${category.slug}`}>
                  <span>{category.name}</span>
                </Link>
              ))}
            </p>
            {/* {console.log(post)} */}
            <p className="font-semibold hover:text-sky-600 hover:underline underline-offset-1 ">
              <Link href={`/post/${post.slug}`} className="text-md" key={index}>
                {post.title}
              </Link>
            </p>
            <p className="text-left text-sm text-gray-700 font-normal px-2 lg:px-0 mb-2">
              {post.excerpt.length >= 80
                ? post.excerpt.substring(0, 80) + '...'
                : post.excerpt}
            </p>
            <p className="text-gray-500 font-xs text-[12px]">
              {moment(post.createdAt).format('MMM DD, YYYY')}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostWidget;
