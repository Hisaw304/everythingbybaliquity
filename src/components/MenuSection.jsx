import React from "react";
import "../assets/style.css";

const MenuSection = () => {
  // Scroll to contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-[#FFF9F5] py-16 px-6 flex justify-center">
      <div className="bg-[#FECDBE] rounded-2xl shadow-lg p-8 max-w-5xl w-full relative">
        {/* Cookie graphic (top left) */}
        <div className="absolute -top-8 -left-4 cookie-icon"></div>

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-brown-900 mb-8">
          Freshly Baked Goodness for Every{" "}
          <span className="moment-tag inline-block px-3 py-1 rounded-md bg-black text-white font-bold shadow-md">
            Moment
          </span>
        </h2>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Left Column */}
          <div className="space-y-6 text-brown-900">
            <div>
              <h3 className="font-bold">🍞 Breads</h3>
              <p className="text-sm text-gray-700">
                Warm artisan loaves, crusty baguettes, and soft sandwich breads
                — baked daily.
              </p>
            </div>
            <div>
              <h3 className="font-bold">🥐 Pastries</h3>
              <p className="text-sm text-gray-700">
                Flaky croissants, danishes, turnovers, and buttery delights made
                fresh.
              </p>
            </div>
            <div>
              <h3 className="font-bold">🍰 Cakes & Desserts</h3>
              <p className="text-sm text-gray-700">
                Indulge in decadent cakes, muffins, cupcakes, and sweet pastries
                handcrafted with love.
              </p>
            </div>
          </div>

          {/* Center Column (Cupcake image) */}
          <div className="flex justify-center">
            <img
              src="/images/cupcake.png"
              alt="Cupcake"
              className="max-h-72 object-contain"
            />
          </div>

          {/* Right Column */}
          <div className="space-y-6 text-brown-900">
            <div>
              <h3 className="font-bold">☕ Beverages</h3>
              <p className="text-sm text-gray-700">
                Freshly brewed coffee, teas, smoothies, and refreshing juices to
                complement your treats.
              </p>
            </div>
            <div>
              <h3 className="font-bold">👶 Kids' Treats</h3>
              <p className="text-sm text-gray-700">
                Fun-sized cupcakes, mini cookies, and sweet bites perfect for
                little ones.
              </p>
            </div>
            <div>
              <h3 className="font-bold">🌟 Seasonal Specials</h3>
              <p className="text-sm text-gray-700">
                Limited-time baked creations inspired by seasonal flavors and
                fresh ingredients.
              </p>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="text-center mt-10">
          <button
            onClick={scrollToContact}
            className="explore-btn px-6 py-3 rounded-full bg-black text-white font-semibold shadow-md"
          >
            Place an Order
          </button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
