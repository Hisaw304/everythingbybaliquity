// Testimonials.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules"; // ✅ Autoplay added

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "../assets/style.css"; // <-- add the CSS snippet below into your style.css

const TESTIMONIALS = [
  {
    name: "Emma Johnson",
    quote:
      "Absolutely the best bakery in town. The sourdough crust is perfect — we make it a weekend ritual.",
    tag: "Regular Customer",
    rating: 5,
  },
  {
    name: "Michael Lee",
    quote:
      "The anniversary cake was jaw-dropping — taste and presentation were flawless. Highly recommended.",
    tag: "Cake Lover",
    rating: 5,
  },
  {
    name: "Sophia Martinez",
    quote:
      "Warm staff, consistent quality, and pastries that taste handcrafted. I feel welcomed every visit.",
    tag: "Local",
    rating: 5,
  },
  {
    name: "Daniel Okafor",
    quote:
      "Amazing coffee and fresh croissants. The perfect place for a productive morning.",
    tag: "Remote Worker",
    rating: 5,
  },
  {
    name: "Aisha Bello",
    quote:
      "Ordered a custom cake — it arrived on time and tasted even better than imagined.",
    tag: "Event Planner",
    rating: 5,
  },
  {
    name: "Liam Carter",
    quote:
      "High-quality ingredients and obvious care in every bite. My go-to for special treats.",
    tag: "Foodie",
    rating: 5,
  },
  {
    name: "Olivia Brown",
    quote:
      "Friendly service and delicious seasonal specials. Always something new to try!",
    tag: "Explorer",
    rating: 5,
  },
  {
    name: "Noah Wilson",
    quote:
      "Great value and exceptional flavors. Their cookies are consistently the best I’ve had.",
    tag: "Cookie Fan",
    rating: 5,
  },
  {
    name: "Chloe Nguyen",
    quote:
      "Beautiful, fresh pastries. I ordered a box for a meeting and everyone loved them.",
    tag: "Office Hero",
    rating: 5,
  },
  {
    name: "Ethan Adams",
    quote:
      "The baking team really knows their craft — small details and big flavor.",
    tag: "Baker's Friend",
    rating: 5,
  },
];

const StarRow = ({ rating = 5 }) => {
  const stars = Array.from({ length: 5 }).map((_, i) => (
    <svg
      key={i}
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill={i < rating ? "#F6C84C" : "none"}
      stroke="#D8B15A"
      strokeWidth="0.6"
      className="inline-block"
      aria-hidden
    >
      <path d="M12 .587l3.668 7.431L23.4 9.75l-5.7 5.56L19.335 24 12 19.897 4.665 24l1.636-8.69L.6 9.75l7.732-1.732z" />
    </svg>
  ));
  return <div className="flex gap-1">{stars}</div>;
};

export default function Testimonials() {
  return (
    <section className="bg-[#FFF9F5] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#3A2525]">
            Sweet Words from Our{" "}
            <span className="inline-block align-middle">
              <span className="explore-pill inline-block px-3 py-1 rounded-md bg-[#FCE9D2] text-brown-900 font-semibold shadow-md">
                Clients
              </span>
            </span>
          </h2>
          <p className="mt-3 text-sm md:text-base text-[#6b4f47]">
            Because every crumb tells a story worth sharing.
          </p>
        </div>

        {/* Swiper */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={24}
            navigation
            pagination={{ clickable: true }}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            a11y={{ enabled: true }}
            aria-label="Client testimonials"
            loop={true}
          >
            {TESTIMONIALS.map((t, i) => (
              <SwiperSlide key={i}>
                <article className="testimonial-card bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-xl transition-all duration-200">
                  {/* name pill moved inside padding so it’s not clipped */}
                  <div className="client-name-pill mb-3">{t.name}</div>

                  {/* avatar + name */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="avatar-initials">
                      {t.name
                        .split(" ")
                        .map((s) => s[0])
                        .slice(0, 2)
                        .join("")
                        .toUpperCase()}
                    </div>

                    <div>
                      <div className="text-sm font-semibold text-[#3A2525]">
                        {t.name}
                      </div>
                      <div className="text-xs text-[#9b7b70]">{t.tag}</div>
                    </div>
                  </div>

                  {/* quote */}
                  <p className="text-[#6b4f4a] leading-relaxed text-sm md:text-base mb-4">
                    “{t.quote}”
                  </p>

                  {/* rating */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <StarRow rating={t.rating} />
                      <span className="text-xs text-[#9b7b70]">5.0</span>
                    </div>
                    <div className="quote-ornament" aria-hidden />
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Note: Swiper will render prev/next buttons with classes
              .swiper-button-prev and .swiper-button-next.
              These are styled in the CSS snippet below.
          */}
        </div>
      </div>
    </section>
  );
}
