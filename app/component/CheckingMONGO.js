"use client"
import Link from "next/link";
import { useEffect, useState } from "react";

export default function CheckingMONGO() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log(process.env.NEXT_PUBLIC_API_URL, 'API_URL');
    fetch(process.env.NEXT_PUBLIC_API_URL + '/posts')
      .then((res) => res.json())
      .then((res) => setPosts(res));
  }, []);

  if (posts.length === 0) {
    return (
      <div className="min-h-screen bg-white">
        <p className="font-semibold flex justify-center">Loading</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <Link href={'/post/' + post._id} key={post._id}>
            <div className="border border-black p-4 bg-white">
              <img
                src={post.images}
                alt="Sample"
                className="w-full h-48 object-cover mb-4"
                width={500}  // Set an appropriate width
                height={300} // Set an appropriate height
              />
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p>{post.short_description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
