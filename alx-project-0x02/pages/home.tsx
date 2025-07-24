import React, { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import Header from "@/components/layout/Header";

const HomePage: React.FC = () => {
  const [cards, setCards] = useState([
    {
      title: "Discover Stays",
      content: "Find the best places to stay during your trip.",
    },
    {
      title: "Unique Experiences",
      content: "Explore activities hosted by locals around the world.",
    },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddCard = (title: string, content: string) => {
    setCards([...cards, { title, content }]);
  };

  return (
    <>
      <Header />
      <div className="p-8">
        <button
          onClick={() => setIsModalOpen(true)}
          className="mb-6 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add Post
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <Card key={index} title={card.title} content={card.content} />
          ))}
        </div>

        <PostModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddCard}
        />
      </div>
    </>
  );
};

export default HomePage;
