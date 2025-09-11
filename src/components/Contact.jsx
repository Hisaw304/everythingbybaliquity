// src/components/Contact.jsx
import React, { useRef, useState, useEffect } from "react";
import "../assets/style.css";
import "leaflet/dist/leaflet.css"; // ensure Leaflet CSS is loaded (ok here or in main.jsx)
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import emailjs from "@emailjs/browser";

/* small emoji icon for marker */
const cookieIcon = L.divIcon({
  html: "🍪",
  className: "cookie-marker",
  iconSize: [36, 36],
  iconAnchor: [18, 36],
});

export default function Contact() {
  const formRef = useRef(null);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // "success" | "error" | null
  const [loading, setLoading] = useState(false);
  const [subject, setSubject] = useState("");

  useEffect(() => {
    if (!status) return;
    const t = setTimeout(() => setStatus(null), 6000); // auto-dismiss after 6s
    return () => clearTimeout(t);
  }, [status]);

  const validateForm = (formData) => {
    const newErrors = {};
    if (!formData.get("user_name")?.trim())
      newErrors.user_name = "Please enter your full name.";
    const email = (formData.get("user_email") || "").trim();
    if (!email) newErrors.user_email = "Please enter your email.";
    else if (!/\S+@\S+\.\S+/.test(email))
      newErrors.user_email = "Please enter a valid email address.";
    if (!formData.get("message")?.trim())
      newErrors.message = "Please write a message.";
    return newErrors;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setErrors({});
    setStatus(null);

    const formEl = formRef.current;
    const formData = new FormData(formEl);

    // ensure subject is included
    if (subject) formData.set("subject", subject);

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // focus first invalid field
      const firstKey = Object.keys(validationErrors)[0];
      formEl.querySelector(`[name="${firstKey}"]`)?.focus();
      return;
    }

    setLoading(true);

    // Replace with your EmailJS values:
    const SERVICE_ID = "your_service_id";
    const TEMPLATE_ID = "your_template_id";
    const PUBLIC_KEY = "your_public_key";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formEl, PUBLIC_KEY).then(
      (response) => {
        setLoading(false);
        setStatus("success");
        formEl.reset();
        setSubject("");
      },
      (err) => {
        setLoading(false);
        setStatus("error");
      }
    );
  };

  const handleQuickPill = (label) => {
    setSubject(label);
    // also update hidden input value if present (react-controlled)
    if (formRef.current) {
      const hidden = formRef.current.querySelector('input[name="subject"]');
      if (hidden) hidden.value = label;
    }
  };

  return (
    <section className="bg-[#FFF9F5] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#3A2525]">
            Let’s Bake Something <span className="together-pill">Together</span>
          </h2>
          <p className="mt-3 text-sm md:text-base text-[#6b4f47]">
            Got a craving, a custom request, or just want to say hello? Reach
            out — we’d love to hear from you.
          </p>
        </div>

        {/* Two-column grid: left=info+map, right=form */}
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* LEFT: Info + Map */}
          <div className="space-y-6">
            <div className="contact-box">
              <span className="contact-icon">📍</span>
              <div>
                <h4 className="contact-title">Visit Us</h4>
                <p className="contact-text">123 Sweet Street, Paris, France</p>
              </div>
            </div>

            <div className="contact-box">
              <span className="contact-icon">📞</span>
              <div>
                <h4 className="contact-title">Call Us</h4>
                <p className="contact-text">+234 810 899-6071</p>
              </div>
            </div>

            <div className="contact-box">
              <span className="contact-icon">✉️</span>
              <div>
                <h4 className="contact-title">Email</h4>
                <p className="contact-text">adamsbalikis57@gmail.com</p>
              </div>
            </div>

            <div className="contact-box">
              <span className="contact-icon">🕒</span>
              <div>
                <h4 className="contact-title">Hours</h4>
                <p className="contact-text">Mon–Sat: 8am – 7pm</p>
              </div>
            </div>

            <div className="flex gap-4 mt-4">
              <a href="#" className="social-pill">
                Instagram
              </a>
              <a href="#" className="social-pill">
                Facebook
              </a>
            </div>

            {/* Map Embed — ensure .map-container has no high z-index in CSS */}
            <div
              className="map-container mt-6"
              style={{ borderRadius: 16, overflow: "hidden" }}
            >
              <MapContainer
                center={[48.8566, 2.3522]}
                zoom={14}
                style={{ height: "250px", width: "100%" }}
              >
                <TileLayer
                  attribution="&copy; OpenStreetMap contributors"
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[48.8566, 2.3522]} icon={cookieIcon}>
                  <Popup>
                    🍪 Sweet Bakery <br /> 123 Sweet Street, Paris
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="bg-white rounded-2xl shadow-md p-6 md:p-8 space-y-5 contact-form relative"
          >
            {/* Quick pills - populate subject */}
            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={() => handleQuickPill("Order a Cake 🎂")}
                className="quick-pill"
              >
                Order a Cake 🎂
              </button>
              <button
                type="button"
                onClick={() => handleQuickPill("Book Catering 🥖")}
                className="quick-pill"
              >
                Book Catering 🥖
              </button>
              <button
                type="button"
                onClick={() => handleQuickPill("Ask a Question ❓")}
                className="quick-pill"
              >
                Ask a Question ❓
              </button>
            </div>

            {/* hidden subject input (populated by pills or user) */}
            <input type="hidden" name="subject" value={subject} />

            <div>
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                id="name"
                name="user_name"
                type="text"
                className={`form-input ${
                  errors.user_name ? "border-red-500" : ""
                }`}
                placeholder="e.g. Marie Curie"
                aria-invalid={!!errors.user_name}
                aria-describedby={errors.user_name ? "error-name" : undefined}
              />
              {errors.user_name && (
                <p id="error-name" className="mt-1 text-sm text-red-600">
                  {errors.user_name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                id="email"
                name="user_email"
                type="email"
                className={`form-input ${
                  errors.user_email ? "border-red-500" : ""
                }`}
                placeholder="e.g. marie@example.com"
                aria-invalid={!!errors.user_email}
                aria-describedby={errors.user_email ? "error-email" : undefined}
              />
              {errors.user_email && (
                <p id="error-email" className="mt-1 text-sm text-red-600">
                  {errors.user_email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className={`form-input ${
                  errors.message ? "border-red-500" : ""
                }`}
                placeholder="Tell us what you’d like baked — date, size, flavours..."
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "error-message" : undefined}
              />
              {errors.message && (
                <p id="error-message" className="mt-1 text-sm text-red-600">
                  {errors.message}
                </p>
              )}
            </div>

            <div className="flex items-center gap-4">
              <button
                type="submit"
                disabled={loading}
                className="submit-btn px-6 py-3"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

              <div className="text-sm text-[#6b4f47]">
                <div>Prefer a quick chat?</div>
                <a
                  href={`https://wa.me/2348108996071?text=Hi%20I%27d%20like%20to%20talk%20about%20an%20order`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Message on WhatsApp
                </a>
              </div>
            </div>

            {/* status banners (polished UI) */}
            {status === "success" && (
              <div
                role="status"
                className="mt-4 p-4 bg-green-50 border border-green-200 text-green-800 rounded-xl shadow-md animate-slide-down flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">✅</span>
                  <div>
                    <div className="font-semibold">Message sent!</div>
                    <div className="text-sm opacity-80">
                      We received your request and will reply shortly.
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setStatus(null)}
                  className="text-sm underline"
                >
                  Dismiss
                </button>
              </div>
            )}

            {status === "error" && (
              <div
                role="alert"
                className="mt-4 p-4 bg-red-50 border border-red-200 text-red-800 rounded-xl shadow-md animate-slide-down flex items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">❌</span>
                  <div>
                    <div className="font-semibold">Failed to send</div>
                    <div className="text-sm opacity-80">
                      Please try again or contact us directly at
                      adamsbalikis57@gmail.com
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setStatus(null)}
                  className="text-sm underline"
                >
                  Dismiss
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
