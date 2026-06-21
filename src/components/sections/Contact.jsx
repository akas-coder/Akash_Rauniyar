import { useState } from "react";
import { motion } from "framer-motion";
import contactImg from "../../assets/img/contact-img.svg";

export default function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    
    // Map to the backend expected form fields: name, email, message
    const payload = {
      name: `${form.firstName} ${form.lastName}`.trim(),
      email: form.email,
      message: `${form.phone ? `Phone: ${form.phone}\n` : ""}${form.message}`,
    };

    try {
      const res = await fetch("http://localhost:8080/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      setButtonText("Send");
      if (res.ok) {
        setStatus({ success: true, message: "Message sent successfully!" });
        setForm({ firstName: "", lastName: "", email: "", phone: "", message: "" });
      } else {
        setStatus({ success: false, message: "Something went wrong, please try again." });
      }
    } catch (err) {
      console.error(err);
      setButtonText("Send");
      setStatus({ success: false, message: "Could not connect to the contact server." });
    }
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24 relative overflow-hidden">
      <div className="grid md:grid-cols-12 gap-8 items-center text-left">
        
        {/* LEFT COLUMN: ASTRONAUT SVG */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:col-span-5 flex justify-center select-none"
        >
          <img
            src={contactImg}
            alt="Space Astronaut Contact"
            className="float-animation w-full max-w-[340px] h-auto drop-shadow-[0_20px_50px_rgba(168,85,247,0.15)]"
          />
        </motion.div>

        {/* RIGHT COLUMN: CONTACT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:col-span-7 w-full"
        >
          <div className="bg-transparent text-left">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white uppercase mb-8">
              Get In Touch
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  placeholder="First Name"
                  className="w-full p-4 rounded-2xl bg-white/5 border border-white/20 focus:bg-white/10 focus:border-white focus:outline-none text-white text-sm font-semibold tracking-wide placeholder-neutral-500 transition duration-250"
                  required
                />
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className="w-full p-4 rounded-2xl bg-white/5 border border-white/20 focus:bg-white/10 focus:border-white focus:outline-none text-white text-sm font-semibold tracking-wide placeholder-neutral-500 transition duration-250"
                  required
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full p-4 rounded-2xl bg-white/5 border border-white/20 focus:bg-white/10 focus:border-white focus:outline-none text-white text-sm font-semibold tracking-wide placeholder-neutral-500 transition duration-250"
                  required
                />
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone No."
                  className="w-full p-4 rounded-2xl bg-white/5 border border-white/20 focus:bg-white/10 focus:border-white focus:outline-none text-white text-sm font-semibold tracking-wide placeholder-neutral-500 transition duration-250"
                />
              </div>

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Message"
                rows="6"
                className="w-full p-4 rounded-2xl bg-white/5 border border-white/20 focus:bg-white/10 focus:border-white focus:outline-none text-white text-sm font-semibold tracking-wide placeholder-neutral-500 transition duration-250 resize-none"
                required
              />

              <button
                type="submit"
                className="
                  px-10 py-4 font-bold text-xs uppercase tracking-widest bg-white text-[#121212]
                  hover:bg-transparent hover:text-white border border-white hover:border-white/50 transition-all duration-300 shadow-lg shadow-white/5
                "
              >
                {buttonText}
              </button>

              {status.message && (
                <p className={`text-sm font-bold mt-4 ${status.success ? "text-emerald-400" : "text-rose-400"}`}>
                  {status.message}
                </p>
              )}
            </form>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
