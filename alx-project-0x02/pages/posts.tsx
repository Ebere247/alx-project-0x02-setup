import React from "react";
import Header from "../components/layout/Header";
import PostCard from "../components/common/PostCard";
import { PostProps } from "../interfaces";

interface PostsPageProps {
  posts: PostProps[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="max-w-3xl mx-auto p-4 space-y-4">
        <h1 className="text-2xl font-bold mb-4">Posts</h1>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            body={post.body}
            userId={post.userId}
            id={post.id}
          />
        ))}
      </main>
    </div>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data: PostProps[] = await res.json();

  return {
    props: {
      posts: data.slice(0, 10),
    },
  };
};

export default PostsPage;
