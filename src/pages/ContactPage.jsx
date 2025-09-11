import React, { useState } from "react";
import Contact from "../components/Contact";
import FloatingActions from "../components/FloatingActions";

const faqs = [
  {
    q: "Do you deliver custom cakes?",
    a: "Yes, we deliver custom cakes within the city. For outside areas, please contact us for details.",
  },
  {
    q: "How far in advance should I order?",
    a: "We recommend at least 48 hours for custom cakes. For catering, one week in advance is ideal.",
  },
  {
    q: "Do you offer same-day pickup?",
    a: "Yes, we keep a selection of fresh cakes and pastries available daily for same-day pickup.",
  },
  {
    q: "Can you handle large corporate catering?",
    a: "Absolutely! We’ve catered events up to 500+ guests. Just share your requirements with us.",
  },
];

export default function ContactPage() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <main className="bg-[#FFF9F5]">
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#3A2525] mb-4">
          Get in <span className="together-pill">Touch</span>
        </h1>
        <p className="max-w-2xl mx-auto text-[#6b4f47] text-lg">
          Whether you’re planning a celebration, need catering, or just want to
          say hello — we’d love to hear from you.
        </p>
      </section>

      {/* Contact Section */}
      <Contact />

      {/* FAQ Section */}
      <section className="py-20 px-6 max-w-4xl mx-auto">
        <h2 className="text-center text-3xl font-bold text-[#3A2525] mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-[#E5D4C7] rounded-lg shadow-md overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-[#3A2525] focus:outline-none"
              >
                {faq.q}
                <span
                  className={`transform transition-transform ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  ▼
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-[#6b4f47]">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-20 px-6 text-center bg-[#FCE9D2]">
        <h2 className="text-2xl md:text-3xl font-bold text-[#3A2525] mb-4">
          Ready to Bake Something Special?
        </h2>
        <p className="text-[#6b4f47] mb-6 max-w-xl mx-auto">
          Drop us a message or visit us in-store — let’s make your sweet ideas
          come true.
        </p>
        <a
          href="tel:+33123456789"
          className="submit-btn inline-block px-6 py-3"
        >
          Call Us Now
        </a>
        <FloatingActions />
      </section>
    </main>
  );
}
