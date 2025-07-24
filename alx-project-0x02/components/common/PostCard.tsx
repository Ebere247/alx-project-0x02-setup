import React from "react";
import { PostProps } from "../../interfaces";

const PostCard: React.FC<PostProps> = ({ title, body, userId }) => {
  return (
    <div className="border p-4 rounded-md shadow-sm bg-white">
      <h2 className="text-lg font-semibold mb-1">{title}</h2>
      <p className="text-gray-700 mb-2">{body}</p>
      <p className="text-sm text-gray-500">Posted by User {userId}</p>
    </div>
  );
};

export default PostCard;
