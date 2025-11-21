"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/button";
import { FaCheckCircle, FaGift, FaWhatsapp, FaRocket, FaChartLine, FaBolt, FaDollarSign } from "react-icons/fa";

const bonuses = [
  {
    title: "Gerenciamento 2.0",
    description: "Organização e controle para escalar. Gerencie seu fluxo de caixa e acompanhe de perto seu negócio.",
    oldPrice: "R$997,00",
    newPrice: "GRÁTIS",
    icon: FaChartLine,
    emoji: "📊",
  },
  {
    title: "Lista Especial",
    description: "Fornecedores confiáveis para você começar imediatamente sem perder tempo procurando.",
    oldPrice: "R$297,00",
    newPrice: "GRÁTIS",
    icon: FaRocket,
    emoji: "🎯",
  },
  {
    title: "Modo Turbo",
    description: "Ferramentas para automatizar sua operação e aumentar resultados em até 200%.",
    oldPrice: "R$297,00",
    newPrice: "GRÁTIS",
    icon: FaBolt,
    emoji: "⚡",
  },
];

const includes = [
  "Curso completo Liberdade Sem Estoque 15 módulos + 30h conteúdo",
  "Curso gerenciamento 2.0",
  "Lista Especial de fornecedores",
  "Modo Turbo - performance até 200% maior",
  "2 anos de acesso a todos conteúdos, comunidade no Telegram e Suporte Vip via Zoom",
];

