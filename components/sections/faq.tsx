"use client";

import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { FaChevronDown, FaQuestionCircle } from "react-icons/fa";

const faqs = [
  {
    question: "Preciso ter experiência prévia para começar?",
    answer: "Não! O método Liberdade Sem Estoque foi desenvolvido especialmente para iniciantes. Você receberá um passo a passo completo desde o cadastro nas plataformas até suas primeiras vendas.",
    emoji: "🎯",
  },
  {
    question: "Quanto preciso investir para começar?",
    answer: "Uma das grandes vantagens do dropshipping é que você não precisa comprar estoque. Você pode começar com um investimento mínimo, apenas com o valor do curso e pequenos investimentos em ferramentas básicas.",
    emoji: "💰",
  },
  {
    question: "Quanto tempo leva para ter resultados?",
    answer: "Seguindo a metodologia corretamente, você pode fazer suas primeiras vendas em 2 semanas e alcançar 5 mil reais de faturamento em 30 dias.",
    emoji: "⏱️",
  },
  {
    question: "Terei suporte durante o curso?",
    answer: "Sim! Você terá acesso ao suporte VIP via Zoom, além de participar do grupo exclusivo no WhatsApp com outros alunos e mentores.",
    emoji: "🎧",
  },
  {
    question: "E se eu não gostar do curso?",
    answer: "Você tem 7 dias de garantia incondicional. Se não gostar do conteúdo, devolvemos 100% do seu dinheiro, sem perguntas.",
    emoji: "✅",
  },
  {
    question: "Por quanto tempo terei acesso ao conteúdo?",
    answer: "Você terá 2 anos de acesso completo a todo o conteúdo, atualizações, comunidade e suporte.",
    emoji: "🔓",
  },
];

export default function FAQ() {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/2 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
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
            className="flex justify-center mb-6"
          >
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-yellow-500/20 to-amber-600/20 border border-yellow-400/30 backdrop-blur-xl">
              <FaQuestionCircle className="text-yellow-400 text-xl" />
              <span className="text-gray-200 font-semibold text-sm md:text-base">Dúvidas Comuns</span>
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-amber-400 to-yellow-600 bg-clip-text text-transparent">
            Perguntas Frequentes
          </h2>
          <p className="text-xl md:text-2xl text-gray-100 font-normal">
            Tire suas <strong className="text-yellow-300 font-semibold">dúvidas</strong> sobre o método
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <Accordion.Root type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
              >
                <Accordion.Item
                  value={`item-${index}`}
                  className="group relative"
                >
                  {/* Premium Glass Card */}
                  <div className="relative rounded-2xl overflow-hidden">
                    {/* Glassmorphism background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900/70 to-slate-800/30 backdrop-blur-2xl" />
                    
                    {/* Animated border */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-yellow-400/20 group-hover:border-yellow-400/40 transition-all duration-500" />
                    
                    {/* Content */}
                    <div className="relative">
                      <Accordion.Header>
                        <Accordion.Trigger className="flex w-full items-center gap-4 p-6 text-left transition-all group-hover:bg-yellow-500/5">
                          {/* Emoji */}
                          <span className="text-3xl flex-shrink-0">{faq.emoji}</span>
                          
                          {/* Question */}
                          <span className="text-lg md:text-xl font-semibold text-gray-100 pr-4 flex-1">
                            {faq.question}
                          </span>
                          
                          {/* Icon */}
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center">
                            <FaChevronDown className="text-yellow-400 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                          </div>
                        </Accordion.Trigger>
                      </Accordion.Header>
                      
                      <Accordion.Content className="overflow-hidden data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                        <div className="px-6 pb-6 pt-2">
                          <div className="pl-12 md:pl-14">
                            <p className="text-base md:text-lg text-gray-200 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </Accordion.Content>
                    </div>
                  </div>
                </Accordion.Item>
              </motion.div>
            ))}
          </Accordion.Root>
        </motion.div>
      </div>
    </section>
  );
}
