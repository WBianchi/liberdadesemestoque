"use client";

import { motion } from "framer-motion";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import { FaRocket, FaChartLine, FaDollarSign, FaTrophy } from "react-icons/fa";
import { ReactNode } from "react";

const steps = [
  {
    icon: FaRocket,
    number: "1",
    title: "Planejamento",
    description: (
      <>
        <strong className="text-yellow-300">Acertar na estratégia inicial</strong> é o segredo de uma loja de sucesso. Para isso, você utiliza o <strong className="text-yellow-300">Loja Model Canvas</strong>, a única ferramenta de negócio desenvolvida exclusivamente para quem vende na <strong className="text-yellow-400">Amazon, Shopee e Mercado Livre</strong>.
      </>
    ),
  },
  {
    icon: FaChartLine,
    number: "2",
    title: "Primeiras vendas",
    description: (
      <>
        Após escolher um caminho, você receberá os <strong className="text-yellow-300">4 pilares da liberdade</strong>, que vai te dar o poder de <strong className="text-yellow-300">qual produto escolher</strong> e como <strong className="text-yellow-300">analisar sua performance</strong>, para começar a fazer suas <strong className="text-yellow-400">primeiras vendas</strong>.
      </>
    ),
  },
  {
    icon: FaDollarSign,
    number: "3",
    title: "5 mil em 30 dias",
    description: (
      <>
        Você montará seu negócio nos <strong className="text-yellow-300">principais marketplaces</strong>. Com uma <strong className="text-yellow-300">operação enxuta e lucrativa</strong>, podendo trabalhar de onde você preferir. E <strong className="text-yellow-400 font-bold">faturar seus primeiros R$ 5 mil em 30 dias</strong>.
      </>
    ),
  },
  {
    icon: FaTrophy,
    number: "4",
    title: "Expansão exponencial",
    description: (
      <>
        Aqui você já <strong className="text-yellow-300">domina os processos</strong> do seu negócio, sua marca já está <strong className="text-yellow-300">muito mais reconhecida</strong> e você está <strong className="text-yellow-300">bem ranqueado</strong>. Agora você começa a <strong className="text-yellow-400 font-bold">crescer de forma exponencial</strong>.
      </>
    ),
  },
];

