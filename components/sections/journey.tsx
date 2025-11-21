"use client";

import { motion } from "framer-motion";
import { FaUserAlt, FaUserGraduate, FaBriefcase, FaStar, FaCrown, FaTrophy } from "react-icons/fa";

const levels = [
  {
    icon: FaUserAlt,
    level: "Nível 1",
    title: "Recruta",
    objective: "Primeira venda",
    description: "Passo a passo para fazer os cadastros corretos e iniciar sua pesquisa de produtos.",
    color: "from-gray-500 to-gray-700",
    emoji: "🎯",
  },
  {
    icon: FaUserGraduate,
    level: "Nível 2",
    title: "Amador",
    objective: "Produto campeão",
    description: "Faça suas primeiras vendas e encontre seu produto vencedor com as técnicas certas.",
    color: "from-green-500 to-green-700",
    emoji: "🚀",
  },
  {
    icon: FaBriefcase,
    level: "Nível 3",
    title: "Profissional",
    objective: "R$ 10 mil/mês",
    description: "Alcance seus primeiros 10 mil reais de faturamento mensal.",
    color: "from-yellow-500 to-amber-700",
    emoji: "💼",
  },
  {
    icon: FaStar,
    level: "Nível 4",
    title: "Especialista",
    objective: "R$ 50 mil/mês",
    description: "Jogue o jogo da escala e multiplique seus resultados.",
    color: "from-purple-500 to-purple-700",
    emoji: "⭐",
  },
  {
    icon: FaCrown,
    level: "Nível 5",
    title: "Mestre",
    objective: "R$ 100 mil/mês",
    description: "Domínio completo da técnica. Escale sem limites.",
    color: "from-yellow-500 to-yellow-700",
    emoji: "👑",
  },
];

export default function Journey() {
  return (
    <section className="py-16 md:py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-yellow-500/20 to-amber-600/20 border border-yellow-400/30 backdrop-blur-xl mb-6"
          >
            <FaTrophy className="text-yellow-400 text-xl" />
            <span className="text-gray-200 font-semibold text-sm md:text-base">Sua Evolução</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-600 bg-clip-text text-transparent px-4">
            SUA JORNADA DEFINIDA
          </h2>
          <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto font-normal leading-relaxed px-4">
            Seguindo nossa <strong className="text-yellow-300 font-semibold">metodologia</strong> você alcançará <strong className="text-yellow-400 font-bold">todos os níveis</strong>
          </p>
        </motion.div>

        {/* Mobile: Vertical Stack | Desktop: Timeline */}
        <div className="relative">
          {/* Desktop connection line */}
          <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-gray-500 via-green-500 via-blue-500 via-purple-500 to-yellow-500" />

          <div className="space-y-6 md:space-y-8">
            {levels.map((level, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative"
              >
                {/* Mobile & Desktop Card */}
                <div className="relative">
                  {/* Desktop number indicator */}
                  <div className="hidden lg:flex absolute -left-8 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500 to-amber-700 items-center justify-center shadow-xl border-4 border-slate-900 z-10">
                    <span className="text-2xl font-bold text-slate-900">{index + 1}</span>
                  </div>

                  {/* Card Premium Glassmorphism */}
                  <motion.div
                    className="lg:ml-16 relative group"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative rounded-3xl overflow-hidden">
                      {/* Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 to-blue-900/40 backdrop-blur-2xl" />
                      
                      {/* Border with level color */}
                      <div className={`absolute inset-0 rounded-3xl border-2 border-opacity-40 bg-gradient-to-br ${level.color} opacity-20`} />
                      <div className="absolute inset-0 rounded-3xl border-2 border-yellow-400/30 group-hover:border-yellow-400/50 transition-all duration-500" />
                      
                      {/* Content - Centralizado */}
                      <div className="relative p-6 md:p-8">
                        <div className="flex flex-col items-center text-center gap-4 md:gap-6">
                          {/* Mobile number */}
                          <div className="lg:hidden w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500/30 to-amber-600/30 border-2 border-yellow-400/40 flex items-center justify-center">
                            <span className="text-xl font-bold text-yellow-400">{index + 1}</span>
                          </div>

                          {/* Icon */}
                          <motion.div
                            className="relative"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className={`absolute inset-0 bg-gradient-to-br ${level.color} rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity`} />
                            <div className={`relative w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br ${level.color} flex items-center justify-center shadow-2xl`}>
                              <span className="text-4xl md:text-5xl">{level.emoji}</span>
                            </div>
                          </motion.div>
                          
                          {/* Content */}
                          <div className="w-full">
                            <div className="mb-3">
                              <span className="text-xs md:text-sm text-yellow-400 font-semibold">{level.level}</span>
                              <h3 className="text-2xl md:text-3xl font-bold text-gray-100">{level.title}</h3>
                            </div>
                            
                            {/* Objective Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 mb-3 bg-gradient-to-r from-yellow-500/20 to-amber-600/20 rounded-full border border-yellow-400/30">
                              <span className="text-xs text-yellow-300 font-semibold">META:</span>
                              <span className="text-sm md:text-base text-gray-100 font-bold">{level.objective}</span>
                            </div>
                            
                            <p className="text-gray-200 leading-relaxed text-sm md:text-base max-w-lg mx-auto">{level.description}</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Bottom glow */}
                      <div className={`absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t ${level.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
