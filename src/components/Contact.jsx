import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const formRef = useRef();
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const validateForm = (data) => {
    let newErrors = {};

    if (!data.get("user_name")) {
      newErrors.user_name = "Please enter your full name.";
    }
    if (!data.get("user_email")) {
      newErrors.user_email = "Please enter your email.";
    } else if (!/\S+@\S+\.\S+/.test(data.get("user_email"))) {
      newErrors.user_email = "Please enter a valid email.";
    }
    if (!data.get("message")) {
      newErrors.message = "Please write a message.";
    }

    return newErrors;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setErrors({});
    setStatus(null);

    const data = new FormData(formRef.current);
    const validationErrors = validateForm(data);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    emailjs
      .sendForm(
        "your_service_id",
        "your_template_id",
        formRef.current,
        "your_public_key"
      )
      .then(
        () => setStatus("success"),
        () => setStatus("error")
      );
  };

  return (
    <form
      ref={formRef}
      onSubmit={sendEmail}
      className="bg-white rounded-2xl shadow-md p-6 space-y-5"
    >
      {/* Name */}
      <div>
        <label className="form-label">Name</label>
        <input
          type="text"
          name="user_name"
          className={`form-input ${errors.user_name ? "border-red-500" : ""}`}
          placeholder="e.g. Marie Curie"
        />
        {errors.user_name && (
          <p className="mt-1 text-sm text-red-600">{errors.user_name}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label className="form-label">Email</label>
        <input
          type="email"
          name="user_email"
          className={`form-input ${errors.user_email ? "border-red-500" : ""}`}
          placeholder="e.g. marie@example.com"
        />
        {errors.user_email && (
          <p className="mt-1 text-sm text-red-600">{errors.user_email}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <label className="form-label">Message</label>
        <textarea
          rows="4"
          name="message"
          className={`form-input ${errors.message ? "border-red-500" : ""}`}
          placeholder="Tell us what’s on your mind..."
        ></textarea>
        {errors.message && (
          <p className="mt-1 text-sm text-red-600">{errors.message}</p>
        )}
      </div>

      <button type="submit" className="submit-btn">
        Send Message
      </button>

      {/* Status */}
      {status === "success" && (
        <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg">
          ✅ Sent successfully!
        </div>
      )}
      {status === "error" && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg">
          ❌ Failed to send, please try again.
        </div>
      )}
    </form>
  );
}
