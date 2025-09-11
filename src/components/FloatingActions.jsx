import React from "react";

export default function FloatingActions({
  phone = "+2348108996071",
  whatsapp = "2348108996071",
}) {
  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 flex gap-4">
      {/* Call Button */}
      <a
        href={`tel:${phone}`}
        className="flex items-center gap-2 bg-[#3A2525] text-white px-4 py-3 rounded-full shadow-lg hover:bg-[#5c3a3a] transition"
      >
        📞 Call
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsapp}?text=Hi%20I%27m%20interested%20in%20your%20bakery%20🍰`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:bg-[#1da851] transition"
      >
        💬 WhatsApp
      </a>
    </div>
  );
}
