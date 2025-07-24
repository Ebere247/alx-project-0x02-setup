import React from "react";
import Header from "@/components/layout/Header";

const PostsPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="p-10">
        <h1 className="text-2xl font-bold mb-4">Posts Page</h1>
        <p>This is where user-generated posts will appear.</p>
      </div>
    </>
  );
};

export default PostsPage;