export default function Pricing() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-green-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Bonuses */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-6"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 to-yellow-600/20 border border-green-400/30 backdrop-blur-xl">
              <FaGift className="text-yellow-400 text-xl" />
              <span className="text-gray-200 font-semibold text-sm md:text-base">Presentes Inclusos</span>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-center bg-gradient-to-r from-green-400 via-yellow-400 to-green-600 bg-clip-text text-transparent">
            Bônus Exclusivos
          </h2>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto text-center mb-12 font-normal">
            Receba <strong className="text-green-400 font-bold">gratuitamente</strong> esses bônus especiais
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
            {bonuses.map((bonus, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <motion.div
                  className="relative group h-full"
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Premium Glass Card */}
                  <div className="relative h-full rounded-[2rem] overflow-hidden min-h-[340px]">
                    {/* Glassmorphism background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 to-green-900/30 backdrop-blur-2xl" />
                    
                    {/* Animated border */}
                    <div className="absolute inset-0 rounded-[2rem] border-2 border-green-400/30 group-hover:border-green-400/50 transition-all duration-500" />
                    
                    {/* Shine effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      />
                    </div>
                    
                    {/* Content - Centralizado */}
                    <div className="relative p-6 md:p-8 flex flex-col items-center text-center h-full">
                      {/* Emoji Icon */}
                      <motion.div
                        className="mb-4"
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="text-6xl">{bonus.emoji}</div>
                      </motion.div>

                      {/* Title */}
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-100 mb-3">
                        {bonus.title}
                      </h3>
                      
                      {/* Description */}
                      <p className="text-gray-200 mb-6 leading-relaxed text-sm md:text-base flex-1">
                        {bonus.description}
                      </p>
                      
                      {/* Price */}
                      <div className="w-full">
                        <div className="flex items-center justify-center gap-3 mb-2">
                          <span className="text-gray-400 line-through text-lg">{bonus.oldPrice}</span>
                          <span className="text-green-400 font-bold text-2xl md:text-3xl">{bonus.newPrice}</span>
                        </div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30">
                          <FaCheckCircle className="text-green-400" />
                          <span className="text-green-300 text-sm font-semibold">Incluso no pacote</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom glow */}
                    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-green-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Total Value Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <div className="max-w-3xl mx-auto relative group">
              <div className="relative rounded-[2rem] overflow-hidden">
                {/* Animated gradient background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-blue-600/20 to-green-600/20"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  style={{ backgroundSize: "200% 200%" }}
                />
                
                {/* Glassmorphism layer */}
                <div className="absolute inset-0 backdrop-blur-2xl" />
                
                {/* Border */}
                <div className="absolute inset-0 rounded-[2rem] border-2 border-purple-400/40 group-hover:border-purple-400/60 transition-all duration-500" />
                
                {/* Content */}
                <div className="relative p-8 md:p-10 text-center">
                  <motion.div
                    className="inline-block mb-4"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <FaDollarSign className="text-6xl text-green-400" />
                  </motion.div>
                  
                  <p className="text-xl md:text-2xl text-gray-100 mb-2">
                    Somado a todos esses presentes, o treinamento sairia por
                  </p>
                  <p className="text-4xl md:text-5xl font-bold text-transparent bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text mb-4">
                    R$ 2.588,00
                  </p>
                  <p className="text-2xl md:text-3xl text-gray-300 font-semibold">
                    Porém você <strong className="text-green-400">não precisará</strong> investir todo esse valor…
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Main Offer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative group">
            {/* Premium Glass Card */}
            <div className="relative rounded-[2.5rem] overflow-hidden">
              {/* Glassmorphism background */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 to-slate-800/50 backdrop-blur-2xl" />
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-[2.5rem] border-2 border-yellow-400/50 group-hover:border-yellow-400/70 transition-all duration-500 shadow-2xl shadow-yellow-500/30" />
              
              {/* Ribbon */}
              <div className="absolute top-6 -right-12 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-16 py-2 transform rotate-45 shadow-lg z-10">
                <span className="font-bold text-sm">OFERTA EXCLUSIVA</span>
              </div>

              {/* Content */}
              <div className="relative p-8 md:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-amber-600 bg-clip-text text-transparent">
                    Liberdade Sem Estoque
                  </h2>
                  <p className="text-xl text-gray-200">O que você irá receber:</p>
                </div>

                <div className="space-y-4 mb-8">
                  {includes.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      className="flex items-start gap-3 p-4 bg-yellow-500/10 rounded-xl border border-yellow-400/20"
                    >
                      <FaCheckCircle className="text-green-400 text-xl flex-shrink-0 mt-1" />
                      <span className="text-gray-100 text-base md:text-lg">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="text-center mb-8">
                  <div className="inline-block p-8 bg-gradient-to-br from-yellow-600/30 to-amber-800/30 rounded-3xl border-2 border-yellow-400/50">
                    <p className="text-gray-300 text-lg mb-2">12x de</p>
                    <p className="text-6xl md:text-7xl font-bold text-yellow-400 mb-2">R$49,97</p>
                    <p className="text-gray-300 text-lg">ou à vista por R$497,99</p>
                  </div>
                </div>

                <div className="text-center mb-6">
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
                </div>

                <p className="text-center text-gray-300 text-sm">
                  Compra 100% segura! Receba seu acesso imediatamente após a confirmação do pagamento.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-16 max-w-3xl mx-auto"
        >
          <div className="relative group">
            <div className="relative rounded-[2rem] overflow-hidden">
              {/* Glassmorphism background */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-green-800/20 backdrop-blur-2xl" />
              
              {/* Border */}
              <div className="absolute inset-0 rounded-[2rem] border-2 border-green-400/30 group-hover:border-green-400/50 transition-all duration-500" />
              
              {/* Content */}
              <div className="relative p-8 md:p-10 text-center">
                <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
                  <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center shadow-xl">
                    <FaCheckCircle className="text-4xl text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-green-100">GARANTIA DE 7 DIAS</h3>
                </div>
                <p className="text-xl md:text-2xl text-green-200 font-semibold">
                  OU SEU DINHEIRO DE VOLTA
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* WhatsApp Community */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="relative group">
            <div className="relative rounded-[2rem] overflow-hidden">
              {/* Glassmorphism background */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-600/20 to-green-800/20 backdrop-blur-2xl" />
              
              {/* Border */}
              <div className="absolute inset-0 rounded-[2rem] border-2 border-green-400/30 group-hover:border-green-400/50 transition-all duration-500" />
              
              {/* Content - Centralizado */}
              <div className="relative p-8 md:p-10">
                <div className="flex flex-col items-center text-center gap-6">
                  <div className="flex-shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="w-24 h-24 rounded-full bg-green-500 flex items-center justify-center shadow-2xl">
                        <FaWhatsapp className="text-5xl text-white" />
                      </div>
                    </motion.div>
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-green-100 mb-4">
                      Grupo exclusivo no WhatsApp 100% focado em dropshipping
                    </h3>
                    <p className="text-base md:text-lg text-green-200 leading-relaxed max-w-2xl mx-auto">
                      Ao entrar no curso você terá acesso ao nosso <strong className="text-green-300">grupo exclusivo de alunos</strong>, onde você poderá trocar experiências com outros empreendedores, compartilhar indicações e tirar dúvidas. O Grupo é <strong className="text-green-300">moderado e 100% focado</strong> em dropshipping, com foco exclusivo no networking e ajuda entre os alunos do curso.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
