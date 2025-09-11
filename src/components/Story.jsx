import React from "react";
import "../assets/style.css"; // your external CSS for custom tweaks

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
        Since our first loaf <span className="emoji">🍞</span> came out of the
        oven, <span className="emoji">🍥</span> we’ve been dedicated to bringing
        you fresh, wholesome, and delicious baked goods. Every recipe is made{" "}
        <span className="emoji">🥖</span> from scratch using premium{" "}
        <span className="emoji">🧈</span> ingredients and lots of love.
      </p>
    </section>
  );
};

export default Story;
