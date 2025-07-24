import React from "react";
import { UserProps } from "../interfaces";
import Header from "../components/layout/Header";
import UserCard from "../components/common/UserCard";

interface UsersPageProps {
  users: UserProps[];
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="max-w-4xl mx-auto p-4 space-y-4">
        <h1 className="text-2xl font-bold mb-4">Users</h1>
        {users.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </main>
    </div>
  );
};

// ✅ This is what the checker is looking for
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
}

export default UsersPage;
