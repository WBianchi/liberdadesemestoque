"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/button";
import { FaCheckCircle, FaShieldAlt, FaHeadset, FaClock, FaPlay } from "react-icons/fa";
import { useState } from "react";

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-12 md:py-20">
      {/* Marquee horizontal no topo */}
      <div className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-r from-yellow-500 via-amber-500 to-yellow-500 py-4 overflow-hidden shadow-lg">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(10)].map((_, i) => (
            <span key={i} className="inline-flex items-center mx-8 text-slate-900 font-black text-base md:text-lg tracking-wide uppercase">
              ⚡ COMECE HOJE E FATURE EM 30 DIAS ⚡
            </span>
          ))}
        </motion.div>
      </div>

      {/* Animated background elements with glassmorphism */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-48 h-48 md:w-72 md:h-72 bg-yellow-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 30, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-64 h-64 md:w-96 md:h-96 bg-amber-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -30, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-transparent backdrop-blur-sm" />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="mt-8 md:mt-12 mb-6 md:mb-8"
          >
            <img 
              src="/logoliberdade.png" 
              alt="Liberdade Sem Estoque" 
              className="max-w-full h-auto mx-auto drop-shadow-2xl"
              style={{ width: '70%' }}
            />
          </motion.div>

          {/* Title Section */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 leading-tight text-center px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent">
              COMO SEM NUNCA TER VENDIDO NADA, SEM NENHUM ESTOQUE
            </span>
          </motion.h1>
          
          <motion.p
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-100 mb-8 md:mb-12 font-normal max-w-5xl mx-auto text-center px-4 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Uma <strong className="text-yellow-300 font-semibold">pessoa normal</strong> pode começar <strong className="text-yellow-300 font-semibold">agora mesmo</strong> a criar seu próprio negócio online e{" "}
            <span className="block mt-4 sm:mt-2">
              <strong className="font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl bg-gradient-to-r from-yellow-300 via-yellow-400 to-amber-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(250,204,21,0.5)]">
                faturar seus primeiros R$ 5 mil em 30 dias
              </strong>
            </span>
          </motion.p>

          {/* Video Section - Thumbnail com Play */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="w-full max-w-4xl mb-8 md:mb-12 px-4"
          >
            <div 
              className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-yellow-500/20 border-2 border-yellow-500/30 bg-gradient-to-br from-slate-900/80 to-amber-900/30 backdrop-blur-xl cursor-pointer group"
              onClick={() => setIsVideoOpen(true)}
            >
              {/* Thumbnail */}
              <img
                src="https://img.youtube.com/vi/0zMhZAkrAZ8/maxresdefault.jpg"
                alt="Liberdade Sem Estoque"
                className="w-full h-full object-cover"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:opacity-70 transition-opacity duration-300" />
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-yellow-500 flex items-center justify-center shadow-2xl"
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaPlay className="text-slate-900 text-3xl md:text-4xl ml-1" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mb-8 md:mb-12 w-full max-w-4xl px-4"
          >
            <a
              href="https://pay.hotmart.com/K74274059Y?checkoutMode=2"
              onClick={(e) => { e.preventDefault(); return false; }}
              className="hotmart-fb hotmart__button-checkout relative group overflow-hidden rounded-2xl w-full block cursor-pointer"
            >
              {/* Background amarelo luminoso */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500 to-amber-700 group-hover:from-yellow-400 group-hover:to-amber-600 transition-all duration-300 pointer-events-none" />
              
              {/* Glow luminoso */}
              <motion.div 
                className="absolute inset-0 bg-yellow-400 opacity-50 blur-2xl"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              
              {/* Content */}
              <div className="relative px-10 py-6 md:py-8">
                <span className="flex flex-col items-center text-xl sm:text-2xl md:text-3xl font-black leading-tight text-slate-900">
                  <span>QUERO LUCRAR COM</span>
                  <span>MINHA LOJA ONLINE</span>
                </span>
              </div>
              
              {/* Shadow externo */}
              <div className="absolute -inset-2 bg-yellow-500/40 blur-2xl opacity-60 group-hover:opacity-80 transition-opacity -z-10 pointer-events-none" />
            </a>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-4xl mx-auto w-full px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {[
              { icon: FaCheckCircle, text: "Garantia de 7 dias" },
              { icon: FaShieldAlt, text: "Compra segura" },
              { icon: FaHeadset, text: "Suporte vip" },
              { icon: FaClock, text: "2 Anos de Acesso" },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center gap-2 p-4 md:p-5 rounded-2xl bg-gradient-to-br from-slate-900/80 to-blue-900/60 backdrop-blur-xl shadow-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <item.icon className="text-3xl text-yellow-400" />
                <span className="text-xs md:text-sm text-gray-100 text-center font-semibold">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center">
          <motion.div
            className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* Video Modal */}
      {isVideoOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl"
          onClick={() => setIsVideoOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src="https://www.youtube.com/embed/0zMhZAkrAZ8?autoplay=1"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 backdrop-blur-xl border border-yellow-400/30 flex items-center justify-center hover:bg-yellow-500 hover:border-yellow-400 transition-all duration-300 group"
            >
              <span className="text-yellow-400 group-hover:text-slate-900 text-2xl font-bold">×</span>
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
