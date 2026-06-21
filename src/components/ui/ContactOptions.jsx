import { Phone, Mail, MessageSquare, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import MessageForm from "./MessageForm";

export default function ContactOptions({ open, onClose }) {
  const [showForm, setShowForm] = useState(false);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      {/* Background click to close overlay */}
      <div className="absolute inset-0" onClick={onClose} />

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-6 w-full max-w-sm shadow-2xl relative z-10"
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-lg font-bold text-neutral-800 dark:text-neutral-100 font-display">
            {showForm ? "Send a Message" : "Get in Touch"}
          </h3>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 transition"
          >
            <X size={18} />
          </button>
        </div>

        {!showForm ? (
          <div className="space-y-3.5">
            <a
              href="tel:+919335528946"
              className="flex items-center gap-3.5 p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800/80 hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 dark:hover:border-indigo-500/50 bg-neutral-50/50 dark:bg-neutral-950/40 text-neutral-700 dark:text-neutral-300 transition-all duration-200 font-medium text-sm"
            >
              <Phone size={18} className="text-indigo-500" /> 
              <span>Call: +91 93355 28946</span>
            </a>

            <a
              href="mailto:rauniyarakash144@gmail.com"
              className="flex items-center gap-3.5 p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800/80 hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 dark:hover:border-indigo-500/50 bg-neutral-50/50 dark:bg-neutral-950/40 text-neutral-700 dark:text-neutral-300 transition-all duration-200 font-medium text-sm"
            >
              <Mail size={18} className="text-violet-500" /> 
              <span>Email: rauniyarakash144@gmail.com</span>
            </a>

            <button
              onClick={() => setShowForm(true)}
              className="flex items-center gap-3.5 p-4 rounded-2xl border border-neutral-200 dark:border-neutral-800/80 hover:border-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 dark:hover:border-indigo-500/50 bg-neutral-50/50 dark:bg-neutral-950/40 text-neutral-700 dark:text-neutral-300 w-full text-left transition-all duration-200 font-medium text-sm"
            >
              <MessageSquare size={18} className="text-pink-500" /> 
              <span>Send custom message</span>
            </button>
          </div>
        ) : (
          <MessageForm onClose={onClose} />
        )}
      </motion.div>
    </div>
  );
}
