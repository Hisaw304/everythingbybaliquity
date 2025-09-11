import React from "react";
import "../assets/style.css";

const DealsSection = () => {
  return (
    <section className="bg-[#FFF9F5] py-16 px-6 flex justify-center">
      <div className="relative max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch deals-grid">
        {/* LEFT - peach card (2/3, taller) */}
        <div className="relative p-8 card-peach overflow-visible md:col-span-2 h-full min-h-[460px]">
          <div className="absolute -top-6 left-6 swirl-icon" aria-hidden />

          <h4 className="text-3xl font-bold text-[#3A2525]">
            Sweet Deals, Fresh Savings
          </h4>

          <p className="mt-4 text-base text-[#6b4f47] max-w-lg">
            Enjoy our daily discounts and seasonal promotions. Because good food
            tastes even better when it’s a great deal!
          </p>

          {/* small outline button */}
          <div className="mt-8">
            <button className="btn-outline">View Offers</button>
          </div>

          {/* cropped, overlapping person image */}
          <img
            src="/images/baker.jpg"
            alt="woman holding cookies"
            className="woman-img"
          />
        </div>

        {/* RIGHT - pale card (1/3, smaller) */}
        <div className="relative p-8 card-pale md:col-span-1 h-full min-h-[320px]">
          <div className="flex justify-between items-start">
            <h4 className="text-lg font-bold text-[#3A2525]">
              10% Off All Cakes (Weekends)
            </h4>
            <div className="location-pill">Paris, France</div>
          </div>

          <p className="mt-3 text-sm text-[#6b4f47]">
            Weekend special on cakes — limited availability. Enjoy fresh flavors
            crafted by our pastry team.
          </p>

          {/* faint pie ornament */}
          <div className="pie-ornament" aria-hidden />

          {/* tags / chips */}
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="tag">Bakery</span>
            <span className="tag">Special</span>
            <span className="tag">Advance</span>
            <span className="tag">Great Vibes</span>
            <span className="tag">Authentic</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealsSection;
