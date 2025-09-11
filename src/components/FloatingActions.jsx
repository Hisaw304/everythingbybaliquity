import React from "react";

export default function FloatingActions({ phone, whatsapp }) {
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
        href={`https://wa.me/${whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:bg-[#1da851] transition"
      >
        💬 WhatsApp
      </a>
    </div>
  );
}
