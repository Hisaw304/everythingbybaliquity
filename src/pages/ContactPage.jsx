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
    <main className="bg-[#FFF9F5] w-full">
      {/* Hero */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#3A2525] mb-6">
            Get in{" "}
            <span className="explore-pill inline-block px-3 py-1 rounded-md bg-[#FCE9D2] text-brown-900 font-semibold shadow-md">
              Touch
            </span>
          </h1>
          <p className="mx-auto max-w-4xl text-lg md:text-xl text-[#6b4f47] leading-relaxed">
            Whether you’re planning a celebration, arranging catering, or simply
            want to say hello, we’d love to hear from you and help bring your
            ideas to life.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="w-full">
        <Contact />
      </section>

      {/* FAQ */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-center text-3xl md:text-4xl font-bold text-[#3A2525] mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6 max-w-6xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-[#E5D4C7] rounded-xl shadow-md overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                  className="w-full flex justify-between items-center px-6 py-5 text-left font-semibold text-lg text-[#3A2525]"
                >
                  {faq.q}
                  <span
                    className={`transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {openIndex === index && (
                  <div className="px-6 pb-6 text-lg md:text-xl text-[#6b4f47] leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-24 px-6 text-center bg-[#FCE9D2]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#3A2525] mb-6">
            Ready to Bake Something Special?
          </h2>
          <p className="mx-auto max-w-3xl text-lg md:text-xl text-[#6b4f47] leading-relaxed mb-10">
            Drop us a message, give us a call, or visit us in-store — let’s turn
            your sweet ideas into something truly memorable.
          </p>

          <a href="tel:+2348108996071" className="submit-btn inline-block">
            Call Us Now
          </a>
        </div>

        <FloatingActions phone="+2348108996071" whatsapp="2348108996071" />
      </section>
    </main>
  );
}
