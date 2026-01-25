import { Phone, Mail, MessageCircle, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import MessageForm from "./MessageForm";

export default function ContactOptions({ open, onClose }) {
  const [showForm, setShowForm] = useState(false);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white dark:bg-neutral-900 rounded-2xl p-6 w-[90%] max-w-sm"
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">
            {showForm ? "Send Message" : "Contact Me"}
          </h3>
          <button onClick={onClose}>
            <X />
          </button>
        </div>

        {!showForm ? (
          <div className="space-y-4">
            <a
              href="tel:+919335528946"
              className="flex items-center gap-3 p-3 rounded-xl border hover:border-indigo-500"
            >
              <Phone /> Call
            </a>

            <a
              href="mailto:rauniyarakash144@email.com"
              className="flex items-center gap-3 p-3 rounded-xl border hover:border-indigo-500"
            >
              <Mail /> Email
            </a>

            <button
              onClick={() => setShowForm(true)}
              className="flex items-center gap-3 p-3 rounded-xl border hover:border-indigo-500 w-full text-left"
            >
              <MessageCircle /> Send Message
            </button>
          </div>
        ) : (
          <MessageForm onClose={onClose} />
        )}
      </motion.div>
    </div>
  );
}
