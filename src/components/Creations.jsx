// src/components/Creations.jsx
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Keyboard, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../assets/style.css";

import creations from "../data/creationsData";

export default function Creations() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section
      className="relative bg-cream-50 py-16"
      aria-labelledby="creations-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header (STACKED ALWAYS) */}
        <div className="mb-10 text-center">
          <div className="flex justify-center items-center gap-4 mb-4">
            <span className="explore-pill inline-block px-3 py-1 rounded-md bg-[#FCE9D2] text-brown-900 font-semibold shadow-md">
              Explore
            </span>
            <h2
              id="creations-heading"
              className="text-3xl md:text-4xl font-display font-bold text-brown-900"
            >
              Our Delicious Creations
            </h2>
          </div>

          <p className="mx-auto max-w-3xl text-lg md:text-xl text-brown-800 leading-relaxed opacity-90">
            Since our first loaf came out of the oven, we’ve been dedicated to
            bringing you fresh, wholesome, and delicious baked goods — crafted
            with care and meant to be shared.
          </p>
        </div>

        {/* Swiper carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Autoplay, Keyboard, A11y]}
            loop
            spaceBetween={24}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            keyboard={{ enabled: true }}
            breakpoints={{
              320: { slidesPerView: 1.2 },
              640: { slidesPerView: 2.1 },
              1024: { slidesPerView: 3.2 },
              1280: { slidesPerView: 4, spaceBetween: 28 },
            }}
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
            className="creations-swiper"
          >
            {creations.map((item, idx) => (
              <SwiperSlide key={idx}>
                <a
                  href={item.link}
                  className="block rounded-2xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                >
                  {/* Image – original tall feel */}
                  <div className="w-full aspect-w-4 aspect-h-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Title */}
                  <div className="p-4 text-center">
                    <h3 className="text-lg font-semibold text-brown-900">
                      {item.title}
                    </h3>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation arrows */}
          <button
            ref={prevRef}
            className="creations-nav absolute left-0 top-1/2 -translate-y-1/2 -ml-2 md:-ml-4 z-20"
            aria-label="Previous items"
          />
          <button
            ref={nextRef}
            className="creations-nav absolute right-0 top-1/2 -translate-y-1/2 -mr-2 md:-mr-4 z-20"
            aria-label="Next items"
          />
        </div>
      </div>
    </section>
  );
}