export default function Method() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-600/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
            x: [0, -50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-yellow-500/20 to-amber-600/20 border border-yellow-400/30 backdrop-blur-xl mb-6"
          >
            <FaRocket className="text-yellow-400 text-xl" />
            <span className="text-gray-200 font-semibold text-sm md:text-base">Metodologia Comprovada</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-600 bg-clip-text text-transparent leading-tight">
            Você mesmo pode criar seu negócio online no modelo dropshipping!
          </h2>
          <p className="text-xl md:text-2xl text-gray-100 mb-4 font-normal">Você só precisa de <strong className="text-yellow-400 font-bold">um método</strong>.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-16"
        >
          <div className="max-w-4xl mx-auto text-center relative group">
            {/* Premium Glass Card */}
            <div className="relative rounded-3xl overflow-hidden">
              {/* Glassmorphism background */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 to-slate-800/50 backdrop-blur-2xl" />
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-yellow-400/30 group-hover:border-yellow-400/50 transition-all duration-500" />
              
              {/* Top shine */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
              
              {/* Content */}
              <div className="relative p-8 md:p-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/20 border border-yellow-400/30 mb-6">
                  <span className="text-yellow-300 font-semibold text-sm">💎 Premium</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-gray-100 mb-6">
                  O que é o método Liberdade Sem Estoque
                </h3>
                <p className="text-lg md:text-xl text-gray-100 mb-6 leading-relaxed">
                  É um método desenvolvido, <strong className="text-yellow-300 font-semibold">passo a passo</strong>, para construir um negócio <strong className="text-yellow-300 font-semibold">do zero</strong> no modelo dropshipping.
                  Você vai construir seu negócio <strong className="text-yellow-300 font-semibold">investindo pouco</strong>, começando pequeno e <strong className="text-yellow-300 font-semibold">crescendo exponencialmente</strong>.
                </p>
                <div className="p-6 rounded-2xl bg-gradient-to-r from-yellow-500/10 to-amber-600/10 border border-yellow-400/20">
                  <p className="text-xl md:text-2xl text-gray-300 font-semibold leading-relaxed">
                    Através de uma metodologia com <strong className="text-yellow-400 font-bold">resultados comprovados</strong>, você vai ter um negócio de sucesso e <strong className="text-yellow-400 font-bold">faturar R$ 5 mil em 30 dias</strong>.
                  </p>
                </div>
              </div>
              
              {/* Bottom glow */}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-yellow-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-16"
        >
          <div className="max-w-4xl mx-auto text-center relative group">
            {/* Alert Card Premium */}
            <div className="relative rounded-3xl overflow-hidden">
              {/* Animated gradient background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-blue-600/20 to-blue-800/30"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% 200%" }}
              />
              
              {/* Glassmorphism layer */}
              <div className="absolute inset-0 backdrop-blur-2xl" />
              
              {/* Glowing border */}
              <div className="absolute inset-0 rounded-3xl border-2 border-yellow-400/40 group-hover:border-yellow-400/60 transition-all duration-500 shadow-lg shadow-yellow-500/20" />
              
              {/* Content */}
              <div className="relative p-8 md:p-12">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-5xl"
                  >
                    ⚠️
                  </motion.div>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-gray-100 mb-4">
                  Atenção: este <strong className="text-yellow-400">não é um curso teórico</strong>.
                </h3>
                <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
                  É uma metodologia <strong className="text-yellow-300 font-bold">100% prática</strong>, para você implementar e começar a vender nos marketplaces em <strong className="text-yellow-400 font-bold">2 semanas</strong>.
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-400/20">
                    <p className="text-3xl font-bold text-yellow-400">100%</p>
                    <p className="text-sm text-gray-200">Prático</p>
                  </div>
                  <div className="p-4 rounded-xl bg-yellow-500/10 border border-yellow-400/20">
                    <p className="text-3xl font-bold text-yellow-400">2 sem</p>
                    <p className="text-sm text-gray-200">Para começar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <motion.div 
                className="relative h-full group"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
              >
                {/* Premium Glass Card - Super arredondado */}
                <div className="relative h-full rounded-[2.5rem] overflow-hidden">
                  {/* Glassmorphism background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 to-slate-800/40 backdrop-blur-2xl" />
                  
                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-[2.5rem] border-2 border-yellow-400/30 group-hover:border-yellow-400/50 transition-all duration-500" />
                  
                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                  
                  {/* Content - Centralizado */}
                  <div className="relative p-8 md:p-10 flex flex-col items-center text-center min-h-[380px]">
                    {/* Number badge no topo com pulse */}
                    <motion.div
                      className="mb-6"
                      whileHover={{ scale: 1.2, rotate: [0, -10, 10, 0] }}
                      animate={{
                        boxShadow: [
                          "0 0 0 0 rgba(234, 179, 8, 0)",
                          "0 0 0 8px rgba(234, 179, 8, 0)",
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500/30 to-amber-600/30 border-2 border-yellow-400/40 flex items-center justify-center backdrop-blur-sm">
                        <span className="text-3xl font-bold text-yellow-400">{step.number}</span>
                      </div>
                    </motion.div>

                    {/* Icon com glow e animação contínua */}
                    <motion.div
                      className="relative mb-6"
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: [0, -10, 10, -10, 10, 0],
                      }}
                      animate={{
                        y: [0, -5, 0],
                      }}
                      transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        ease: "easeInOut"
                      }}
                    >
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-amber-600 rounded-3xl blur-2xl opacity-50"
                        animate={{
                          scale: [1, 1.1, 1],
                          opacity: [0.5, 0.8, 0.5]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <div className="relative w-24 h-24 rounded-3xl bg-gradient-to-br from-yellow-500 to-amber-700 flex items-center justify-center shadow-2xl">
                        <step.icon className="text-4xl text-slate-900" />
                      </div>
                    </motion.div>
                    
                    {/* Title com hover */}
                    <motion.h3 
                      className="text-2xl md:text-3xl font-bold text-gray-100 mb-4"
                      whileHover={{ scale: 1.05, color: "#facc15" }}
                      transition={{ duration: 0.2 }}
                    >
                      {step.title}
                    </motion.h3>
                    
                    {/* Description */}
                    <p className="text-gray-100 leading-relaxed text-base md:text-lg max-w-md mx-auto">
                      {step.description}
                    </p>
                  </div>
                  
                  {/* Bottom glow */}
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-yellow-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center max-w-4xl mx-auto px-4"
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
      </div>
    </section>
  );
}
