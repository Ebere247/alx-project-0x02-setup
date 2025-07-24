// components/common/UserCard.tsx
import React from "react";
import { UserProps } from "../../interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="bg-white shadow rounded-lg p-4 border">
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-sm text-gray-700">{email}</p>
      <p className="text-sm text-gray-500">
        {address.street}, {address.suite}, {address.city}, {address.zipcode}
      </p>
    </div>
  );
};

export default UserCard;
