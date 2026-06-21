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
        alert("Message sent successfully!");
        onClose();
      } else {
        alert("Failed to send message");
      }
    } catch (err) {
      console.error(err);
      alert("Server error connecting to backend");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 text-left">
      <div>
        <label htmlFor="modal-name" className="block text-xs font-semibold text-neutral-500 dark:text-neutral-400 mb-1.5 uppercase tracking-wider">
          Name
        </label>
        <input
          id="modal-name"
          name="name"
          type="text"
          placeholder="John Doe"
          required
          onChange={handleChange}
          className="w-full p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/40 text-neutral-800 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-600 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-500/80 transition duration-200 text-sm"
        />
      </div>

      <div>
        <label htmlFor="modal-email" className="block text-xs font-semibold text-neutral-500 dark:text-neutral-400 mb-1.5 uppercase tracking-wider">
          Email
        </label>
        <input
          id="modal-email"
          name="email"
          type="email"
          placeholder="john@example.com"
          required
          onChange={handleChange}
          className="w-full p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/40 text-neutral-800 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-600 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-500/80 transition duration-200 text-sm"
        />
      </div>

      <div>
        <label htmlFor="modal-message" className="block text-xs font-semibold text-neutral-500 dark:text-neutral-400 mb-1.5 uppercase tracking-wider">
          Message
        </label>
        <textarea
          id="modal-message"
          name="message"
          rows="3"
          placeholder="Hello, I would like to work with you..."
          required
          onChange={handleChange}
          className="w-full p-3 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-950/40 text-neutral-800 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-600 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-500/80 transition duration-200 text-sm resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full mt-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-xl shadow-lg shadow-indigo-600/10 hover:shadow-indigo-600/20 transition-all duration-200 text-sm"
      >
        Send Message
      </button>
    </form>
  );
}
