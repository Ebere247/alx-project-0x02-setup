import React from "react";
import Button from "@/components/common/Button";
import Header from "@/components/layout/Header";

const AboutPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="p-10 space-y-4">
        <h1 className="text-2xl font-bold mb-4">About Us</h1>

        <div className="flex gap-4 flex-wrap">
          <Button label="Small Rounded-sm" size="small" shape="rounded-sm" />
          <Button label="Medium Rounded-md" size="medium" shape="rounded-md" />
          <Button
            label="Large Rounded-full"
            size="large"
            shape="rounded-full"
          />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
