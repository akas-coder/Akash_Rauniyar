import { useState } from "react";
import SocialLinks from "../ui/SocialLinks";

export default function Contact({ visitors }) {
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
        setForm({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };

  return (
<footer id="contact" className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>

      <form
        onSubmit={handleSubmit}
        className="grid md:grid-cols-2 gap-4 max-w-3xl"
      >
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          className="bg-neutral-900 border border-neutral-800 rounded p-3"
          placeholder="Your Name"
          required
        />

        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          className="bg-neutral-900 border border-neutral-800 rounded p-3"
          placeholder="Email"
          required
        />

        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          className="md:col-span-2 bg-neutral-900 border border-neutral-800 rounded p-3"
          rows="4"
          placeholder="Message"
          required
        />

        <button
          type="submit"
          className="md:col-span-2 bg-indigo-600 hover:bg-indigo-500 rounded p-3"
        >
          Send Message
        </button>
      </form>

      <SocialLinks />

      {/* <p className="mt-8 text-sm text-neutral-500">
        👀 Total visitors: {visitors}
      </p> */}
    </footer>
  );
}
