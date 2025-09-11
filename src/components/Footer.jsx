import React, { useRef, useState } from "react";
import "../assets/style.css"; // ensure your global variables exist here

export default function Footer() {
  const [status, setStatus] = useState({ state: "idle", msg: "" });
  const statusRef = useRef(null);

  async function handleSubscribe(e) {
    e.preventDefault();
    const form = e.target;
    const email = (form.email?.value || "").trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({ state: "error", msg: "Please enter a valid email address." });
      statusRef.current?.focus();
      return;
    }
    setStatus({ state: "loading", msg: "Subscribing..." });
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Subscription failed");
      setStatus({ state: "success", msg: "Thanks — you’re subscribed!" });
      statusRef.current?.focus();
      form.reset();
    } catch (err) {
      setStatus({
        state: "error",
        msg: "Subscription failed. Try again later.",
      });
      statusRef.current?.focus();
    }
  }

  return (
    <footer
      className="footer relative bg-brown-900 text-cream-50"
      role="contentinfo"
    >
      {/* Wave placed ABOVE footer content, rotated so it faces UP and visually overlaps the top edge */}
      <svg
        className="wave-top"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
        focusable="false"
      >
        {/* fill is cream so the wave appears as the cream area carving into the brown footer */}
        <path
          d="M0,40 C120,80 360,0 720,40 C1080,80 1320,0 1440,40 L1440 80 L0 80 Z"
          fill="var(--cream-50)"
        />
      </svg>

      {/* main content container - add top padding so content sits below the wave */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10 relative overflow-visible">
        <div className="lg:flex lg:items-start lg:gap-8">
          {/* LEFT: decorative cupcake image (absolute positioned but visible on all breakpoints) */}
          <div className="lg:flex-none lg:w-[260px] relative">
            <img
              src="/images/cupcake.png"
              alt="" // decorative — left blank for screen readers
              aria-hidden="true"
              className="footer-decor"
              loading="lazy"
            />
          </div>

          {/* RIGHT: the two-column info area (stacked on small screens) */}
          <div className="flex-1">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* LEFT of right area: links + contact */}
              <div>
                <div className="flex flex-col md:flex-row md:gap-10">
                  <div className="mb-6 md:mb-0">
                    <h4 className="text-sm font-semibold mb-3 text-cream-50">
                      Company
                    </h4>
                    <ul className="space-y-2">
                      <li>
                        <a className="footer-link" href="/about">
                          About
                        </a>
                      </li>
                      <li>
                        <a className="footer-link" href="/careers">
                          Careers
                        </a>
                      </li>
                      <li>
                        <a className="footer-link" href="/contact">
                          Contact
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold mb-3 text-cream-50">
                      Menu
                    </h4>
                    <ul className="space-y-2">
                      <li>
                        <a className="footer-link" href="/menu">
                          Our Menu
                        </a>
                      </li>
                      <li>
                        <a className="footer-link" href="/specials">
                          Specials
                        </a>
                      </li>
                      <li>
                        <a className="footer-link" href="/catering">
                          Catering
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-6 text-sm text-cream-50 opacity-90">
                  <p className="mb-1">123 Baker Street, Sweet Town</p>
                  <p className="mb-1">Mon - Sat: 7:00 AM — 6:00 PM</p>
                  <a className="footer-link block mt-2" href="tel:+1234567890">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              {/* RIGHT of right area: newsletter, socials, small links */}
              <div>
                <h4
                  id="newsletter-heading"
                  className="text-sm font-semibold mb-3 text-cream-50"
                >
                  Join our newsletter
                </h4>

                <form
                  onSubmit={handleSubscribe}
                  aria-labelledby="newsletter-heading"
                  noValidate
                >
                  <label htmlFor="footer-email" className="sr-only">
                    Email address
                  </label>
                  <div className="flex gap-3">
                    <input
                      id="footer-email"
                      name="email"
                      type="email"
                      placeholder="you@domain.com"
                      className="footer-input flex-1"
                      aria-describedby="newsletter-desc newsletter-error"
                      required
                    />
                    <button type="submit" className="footer-cta">
                      Subscribe
                    </button>
                  </div>

                  <p
                    id="newsletter-desc"
                    className="text-xs mt-2 text-brown-700 opacity-80"
                  >
                    Get weekly specials and recipes.
                  </p>

                  <div
                    id="newsletter-error"
                    role={status.state === "error" ? "alert" : "status"}
                    tabIndex={-1}
                    ref={statusRef}
                    className="mt-2 text-sm"
                  >
                    {status.state === "success" && (
                      <span className="text-brand-yellow">{status.msg}</span>
                    )}
                    {status.state === "error" && (
                      <span className="text-red-300">{status.msg}</span>
                    )}
                    {status.state === "loading" && (
                      <span className="text-cream-50 opacity-80">
                        {status.msg}
                      </span>
                    )}
                  </div>
                </form>

                <div className="mt-6 flex items-center gap-4">
                  <a
                    href="https://instagram.com"
                    className="p-2 rounded-full bg-brown-800 hover:bg-brand-yellow"
                    aria-label="Instagram"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="4" />
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                      <path d="M17.5 6.5h.01" />
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com"
                    className="p-2 rounded-full bg-brown-800 hover:bg-brand-yellow"
                    aria-label="Facebook"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path d="M18 2h-3a4 4 0 00-4 4v3H8v3h3v8h3v-8h2.5l.5-3H14V6a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                </div>

                <div className="mt-6 text-xs text-brown-700 opacity-80">
                  <a className="footer-link block" href="/help">
                    Help Center
                  </a>
                  <a className="footer-link block mt-1" href="/shipping">
                    Shipping & Returns
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bottom centered brand / legal strip */}
      <div className="border-t border-brown-800/30">
        <div className="max-w-7xl mx-auto px-6 py-4 text-sm text-cream-50 text-center">
          <span className="font-semibold">Everything By Baliquity</span> — Baked
          fresh every day © {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}
