import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Sparkles, X } from 'lucide-react';

export default function Toast({ message, onClose }) {
  if (!message) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.9 }}
        transition={{ duration: 0.25 }}
        className="fixed bottom-6 right-6 z-50 max-w-md bg-[#111111] text-white px-4 py-3 rounded-2xl shadow-soft-lg border border-[#333333] flex items-center gap-3"
      >
        <div className="w-6 h-6 rounded-full bg-[#6D3FEF] flex items-center justify-center text-white shrink-0">
          <CheckCircle2 className="w-3.5 h-3.5" />
        </div>
        <p className="text-xs font-medium text-white/90 leading-tight">
          {message}
        </p>
        <button
          onClick={onClose}
          className="p-1 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors ml-auto shrink-0"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
}
