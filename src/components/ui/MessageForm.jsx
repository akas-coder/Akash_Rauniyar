import { useState } from "react";

export default function MessageForm({ onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8080/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        alert("Message sent successfully");
        onClose();
      } else {
        alert("Failed to send message");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="name"
        placeholder="Your Name"
        required
        onChange={handleChange}
        className="w-full p-3 rounded-lg border bg-transparent"
      />

      <input
        name="email"
        type="email"
        placeholder="Your Email"
        required
        onChange={handleChange}
        className="w-full p-3 rounded-lg border bg-transparent"
      />

      <textarea
        name="message"
        rows="4"
        placeholder="Your Message"
        required
        onChange={handleChange}
        className="w-full p-3 rounded-lg border bg-transparent"
      />

      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-3 rounded-lg transition"
      >
        Send Message
      </button>
    </form>
  );
}
