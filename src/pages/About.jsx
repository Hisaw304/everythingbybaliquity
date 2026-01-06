// About.jsx
import React from "react";
import { values, milestones } from "../data/aboutData";
import Stats from "../components/Stats";
import FloatingActions from "../components/FloatingActions";
import "../assets/style.css";

export default function About() {
  return (
    <main className="bg-[#FFF9F5] text-[#3A2525] w-full">
      {/* Hero */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
            Baking{" "}
            <span className="explore-pill inline-block px-3 py-1 rounded-md bg-[#FCE9D2] text-brown-900 font-semibold shadow-md">
              Memories
            </span>{" "}
            Since 2018
          </h1>
          <p className="mx-auto max-w-4xl text-lg md:text-xl text-[#6b4f47] leading-relaxed">
            What started as a small oven and a big dream has grown into a place
            where families celebrate milestones, friends gather over sweet
            moments, and thousands share their most memorable occasions.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-heading mb-6">Our Story</h2>
            <p className="text-lg md:text-xl text-[#6b4f47] leading-relaxed mb-6">
              From early mornings kneading dough to late nights perfecting
              recipes, our passion has always been simple: to make people smile
              through thoughtfully crafted baked goods made with care.
            </p>
            <p className="text-lg md:text-xl text-[#6b4f47] leading-relaxed">
              Over the years, our little bakery has grown into a close-knit
              family of bakers, decorators, and dreamers — all working together
              to bring warmth, flavor, and joy to every table we serve.
            </p>
          </div>

          <img
            src="/images/bakery-team.jpg"
            alt="Our bakery team at work"
            className="w-full rounded-xl shadow-lg hover:rotate-1 transition-transform"
          />
        </div>
      </section>

      {/* Founder’s Note */}
      <section className="py-20 px-6 bg-[#FCE9D2]">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading text-center mb-10">
            <span className="pill-highlight inline-block px-3 py-1 rounded-md font-semibold shadow-md">
              Founder’s Note
            </span>
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-10">
            <img
              src="/images/owner.jpg"
              alt="Bakery founder smiling"
              className="w-44 h-44 rounded-full object-cover shadow-lg hover:rotate-1 transition-transform"
            />

            <div>
              <p className="text-lg md:text-xl text-[#6b4f47] leading-relaxed italic mb-6">
                “Hi, I’m Balikis — baking has been my passion since I was 12.
                Every cake, pastry, and loaf we make starts with my recipes and
                the belief that food has the power to connect people and create
                lasting memories.”
              </p>
              <p className="font-semibold text-lg">Balikis Adams</p>
              <p className="text-[#6b4f47]">Founder & Head Baker</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="section-heading">Our Values</h2>
        </div>

        <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {values.map((val, i) => (
            <div key={i} className="value-card text-center">
              <div className="text-4xl mb-4">{val.icon}</div>
              <h3 className="font-bold text-xl mb-3">{val.title}</h3>
              <p className="text-lg text-[#6b4f47] leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Journey */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="section-heading mb-12 text-center">Our Journey</h2>

          <div className="space-y-10 relative border-l-4 border-[#3A2525] pl-8">
            {milestones.map((m, i) => (
              <div key={i} className="relative flex gap-6">
                <span className="mt-2 w-6 h-6 bg-[#3A2525] rounded-full flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl mb-2">{m.year}</h3>
                  <p className="text-lg md:text-xl text-[#6b4f47] leading-relaxed">
                    {m.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <Stats />

      {/* CTA */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            Let’s Bake Something{" "}
            <span className="explore-pill inline-block px-3 py-1 rounded-md bg-[#FCE9D2] text-brown-900 font-semibold shadow-md">
              Together
            </span>
          </h2>
          <p className="mx-auto max-w-3xl text-lg md:text-xl text-[#6b4f47] leading-relaxed mb-10">
            Got a craving, a custom request, or simply want to say hello? Reach
            out — we’d love to hear from you and create something special.
          </p>
          <a href="/contact" className="btn-pill">
            Contact Us
          </a>
        </div>
      </section>

      <FloatingActions phone="+2348108996071" whatsapp="2348108996071" />
    </main>
  );
}
