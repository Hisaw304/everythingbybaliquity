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

  const scrollToContact = (e) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="footer relative bg-brown-900 text-cream-50"
      role="contentinfo"
    >
      {/* Wave placed ABOVE footer content */}
      <svg
        className="wave-top"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M0,40 C120,80 360,0 720,40 C1080,80 1320,0 1440,40 L1440 80 L0 80 Z"
          fill="var(--cream-50)"
        />
      </svg>

      {/* main content */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-10 relative overflow-visible">
        <div className="lg:flex lg:items-start lg:gap-8">
          {/* LEFT: decorative cupcake image */}
          <div className="lg:flex-none lg:w-[260px] relative">
            <img
              src="/images/cupcake.png"
              alt=""
              aria-hidden="true"
              className="footer-decor"
              loading="lazy"
            />
          </div>

          {/* RIGHT: links + newsletter */}
          <div className="flex-1">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* LEFT: nav links + contact */}
              <div>
                <h4 className="text-sm font-semibold mb-3 text-cream-50">
                  Navigation
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a className="footer-link" href="/">
                      Home
                    </a>
                  </li>
                  <li>
                    <a className="footer-link" href="/about">
                      About
                    </a>
                  </li>
                  <li>
                    <a className="footer-link" href="/contact">
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      className="footer-link"
                      href="#contact"
                      onClick={scrollToContact}
                    >
                      Place an Order
                    </a>
                  </li>
                </ul>

                <div className="mt-6 text-sm text-cream-50 opacity-90">
                  <p className="mb-1">123 Sweet Street, Ikeja, Lagos</p>
                  <p className="mb-1">Mon - Sat: 7:00 AM — 6:00 PM</p>
                  <a className="footer-link block mt-2" href="tel:+1234567890">
                    +234 810 899-6071
                  </a>
                </div>
              </div>

              {/* RIGHT: newsletter + socials */}
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
                    {/* Instagram Icon */}
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
                    {/* Facebook Icon */}
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
