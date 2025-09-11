// TypedText.jsx
import React from "react";
import { ReactTyped as Typed } from "react-typed";
import typedPhrases from "../data/typedPhrases";
import "../assets/style.css";

export default function TypedText({ speed = 80, backSpeed = 40, loop = true }) {
  return (
    <section className="py-20 text-center bg-[#FFF9F5]">
      <h2 className="text-2xl md:text-3xl font-bold text-[#3A2525] mb-4">
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

      <h2 className="text-2xl md:text-3xl font-bold text-[#3A2525] mt-12">
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

      <p className="text-[#6b4f47] max-w-xl mx-auto mt-6">
        Wherever you are, and whatever the occasion, we’re ready to bake
        something unforgettable for you.
      </p>
    </section>
  );
}
