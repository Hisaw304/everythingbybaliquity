// Contact.jsx
import React from "react";
import "../assets/style.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const cookieIcon = new L.DivIcon({
  html: "🍪",
  className: "cookie-marker",
  iconSize: [32, 32],
  iconAnchor: [16, 32],
});

export default function Contact() {
  return (
    <section className="bg-[#FFF9F5] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#3A2525]">
            Let’s Bake Something{" "}
            <span className="inline-block">
              <span className="together-pill">Together</span>
            </span>
          </h2>
          <p className="mt-3 text-sm md:text-base text-[#6b4f47]">
            Got a craving, a custom request, or just want to say hello? Reach
            out — we’d love to hear from you.
          </p>
        </div>

        {/* Two-column grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left: Info + Map */}
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
                <p className="contact-text">+33 1 23 45 67 89</p>
              </div>
            </div>
            <div className="contact-box">
              <span className="contact-icon">✉️</span>
              <div>
                <h4 className="contact-title">Email</h4>
                <p className="contact-text">hello@sweetbakery.com</p>
              </div>
            </div>
            <div className="contact-box">
              <span className="contact-icon">🕒</span>
              <div>
                <h4 className="contact-title">Hours</h4>
                <p className="contact-text">Mon–Sat: 8am – 7pm</p>
              </div>
            </div>
            <div className="flex gap-4 mt-6">
              <a href="#" className="social-pill">
                Instagram
              </a>
              <a href="#" className="social-pill">
                Facebook
              </a>
            </div>

            {/* Map Embed */}
            <div className="map-container">
              <MapContainer
                center={[48.8566, 2.3522]} // Paris
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

          {/* Right: Form */}
          <form
            id="contact"
            className="bg-white rounded-2xl shadow-md p-6 md:p-8 space-y-5 contact-form"
          >
            <div className="flex flex-wrap gap-3">
              <button type="button" className="quick-pill">
                Order a Cake 🎂
              </button>
              <button type="button" className="quick-pill">
                Book Catering 🥖
              </button>
              <button type="button" className="quick-pill">
                Ask a Question ❓
              </button>
            </div>

            <div>
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-input"
                placeholder="Your full name"
              />
            </div>
            <div>
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-input"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="form-label">Message</label>
              <textarea
                rows="4"
                className="form-input"
                placeholder="Write your message..."
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
