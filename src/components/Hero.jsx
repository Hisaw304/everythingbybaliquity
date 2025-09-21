import React, { useEffect, useState } from "react";
import "../assets/style.css";

export default function Hero({
  headline = 'Freshly <span class="hero-highlight">Baked</span> Goodness, Every Day',
  subText = "Fresh breads, flaky pastries, and decadent cakes — all handcrafted daily.",
  ctaLabel = "Order Now",
  contact = {
    email: "adamsbalikis57@gmail.com",
    location: "123 Ocean Ave, Seattle",
  },
  heroImages = [
    "/images/hero.jpg",
    "/images/hero2.jpg",
    "/images/hero3.jpg",
    "/images/hero4.jpg",
    "/images/hero5.jpg",
    "/images/hero6.jpg",
    "/images/hero7.jpg",
    "/images/hero8.jpg",
    "/images/hero9.jpg",
    "/images/hero10.jpg",
    "/images/hero11.jpg",
    "/images/hero12.jpg",
  ], // multiple hero images
  imgWidth = 1200,
  imgHeight = 900,
  alt = "stacked chocolate cookies on a plate",
  interval = 5000, // 5 seconds per image
}) {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Detect prefers-reduced-motion
  useEffect(() => {
    if (typeof window !== "undefined" && "matchMedia" in window) {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      setReduceMotion(mq.matches);
      const handler = () => setReduceMotion(mq.matches);
      mq.addEventListener
        ? mq.addEventListener("change", handler)
        : mq.addListener(handler);
      return () =>
        mq.removeEventListener
          ? mq.removeEventListener("change", handler)
          : mq.removeListener(handler);
    }
  }, []);

  // Rotate images
  useEffect(() => {
    const timer = setInterval(() => {
      setImgLoaded(false); // fade out
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % heroImages.length);
      }, 400); // allow fade-out before switching
    }, interval);
    return () => clearInterval(timer);
  }, [heroImages.length, interval]);

  // Scroll to contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "var(--brown-900)", color: "var(--cream-50)" }}
      aria-label="Homepage hero"
    >
      {/* Decorative sticker: top-right */}
      <img
        src="/images/sticker-cookie-topright.png"
        alt=""
        aria-hidden="true"
        className="hidden md:block absolute top-6 right-8 w-16 h-16 opacity-80 pointer-events-none sticker-topright"
      />

      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-20 lg:grid lg:grid-cols-12 lg:items-start lg:gap-6">
        {/* Left contact (lg+) */}
        <div className="hidden lg:block lg:col-span-2">
          <div
            className="text-sm leading-tight"
            style={{ color: "var(--cream-50)" }}
          >
            <div className="font-medium">{contact.email}</div>
            <div className="mt-2 text-xs opacity-90">{contact.location}</div>
          </div>
        </div>

        {/* Main center area (heading + overlapping cookie) */}
        <div className="col-span-8 relative">
          {/* Large heading */}
          <div className="relative z-40">
            <h1
              className="font-display font-extrabold leading-tight tracking-tight text-4xl md:text-5xl lg:text-6xl"
              style={{ color: "var(--cream-50)" }}
              dangerouslySetInnerHTML={{ __html: headline }}
            />
          </div>

          {/* Cookie image container */}
          <div
            className="relative w-full flex justify-center pointer-events-none"
            aria-hidden="false"
            style={{ marginTop: "1.25rem", height: "420px" }}
          >
            <div
              style={{
                left: "50%",
                transform: "translate(-50%, 12%)",
                position: "absolute",
                bottom: "0",
                maxWidth: "560px",
                width: "90%",
              }}
              className="overflow-hidden"
            >
              <img
                key={currentIndex} // force re-render on change
                src={heroImages[currentIndex]}
                alt={alt}
                width={imgWidth}
                height={imgHeight}
                loading="eager"
                className={`w-full h-auto object-contain ${
                  !reduceMotion ? "animate-float" : ""
                } transition-opacity duration-700 ease-out ${
                  imgLoaded ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => setImgLoaded(true)}
              />
            </div>
          </div>
        </div>

        {/* Right short copy + CTA */}
        <div className="col-span-2 mt-6 lg:mt-0 lg:pl-6">
          <div className="max-w-xs text-sm md:text-base">
            <p className="text-cream-50 opacity-95">{subText}</p>
            {/* wrapper + glow element + CTA button */}
            <div className="btn-glow-wrap" aria-hidden={false}>
              <span className="btn-glow" aria-hidden="true"></span>
              <button
                onClick={scrollToContact}
                aria-label={ctaLabel}
                className="relative z-10 inline-block mt-4 rounded-full px-6 py-3 font-semibold text-[#3a2526] bg-yellow-400 hover:bg-yellow-500 focus-visible:ring-0 focus:outline-none shadow-lg"
              >
                {ctaLabel}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <WaveDivider fill="var(--cream-50)" className="w-full" />

      {/* Decorative sticker bottom-left */}
      <img
        src="/images/sticker-cookie-bottomleft.png"
        alt=""
        aria-hidden="true"
        className="absolute left-6 bottom-[6px] w-28 h-28 pointer-events-none sticker-bottomleft"
      />

      {/* Screen reader announcement */}
      <div className="sr-only" aria-live="polite">
        {`Hero loaded: ${headline.replace(/<[^>]+>/g, " ")}`}
      </div>
    </section>
  );
}

/* WaveDivider Component */
export function WaveDivider({ fill = "#f9f2ec", className = "" }) {
  return (
    <div
      className={`relative -mt-1 pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 80"
        width="100%"
        height="80"
        preserveAspectRatio="none"
        className="wave-svg"
      >
        <path
          d="M0,40 C120,80 360,0 720,40 C1080,80 1320,0 1440,40 L1440 80 L0 80 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
