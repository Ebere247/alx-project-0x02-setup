import Card from "@/components/common/Card";
import React from "react";

const Home: React.FC = () => {
  return (
    <div className="p-4">
      <Card
        title="Discover Stays"
        content="Find the best places to stay during your trip."
      />
      <Card
        title="Unique Experiences"
        content="Explore activities hosted by locals around the world."
      />
      <Card
        title="Secure Bookings"
        content="Fast and safe booking with flexible cancellations."
      />
    </div>
  );
};

export default Home;
