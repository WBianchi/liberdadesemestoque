"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const handleClick = () => {
    window.open("https://wa.me/5521998792729?text=Olá! Tenho interesse no curso Liberdade Sem Estoque", "_blank");
  };

  return (
    <motion.button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-2xl cursor-pointer group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ 
        delay: 1,
        type: "spring",
        stiffness: 200,
        damping: 10
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Pulsing rings */}
      <motion.div
        className="absolute inset-0 rounded-full bg-green-400"
        animate={{
          scale: [1, 1.3, 1.3],
          opacity: [0.7, 0, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
        }}
      />
      <motion.div
        className="absolute inset-0 rounded-full bg-green-400"
        animate={{
          scale: [1, 1.5, 1.5],
          opacity: [0.5, 0, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
          delay: 0.5,
        }}
      />

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-full bg-green-400 blur-xl opacity-50 group-hover:opacity-80 transition-opacity duration-300" />

      {/* Icon */}
      <FaWhatsapp className="relative text-white text-3xl md:text-4xl z-10" />

      {/* Tooltip */}
      <motion.div
        className="absolute right-full mr-4 px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
        initial={{ x: 10 }}
        whileHover={{ x: 0 }}
      >
        Fale conosco no WhatsApp
        <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-slate-900 rotate-45" />
      </motion.div>
    </motion.button>
  );
}
