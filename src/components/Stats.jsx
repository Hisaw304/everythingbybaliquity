import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { stats } from "../data/statsData";
import "../assets/style.css";

export default function Stats() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="bg-[#FFF9F5] py-16 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#3A2525] mb-12">
          Our Journey in Numbers
        </h2>

        {/* Stats grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <div key={index} className="stat-card">
              <div className="text-3xl mb-2">{stat.icon}</div>
              <h3 className="stat-number">
                {inView ? (
                  <CountUp end={stat.value} duration={2} suffix={stat.suffix} />
                ) : (
                  "0" + stat.suffix
                )}
              </h3>
              <p className="stat-label">{stat.label}</p>
              <p className="stat-tagline">{stat.tagline}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
