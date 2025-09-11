import React from "react";
import "../assets/style.css";

const PassionSection = () => {
  return (
    <section className="bg-[#FFF9F5] py-16 px-6 flex justify-center">
      <div className="relative max-w-6xl w-full flex flex-col md:flex-row items-center p-10 overflow-visible card-hero">
        {/* LEFT - Bigger baker image */}
        <div className="relative w-full md:w-2/3 flex justify-center md:justify-start">
          <div className="img-frame-large pop-out">
            <img
              src="/images/woman-cookie.png"
              alt="baker at work"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT - Text content */}
        <div className="w-full md:w-1/3 md:pl-10 mt-8 md:mt-0 text-white z-10">
          <h3 className="text-3xl md:text-4xl font-extrabold leading-tight">
            Baking with Passion & Purpose
          </h3>

          <p className="mt-4 text-base md:text-lg leading-relaxed text-[#E6DCDC]">
            That’s why every loaf, pastry, and cake we create is made with care,
            using time-honored recipes and wholesome ingredients. For us, baking
            is not just about taste — it’s about creating moments of joy and
            comfort that last beyond the last bite.
          </p>

          <button className="mt-6 inline-flex items-center gap-2 book-btn">
            <span className="px-6 py-3 rounded-full inline-block text-base font-semibold">
              Book a table
            </span>
          </button>
        </div>

        {/* TOP-RIGHT swirl sticker */}
        <div className="absolute -top-6 right-6 swirl-icon" aria-hidden />

        {/* BOTTOM-RIGHT faint leaf ornament */}
        <div
          className="absolute -right-10 bottom-6 leaf-ornament"
          aria-hidden
        />
      </div>
    </section>
  );
};

export default PassionSection;
