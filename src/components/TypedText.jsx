// TypedText.jsx
import React from "react";
import { ReactTyped as Typed } from "react-typed";
import typedPhrases from "../data/typedPhrases";
import "../assets/style.css";

export default function TypedText({ speed = 80, backSpeed = 40, loop = true }) {
  return (
    <section className="bg-[#FFF9F5] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-[#3A2525] mb-4">
          If you are looking for a baker near{" "}
          <span className="text-[#D77A61] font-semibold">
            <Typed
              strings={typedPhrases.locations}
              typeSpeed={speed}
              backSpeed={backSpeed}
              loop={loop}
            />
          </span>
        </h2>

        <h2 className="text-center text-2xl md:text-3xl font-bold text-[#3A2525] mt-12">
          Or if you are{" "}
          <span className="pill-rotate rounded-md">
            <Typed
              strings={typedPhrases.events}
              typeSpeed={speed}
              backSpeed={backSpeed}
              loop={loop}
            />
          </span>
        </h2>

        {/* Paragraph — EXACT match with Story */}
        <p className="mt-6 text-lg md:text-xl text-gray-700 leading-relaxed text-start">
          Wherever you are, and whatever the occasion, we’re ready to bake
          something unforgettable for you — from intimate celebrations to grand
          milestones. With every order, we bring thoughtful flavors, handcrafted
          detail, and a genuine love for baking, so each bite feels personal,
          memorable, and made just for you.
        </p>
      </div>
    </section>
  );
}
