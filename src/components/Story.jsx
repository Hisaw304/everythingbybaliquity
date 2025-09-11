import React from "react";
import "../assets/style.css"; // external CSS for custom tweaks

const Story = () => {
  return (
    <section className="bg-[#FFF9F5] py-16 px-6 text-center">
      {/* Title */}
      <h2 className="text-3xl md:text-4xl font-bold text-brown-900">
        Our Story,{" "}
        <span className="baked-tag inline-block px-3 py-1 mx-1 rounded-md bg-[#FCE9D2] text-brown-900 font-semibold shadow-md">
          Baked
        </span>{" "}
        with Love
      </h2>

      {/* Body */}
      <p className="mt-6 text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
        What started as a small kitchen dream has grown into a warm corner where
        every <span className="emoji">🍞</span> loaf, every{" "}
        <span className="emoji">🥐</span> pastry, and every{" "}
        <span className="emoji">🍰</span> cake carries a story of care. At
        <strong> Everything by Baliquity</strong>, we honor tradition while
        embracing creativity — using time-tested recipes, wholesome{" "}
        <span className="emoji">🧈</span> ingredients, and a touch of passion to
        create baked goods that bring people together.
      </p>
    </section>
  );
};

export default Story;
