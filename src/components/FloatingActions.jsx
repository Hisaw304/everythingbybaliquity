import React from "react";

export default function FloatingActions({
  phone = "+2348108996071",
  whatsapp = "2348108996071",
}) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] flex gap-4">
      {/* Call Button */}
      <a
        href={`tel:${phone}`}
        aria-label="Call us"
        className="
          relative flex items-center justify-center
          w-14 h-14 rounded-full
          bg-[#3A2525] text-white
          shadow-xl hover:scale-110 transition
        "
      >
        {/* Glow ring */}
        <span
          className="
            absolute inset-0 rounded-full
            border-2 border-[#facc15]
            animate-ping
          "
        />

        {/* Phone Icon */}
        <span className="relative z-10 text-xl">📞</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsapp}?text=Hey%20I’d%20love%20to%20place%20an%20order%20from%20Everything%20By%20Baliquity`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="
          relative flex items-center justify-center
          w-14 h-14 rounded-full
          bg-[#25D366]
          shadow-xl hover:scale-110 transition
        "
      >
        {/* Glow ring */}
        <span
          className="
            absolute inset-0 rounded-full
            border-2 border-[#25D366]/60
            animate-ping
          "
        />

        {/* WhatsApp Icon */}
        <svg
          viewBox="0 0 32 32"
          className="relative z-10 w-7 h-7 fill-white"
          aria-hidden="true"
        >
          <path d="M16 2.667C8.82 2.667 3 8.487 3 15.667c0 2.77.905 5.333 2.433 7.405L3 29.333l6.48-2.338a13 13 0 006.52 1.672c7.18 0 13-5.82 13-13S23.18 2.667 16 2.667zm0 23.333a10.6 10.6 0 01-5.427-1.503l-.39-.228-3.848 1.39 1.424-3.748-.253-.386A10.6 10.6 0 0116 5.333c5.89 0 10.667 4.777 10.667 10.667S21.89 26 16 26zm5.92-7.813c-.324-.162-1.92-.948-2.218-1.056-.298-.108-.516-.162-.733.162-.216.324-.84 1.056-1.03 1.272-.19.216-.38.243-.704.081-.324-.162-1.368-.504-2.605-1.606-.963-.86-1.613-1.92-1.803-2.244-.19-.324-.02-.5.142-.662.146-.146.324-.38.486-.57.162-.19.216-.324.324-.54.108-.216.054-.405-.027-.567-.081-.162-.733-1.768-1.004-2.423-.264-.634-.532-.548-.733-.558l-.626-.011c-.216 0-.567.081-.864.405-.298.324-1.134 1.108-1.134 2.703s1.162 3.135 1.324 3.351c.162.216 2.287 3.494 5.536 4.897.773.333 1.375.532 1.844.68.774.246 1.479.211 2.036.128.621-.093 1.92-.783 2.19-1.54.27-.756.27-1.405.19-1.54-.081-.135-.297-.216-.621-.378z" />
        </svg>
      </a>
    </div>
  );
}
