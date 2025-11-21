"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="relative py-20 px-4 overflow-hidden">
      {/* Background sofisticado */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* CTA Section com glassmorphism sutil */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="relative inline-block">
            {/* Glow effect atrás do título */}
            <div className="absolute inset-0 bg-yellow-500/20 blur-3xl rounded-full" />
            
            <h2 className="relative text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-600 bg-clip-text text-transparent">
              Pronto para começar sua jornada?
            </h2>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl mx-auto font-normal leading-relaxed">
            Não perca essa oportunidade de <strong className="text-yellow-300 font-semibold">transformar sua vida financeira</strong> com o dropshipping
          </p>
          
          <a
            href="https://pay.hotmart.com/K74274059Y?checkoutMode=2"
            onClick={(e) => { e.preventDefault(); return false; }}
            className="hotmart-fb hotmart__button-checkout relative group overflow-hidden rounded-2xl block cursor-pointer"
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
            <div className="relative px-12 md:px-16 py-6 md:py-8">
              <span className="text-xl md:text-2xl font-black text-slate-900">
                GARANTIR MINHA VAGA AGORA
              </span>
            </div>
            
            {/* Shadow externo */}
            <div className="absolute -inset-2 bg-yellow-500/40 blur-2xl opacity-60 group-hover:opacity-80 transition-opacity -z-10 pointer-events-none" />
          </a>
        </motion.div>

        {/* Footer Info com glassmorphism */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center pt-8"
        >
          <div className="inline-block px-8 py-6 rounded-2xl bg-gradient-to-br from-slate-900/60 to-slate-800/30 backdrop-blur-xl border border-yellow-400/20">
            <p className="text-gray-200 mb-2 text-base font-medium">
              © {new Date().getFullYear()} <strong className="text-gray-100">Liberdade Sem Estoque</strong>
            </p>
            <p className="text-gray-300 text-sm">
              Todos os direitos reservados
            </p>
            <p className="text-yellow-400 text-sm mt-2">
              Caio Elias - Método Liberdade Sem Estoque
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
