// About.jsx
import React from "react";
import { values, milestones } from "../data/aboutData";
import Stats from "../components/Stats"; // reusing the stats component
import "../assets/style.css";
import FloatingActions from "../components/FloatingActions";

export default function About() {
  return (
    <main className="bg-[#FFF9F5] text-[#3A2525]">
      {/* Hero Section */}
      <section className="relative py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          Baking <span className="pill-highlight">Memories</span> Since 2018
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-[#6b4f47]">
          What started as a small oven and a big dream has grown into a place
          where thousands share their sweetest moments.
        </p>
      </section>

      {/* Our Story */}
      <section className="py-16 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="section-heading mb-4">Our Story</h2>
          <p className="text-[#6b4f47] mb-4">
            From early mornings kneading dough to late nights experimenting with
            recipes, our passion has always been simple: make people smile with
            food.
          </p>
          <p className="text-[#6b4f47]">
            Over the years, our little bakery has grown into a family of bakers,
            decorators, and dreamers — all working together to bring joy to your
            table.
          </p>
        </div>
        <div>
          <img
            src="/images/bakery-team.jpg"
            alt="Our bakery team at work"
            className="rounded-lg shadow-lg hover:rotate-1 transition-transform"
          />
        </div>
      </section>
      {/* Owner's Note */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="section-heading mb-6">
          <span className="pill-highlight">Founder’s Note</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src="/images/owner.jpg"
            alt="Bakery founder smiling"
            className="w-40 h-40 rounded-full object-cover shadow-lg hover:rotate-1 transition-transform"
          />
          <div className="text-left">
            <p className="text-[#6b4f47] mb-4 italic">
              “Hi, I’m Balikis — baking has been my passion since I was 12.
              Every cake, pastry, and loaf we make here starts with my recipes
              and the belief that food connects people.”
            </p>
            <p className="font-semibold text-[#3A2525]">Balikis Adams</p>
            <p className="text-sm text-[#6b4f47]">Founder & Head Baker</p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 px-6 bg-[#FCE9D2]">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="section-heading">Our Values</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {values.map((val, i) => (
            <div key={i} className="value-card">
              <div className="text-3xl mb-3">{val.icon}</div>
              <h3 className="font-bold text-xl mb-2">{val.title}</h3>
              <p className="text-sm text-[#6b4f47]">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Milestones / Timeline */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h2 className="section-heading mb-10 text-center">Our Journey</h2>
        <div className="space-y-8 relative border-l-4 border-[#3A2525] pl-6">
          {milestones.map((m, i) => (
            <div key={i} className="relative flex items-start gap-4">
              {/* Circle aligned with year */}
              <span className="flex-shrink-0 mt-1 w-6 h-6 bg-[#3A2525] rounded-full"></span>

              <div>
                <h3 className="font-bold text-lg">{m.year}</h3>
                <p className="text-[#6b4f47]">{m.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Reuse */}
      <Stats />

      {/* CTA */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
          Let’s Bake Something <span className="pill-highlight">Together</span>
        </h2>
        <p className="max-w-xl mx-auto text-[#6b4f47] mb-8">
          Got a craving, a custom request, or just want to say hello? Reach out
          — we’d love to hear from you.
        </p>
        <a href="/contact" className="btn-pill">
          Contact Us
        </a>
      </section>
      <FloatingActions phone="+2348108996071" whatsapp="2348108996071" />
    </main>
  );
}
